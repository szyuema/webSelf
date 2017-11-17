<template>
  <div class="followme" :class="{big:isshow}" v-on:mouseenter="show(true)" v-on:mouseleave="show(false)" title="aaaa">
      <div>
        
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isshow: false
    };
  },
  methods: {
    show(type) {
      this.isshow = type;
    }
  }
};
</script>

<style lang="less" scoped>
.followme {
  z-index: 999;
  position: absolute;
  right: 10px;
  bottom: 80px;
  width: 50px;
  height: 50px;
  background: url('./follow.png');
  background-size: 50px 50px;
  transition: all .5s;

  &.big {
    width: 150px;
    height: 150px;
    background-size: 150px 150px;
  }
}
</style>
