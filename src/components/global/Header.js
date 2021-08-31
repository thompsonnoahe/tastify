import React from 'react';
import { Link } from 'react-router-dom';
import LoginButton from '../auth/LoginButton';
import LogoutButton from '../auth/LogoutButton';
import ProfileIcon from '../auth/ProfileIcon';

const Header = () => {
  return (
    <nav
      className='navbar has-shadow p-1'
      role='navigation'
      aria-label='main navigation'>
      <div className='navbar-brand'>
        <Link
          to=''
          role='button'
          className='navbar-burger'
          aria-label='menu'
          aria-expanded='false'
          data-target='navbarBasicExample'>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </Link>
      </div>
      <div className='navbar-menu p-5 rounded-b-full'>
        <div id='navbarBasicExample' className='navbar-start'>
          <Link to='/' className='navbar-item'>
            Home
          </Link>

          {/* <Link className='navbar-item'>Documentation</Link>

          <div className='navbar-item has-dropdown is-hoverable'>
            <Link className='navbar-link'>More</Link>

            <div className='navbar-dropdown'>
              <Link className='navbar-item'>About</Link>
              <Link className='navbar-item'>Jobs</Link>
              <Link className='navbar-item'>Contact</Link>
              <hr className='navbar-divider' />
              <Link className='navbar-item'>Report an issue</Link>
            </div>
          </div> */}
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