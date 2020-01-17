<template>
    <div class="text-font">    
        {{ objects }}
    </div>
    
</template>

<script>
export default {
    name:"DisplayObject",
    props: {
         objects: {
            type: Array
        },
 
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