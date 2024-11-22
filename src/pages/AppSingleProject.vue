<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';

export default {
    name: "singleProject",
    data() {
        return {
            singleProject: null,
            apiUrl: 'http://127.0.0.1:8000/api/projects',
        }
    },
    components: {
        ProjectCard
    },
    methods: {
        // Metodo per recuperare il singolo progetto dalla API
        getSingleProject() {
            console.log('Chiamata axios iniziata')
            axios.get(`${this.apiUrl}/${this.$route.params.id}`)
                .then((response) => {
                    if (response.data) {
                        console.log(response.data.results);
                        this.singleProject = response.data.results;  // Assegna i dati ricevuti alla variabile
                    } else {
                        console.error('Nessun dato trovato per il progetto');
                    }
                })
                .catch((error) => {
                    console.error('Errore durante la richiesta:', error);
                })
                .finally(() => {
                    console.log('Chiamata axios terminata');
                    this.loading = false;  // Imposta a false quando i dati sono caricati
                });
        }
    },
    created() {
        this.getSingleProject();  // Chiamata per ottenere i dati quando il componente è creato
    }
}
</script>

<template>
    <h2>Single Project, ID: {{ $route.params.id }}</h2>
    <ProjectCard :project="singleProject" />
</template>

<style scoped></style>
