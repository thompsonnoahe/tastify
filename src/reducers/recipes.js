import { types } from '../types';

export const recipesReducer = (state = {}, action) => {
  switch (action.type) {
    case types.GET_RECIPES:
      return action.payload;
    default:
      return state;
  }
};

export const recipeReducer = (state = {}, action) => {
  switch (action.type) {
    case types.GET_RECIPE_INFO:
      return action.payload;
    default:
      return state;
  }
};

export const favoriteRecipeReducer = (state = [], action) => {
  switch (action.type) {
    case types.GET_FAVORITE_RECIPES:
      return action.payload;
    case types.SET_FAVORITE_RECIPES:
      return [...state, ...action.payload];
    case types.REMOVE_FAVORITE_RECIPE:
      return action.payload;
    default:
      return state;
  }
};
