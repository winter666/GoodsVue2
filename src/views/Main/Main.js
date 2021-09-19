import Accordeon from '@/components/Acordeon/AccordeonList/Accordeon.vue';
import Flash from '@/components/Flash/Flash.vue';
import Cart from '@/components/Cart/Cart.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "Main",
  components: { Accordeon, Flash, Cart },
  data() {
    return {
      data: [],
      goodsData: [],
      goodsNames: {},
      addedToCartEvt: false,
      cartFlashMsg: '',
      cartFlashType: '',
    }
  },
  methods: {
    ...mapActions(['addProductToCart', 'requestGetProducts']),

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
      this.$store.getters.getProducts.forEach(goodsGroup => {
        let gIdx = goodsGroup.goods.findIndex(good => good.id == product_id);
        if (gIdx !== -1) {
          product = goodsGroup.goods[gIdx];
        }
      });
      if (product) {
          this.addProductToCart(product);
      }
      return result;
    }

  },
  computed: {
      ...mapGetters(['getCartItems', 'getProducts']),
  },
  created() {
    this.requestGetProducts();
  }
}
