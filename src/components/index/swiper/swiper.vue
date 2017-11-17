<template>
  <swiper ref="swiper" direction="horizontal" :mousewheel-control="true" :performance-mode="false" :pagination-visible="true" :pagination-clickable="true" :loop="true" @slide-change-start="onSlideChangeStart" @slide-change-end="onSlideChangeEnd">
    <div v-for="(slide, index) in slides" :key="index" class="slide">
      <div class="text">{{slide.text}}</div>
      <img :src="slide.img" class="img" />
    </div>
  </swiper>
</template>

<script>
import swiper from '../../ui/swiper/swiper.vue';
export default {
  data() {
    return {
      slides: [
        {
          'text': '图片滑动区域',
          'img': './static/img/a.jpg'
        },
        {
          'text': 'b',
          'img': './static/img/b.jpg'
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
    },
    created() {
      console.log('a');
    }
  },
  components: { swiper }
};
</script>

<style lang="less" scoped>
.swiper {
  min-height: 220px;
  .slide {
    position: relative;
    text-align: center;
    .text {
      position: absolute; // left: 0;
      // right: 0;
      // text-align: center;
      // bottom:50px;
      transform: translate(-50%, -50%);
      top: 50%;
      left: 50%;

      font-size: 20px;
      font-weight: 700;
      color:red;
    }
    .img {
      // width: 100%;
      max-height: 300px;
    }
  }
}
</style>
