<template>
  <div>
    <h1>{{title}}</h1>
    <!--
        <h2 :key="number" v-for="number in $store.state.data.numbers">{{number}}</h2>
    -->
    <h2>{{getItems}}</h2>
  </div>
</template>

<script>

export default {
  name: "DisplayStateData",
  props:{
    title:{
        type:String,
    },
    data:{
        type:Array
    }
  },
  data() {
    return {
    };
  },
 computed: {
    getItems() {
      return this.$store.getters.getNumbers;
    }
  }
};
</script>