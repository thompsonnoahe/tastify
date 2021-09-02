import axios from 'axios';

console.log(process.env);

const spoonacular = axios.create({
  baseURL: 'https://api.spoonacular.com/recipes/',
  params: {
    apiKey: process.env.REACT_APP_SPOONACULAR_API_KEY,
  },
});

export default spoonacular;
