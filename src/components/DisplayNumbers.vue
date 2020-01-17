<template>
    <div class="text-font">    
        {{ numbers }}

    </div>
    
</template>

<script>
export default {
    name:"DisplayNumbers",
    props: {
        numbers: Array,
    },
    data(){
        return {};
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