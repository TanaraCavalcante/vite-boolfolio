<script>
//importo Axios
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
import AppLoader from '../components/AppLoader.vue';
import AppLoader from '../components/AppLoader.vue';

export default {
    name: "projects",
    data() {
        return {
            //Preparo per la mia chiamata ajax
            projectList: [],
            apiUrl: 'http://127.0.0.1:8000/api/projects',
        }
    },
    components: {
        ProjectCard,
        AppLoader
    },
    methods: {
        //Metodo para recuperar meus projetos da API
        getProjects() {
            console.log('Chiamata axios iniziata')
            axios.get(this.apiUrl)
                .then((response) => {
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
    created() {
        this.getProjects();
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-12 my-3">
                <h2>Projects</h2>
            </div>
            <section class="loader">
                <AppLoader/>
            </section>
            <section class="row justify-content-center gap-2">
                <ProjectCard v-for="singleProject in projectList" :key="singleProject.id" :project="singleProject" class="col-12 col-md-4 mb-4 " />
            </section>
        </div>
    </div>
</template>

<style scoped></style>