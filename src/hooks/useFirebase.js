import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, sendEmailVerification,sendPasswordResetEmail } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Component/Login/firebase/firebase.init";


initializeAuthentication();


const useFirebase = () => {
    //Universal for firebase
    const auth = getAuth();

    //Use state
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [isLogin, setIsLogin] = useState('')
    const [success,setSuccess] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);


    //Google Sign In
    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();


        return signInWithPopup(auth, googleProvider)
    }

    //Take And Set Name
    const handleNameChange = e => {
        setName(e.target.value);
    }

    //Take and Set Email
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    //Take and Set Password
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }


    //Register Email
    const handleRegister = e => {
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
        e.target.reset();

        //Condition For Sign In and Register.Function for sign in and register.
        isLogin ? processLogin(email, password) : createNewUser(email, password)
    }


     //For Sign In method
     const processLogin = (email, password) => {
       return signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                
                console.log(user);
                setError('')
            })
            .catch((error) => {
                setError(error.message)
            });
    }



    //For Register Function
    const createNewUser = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password)
            
    }


    //Set User Name
    const setUserName = () => {

        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {

        }).catch((error) => {

        });
    }



    //Verify Email
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {

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
    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                setSuccess('PassWord Reset Confirmation sent to your Email SuccessFully')
                setError('');
            })
            .catch((error) => {
                setError(error.message)
            });
    }

    return {
        signInUsingGoogle,
        user,
        isLoading,
        logOut,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        handleRegister,
        handleResetPassword,
        isLogin,
        setIsLoading,
        error,
        success,
        processLogin,
        verifyEmail,
        setUser,
        setSuccess,
        setError,
        createNewUser,
        setUserName
    }
}

export default useFirebase;