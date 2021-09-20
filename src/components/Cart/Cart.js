import currency from "@/store/currency";
import CustomBtn from '@/components/CustomBtn/CustomBtn.vue';
import { mapActions, mapGetters } from "vuex";

export default {
  name: 'Cart',
  components: { CustomBtn },
  props: {
    cart_items: Array,
    cart_fixed: Boolean,
  },
  data() {
    return {
      hide_cart: false
    }
  },
  methods: {
    ...mapActions(['deleteProductFromCart', 'increaseProductCount', 'decreaseProductCount']),

    deleteFromCart(payload) {
        this.delete(payload.id);
    },

    delete(product_id) {
        this.deleteProductFromCart(product_id);
    },

    decr(product_id) {
        this.decreaseProductCount(product_id);
    },

    incr(product_id) {
        this.increaseProductCount(product_id);
    },

    parsePrice(price) {
        return currency.priceFormat(price);
    },

    toggleShowCart() {
        this.hide_cart = !this.hide_cart;
    }

  },
  computed: {
    ...mapGetters(['getCartItems', 'getTotalPriceInCart', 'getCoeff', 'isIncrease', 'isDecrease'])
  }
}
