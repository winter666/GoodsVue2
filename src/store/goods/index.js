import api_requests from '@/store/api_requests';

export default {
  state: {
    products: []
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    }
  },
  actions: {
    requestGetProducts(ctx) {
      // Получаю данные очередью промисов через Promise.all()
      api_requests.getGoods().then((res) => {
          let data = [];
          let goodsData = [];
          let goodsNames = {};
          res.forEach(response => {
              // Записываю полученные данные в глобальные переменные
              if (response.data.Value) {
                goodsData = response.data.Value.Goods
              } else if (Object.keys(response.data).length) {
                goodsNames = response.data;
              }
          });
          // Преобразую данные
          // Перебираю массив с данными о товарах
          goodsData.forEach((item) => {
              // Проверяю - есть ли такой товар в объекте
              if (goodsNames[item.G]) {
                  // Если есть - собираю данные о нем
                  let goodData = goodsNames[item.G].B[item.T]
                  let good = {
                      id: item.T,
                      name: goodData.N,
                      total: item.P,
                      price: item.C
                  }

                  // Далее смотрю - существует ли такая группа товаров в глобавльном массиве
                  let gIndx = data.findIndex(group => group.id == item.G );
                  if (gIndx === -1) {
                    // Если нет - создаю и записываю туда товар
                      data.push({
                        id: item.G,
                        name: goodsNames[item.G].G,
                        goods: [good]
                      });
                  } else {
                    // если есть - добавляю туда товар
                    data[gIndx].goods.push(good);
                  }
              }

          });
          ctx.commit('SET_PRODUCTS', data);
      }).catch((e) => {
          console.log('Ошибка при загрузке данных');
      })
    }
  },
  getters: {
    getProducts(state) {
      return state.products;
    }
  }
}
