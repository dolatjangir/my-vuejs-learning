<template>
<h1>fetch data</h1> 
<ul  v-for="item in list" v-bind:key="item.id">
    <li>
        {{ item.id }}
    </li>
    <li>
        {{ item.employee_age }}
    </li>
</ul>   
</template>
<script>
import axios from 'axios'
export default{
    name:'fetch data',
    data(){
        return{
        list:[],
    }
    },
  async  mounted(){
        let result = await axios.get('https://dummy.restapiexample.com/api/v1/employee/1')
        this.list = result.data.data;
        console.warn(result.data)
    }
}</script>