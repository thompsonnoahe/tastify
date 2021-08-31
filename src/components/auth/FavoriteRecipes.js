import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { connect } from 'react-redux';
import { getFavoriteRecipes } from '../../actions';
import { Link } from 'react-router-dom';

import spoonacular from '../../apis/spoonacular';

const FavoriteRecipes = props => {
  const { user } = useAuth0();
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  console.log(favoriteRecipes);
  const getFavoriteRecipesBulk = async favorites => {
    if (!favorites.length) return;
    const { data } = await spoonacular.get('/informationBulk', {
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
          <div key={recipe.id} className='flex'>
            <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
              <img
                className='rounded-full w-sm h-sm'
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
