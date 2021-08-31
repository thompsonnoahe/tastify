import axios from 'axios';

export default axios.create({
  baseURL: 'https://tastify.us.auth0.com/api/v2',
  headers: {
    Authorization: `${process.env.token_type} ${process.env.access_token}`,
  },
});
