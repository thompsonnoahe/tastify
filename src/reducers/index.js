import { combineReducers } from 'redux';
import { recipeReducer, recipesReducer } from './recipes';

export default combineReducers({
  searchData: recipesReducer,
  recipe: recipeReducer,
});
