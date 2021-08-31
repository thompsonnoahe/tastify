import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import spoonacular from '../../apis/spoonacular';

const RecipeRecommendations = () => {
  const [similarRecipes, setSimilarRecipes] = useState([]);
  const { id } = useParams();
  const imageSize = '90x90';
  const getSimilarRecipes = async () => {
    const { data } = await spoonacular.get(`/${id}/similar`);
    setSimilarRecipes(data);
  };

  useEffect(() => {
    getSimilarRecipes();
  }, []);

  return (
    <div className='tile is-parent is-6 mb-5'>
      <article className='tile is-child box'>
        <h1 className='-mb-10'>You Might Also Like</h1>
        {similarRecipes.map(recipe => (
          <Link
            to={`/recipe/${recipe.id}`}
            key={recipe.id}
            className='content flex items-center'>
            <img
              className='rounded-full mr-10'
              src={`https://spoonacular.com/recipeImages/${recipe.id}-${imageSize}.${recipe.imageType}`}
              alt={recipe.title}
            />
            <div className='content'>
              <h4>{recipe.title}</h4>
              <p>Ready in just {recipe.readyInMinutes} minutes!</p>
            </div>
          </Link>
        ))}
      </article>
    </div>
  );
};

export default RecipeRecommendations;
