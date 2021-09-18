import api_requests from '@/store/api_requests'

export default {
  name: "Main",
  data() {
    return {
      currencyFormat: 75,
      goodGroups: [],
      goodsData: [],
      goodsNames: {}
    }
  },
  methods: {

    toCurrency(price) {
        return new Intl.NumberFormat('ru-RU', {
            currency: 'rub',
            style: 'currency'
        }).format(price)
    },

    priceFormat(nominal) {
        let price = nominal * this.currencyFormat;
        return this.toCurrency(price);
    },

    exstractData(res) {
      if (res.data.Value) {
        this.goodsData = res.data.Value.Goods
      } else if (Object.keys(res.data).length) {
        this.goodsNames = res.data;
      }
    },

    formatData() {
      // Перебираю массив с данными о товарах
      this.goodsData.forEach((item) => {
          // Проверяю - есть ли такой товар в объекте
          if (this.goodsNames[item.G]) {
              // Если есть - собираю данные о нем
              let goodData = this.goodsNames[item.G].B[item.T]
              let good = {
                  id: item.T,
                  name: goodData.N,
                  total: item.P,
                  price: item.C
              }

              // Далее смотрю - существует ли такая группа товаров в глобавльном массиве
              let gIndx = this.goodGroups.findIndex(group => group.id == item.G );
              if (gIndx === -1) {
                 // Если нет - создаю и записываю туда товар
                  this.goodGroups.push({
                    id: item.G,
                    name: this.goodsNames[item.G].G,
                    goods: [good]
                  });
              } else {
                // если есть - добавляю туда товар
                this.goodGroups[gIndx].goods.push(good);
              }
          }

      });
      console.log( this.goodGroups);
    }

  },
  created() {
    // Получаю данные очередью промисов через Promise.all()
    api_requests.getGoods().then((res) => {
      res.forEach(response => {
        // Записываю полученные данные в глобальные переменные
        this.exstractData(response);
      });
      // Преобразую данные
      this.formatData();
    }).catch((e) => {
      console.log('ошибка');
    })
  }
}
