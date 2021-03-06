import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { connect } from 'react-redux';
import { getFavoriteRecipes } from '../../actions';
import { Link } from 'react-router-dom';

import spoonacular from '../../apis/spoonacular';

const FavoriteRecipes = props => {
  const { user, getAccessTokenSilently } = useAuth0();
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const getFavoriteRecipesBulk = async favorites => {
    if (!favorites.length) return;
    const domain = 'tastify.us.auth0.com';
    const token = await getAccessTokenSilently({
      audience: `https://${domain}/api/v2/`,
      scope: 'read:current_user update:current_user_metadata',
    });
    const { data } = await spoonacular.get('/informationBulk', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        ids: favorites.join(),
      },
    });
    setFavoriteRecipes(data);
  };

  const renderFavoriteRecipes = () => {
    if (!props.favoriteRecipes.length) {
      return (
        <div>
          No favorites found
          <span className='icon'>
            <i className='fas fa-heart-broken'></i>
          </span>
          Go and add some!
        </div>
      );
    }
    return (
      <div>
        {favoriteRecipes.map(recipe => (
          <div key={recipe.id}>
            <Link
              className='flex items-center mb-5'
              to={`/recipe/${recipe.id}`}
              key={recipe.id}>
              <img
                className='rounded-full w-24 h-24 mr-5'
                src={recipe.image}
                alt={recipe.title}
              />
              {recipe.title}
            </Link>
          </div>
        ))}
      </div>
    );
  };

  useEffect(() => {
    if (user) {
      props.getFavoriteRecipes(user.sub);
    }
  }, [user]);

  useEffect(() => {
    getFavoriteRecipesBulk(props.favoriteRecipes);
  }, [props.favoriteRecipes]);

  return (
    <div className='content p-10'>
      <h1>My Favorite Recipes</h1>
      <div className='tile is-parent'>
        <article className='tile is-child box'>
          {renderFavoriteRecipes()}
        </article>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { favoriteRecipes: state.favoriteRecipes };
};

export default connect(mapStateToProps, { getFavoriteRecipes })(
  FavoriteRecipes
);
