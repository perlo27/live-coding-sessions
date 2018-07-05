const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const ERROR = 'ERROR';

export const requestType = name => `${name}_${REQUEST}`;
export const successType = name => `${name}_${SUCCESS}`;
export const errorType = name => `${name}_${ERROR}`;

export const generateActionCreator = type => params => ({type, params});

export const generateExecutabeleAction = name => ({
  request: () => ({ type: requestType(name)}),
  success: (response, params) => ({
    type: successType(name),
    payload: response,
    params
  }),
  error: error => ({ type: errorType(name), error }),
});