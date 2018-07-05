import {baseUrl} from './config';

export const callApi = ({params}) => {
  return fetch(baseUrl + params.url)
    .then(res => res.json())
    .then(json => ({
      response: json,
      err: null
    }))
    .catch(err => ({
      err,
      response: null
    }));
};
