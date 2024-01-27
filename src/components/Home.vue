<template>
    <h1>welcome in Home</h1>
    <h2>Email {{email}}</h2>
    <h2>Mobile {{mobile}}</h2>
    <!-- we can change our interpolation values -->
    <h2>Mobile {{mobile=1234567}}</h2>      
    <h3>Name-- {{ getName() }}</h3>
    <div>methodName--{{ getdj() }}</div>
    <div>method all data---{{ getData().email   }}</div>
    <div>{{ count }}</div>
    <button v-on:click="getcount">increase value</button>

</template>
<!-- how to transfar our data from script to templete -->
<script>
export default {
    name: "Home",
    data()
    {
        return{
            count:0,
            email: 'dolat@gmail.com',
            mobile:9900000001,
            // how to transfer a function
            getName:function(){
                return "dolat "
            }
        }
    },

    methods:{
        getdj(){
            return "dolat";
        },
        getData() {
            return{
                name:"dolat",
                email: this.email
            }
        },
        getcount(){
            this.count= this.count+1
        }
    }

}
</script>
<style scoped>
h1{
    color: burlywood;
}
</style>