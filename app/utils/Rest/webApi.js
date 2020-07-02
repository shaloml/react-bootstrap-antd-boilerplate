/* eslint-disable no-param-reassign */
import { merge } from 'lodash';
import axios from 'axios';
import logs from '../Logs';
import { API_NAMES } from './constants';

export const get = (webApiSuffix, extendedOptions = {}, webapiName = 'MAIN') =>
  call(webapiName, webApiSuffix, 'GET', extendedOptions);

export const post = (webApiSuffix, extendedOptions = {}, webapiName = 'MAIN') =>
  call(webapiName, webApiSuffix, 'POST', extendedOptions);

export const put = (webApiSuffix, extendedOptions = {}, webapiName = 'MAIN') =>
  call(webapiName, webApiSuffix, 'PUT', extendedOptions);

export const del = (webApiSuffix, extendedOptions = {}, webapiName = 'MAIN') =>
  call(webapiName, webApiSuffix, 'DELETE', extendedOptions);

export const patch = (
  webApiSuffix,
  extendedOptions = {},
  webapiName = 'MAIN'
) => call(webapiName, webApiSuffix, 'PATCH', extendedOptions);

const call = (webapiName, webApiSuffix, method, extendedOptions) =>
  new Promise((resolve, reject) => {
    const url = getWebapiUrl(webapiName) + webApiSuffix;
    const initalHttpData = {
      method, // By default it's POST in case you didnt specify anything
      timeout: 30000
    };
    const options = merge(initalHttpData, extendedOptions);
    // Fire the request for the prepared options.
    logs.writeLog(`callApi - url: ${url}`);
    return axios(url, options)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        logs.writeLog(`callApi failed - url: ${url}`);

        if (extendedOptions.isErrorHandlingNeeded) {
          errorHandler(error);
        }

        reject(error);
      });
  });

const getWebapiUrl = (name) => {
  if (process.env.MOCK_ONLY === 'true') return '';

  if (!API_NAMES.includes(name)) {
    // eslint-disable-next-line no-throw-literal
    throw `API name is unknown - ${name}`;
  }

  const webApiUrlName = `WEB_API_URL_${name}`;
  const webApiUrl = process.env[webApiUrlName];

  if (!webApiUrl) {
    // eslint-disable-next-line no-throw-literal
    throw `API url vairable is not defined - ${webApiUrlName}`;
  }

  return webApiUrl;
};

const errorHandler = (error) => {
  const errorCode = (error.response && error.response.status) || 500;
  const errorPath = '/error';

  if (!window.location.pathname.startsWith(errorPath)) {
    window.location.href = `${errorPath}/${errorCode}`;
  }

  return Promise.reject(error);
};

const doBeforeRequest = (ref) => {
  ref.headers.common.Authorization = `Bearer ${sessionStorage.getItem(
    'token'
  )}`;
  ref.headers.common['Content-Type'] = 'application/json';

  // axios.defaults.headers.common.Authorization = `Bearer ${response.token.content}`;
  // axios.interceptors.response.use(undefined, errorHandler);
  // axios.interceptors.response.use(responseToCamelCase, undefined);
  // axios.defaults.params = axios.defaults.params || {};
  return ref;
};

axios.interceptors.request.use(doBeforeRequest, undefined);
