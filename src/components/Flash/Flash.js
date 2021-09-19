import Alert from '@/components/Alert/Alert.vue';

export default {
  name: "Flash",
  props: {
    call: String,
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
  created() {

  }
}
