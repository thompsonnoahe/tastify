import { types } from '../types';

export const recipesReducer = (state = [], action) => {
  switch (action.type) {
    case types.GET_RECIPES:
      return [...state, action.payload];
    default:
      return state;
  }
};
