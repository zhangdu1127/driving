import axios from "axios";

export default class Http {
  static getData(reqParam) {
    var obj = {
      key: this.key
    };
    for (let key in reqParam) {
      obj[key] = reqParam[key];
    }
    let config = {
      params: {
        url: this.baseURL + this.url + "/query",
        param: obj
      }
    };
    return axios.get(this.proxy, config);
  }
  static async query(path, params, callback) {
    this.url = path;
    let result = await this.getData(params);
    callback(result);
  }
}
//"http://apicloud.mob.com/tiku/" + path + "/query",
Http.baseURL = "http://apicloud.mob.com/tiku/";
Http.key = "2a6bb26044286";
Http.proxy = "http://www.bestqingshan.top/demo/Juhe.php";
