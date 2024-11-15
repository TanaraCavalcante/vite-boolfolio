<script>
//importo Axios
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';

export default {
    name:"AppMain",  
    data() {
        return {
            //Preparo per la mia chiamata ajax
            projectList:[],
            apiUrl:'http://127.0.0.1:8000/api/projects',
        }
    },
    components:{
      ProjectCard
    },
    methods:{
        //Metodo para recuperar meus projetos da API
        getProjects(){
            console.log('Chiamata axios iniziata')
            axios.get(this.apiUrl)
                .then(function (response) {
                    console.log(response.data.results);
                    this.projectList = response.data.results;
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
            <div class="col-12">
                <ProjectCard v-for="project in projectList" :key="project.id" />
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>