<template>

</template>

<script>
export default {
  created() {
    this.$root.Bus.$emit('loading-show');
    setTimeout(() => {
      this.$root.Bus.$emit('loading-hide');
    }, 4000);
  }
};
</script>

<style>

</style>
