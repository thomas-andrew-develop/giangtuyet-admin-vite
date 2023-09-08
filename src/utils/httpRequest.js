import axios from 'axios';
const baseURL = import.meta.env.VITE_API_URL;

export default function callApi(endpoint, method = 'GET', body) {
  return axios({
    method: method,
    url: `${baseURL}/${endpoint}`,
    data: body,
  }).catch((err) => {
    console.log(err);
  });
}
