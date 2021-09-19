import Alert from '@/components/Alert/Alert.vue';

export default {
  name: "Flash",
  props: {
    call: Boolean,
    text: String,
    type: String,
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
      startAnimate: false
    }
  },
  methods: {

  },
  computed: {
    start() {
      return this.call;
    }
  }
}
