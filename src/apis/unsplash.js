import axios from 'axios';

const unsplash = axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID GhIlQHEeu7oEWeIEsMdUJHbEyGhcjcyTcD9En6naAEs',
  },
});

export default unsplash;
