import axios from 'axios';

const spoonacular = axios.create({
  baseURL: 'https://api.spoonacular.com/recipes/',
  params: {
    apiKey: 'f1a72331a28441f6bdbed437c4781301',
  },
});

export default spoonacular;
