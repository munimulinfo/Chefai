import { Avatar, Button, Navbar, Tooltip } from 'flowbite-react';
import React, { useContext } from 'react';
import logo from '../assets/logo.png'
import { AuthContext } from '../providers/AuthProvider';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {

  const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }
    return (
        <div className="navbar">
              <Navbar
  fluid={true}
  rounded={true} 
  
>
  <Navbar.Brand href="/">
    <img
      src={logo}
      className="mr-3 h-20 sm:h-9"
      alt="chefai Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Chefai
    </span>
          </Navbar.Brand>
          <div className="flex items-center md:order-2">
            
            {
              user && <Tooltip content={user?.displayName}> <Avatar className='mr-4'
    img={user?.photoURL}
    rounded={true}
  /></Tooltip>
            }
            {user ? <Button className='mr-2' onClick={handleLogOut}>Logout</Button> :  <Link to="/login"><Button className='mr-2'>Register/Login</Button></Link> }
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse >
    <NavLink  className={({ isActive }) => (isActive ? 'active' : 'default')}
      to="/"
      active={true}
    >
      Home
    </NavLink>
    <NavLink to="/blog" className={({ isActive }) => (isActive ? 'active' : 'default')}>
      Blog
    </NavLink>
  </Navbar.Collapse>
</Navbar>
    </div>
    );
};

export default Header;