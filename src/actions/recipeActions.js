import { types } from '../types';
import spoonacular from '../apis/spoonacular';
import auth0 from '../apis/auth0';

export const searchRecipes =
  (
    query,
    cuisine = null,
    intolerances = null,
    minCalories = null,
    maxCalories = null,
    number = 10,
    offset
  ) =>
  async dispatch => {
    const { data } = await spoonacular.get('/complexSearch', {
      params: {
        query,
        cuisine,
        intolerances,
        minCalories,
        maxCalories,
        number,
        offset,
      },
    });
    dispatch({
      type: types.GET_RECIPES,
      payload: {
        recipes: data.results,
        totalResults: data.totalResults,
        query,
        cuisine,
        intolerances,
      },
    });
  };

export const autoComplete = query => async dispatch => {
  const { data } = await spoonacular.get('/autocomplete/', {
    params: {
      query,
      number: 10,
    },
  });
  dispatch({ type: types.AUTOSUGGEST_RECIPE, payload: data });
};

export const getRecipeDetails = id => async dispatch => {
  const { data } = await spoonacular.get(`/${id}/information`, {
    params: { includeNutrition: true },
  });
  dispatch({
    type: types.GET_RECIPE_INFO,
    payload: { recipe: data },
  });
};

export const setFavoriteRecipes =
  (favoriteRecipeId, userId) => async dispatch => {
    const { data } = await auth0.get(`/users/${userId}`);
    if (!data.user_metadata?.favoriteRecipes?.includes(favoriteRecipeId)) {
      await auth0.patch(`/users/${userId}`, {
        user_metadata: {
          favoriteRecipes: [
            ...(data.user_metadata?.favoriteRecipes ?? []),
            favoriteRecipeId,
          ],
        },
      });
      dispatch({
        type: types.SET_FAVORITE_RECIPES,
        payload: [
          ...(data.user_metadata?.favoriteRecipes ?? []),
          favoriteRecipeId,
        ],
      });
    } else {
      dispatch({
        type: types.SET_FAVORITE_RECIPES,
        payload: [],
      });
    }
  };

export const getFavoriteRecipes = userId => async dispatch => {
  const { data } = await auth0.get(`/users/${userId}`);
  dispatch({
    type: types.GET_FAVORITE_RECIPES,
    payload: data.user_metadata?.favoriteRecipes ?? [],
  });
};

export const removeFavoriteRecipe = (recipeId, userId) => async dispatch => {
  const { data } = await auth0.get(`/users/${userId}`);
  const newFavorites = data.user_metadata.favoriteRecipes.filter(
    id => id !== recipeId
  );
  await auth0.patch(`/users/${userId}`, {
    user_metadata: {
      favoriteRecipes: newFavorites,
    },
  });
  dispatch({
    type: types.REMOVE_FAVORITE_RECIPE,
    payload: newFavorites,
  });
};
