<template>
  <div class="test">
    <div class="slider">
      <Swiper></Swiper>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import Swiper from './swiper/swiper.vue';
import footer from './../../footer/footer.vue';
export default {
  components: {
    'Swiper': Swiper,
    'v-footer': footer
  }
};
</script>

<style lang="less" scoped>
.test {
  position: absolute;
  top: 162px;
  bottom: 0px;
  left: 0;
  right: 0;
  overflow: auto;
  .slider {
    height: 100%;
  }
  .footer {
    position: absolute;
    bottom: 0;
  }
}
</style>
