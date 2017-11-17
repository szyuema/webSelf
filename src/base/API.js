import axios from 'axios';

class API {
  get() {
    var p = new Promise(function (resolve, reject) {
      axios.get('http://172.20.11.83:8888/api/goodsaa')
        .then(function (response) {
          let data = response.data;
          resolve(data);
        })
        .catch(function (error) {
          reject(error);
        });
    });
    return p;
  }
  post() {

  }
}
export default API;
