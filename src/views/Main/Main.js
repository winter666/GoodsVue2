import api_requests from '@/store/api_requests';
import Accordeon from '@/components/Acordeon/AccordeonList/Accordeon.vue';
import Flash from '@/components/Flash/Flash.vue';
import Cart from '@/components/Cart/Cart.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "Main",
  components: { Accordeon, Flash, Cart },
  data() {
    return {
      currencyFormat: 75,
      data: [],
      goodsData: [],
      goodsNames: {},
      addedToCartEvt: false,
      cartFlashMsg: '',
      cartFlashType: '',
    }
  },
  methods: {
    ...mapActions(['addProductToCart']),

    callFlash(payload) {
      this.cartFlashMsg = 'Добавлено в корзину!';
      this.cartFlashType = 'success';
      this.addToCart(payload.id);

      this.addedToCartEvt = true;
      setTimeout(() => {
        this.addedToCartEvt = false;
      }, 4 * 1000);
    },

    addToCart(product_id) {
      let product = {};
      let result = true;
      this.data.forEach(goodsGroup => {
        let gIdx = goodsGroup.goods.findIndex(good => good.id == product_id);
        if (gIdx !== -1) {
          product = goodsGroup.goods[gIdx];
        }
      });
      if (product) {
          this.addProductToCart(product);
      }
      return result;
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
              let gIndx = this.data.findIndex(group => group.id == item.G );
              if (gIndx === -1) {
                 // Если нет - создаю и записываю туда товар
                  this.data.push({
                    id: item.G,
                    name: this.goodsNames[item.G].G,
                    goods: [good]
                  });
              } else {
                // если есть - добавляю туда товар
                this.data[gIndx].goods.push(good);
              }
          }

      });
    }

  },
  computed: {
      ...mapGetters(['getCartItems']),
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
      console.log('Ошибка при загрузке данных');
    })
  }
}
