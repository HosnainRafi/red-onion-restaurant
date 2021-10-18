import { Alert } from "@mui/material";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import initializeAuthentication from "../Component/Login/firebase/firebase.init";


initializeAuthentication();


const useFirebase = () => {
    //Universal for firebase
    const auth = getAuth();

    const history = useHistory();
    //Use state
    const [user, setUser] = useState({});
    
    const [isLogin, setIsLogin] = useState(false)
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);


    //Google Sign In
    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        return signInWithPopup(auth, googleProvider)
    }

    

    //Register
    /* const handleRegister = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password must be 6 character long');
            return;
        }
        if (!/(?=.*[!@#$&*])/.test(password)) {
            setError('PassWord must be one special letter');
            return;
        }
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('PassWord must be one upper case');
            return;
        }
        if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError('Password must be include with two numbers');
            return;
        }

        isLogin ? processLogin(email,password) : CreateNewUser(email.password)
    } */

    const handleUserRegister = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
          .then((result) => {
            console.log(result.user);
          })
          .catch((error) => {
            const errorMessage = error.message;
          });
      };
    
      const handleUserLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
          .then((result) => {
            console.log(result.user);
          })
          .catch((error) => {
            const errorMessage = error.message;
          });
      };
    
      

    const updateUserProfile = (name,image) =>{
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        }).then(() => {
            setSuccess("Good job!", "Account has been created!", "success");
            history.push('/');
        })
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                setSuccess('Email Sent to Your Mail')
            });
    }


    useEffect(() => {
        setIsLoading(true)
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setError('')
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [auth])


    //Sign Out Process
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
                setSuccess('Signed Out Successfully');
                setError('')
            }).catch((error) => {
                setError(error.message);
                setSuccess('');
            })
            .finally(() => setIsLoading(false));

    }


    //Reset Password
/*     const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                setSuccess('PassWord Reset Confirmation sent to your Email SuccessFully')
                setError('');
            })
            .catch((error) => {
                setError(error.message)
            });
    } */

    return {
        // handleEmailChange,
        // handleNameChange,
        // handlePasswordChange,
        // handleResetPassword,
        logOut,
        user,
        setUser,
        signInUsingGoogle,
        CreateNewUser,
        processLogin,
        success,setSuccess,
        error,setError,
        setIsLogin,
        handleUserRegister,
        handleUserLogin
        // handleRegister
        
    }

    

export default useFirebase;