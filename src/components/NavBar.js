import React from 'react';
import { Nav, Navbar, NavDropdown, Image, Button } from 'react-bootstrap';
import { useAuth0 } from '../contexts/auth0-context';
import logo from '../assets/bowl.png';

export default function NavBar(props) {

  const { isLoading, user, logout } = useAuth0();
  
      return (
        <Navbar fixed="top" bg="light">
          <div className="nav-left">
          <Image className="nav-logo" src={logo} alt="PotLucky Logo" roundedCircle/>
          <Navbar.Brand href="#home">PotLucky</Navbar.Brand>
          </div>
            {!isLoading && user && (
            <div className="nav-right">
              <Navbar.Text>
                Signed in as: {user.nickname}
              </Navbar.Text>
              {user.picture && <Image className="nav-avatar" src={user.picture} alt="My Avatar" roundedCircle/>}
              <Button 
                className="btn-logout"
                variant="outline-dark"
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Log Out
              </Button>

            </div>
            )}
        </Navbar>
    )
};
