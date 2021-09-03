import axios from 'axios';

console.log(process.env);

export default axios.create({
  baseURL: 'https://tastify.us.auth0.com/api/v2',
  headers: {
    Authorization: `${process.env.REACT_APP_AUTH0_TOKEN_TYPE} ${process.env.REACT_APP_AUTH0_ACCESS_TOKEN}
    `,
  },
});
