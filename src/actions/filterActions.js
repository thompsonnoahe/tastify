import { types } from '../types';

export const toggleFilter = showFilters => {
  if (showFilters) {
    return {
      type: types.SHOW_FILTER,
      payload: showFilters,
    };
  } else {
    return {
      type: types.HIDE_FILTER,
      payload: showFilters,
    };
  }
};

export const changeSortOrder = sortOrder => {
  if (sortOrder === 'asc') {
    return {
      type: types.SORT_ASC,
      payload: 'asc',
    };
  } else if (sortOrder === 'desc') {
    return {
      type: types.SORT_DESC,
      payload: 'desc',
    };
  } else {
    return {};
  }
};

export const filterByIntolerances = intolerances => {
  return {
    type: types.FILTER_BY_INTOLERANCES,
    payload: intolerances,
  };
};

export const selectCuisine = cuisine => {
  return {
    type: types.SELECT_CUISINE,
    payload: cuisine,
  };
};

export const setCaloriesFilter = (calories, type) => {
  if (type === 'min') {
    return {
      type: types.FILTER_MIN_CALORIES,
      payload: {
        minCalories: calories,
      },
    };
  } else if (type === 'max') {
    return {
      type: types.FILTER_MAX_CALORIES,
      payload: {
        maxCalories: calories,
      },
    };
  } else {
    return {};
  }
};
