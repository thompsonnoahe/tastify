import axios from 'axios';

export default axios.create({
  baseURL: 'https://tastify.us.auth0.com/api/v2',
  headers: {
    Authorization: `${process.env.TOKEN_TYPE} ${process.env.ACCESS_TOKEN}`,
  },
});
