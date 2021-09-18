import axios from 'axios';

export default {
  get(url) {
    return axios.get(process.env.VUE_APP_API_URL + url);
  },
  post(url, data) {
    return axios.post(process.env.VUE_APP_API_URL + url, data);
  },
  patch(url, data) {
    return axios.patch(process.env.VUE_APP_API_URL + url, data);
  },
  delete(url, config = {}) {
    return axios.delete(process.env.VUE_APP_API_URL + url, config);
  }
}
