import axios from 'axios';
const baseURL = import.meta.env.VITE_API_URL;

const callApi = (endpoint: any, method = 'GET', body: any): any =>{
  return axios({
    method: method,
    url: `${baseURL}/${endpoint}`,
    data: body,
  }).catch((err) => {
    console.log(err);
  });
}

export default callApi