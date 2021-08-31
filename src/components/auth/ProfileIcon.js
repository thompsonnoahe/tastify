import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

const ProfileIcon = () => {
  const { user, isAuthenticated } = useAuth0();
  return isAuthenticated ? (
    <Link to={`/profile/${user.nickname}`}>
      <div className='h-full'>
        <img className='rounded-full' src={user.picture} alt={user.name} />
      </div>
    </Link>
  ) : null;
};

export default ProfileIcon;
