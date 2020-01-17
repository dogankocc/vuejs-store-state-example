<template>
    <div class="text-font">    
    <input v-model="number" type="number" />
    <button @click="$emit('number-added-event', Number(number))">
     Add new number
    </button>
    </div>
    
</template>

<script>
import { EventBus } from "../event-bus";
export default {
    name:"NumberAdded",
    props: {
      
    },
    data(){
        return {number:0};
    },
    created() {
    EventBus.$on("number-added-eventBus", number => {
        alert("NumberAdded EventBus.$on  => " + number);
        this.$emit('number-added-event', number)
    });
  }
}
</script>

<style scoped>
.text-font{
   font-size: 14px;
   font-family:fantasy;
   text-align: center;
}

</style>