<template>
  <div class="app">
    <v-header> </v-header>
    <v-mask> </v-mask>
    <v-loading> </v-loading>
    <v-followme> </v-followme>
     <router-view name="c"></router-view>
    <div class="router">
      <keep-alive>
        <router-view v-if="$route.meta.keepalive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepalive">
      </router-view>
    </div>
  </div>
</template>

<script>
import header from './components/header/header.vue';
import mask from './components/ui/mask/mask.vue';
import loading from './components/ui/loading/loading.vue';
import followme from './components/followme/followme.vue';
export default {
  components: {
    'v-header': header,
    'v-mask': mask,
    'v-followme': followme,
    'v-loading': loading
  }
};
</script>

<style lang="less">
body {
  background: url(./images/bg.jpg) repeat #FFF;
}

// .router {
// }
</style>
