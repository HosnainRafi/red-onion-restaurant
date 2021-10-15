import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png'

const Header = () => {
    const {user,logOut} = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="/home/breakfast"><img style={{width:"200px"}} src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle />
                    {
                        user.email?
                        <Navbar.Collapse className="justify-content-end">
                            <button onClick={logOut} className="btn btn-danger m-3">Logout</button>
                            <Navbar.Text>
                            Signed in as: {user.displayName}
                        </Navbar.Text>
                        </Navbar.Collapse>
                        :
                        <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} className="text-white" to="/login">Login</Nav.Link>
                        <Nav.Link as={Link} to="/register"><button className="btn btn-danger">Sign Up</button></Nav.Link>
                        
                    </Navbar.Collapse>
                    }
                    
                </Container>
            </Navbar>



        </>
    );
};

export default Header;

//{            }

//{<NavLink style={{textDecoration:"none", color:"white"}} to="/login">Login</NavLink>}
//<NavLink to="/register"><button className="btn btn-danger">Sign Up</button></NavLink>}