export default {
  name: 'Alert',
  props: {
    text: String,
    type: String
  },
  data() {
    return {
      allTypes: {
        success: false,
        danger: false,
        info: false
      }
    }
  },
  methods: {

  },
  created() {
    switch(this.type) {
      case 'success':
        this.allTypes.success = true;
        break;
      case 'danger':
        this.allTypes.danger = true;
        break;
      case 'info':
      default:
        this.allTypes.info = true;
        break;
    }
  }
}
