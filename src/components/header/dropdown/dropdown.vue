<template>
  <transition name="fade">
    <ul class="nav-dropdown-ul" v-show="item.show">
      <li class="nav-dropdown-li" v-for="(citem,cindex) in item.cnavlist" :key="cindex" @click="change(cindex)">
        <router-link class="nav-dropdown-a" :to="citem.link">{{citem.name}}</router-link>
      </li>
    </ul>
  </transition>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    change(index) {
      this.$emit('test');
    }
  }
};
</script>

<style lang="less" scoped>
.nav-dropdown-ul {
  z-index: 999;
  display: flex;
  width: 100%;
  flex-direction: column;
  position: absolute;
  background: #fff;
  transform: translate3d(0, 0, 0);
  &.fade-enter-active,
  &.fade-leave-active {
    // z-index: -1;
    transition: all 0.5s;
    opacity: 1;
  }
  &.fade-enter,
  &.fade-leave-to {
    opacity: 0; // transform: translate3d(0, -50%, 0);
  }

  .nav-dropdown-li {
    flex: 1;
    text-align: center;
    .nav-dropdown-a {
      display: block;
      margin: 0;
      padding: 5px 0;
      width: 100%;
      font-size: 15px;
      font-weight: 700;
      color: #787979;
      text-transform: uppercase;
      box-sizing: border-box; //设置包括边框
      border-bottom: 1px solid #424242;
      transition: all 0.5s ease; //渐变
      &.active {
        color: red;
        font-size: 16px;
      }
      &:hover {
        color: red;
        font-size: 16px;
      }
    }
  }
}
</style>

     