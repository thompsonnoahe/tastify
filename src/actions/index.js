import { types } from '../types';
import spoonacular from '../apis/spoonacular';

export const searchRecipes =
  (query, number = 10, offset) =>
  async dispatch => {
    const { data } = await spoonacular.get('/complexSearch', {
      params: {
        query,
        number,
        offset,
      },
    });
    console.log(data.results);
    dispatch({
      type: types.GET_RECIPES,
      payload: { recipes: data.results, query: query },
    });
  };

export const getRecipeDetails = id => async dispatch => {
  const { data } = await spoonacular.get(`/${id}/information`);
  console.log(data);
  dispatch({
    type: types.GET_RECIPE_INFO,
    payload: { recipe: data },
  });
};
