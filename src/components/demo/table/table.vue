<template>
  <table class="table">
   <tmp :item="item"></tmp>
  </table>
</template>

<<script>
import tmp from './table/tmp.vue';
export default {
  data() {
    return {
      item: [1, 2, 3]
    };
  },
  components: {
    tmp: tmp
  },
  created() {
    setTimeout(() => {
    }, 4000);
  }
};
</script>
<style lang="less">
.table {
  color: red;
}
</style>

