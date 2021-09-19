import currency from "@/store/currency";

export default {
  name: 'Cart',
  props: {
    cart_items: Array,
    cart_fixed: Boolean
  },
  data() {
    return {
      goods: []
    }
  },
  methods: {

    delete() {
      // TODO: Удаление из корзины
    },

    update() {
      // TODO: Добавление новых товаров, увеличение кол-ва
    },

    decr(product_id) {
      let item = this.findItemById(product_id);
      if (item.count > 1) {
        item.count--
      } else {
        const idx = this.cart_items.findIndex(item => item.product.id == product_id);
        this.cart_items.splice(idx, 1);
      }
    },

    incr(product_id) {
      let item = this.findItemById(product_id);
      if (item) {
        if (item.count < item.product.total) {
          item.count++
        }
      }
    },

    findItemById(id) {
      const idx = this.cart_items.findIndex(item => item.product.id == id);
      return this.cart_items[idx];
    },

    parsePrice(price) {
      return currency.priceFormat(price);
    }

  },
  computed: {
    totalPrice() {
      // Рассчет цены всех товаров
      let totalPrice = 0;
      this.cart_items.forEach(item => {
        totalPrice += item.count * item.product.price;
      });
      return this.parsePrice(totalPrice);
    }
  }
}
