import React from 'react';
import { Alert, AlertTitle } from '@mui/material';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Login = () => {

    const { signInUsingGoogle,
        user,
        isLoading,
        logOut,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        handleRegister,
        handleResetPassword,
        isLogin,
        createNewUser,
        setIsLoading,
        error,
        success,
        processLogin,
        verifyEmail,
        setUser,
        setSuccess,
        setError,
        setUserName } = useAuth();


    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    //handle Google Sign In
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
                setUser(result.user)
                setSuccess('Signed-In successfully!');
            })
            .catch(err => {
                setError(err.message);
                setSuccess('');
            })
            .finally(() => setIsLoading(false));
    }

    //handle Login/Register
    const handleEmailForm = (e) => {
        setIsLoading(true);
        e.preventDefault();
        isLogin ? handleEmailRegister() : handleEmailLogin();
        e.target.reset();
    }

    // register
    const handleEmailRegister = () => {
        createNewUser()
            .then(result => {
                console.log(result.user);
                handleUpdateProfile();
                setSuccess('Signed-Up successfully!');
                setTimeout(() => {
                    handleVerifyEmail();
                }, 3000)
                setError('');
            })
            .catch(err => {
                setError(err.code);
                setSuccess('');
            })
            .finally(() => setIsLoading(false));
    }



    //login
    const handleEmailLogin = () => {
        processLogin()
            .then(result => {
                console.log(result.user);
                if (result.user.emailVerified) {
                    console.log(result.user.emailVerified)
                    setUser(result.user);
                    setSuccess('Signed-In successfully!');
                    setError('');
                }
                else {
                    setError('You must verify your email to get access to your content!');
                    setSuccess('');
                }
            })
            .catch(err => {
                setError(err.code);
                setSuccess('');
            })
            .finally(() => setIsLoading(false));
    }

    //VerifyEmail
    const handleVerifyEmail = () => {
        verifyEmail()
            .then(() => {
                setSuccess('Verification message sent to your email!');
            })
    }

    const handleUpdateProfile = () => {
        setUserName();
    }

    return (
        <div>

            <div className="container-login w-50 mx-auto shadow p-3 m-5 bg-body rounded">
                <h2 className="text-center golden-color">Login</h2>
                <form onSubmit={handleEmailForm}>
                {
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
                    }
                    <div className="form-floating mt-5 mb-3">
                        <input type="email" name="email" id="floatingInput" onBlur={handleEmailChange}placeholder="name@example.com" className="form-control" required />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" name="password" onBlur={handlePasswordChange}id="floatingPassword" placeholder="Password" className="form-control" required />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <input className="btn btn-primary" type="submit" value="Submit" />
                </form>
                <div className="row mb-3 text-danger">{error}</div>
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