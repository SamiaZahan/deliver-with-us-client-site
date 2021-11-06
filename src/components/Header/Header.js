import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import './Header.css';


const Header = () => {
    const { user, logOut } = useAuth();
    return (

        <div className="header">
            <nav>
                <NavLink to="/home">Home</NavLink>
                {user.email && <NavLink to="/addService">Add Service</NavLink>}
                {user.email && <NavLink to="/review">My Orders</NavLink>}
                {user.email && <NavLink to="/inventory">Manage Orders</NavLink>}
                {user.email && <span style={{ color: 'white' }}>Hello {user.displayName} </span>}
                {
                    user.email ?
                        <button onClick={logOut}>log out</button>
                        :
                        <NavLink to="/login">Login</NavLink>
                        
                }
            </nav>
        </div>
       
    );
};

export default Header;




// import React from 'react';
// import { Button, Container, Nav, Navbar } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import useAuth from '../../../hooks/useAuth';
// import { HashLink } from 'react-router-hash-link';

// const Header = () => {
//     const { user, logOut } = useAuth();
//     return (
//         <>
//             <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
//                 <Container>
//                     <Navbar.Brand href="#home">Genius</Navbar.Brand>
//                     <Navbar.Toggle />
//                     <Navbar.Collapse className="justify-content-end">
//                         <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
//                         <Nav.Link as={HashLink} to="/home#services">My Orders</Nav.Link>
//                         <Nav.Link as={HashLink} to="/home#experts">Manage Order</Nav.Link>
//                         {user?.email ?
//                             <Button onClick={logOut} variant="light">Logout</Button> :
//                             <Nav.Link as={Link} to="/login">Login</Nav.Link>}
//                         <Navbar.Text>
//                             Signed in as: <a href="#login">{user?.displayName}</a>
//                         </Navbar.Text>
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>
//         </>
//     );
// };

// export default Header;