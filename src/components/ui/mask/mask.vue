<template>
  <div class="mask" ref="mask" v-show="showtype" @touchstart="emitfn">

  </div>
</template>

<script>
export default {
  data() {
    return {
      showtype: false,
      obj: {}
    };
  },
  created() {
    this.$root.Bus.$on('show', obj => {
      this.show(obj);
      this.obj = obj;
    });
    this.$root.Bus.$on('hide', obj => {
      this.hide();
    });
  },
  methods: {
    show(value) {
      this.showtype = true;
      // this.$refs.mask.style.top = this.param.top || 160 + 'px';
      // this.$refs.mask.style.background = this.param.background;
    },
    hide() {
      this.showtype = false;
    },
    emitfn() {
      this.obj.fn && this.obj.fn();
    }
  },
  beforeDestroy() {
    this.$root.Bus.$off('show');
  }
};
</script>
<style lang="less" scoped>
.mask {
  position: absolute;
  top: 160px;
  bottom: 0; 
  background: rgba(209, 206, 206, 0.15);
  left: 0;
  right: 0;
  z-index: 997
}
</style>

