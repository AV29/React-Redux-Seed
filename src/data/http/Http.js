import axios from './Interseptors';

class Http {

  get(url, params) {
    return axios.get(url, {params});
  }

  post(url, data, params) {
    return axios.post(url, data, {params});
  }

  put(url, data, params) {
    return axios.put(url, data, {params});
  }

  delete(url, params) {
    return axios.delete(url, {params});
  }
}

export default new Http();
