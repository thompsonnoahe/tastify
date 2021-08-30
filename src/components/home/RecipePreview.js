import React from 'react';
import { Link } from 'react-router-dom';

const RecipePreview = ({ recipe }) => {
  return (
    <div
      key={recipe.id}
      className='card cursor-pointer m-5 hover:shadow-2xl transition-all'>
      <Link to={_ => `/recipe/${recipe.id}`}>
        <div className='card-image'>
          <figure className='image is-4by3'>
            <img src={recipe.image} alt={recipe.title} />
          </figure>
        </div>
        <div className='card-content'>
          <div className='media-content'>
            <p className='title is-4'>{recipe.title}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RecipePreview;
