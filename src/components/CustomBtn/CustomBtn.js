export default {
  name: "CustomBtn",
  props: {
    text: String,
    type: String,
    btnClass: String,
    disabled: Boolean,
    emitMethodName: String,
    clickParams: Object
  },
  data() {
    return {
      isGreen: false,
      isRed: false,
      isPrimary: false,
      isDisabled: false,
      param: {},
    }
  },
  methods: {
    onClick(clickParams) {
      if (this.emitMethodName) {
        this.$emit(this.emitMethodName, clickParams)
      }
    }
  },
  created() {
    switch(this.btnClass) {
      case 'red':
        this.isRed = true;
        break;
      case 'primary':
        this.isPrimary = true;
        break;
      case 'green':
      default:
        this.isGreen = true;
    }
    if (this.disabled === true) {
        this.isDisabled = true;
    }
    if (this.clickParams) {
        this.param = this.clickParams
    }
  }
}
