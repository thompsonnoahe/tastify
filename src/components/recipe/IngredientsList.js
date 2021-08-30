import React from 'react';

import './IngredientList.css';

const IngredientList = ({ ingredients }) => {
  return (
    <div className='content'>
      {ingredients?.map((ingredient, i) => (
        <div key={i} className='flex w-full items-center content-around mb-3'>
          <img
            src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
            alt={ingredient.image}
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
  );
};

export default IngredientList;
