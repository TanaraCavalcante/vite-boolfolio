<script>
//importo Axios
import axios from 'axios';

export default {
    name:"AppMain",  
    data() {
        return {
            //Preparo per la mia chiamata ajax
            projectList:[],
            apiUrl:'http://127.0.0.1:8000/api/projects',
        }
    },
    methods:{
        //Metodo para recuperar meus projetos da API
        getProjects(){
            axios.get(this.apiUrl)
                console.log('Chiamata axios iniziata')
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                })
                .finally(function () {
                    console.log('chiamata axios terminata')
                });
        }
    },
    created(){
        this.getProjects();
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2>Projects</h2>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>