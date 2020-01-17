<template>
    <div class="text-font">    
        <h1>{{title}}</h1>
        <ul class="list">
        <li v-for="(artist, x) in artists" :key="x">
        <h3>{{artist.name}} from {{artist.country}}</h3>
        </li>
        </ul>
    </div>
    
</template>

<script>
export default {
    name:"ShowMessage2",
    props:{
        title:{
            type:String,
            value:'title'
        },
        artists: {
            type: Array
        }
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