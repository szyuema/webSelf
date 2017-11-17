<template>
  <div class="about">
    <input v-model="s1"></input>
    <input v-model="s2"></input>
    <input v-model="s3"></input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      s1: 1,
      s2: 2,
      s3: 3
    };
  },
  created() {
    this.s2 = this.s1 * 2;
    this.s3 = this.s2 * 10;
  },
  watch: {
    s1(value, ovalue) {
      this.s2 = this.s1 * 2;
    },
    s2(value, ovalue) {
      this.s3 = this.s2 * 10;
    }
  }
  // computed: {
  //   s3: function() {
  //     return this.s1 + ' ' + this.s2;
  //   }
  // }
};
</script>

<style lang="less">
.about {
  position: absolute;
  top: 160px;
  bottom: 0px;
  left: 0;
  right: 0;
  overflow: auto;
}
</style>
