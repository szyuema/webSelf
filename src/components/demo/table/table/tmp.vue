<template>
  <div>
   <tr v-for="(citem,index) in item" :key="index">
     <td>{{citem}}</td>
     <td>{{citem}}</td>
     <td>{{citem}}</td>
   </tr>
   </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Array,
      default() {
        return {};
      }
    }
  }
};
</script>