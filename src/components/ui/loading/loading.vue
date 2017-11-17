<template>
  <div ref="loading" v-show="showtype">
    <div class="v-mask">
    </div>
    <div class="v-loading">
      <div class="loading1">
        <div class="loading2">
        </div>
      </div>
      <span class="text">
        加载中……
      </span>
    </div>
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
    this.$root.Bus.$on('loading-show', obj => {
      this.show(obj);
      this.obj = obj;
    });
    this.$root.Bus.$on('loading-hide', obj => {
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
    }
  },
  beforeDestroy() {
    this.$root.Bus.$off('show');
  }
};
</script>
<style lang="less" scoped>
.v-mask {
  padding: 0;
  margin: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(21, 21, 21, 0.13);
  text-align: center;
  vertical-align: middle;
}

.v-loading {
  position: absolute;
  position: absolute;
  top: 35%;
  left: 50%;
  width: 100px;
  margin-left: -50px;
  text-align: center;
  z-index: 9999;
}
.loading1 {
    display: inline-block;
    background-color: rgba(17, 16, 16, 0);
    height: 40px;
    width: 40px;
    border-radius: 100%;
    border: 3px solid #fff;
    border-top-color: transparent;
    border-bottom-color: transparent;
    animation: rotate 0.7s  linear infinite;
}

.loading2 {
    display: inline-block;
    background-color: rgba(17, 16, 16, 0);
    height: 20px;
    width: 20px;
    margin: 8px;
    border-radius: 100%;
    border: 2px solid #fff;
    border-left-color: transparent;
    border-right-color: transparent;
    animation:  rotate 1.4s  linear infinite;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(0.3);
  }
  100% {
    transform: rotate(360deg) scale(0.9);
  }
}

.text {
  margin-top: 10px;
  color: #fff;
  display: inline-block;
}
</style>

