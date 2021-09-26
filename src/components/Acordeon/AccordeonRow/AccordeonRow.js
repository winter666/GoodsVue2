
export default {
    name: 'AccordeonRow',
    props: {
      title: String
    },
    data() {
      return {
        display: "block",
        isHide: false,
        maxHeight: 0
      }
    },
    methods: {
      toggleAccorderon() {
        if (this.maxHeight > 0) {
            this.maxHeight = 0;
        } else {
            this.maxHeight = this.$refs.current_body.scrollHeight;
        }
        this.isHide = !this.isHide;
      }
    },
    created() {

    }
}
