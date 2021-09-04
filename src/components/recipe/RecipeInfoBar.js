import React from 'react';
import RecipeFavorite from './RecipeFavorite';

const RecipeInfoBar = ({ recipe }) => {
  const calories = recipe?.nutrition?.nutrients?.find(
    n => n.name === 'Calories'
  ).amount;

  const renderServingsIcon = () => {
    return recipe?.servings ? (
      <span className='icon icon-text my-10'>
        <i className='fas fa-concierge-bell fa-2x'></i>
        <span className='text-center'> {recipe?.servings} servings</span>
      </span>
    ) : null;
  };

  const renderCaloriesIcon = () => {
    return calories ? (
      <span className='icon icon-text my-10'>
        <i className='fas fa-fire fa-2x'></i>
        <span className='text-center'> {Math.round(calories)} calories</span>
      </span>
    ) : null;
  };

  const renderKetoIcon = () => {
    return recipe?.diets?.includes('ketogenic') ? (
      <span className='icon icon-text my-10'>
        <i className='fas fa-fish fa-2x'></i>
        <span className='text-center'>Keto-Friendly</span>
      </span>
    ) : null;
  };

  const renderVeganIcon = () => {
    return recipe?.vegan ? (
      <span className='icon icon-text my-10'>
        <i className='fas fa-seedling fa-2x'></i>
        <span className='text-center'>Vegan</span>
      </span>
    ) : null;
  };

  const renderVegetarianIcon = () => {
    return recipe?.vegan ? (
      <span className='icon icon-text my-10'>
        <i className='fas fa-carrot fa-2x'></i>
        <span className='text-center'>Vegetarian</span>
      </span>
    ) : null;
  };

  const renderGlutenFreeIcon = () => {
    return recipe?.glutenFree ? (
      <span className='icon icon-text my-10'>
        <i className='fas fa-ban fa-2x'></i>
        <span className='text-center'>Gluten Free</span>
      </span>
    ) : null;
  };

  const renderSustainableIcon = () => {
    return recipe?.sustainable ? (
      <span className='icon icon-text my-10'>
        <i className='fas fa-globe-americas fa-2x'></i>
        <span className='text-center'>Sustainable</span>
      </span>
    ) : null;
  };

  const renderCheapIcon = () => {
    return recipe?.cheap ? (
      <span className='icon icon-text my-10'>
        <i className='fas fa-dollar-sign fa-2x'></i>
        <span className='text-center'>Cheap</span>
      </span>
    ) : null;
  };

  const renderTimeIcon = () => {
    return (
      <span className='icon icon-text my-10'>
        <i className='fas fa-clock fa-2x'></i>
        <span className='text-center'>
          Ready in {recipe?.readyInMinutes} minutes
        </span>
      </span>
    );
  };

  const renderLinkIcon = () => {
    return (
      <a rel='noreferrer' href={recipe?.sourceUrl} target='_blank'>
        <span className='icon icon-text my-10'>
          <i className='fas fa-link fa-2x'></i>
          <span>Recipe Link</span>
        </span>
      </a>
    );
  };

  return (
    <div className='tile is-12 box justify-around items-center p-20 '>
      {renderLinkIcon()}
      {renderCaloriesIcon()}
      {renderServingsIcon()}
      {renderTimeIcon()}
      {renderKetoIcon()}
      {renderCheapIcon()}
      {renderVeganIcon()}
      {renderVegetarianIcon()}
      {renderGlutenFreeIcon()}
      {renderSustainableIcon()}
      <RecipeFavorite />
    </div>
  );
};

export default RecipeInfoBar;
