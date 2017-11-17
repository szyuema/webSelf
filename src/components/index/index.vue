<template>
  <div class="index">
    <div class="banner">
      <Swiper></Swiper>
    </div>
    <div class="content">
      <v-main></v-main>
    </div>
    <!-- <v-footer></v-footer> -->
  </div>
</template>

<script>
import Swiper from './swiper/swiper.vue';
import main from './main/main.vue';
import footer from './../footer/footer.vue';
export default {
  components: {
    'Swiper': Swiper,
    'v-footer': footer,
    'v-main': main
  }
};
</script>

<style lang="less" scoped>
.index {
  position: absolute;
  top: 160px;
  bottom: 0px;
  left: 0;
  right: 0;
  overflow: auto;
  .banner {
    // background: url(./shadow.png) repeat 100% ;
    width: 80%;
    margin: 0 auto;
  }
  .content {
    background: #1d1d1d;
    width: 80%;
    margin: 0 auto;
    border-radius: 5px;
    padding: 10px 2%;
    box-sizing: border-box;
  }
}

@media only screen and (max-width: 480px) {
  .index {
    .banner {
      width: 100%;
    }
    .content {
      width: 100%;
    }
  }
}
</style>
