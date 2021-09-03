import { types } from '../types';

export const toggleFilterReducer = (state = false, action) => {
  switch (action.type) {
    case types.SHOW_FILTER:
    case types.HIDE_FILTER:
      return action.payload;
    default:
      return state;
  }
};

export const sortReducer = (state = '', action) => {
  switch (action.type) {
    case types.SORT_ASC:
    case types.SORT_DESC:
      return action.payload;
    default:
      return state;
  }
};

export const intolerancesReducer = (state = [], action) => {
  switch (action.type) {
    case types.FILTER_BY_INTOLERANCES:
      return [...state, action.payload];
    default:
      return state;
  }
};

export const cuisineReducer = (state = '', action) => {
  switch (action.type) {
    case types.SELECT_CUISINE:
      return action.payload;
    default:
      return state;
  }
};

export const caloriesReducer = (
  state = { minCalories: 1, maxCalories: 10000 },
  action
) => {
  switch (action.type) {
    case types.FILTER_MIN_CALORIES:
    case types.FILTER_MAX_CALORIES:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
