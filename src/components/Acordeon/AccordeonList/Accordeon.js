import AccordeonRow from '../AccordeonRow/AccordeonRow.vue';
import CustomBtn from '@/components/CustomBtn/CustomBtn.vue';
import currency from '@/store/currency';

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
      test(payload) {
        console.log(payload);
      }
  },
  created() {

  }
}
