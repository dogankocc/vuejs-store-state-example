<template>
    <div class="text-font">
        {{msg}}
        <h1>Vue Top Artist Countries</h1>
        <ul class="list">
        <li v-for="(obj, x) in objects" :key="x">
        <h3>{{obj.name}} from {{obj.country}}</h3>
        </li>
        </ul>
    </div>
    
</template>

<script>
export default {
    name:"ShowMessage",
    props:['msg1','msg2','objects'],
    data(){
        return {msg:this.msg1 + " " +this.msg2};
    }
}
</script>

<style scoped>
.text-font{
   font-size: 14px;
   font-family:fantasy;
   text-align: center;
}
.list{
    list-style: none;

}
</style>