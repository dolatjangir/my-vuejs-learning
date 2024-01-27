<template>
<h1>==================For Loop==========================</h1>
<ul>
    <li v-for="item in techs" :key="item">{{ item }}</li>
    <li v-for="item in user" :key="item.email">name is {{ item.name }} and email is {{ item.email }}</li>
</ul>
</template>

<script>
export default {
    data() {
        return {
            techs: ["HTML", "CSS", "JAVASCRIPT", "REACT JS", "VUE JS"],
            user: [{
                    name: "dolat",
                    email: "dolat@gmail.com",
                },
                {
                    name: "raj",
                    email: "raj@gmail.com",
                },
                {
                    name: "ssss",
                    email: "ssss@gmail.com",
                }
            ]
        }
    }

}
</script>
