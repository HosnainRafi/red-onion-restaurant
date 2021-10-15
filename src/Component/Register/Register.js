import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { handleRegister,handleNameChange ,handleEmailChange,handlePasswordChange,isLogin,error} = useAuth()
    return (
        <div>
            {
                !isLogin && 
                <div className="container-login w-50 mx-auto shadow p-3 m-5 bg-body rounded">
                <h2>Create Account</h2>
                <form onSubmit={handleRegister}>
                    <div className="form-floating mt-5 mb-3">
                        <input type="text" name="userName" id="floatingInput1" placeholder="Enter Your Name" className="form-control" required onBlur={handleNameChange} />
                        <label htmlFor="floatingInput1">UserName</label>
                    </div>
                    <div className="form-floating  mb-3">
                        <input type="email" name="email" id="floatingInput" placeholder="name@example.com" className="form-control" required onBlur={handleEmailChange}/>
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" name="password" id="floatingPassword" placeholder="Password" className="form-control" required onBlur={handlePasswordChange} />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" name="password" id="floatingPassword" placeholder="Re-Enter Password" className="form-control" required />
                        <label htmlFor="floatingPassword">Re-Enter Password</label>
                    </div>
                    <input className="btn btn-primary" type="submit" value="Submit" />
                </form>
                <div className="row mb-3 text-danger">{error}</div>
                <br />
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
            }
        </div>
    );
};

export default Register;