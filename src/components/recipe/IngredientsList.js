import React from 'react';

import './IngredientList.css';

const IngredientList = ({ ingredients }) => {
  return (
    <div className='content tile is-6 is-parent'>
      <div className='is-child box'>
        {ingredients?.map((ingredient, i) => (
          <div key={i} className='flex w-full items-center  mb-3'>
            <img
              className='ingredient-img'
              src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
              alt={ingredient.name}
            />
            <div>
              <label className='checkbox mr-3'>
                <input type='checkbox' />
              </label>
              <span>{ingredient.original}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IngredientList;
