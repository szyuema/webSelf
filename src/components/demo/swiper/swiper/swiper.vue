<template>
  <div class="swiper">
    <swiper ref="swiper" :mousewheel-control="true" :performance-mode="false" :pagination-visible="true" :pagination-clickable="true" :loop="true" @slide-change-start="onSlideChangeStart" @slide-change-end="onSlideChangeEnd">
      <div v-for="(slide, index) in slides" :key="index" class="slide">
        <div class="text">{{slide.text}}</div>
        <img :src="slide.img" class="img" />
      </div>
    </swiper>
  </div>
</template>

<script>
import swiper from '../../../ui/swiper/swiper.vue';

export default {
  data() {
    return {
      slides: [
        {
          text: 'a',
          img: './static/img/a.jpg'
        },
        {
          text: 'b',
          img: './static/img/a.jpg'
        }
      ]
    };
  },
  methods: {
    onSlideChangeStart(currentPage) {
      console.log('onSlideChangeStart', currentPage);
    },
    onSlideChangeEnd(currentPage) {
      console.log('onSlideChangeEnd', currentPage);
    }
  },
  components: { swiper }
};
</script>

<style lang="less" scoped>
.swiper {
  height: 100%;
  .slide {
    position: relative;
    background: #fff;
    text-align: center;
    .text {
      position: absolute; // left: 0;
      // right: 0;
      // text-align: center;
      // bottom:50px;
      transform: translate(-50%, -50%);
      top: 50%;
      left: 50%;
    }
  }
}
</style>
