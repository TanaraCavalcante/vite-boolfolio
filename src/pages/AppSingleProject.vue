<script>
import ProjectCard from '../components/ProjectCard.vue';

export default {
    name:"singleProject",
    data() {
        return {
            singleProject:[],
            apiUrl: 'http://127.0.0.1:8000/api/projects/',
        }
    },
    components:{
        ProjectCard
    },
    methods:{
        //Metodo para recuperar meus projetos da API
        getSingleProject() {
            console.log('Chiamata axios iniziata')
            axios.get('${this.apiUrl}/${this.$route.params.id}')
                .then((response) => {
                    console.log(response.data.results);
                    this.singleProject = response.data.results;
                   
                    
                })
                .catch(function (error) {
                    console.log(error);
                })
                .finally(function () {
                    console.log('chiamata axios terminata')
                });
    },
    created(){
        this.getSingleProject(); 
    }
    }
}
</script>

<template>
    <h2>Single Project, ID: {{ $route.params.id }}</h2>
    <ProjectCard singleProjectObj="singleProject"/>
</template>

<style scoped>

</style>