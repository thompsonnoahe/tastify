import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  getFavoriteRecipes,
  setFavoriteRecipes,
  removeFavoriteRecipe,
} from '../../actions';

const RecipeFavorite = props => {
  const [isFavorite, setIsFavorite] = useState(null);
  const { id } = useParams();
  const { user } = useAuth0();

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
      // props.getFavoriteRecipes(user.sub);
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

  if (props.favoriteRecipes.includes(id)) {
    return (
      <span
        className='icon cursor-pointer is-medium'
        onClick={unfavoriteRecipe}>
        <i className='fas fa-heart fa-lg'></i>
      </span>
    );
  } else {
    return (
      <span className='icon cursor-pointer is-medium' onClick={favoriteRecipe}>
        <i className='far fa-heart fa-lg'></i>
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
