<template>
<h1>----------------Two way Binding--------------------</h1>
<input type="text" v-model="count"/>
<h1>{{ count }}</h1>
</template>

<script>
export default {
    name:"Bind",
    data(){
        return{
             count:0
            }
    }
}
</script>