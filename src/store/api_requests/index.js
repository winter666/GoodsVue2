import axios_request from './requests/axios';

export default {

  getGoodsList() {
    return axios_request.get('goods/list');
  },

  getGoodsNames() {
    return axios_request.get('goods/names');
  },

  getGoods() {
    return Promise.all([
      this.getGoodsList(),
      this.getGoodsNames()
    ]);
  }


}
