<template>
  <div>
    <input v-model="numberInput" type="number" />
    <button @click="addNumber(numberInput)">
     Add new number to state
    </button>
  </div>
</template>

<script>

export default {
  name: "SetStateData",
  data() {
    return {
      numberInput: 0
    };
  },
  methods: {
    addNumber(numberInput) {
        this.$store.dispatch("addItem" ,{key:'numbers',value:Number(numberInput)} );
        //this.$store.commit('addNumberOfState', {key:'number',value:Number(numberInput)} )
    }
  }
};
</script>