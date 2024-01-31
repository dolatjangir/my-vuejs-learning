<template>
<div class="add-emp"> 
    <input type="text" placeholder="add Emp-name" v-model.lazy="name"/>
    <input type="text" placeholder="add Emp-email" v-model.lazy="email"/>
    <!-- <input type="text" placeholder="add emp-age " v-model.number="age"/>
    <input type="text" placeholder="add emp-salary " v-model.number="salary"/> -->
    <button v-on:click="addEmp()">add data</button>
</div>
  <ul class="items" >
   
    <li>{{this. name }}</li>
    <li>{{this.email }}</li>
    <!-- <li>{{ this.age }}</li>
    <li>{{ this.salary }}</li>  -->
</ul>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            
            name: "",
            email:""
            // age: "",
            // salary: "",

        }
    },
    methods: {
        async addEmp() {
            console.warn(this.name, this.age)
            let Employy = await axios.post('https://dummy.restapiexample.com/api/v1/create', {
                name: this.name,
                email:this.email
                // age: this.age,
                // salary: this.salary

            });
            
            console.warn(Employy.users)
        }
    }
}
</script>
