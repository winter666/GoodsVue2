import Alert from '@/components/Alert/Alert.vue';

export default {
  name: "Flash",
  props: {
    call: Boolean,
    text: String,
    type: String,
    h_position: String
  },
  components: { Alert },
  data() {
    return {
      action: null,
      allowTypes: [
        'success',
        'danger',
        'info',
      ],
      startAnimate: false,
      posTop: 'top',
      posBottom: 'bottom'
    }
  },
  methods: {

  },
  computed: {
    start() {
      return this.call;
    },
    getHPosition() {
      return (this.h_position) ? this.h_position : this.posTop;
    }
  }
}
