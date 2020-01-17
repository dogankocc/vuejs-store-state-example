<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ShowMessage msg1="Tom" msg2="Jerry" v-bind:artists="objects"/>
    <ShowMessage2 title="Artist 2123" v-bind:artists="objects"/>
    <DisplayNumbers :numbers="numbers"/>
    <br/>
    <NumberAdded @number-added-event="numbers.push($event)"/>
    <br/>
    <DisplayObject :objects="objects"/>
    <br/>
    <ObjectAdded title="Add Number Or Object" @object-added-event="addObject"/>
    <br/>
    <DisplayStateData title="Add item to state" :data="store.data"/>
    <br/>
    <SetStateData/>
  </div>
</template>

<script>
import ShowMessage from './ShowMessage';
import ShowMessage2 from './ShowMessage2';
import DisplayNumbers from './DisplayNumbers';
import DisplayObject from './DisplayObject';
import NumberAdded from './NumberAdded';
import ObjectAdded from './ObjectAdded';
import DisplayStateData from './DisplayStateData';
import SetStateData from './SetStateData';
import { store } from "../store.js";
export default {
  name: 'HelloWorld',
  components:{
    ShowMessage,
    ShowMessage2,
    DisplayNumbers,
    DisplayObject,
    NumberAdded,
    ObjectAdded,
    DisplayStateData,
    SetStateData
  },
  
  data () {
    return {
      msg: 'Doğan yapar',
      objects: [
       {name: 'David Guetta', genre: 'dj', country: 'USD'},
       {name: 'Snoop dogg', genre: 'nigga', country: 'USD'},
      ],
      numbers: [1, 2, 3],
      store:store
    }
  },
  methods:{
    addObject(newObject){
      this.objects.push(JSON.parse(newObject))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
