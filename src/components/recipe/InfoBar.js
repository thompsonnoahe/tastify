import React from 'react';
import { Link } from 'react-router-dom';
import RecipeFavorite from './RecipeFavorite';

const InfoBar = ({ recipe }) => {
  console.log(recipe);

  const renderVeganIcon = () => {
    return recipe?.vegan ? (
      <span className='icon icon-text my-20'>
        <i className='fas fa-seedling fa-2x'></i>
        <span className='text-center'>Vegan</span>
      </span>
    ) : null;
  };

  const renderVegetarianIcon = () => {
    return recipe?.vegan ? (
      <span className='icon icon-text my-20'>
        <i className='fas fa-carrot fa-2x'></i>
        <span className='text-center'>Vegetarian</span>
      </span>
    ) : null;
  };

  const renderGlutenFreeIcon = () => {
    return recipe?.glutenFree ? (
      <span className='icon icon-text my-20'>
        <i className='fas fa-ban fa-2x'></i>
        <span className='text-center'>Gluten Free</span>
      </span>
    ) : null;
  };

  const renderSustainableIcon = () => {
    return recipe?.sustainable ? (
      <span className='icon icon-text my-20'>
        <i className='fas fa-globe-americas fa-2x'></i>
        <span className='text-center'>Sustainable</span>
      </span>
    ) : null;
  };

  const renderCheapIcon = () => {
    return recipe?.cheap ? (
      <span className='icon icon-text my-20'>
        <i className='fas fa-globe-americas fa-2x'></i>
        <span className='text-center'>Cheap</span>
      </span>
    ) : null;
  };

  const renderTimeIcon = () => {
    return (
      <span className='icon icon-text my-20'>
        <i className='fas fa-clock fa-2x'></i>
        <span className='text-center'>
          Ready in {recipe?.readyInMinutes} minutes
        </span>
      </span>
    );
  };

  return (
    <div className='tile is-12 box justify-around p-10'>
      <a rel='noreferrer' href={recipe?.sourceUrl} target='_blank'>
        <span className='icon icon-text my-20'>
          <i className='fas fa-link fa-2x'></i>
          <span>Recipe Link</span>
        </span>
      </a>
      {renderTimeIcon()}
      {renderCheapIcon()}
      {renderVeganIcon()}
      {renderVegetarianIcon()}
      {renderGlutenFreeIcon()}
      {renderSustainableIcon()}
      <RecipeFavorite />
    </div>
  );
};

export default InfoBar;
