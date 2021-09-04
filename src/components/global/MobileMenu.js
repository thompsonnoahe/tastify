import React from 'react';
import ProfileIcon from '../auth/ProfileIcon';
import LoginButton from '../auth/LoginButton';
import LogoutButton from '../auth/LogoutButton';
import { Link } from 'react-router-dom';

const MobileMenu = () => {
  return (
    <div className='flex items-center justify-center'>
      <div className='navbar-item'>
        <Link to='/' className='navbar-item'>
          Home
        </Link>
      </div>
      <div className='navbar-item'>
        <ProfileIcon />
      </div>
      <div className='navbar-item'>
        <div className='buttons'>
          <LoginButton />
          <LogoutButton />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
