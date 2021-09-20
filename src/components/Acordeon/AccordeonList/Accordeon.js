import AccordeonRow from '../AccordeonRow/AccordeonRow.vue';
import CustomBtn from '@/components/CustomBtn/CustomBtn.vue';
import currency from '@/store/currency';
import { mapGetters } from 'vuex';

export default {
  name: 'Accordeon',
  components: { AccordeonRow, CustomBtn },
  props: {
    data: Array
  },
  data() {
    return {}
  },
  methods: {
      parsePrice(price) {
        return currency.priceFormat(price);
      },
      addToCart(payload) {
        this.$emit('callFlashCart', payload);
      }
  },
  computed: {
    ...mapGetters(['getCoeff', 'isIncrease', 'isDecrease'])
  },
  created() {

  }
}
