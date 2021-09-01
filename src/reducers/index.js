import { combineReducers } from 'redux';
import {
  autoCompleteReducer,
  favoriteRecipeReducer,
  recipeReducer,
  recipesReducer,
} from './recipes';

export default combineReducers({
  searchData: recipesReducer,
  recipe: recipeReducer,
  favoriteRecipes: favoriteRecipeReducer,
  autoCompletions: autoCompleteReducer,
});
