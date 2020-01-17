<template>
    <div>   
    <h1>{{title}}</h1> 
    <input v-model="number" type="number" />
    <button @click="addNumber">
     Add new number
    </button>
    <br/>
    <input v-model="object_" type="text" />
    <button @click="addObject">
     Add new object
    </button>
    </div>
    
</template>

<script>
import { EventBus } from "../event-bus";
export default {
    name:"ObjectAdded",
    props: {    
      title:{
          type:String,
          value:'title'
      },
      object_:{
          type:Array,
          value:[],
      }
    },
    methods: {
        addNumber(event) {
            EventBus.$emit("number-added-eventBus", Number(this.number));
        },
        addObject(event) {
            this.$emit("object-added-event", JSON.parse(JSON.stringify(this.object_)) );
        }
    },
    data(){
        return {number: 0};
    }
}
</script>

<style scoped>


</style>