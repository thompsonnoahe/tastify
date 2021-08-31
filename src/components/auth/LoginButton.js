import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return !isAuthenticated ? (
    <button onClick={() => loginWithRedirect()} className='button is-light'>
      <span className='icon'>
        <i className='fas fa-sign-in-alt'></i>
      </span>
      <strong>Log in</strong>
    </button>
  ) : null;
};

export default LoginButton;
