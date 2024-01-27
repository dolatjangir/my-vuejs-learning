<template>
<h1>----------click button-----------</h1>
<button v-on:mousemove="getconsole()">move mouse</button>
<button v-on:click="test('do not touch button 1')">click me</button>
<button v-on:click="test('do not touch button 2')">click 2 me</button>
<!-- when we use double click event then we use 'dbl' before click -->
<button v-on:dblclick="test('do not touch double button')">dblclick me</button>
</template>

<script>
export default{
    methods:{
        test(data){
            alert(data)
        },

        getconsole(){
            console.warn("function called");
        }
    }
  
}
</script>