import axios from 'axios';

const env = import.meta.env.VITE_REACT_APP_NODE_ENV;

export const FormApi = axios.create({
  baseURL:
    env === 'production'
      ? `${import.meta.env.VITE_REACT_APP_FORM_PROD}`
      : env === 'development'
        ? `${import.meta.env.VITE_REACT_APP_FORM_DEV}`
        : '',
  headers: {
    Accept: 'application/json'
  }
});
