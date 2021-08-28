import { types } from '../types';
import spoonacular from '../apis/spoonacular';

export const searchRecipes = query => async dispatch => {
  const { data } = await spoonacular.get('/complexSearch', {
    params: {
      query,
    },
  });
  dispatch({ type: types.GET_RECIPES, payload: data });
};
