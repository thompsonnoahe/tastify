import { combineReducers } from 'redux';
import {
  caloriesReducer,
  cuisineReducer,
  intolerancesReducer,
  sortReducer,
  toggleFilterReducer,
} from './filters';
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
  showFilter: toggleFilterReducer,
  sortOrder: sortReducer,
  selectedIntolerances: intolerancesReducer,
  selectedCuisine: cuisineReducer,
  calorieFilters: caloriesReducer,
});
