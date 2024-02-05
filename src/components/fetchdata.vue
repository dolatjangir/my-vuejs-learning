<template>
<div class="container">
    <p>{{ message }}</p>
    <div class="container-inner">
        <h1>fetch data</h1>
        <ul class="Add_Employyee">Update any Employyee data</ul>
        <ul class="items">
            <li>s.no.</li>
            <li><input type="text" placeholder="Emp-name" v-model="ApiData.Emp_name" /></li>
            <li><input type="text" placeholder="Emp-age" v-model="ApiData.Emp_age" /></li>
            <li> <input type="text" placeholder="Emp-salary" v-model="ApiData.Emp_salary" /></li>
            <li><button v-on:click="putApi">submit</button></li>
        </ul>
        <ul class="Add_Employyee">
            <li>Add a Employyee</li>
        </ul>
        <ul class="items">
            <li>s.no.</li>
            <li><input type="text" placeholder="Emp-name" v-model="posts.Emp_name" /></li>
            <li><input type="text" placeholder="Emp-age" v-model="posts.Emp_age" /></li>
            <li> <input type="text" placeholder="Emp-salary" v-model="posts.Emp_salary" /></li>
            <li><button type="submit" v-on:click="PostData">Submit</button></li>
        </ul>
        <ul class="items" v-for="Emp in posts" v-bind:key="Emp.age">
            <li>{{Emp.id}}</li>
            <li>{{ Emp.name }}</li>
            <li>{{ Emp.age }}</li>
            <li>{{ Emp.salary }}</li>
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
            <li>
                <button v-on:click="deleteData(list.id)">delete</button>

            </li>
        </ul>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'fetch data',
    data() {
        return {
            list: [],
            posts: {
                Emp_name: "",
                Emp_age: "",
                Emp_salary: ""
            },
            ApiData: {
                id: 1,
                Emp_name: "",
                Emp_age: "",
                Emp_salary: ""
            },
            message: ''

        }
    },
    mounted() {
        this.getApi()
    },
    methods: {

        putApi() {
            axios.put('https://dummy.restapiexample.com/api/v1/update/21/' + this.ApiData.id, this.ApiData)
                .then(response => {
                    this.message = "data is submitted succefully!";
                    console.warn(response.this.message)
                })
                .catch(error => {
                    this.message = 'Error updating data: ' + error.message;
                });
        },

        async deleteData(id) {
            let result = await axios.delete('https://dummy.restapiexample.com/api/v1/delete/' + id)
            this.list = result.data.data;
            this.getApi()
        },
        async PostData(e) {
            let postresult = await axios.post("https://dummy.restapiexample.com/api/v1/create", this.posts)
            // .then((postresult)=>{
            //     console.warn(postresult)
            // })
            console.warn(postresult.data.data)
            this.posts = postresult.data.data,
                this.getApi()
            e.preventDefault();
        },

        async getApi() {
            let result = await axios.get('https://dummy.restapiexample.com/api/v1/employees')
            this.list = result.data.data;
            // console.warn(result.data.data)
        }
    }

}
</script>

<style>
* {
    margin: 0%;
    padding: 0%;
}

input {
    background-color: transparent;
    font-size: large;
    width: 140px;
    border: none;
}

input :placeholder-shown {
    color: aliceblue;
}

input :hover {
    border: none;
}

.Add_Employyee {

    border: 1px solid black;

}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: rgb(49, 43, 43);
}

.container-inner {
    width: 920px;

}

.items {
    display: flex;
    /* width: 70%; */
}

.items li {
    display: inline-block;
    width: 200px;
    border: 1px solid;
    text-align: center;
}

button {
    background-color: transparent;
    border: none;
    margin: 2px;
    padding: 2px;
    font-size: 18px;

}
</style>
