import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginButton from '../auth/LoginButton';
import LogoutButton from '../auth/LogoutButton';
import ProfileIcon from '../auth/ProfileIcon';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [isMobileActive, setIsMobileActive] = useState(false);
  return (
    <nav
      className='navbar has-shadow p-1'
      role='navigation'
      aria-label='main navigation'>
      <div className='navbar-brand'>
        <div
          onClick={() => setIsMobileActive(!isMobileActive)}
          role='button'
          className={`navbar-burger ${isMobileActive ? 'is-active' : ''}`}
          aria-label='menu'
          aria-expanded={isMobileActive}
          data-target='navbarBasicExample'>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </div>
      </div>
      <div className={isMobileActive ? '' : 'hidden'}>
        <MobileMenu />
      </div>
      <div className='navbar-menu p-5 rounded-b-full'>
        <div id='navbarBasicExample' className='navbar-start'>
          <Link to='/' className='navbar-item'>
            Home
          </Link>
        </div>

        <div className='navbar-end'>
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
      </div>
    </nav>
  );
};

export default Header;
