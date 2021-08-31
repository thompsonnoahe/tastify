import { combineReducers } from 'redux';
import {
  favoriteRecipeReducer,
  recipeReducer,
  recipesReducer,
} from './recipes';

export default combineReducers({
  searchData: recipesReducer,
  recipe: recipeReducer,
  favoriteRecipes: favoriteRecipeReducer,
});
