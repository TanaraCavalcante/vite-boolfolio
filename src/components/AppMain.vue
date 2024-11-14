<script>
import axios from 'axios';

export default {
    name: "AppMain",
    data() {
        return {
            CardList:[],
            ApiUrl:"http://127.0.0.1:8000/api/projects",
        }
    },
    methods:{
        //metodo para recuperar os projetos 
        getApi(){
            axios.get(this.ApiUrl)
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
        }
    },
}
</script>

<template>
    <h1>
     App Main
    </h1>
</template>

<style scoped>

</style>