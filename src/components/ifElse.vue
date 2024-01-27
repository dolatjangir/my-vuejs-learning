<template>
<h1>---------------------if-else button----------------------</h1>
<h2 v-if="show">if condition</h2>
<h2 v-else>else condition</h2>
<button v-on:click="show=!show">toggle</button>
</template>

<script>
export default{
    data(){
        return{
        show:false,
    }
    }

}
</script>