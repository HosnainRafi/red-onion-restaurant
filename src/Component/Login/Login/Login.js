import React, { useState } from 'react';
import { Alert, AlertTitle } from '@mui/material';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Login = () => {

   /*  const { signInUsingGoogle,

        handleEmailChange,
        handlePasswordChange,
        setIsLoading,
        error,
        success,
        processLogin,
        setUser,
        setSuccess,
        setError,
        setUserName,
        user ,
    handleRegister} = useAuth(); */

    const {signInUsingGoogle,user,setUser,setError,setSuccess,setIsLoading,processLogin,handleUserRegister,handleUserLogin,} =useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';


    const [email,setEmail] =useState('')
    const [password,setPassword] = useState('')

    const handleEmail = e =>{
        setEmail(e.target.value)
    }


    const handlePassword = e =>{
        setPassword(e.target.password)
    }

    //handle Google Sign In
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
                setUser(result.user)
                setSuccess('Signed-In successfully!');
                console.log(user);
            })
            .catch(err => {
                setError(err.message);
                setSuccess('');
            })
            .finally(() => setIsLoading(false));
    }

    const handleRegister = () => {
        handleUserRegister(email, password);
      };
    
      const handleLogin = () => {
        handleUserLogin(email, password);
      };

 

    return (
        <div>

            <div className="container-login w-50 mx-auto shadow p-3 m-5 bg-body rounded">
                <h2 className="text-center golden-color">Login</h2>
                <form onSubmit={handleLogin}>
                    {/* {
                        success &&
                        <Alert severity="success" className="mb-2 fw-bold">
                            <AlertTitle>Success</AlertTitle>
                            {success}
                        </Alert>
                    }
                    {
                        error &&
                        <Alert severity="error" className="mb-2 fw-bold">
                            <AlertTitle>Error</AlertTitle>
                            {error}
                        </Alert>
                    } */}
                    <div className="form-floating mt-5 mb-3">
                        <input type="email" name="email" id="floatingInput" placeholder="name@example.com" className="form-control" required onBlur={handleEmail}/>
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" name="password" id="floatingPassword" placeholder="Password" className="form-control" required onBlur={handlePassword}/>
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <input className="btn btn-primary" type="submit" value="Submit" />
                </form>
                <div className="row mb-3 text-danger"></div>
                <br />
                <p>New to red-onion <Link to="/register">Create Your Account</Link></p>
                <div>
                    <p>------------Or----------------</p>
                </div>
                <button className="btn btn-info text-white" onClick={handleGoogleLogin}>Google Sign in</button>
            </div>

        </div>
    );
};

export default Login;