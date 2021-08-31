import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import _ from 'lodash';
import { getRecipeDetails } from '../../actions';
import IngredientList from './IngredientsList';
import InstructionList from './InstructionList';
import RecipeRecommendations from './RecipeRecommendations';
import InfoBar from './InfoBar';

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
            rgba(255, 255, 255, 0.9),
            rgba(0, 209, 178, 0.9)
            ),
          url(${recipe?.image})`,
          backgroundPosition: 'center',
        }}>
        <h1 className='text-7xl text-center'>
          {_.startCase(_.toLower(recipe?.title))}
        </h1>
      </div>
      <div className='content py-20 px-32'>
        <InfoBar recipe={recipe} />
        <h1>Ingredients</h1>
        <div className='tile is-ancestor'>
          <IngredientList ingredients={recipe?.extendedIngredients} />
          <RecipeRecommendations />
        </div>
        <h1>Instructions</h1>
        <InstructionList steps={recipe?.analyzedInstructions[0]?.steps} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { recipe: state.recipe.recipe };
};

export default connect(mapStateToProps, { getRecipeDetails })(RecipeDetail);
