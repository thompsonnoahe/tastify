import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  getFavoriteRecipes,
  setFavoriteRecipes,
  removeFavoriteRecipe,
} from '../../actions';

const RecipeFavorite = props => {
  const [isFavorite, setIsFavorite] = useState(null);
  const [hideNotification, setHideNotification] = useState(false);
  const { id } = useParams();
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();

  const favoriteRecipe = () => {
    if (user) {
      props.setFavoriteRecipes(id, user.sub);
      setIsFavorite(true);
    }
  };

  const unfavoriteRecipe = () => {
    if (user) {
      setIsFavorite(false);
      props.removeFavoriteRecipe(id, user.sub);
    }
  };

  useEffect(() => {
    if (user) {
      props.getFavoriteRecipes(user.sub);
    }
  }, [user, id]);

  useEffect(() => {
    if (props.favoriteRecipes.includes(id)) {
      setIsFavorite(true);
    }
  });

  if (!isAuthenticated) {
    return (
      <div className='notification' hidden={hideNotification}>
        <button
          className='delete'
          onClick={() => setHideNotification(true)}></button>
        <button
          className='cursor-pointer underline'
          onClick={() => loginWithRedirect()}>
          Sign up
        </button>
        &nbsp;to favorite this recipe!
      </div>
    );
  }

  if (props.favoriteRecipes.includes(id)) {
    return (
      <span
        className='icon icon-text cursor-pointer is-medium my-10'
        onClick={unfavoriteRecipe}>
        <i className='fas fa-heart fa-2x'></i>
        <span>Favorited!</span>
      </span>
    );
  } else {
    return (
      <span
        className='icon icon-text cursor-pointer is-medium my-10'
        onClick={favoriteRecipe}>
        <i className='far fa-heart fa-2x'></i>
        <span className='text-center'>Favorite Me</span>
      </span>
    );
  }
};

const mapStateToProps = state => {
  return { favoriteRecipes: state.favoriteRecipes };
};

export default connect(mapStateToProps, {
  getFavoriteRecipes,
  setFavoriteRecipes,
  removeFavoriteRecipe,
})(RecipeFavorite);
