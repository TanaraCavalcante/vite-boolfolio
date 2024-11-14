<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';
import ProjectCardItem from './ProjectCardItem.vue';

export default {
    name: "AppMain",
    data() {
        return {
            CardList:[],
            ApiUrl:"http://127.0.0.1:8000/api/projects",
        }
    },
    components:{
        ProjectCard,
        ProjectCardItem
    },
    methods:{
        //metodo para recuperar os projetos 
        getApi(){
            //ativo uma mensagem para ver em console o inizio da chamada
            console.log("chiamata Api iniziata")
            axios.get(this.ApiUrl)
            .then(function (response) {
                console.log(response.data.results);
                //preencho o array com a api
                this.CardList = response.data.results;
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
                //sinalizo o final da chamada em console
                console.log("Chiamata API terminata");
            });
        }
    },
    created(){
        this.getApi();
    }
}
</script>

<template>
    <ProjectCard/>
    <ProjectCardItem/>
</template>

<style scoped>

</style>