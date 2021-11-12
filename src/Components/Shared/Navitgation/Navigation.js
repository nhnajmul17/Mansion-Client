
import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import logo from '../../../images/logo.jpg'
import './Navigation.css'

const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <Navbar className='logo' sticky='top' collapseOnSelect expand="lg" style={{ backgroundColor: '#3BB7B7' }} variant="dark">
            <Container>
                <Navbar.Brand >
                    <img
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Mansion logo"
                    />
                </Navbar.Brand>
                <Navbar.Brand as={Link} to="/home" className='fw-bold'>Mansion Residence</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/apartments">Apartments</Nav.Link>
                        {user.email && <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>}
                    </Nav>
                    <Nav>
                        {user?.email && <p className='text-white me-3'>
                            Name: {user.displayName}
                        </p>}
                        {user?.email ? <Button onClick={logOut} className='btn btn-danger'>Logout <FontAwesomeIcon icon={faSignOutAlt} className='text-dark' /></Button> : <Link to='/login'> <Button className='btn btn-danger'>Login</Button></Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


    );
};

export default Navigation;








//nav bar using MUI

/* <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ bgcolor: '#3BB7B7' }}>
                <Toolbar>
                    <img src={logo} style={{ width: '50px', height: '50px', marginRight: '10px' }} alt="" />
                    <Link style={{ textDecoration: 'none', color: 'white', margin: '5px', fontWeight: 'bold' }} to='/home'>Home</Link>
                    <Link style={{ textDecoration: 'none', color: 'white', margin: '5px', fontWeight: 'bold' }} to='/apartments'>Apartments</Link>
                    {user.email && <Link style={{ textDecoration: 'none', color: 'white', margin: '5px', fontWeight: 'bold' }} to='/dashboard'>Dashboard</Link>}

                    <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                        Mansion Residence
                    </Typography>
                    {user?.email && <Typography variant="body1" component="div" >
                        Name: {user.displayName}
                    </Typography>}

                    {user?.email ? <Button onClick={logOut} color="inherit">Logout</Button> : <Link style={{ textDecoration: 'none', color: 'white' }} to='/login'> <Button color="inherit">Login</Button></Link>}
                </Toolbar>
            </AppBar>
        </Box > */