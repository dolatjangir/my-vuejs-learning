<template>

<div class="container">
  
    
    <div class="container-inner">
        <h1>fetch data</h1>
<ul class="items">
    <li>s.no.</li>
    <li>Emp-name</li>
    <li>Emp-age</li>
    <li>Emp-salary</li>
</ul>

<ul class="items" v-for="item in list" v-bind:key="item.id">
    <li class="id">
        {{ item.id }}
    </li>
    <li class="emp-name">
        {{ item.employee_name }}
    </li>
    <li class="emp-age">
        {{ item.employee_age }}
    </li>
    <li class="emp-salary">
        {{ item.employee_salary }}
    </li>
</ul> 
</div>  
</div>
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
        let result = await axios.get('https://dummy.restapiexample.com/api/v1/employees')
        this.list = result.data.data;
        console.warn(result.data.data)
    }
        
    
}</script>
<style>
*{
    margin: 0%;
    padding: 0%;
}
.container{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: rgb(49, 43, 43);
}
.container-inner{
    width:920px ;


}
.items{
    display: flex;
}
.items li{
    display: inline-block;
    width: 200px;
    border: 1px solid;
    text-align: center;
}

</style>