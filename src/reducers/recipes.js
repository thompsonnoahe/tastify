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
