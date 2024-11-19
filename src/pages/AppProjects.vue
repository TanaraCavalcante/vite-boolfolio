<script>
//importo Axios
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
import AppLoader from '../components/AppLoader.vue';


export default {
    name: "projects",
    data() {
        return {
            //Preparo per la mia chiamata ajax
            projectList: [],
            apiUrl: 'http://127.0.0.1:8000/api/projects',
            loaded: false,
            lastPageNumber: 1,
            currentPageNumber:1,
        }
    },
    components: {
        ProjectCard,
        AppLoader
    },
    methods: {
        //Metodo para recuperar meus projetos da API
        getProjects(pageNumber) {
            console.log('Chiamata axios iniziata')
            axios.get(this.apiUrl, {
                    params: {
                    page: pageNumber
                    }
                })
                .then((response) => {
                    console.log(response.data.results.data);
                    this.projectList = response.data.results.data;
                    this.lastPageNumber = response.data.results.last_page;
                    this.currentPageNumber = response.data.pageNumber
                    setTimeout(() => {
                        this.loaded = true; // Imposta 'loaded' a true dopo 2 secondi
                    }, 1000); // 
                    
                })
                .catch(function (error) {
                    console.log(error);
                })
                .finally(function () {
                    console.log('chiamata axios terminata')
                });
        },
        previusPage(){
            if(this.currentPageNumber > 1){
                this.currentPageNumber--;
                this.getProjects(this.currentPageNumber);
            }
            
        },
        nextPage(){
            if(this.currentPageNumber < this.lastPageNumber){
                this.currentPageNumber++;
                this.getProjects(this.currentPageNumber);
            }
        }
    },
    created() {
        this.getProjects(1);
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-12 my-3">
                <h2>Projects</h2>
            </div>
            <section class="loader" v-if="!loaded">
                <AppLoader/>
            </section>
            <section class="row justify-content-center gap-2" v-else>
                <ProjectCard v-for="singleProject in projectList" :key="singleProject.id" :project="singleProject" class="col-12 col-md-4 mb-4 "/>
            </section>
        </div>
    </div>
</template>

<style scoped></style>