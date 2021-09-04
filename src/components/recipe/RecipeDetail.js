import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import _ from 'lodash';
import { getRecipeDetails } from '../../actions';
import IngredientList from './IngredientsList';
import InstructionList from './InstructionList';
import RecipeRecommendations from './RecipeRecommendations';
import RecipeInfoBar from './RecipeInfoBar';

const RecipeDetail = ({ getRecipeDetails, recipe }) => {
  const { id } = useParams();

  document.title = `${recipe?.title ?? ''} | Tastify`;
  useEffect(() => {
    getRecipeDetails(id);
  }, [id, getRecipeDetails]);
  return (
    <div>
      <div
        className='hero is-medium is-primary flex justify-center items-center'
        style={{
          backgroundImage: `linear-gradient(
            to right bottom,
            rgba(255, 255, 255, 0.5),
            rgba(0, 209, 178, 0.5)
            ),
          url(${recipe?.image})`,
          backgroundPosition: 'center',
        }}>
        <h1 className='text-7xl text-center'>
          {_.startCase(_.toLower(recipe?.title))}
        </h1>
      </div>
      <div className='content py-20 lg:px-32'>
        <RecipeInfoBar recipe={recipe} />
        <h1>Ingredients</h1>
        <div className='tile is-ancestor'>
          <IngredientList ingredients={recipe?.extendedIngredients} />
          <RecipeRecommendations />
        </div>
        <h1>Instructions</h1>
        <InstructionList steps={recipe?.analyzedInstructions[0]?.steps} />
        <div className='mt-20 flex flex-col justify-evenly items-center'>
          <img
            className='shadow-2xl rounded'
            src={recipe?.image}
            alt={recipe?.title}
          />
          <h1>Bon App&eacute;tit!</h1>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { recipe: state.recipe.recipe };
};

export default connect(mapStateToProps, { getRecipeDetails })(RecipeDetail);
