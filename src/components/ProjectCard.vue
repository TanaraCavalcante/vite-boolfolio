<script>
export default {
    name: "ProjectCard",
    data() {
        return {

        }
    },
    props: {
        project:{
            type: Object,
            Required: true
        } 
    }
}

</script>

<template>

    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.description }}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Teck stack: {{ project.tech_stack }}</li>
            <li class="list-group-item">Category: {{ project.category }}</li>
            <li class="list-group-item">Date: {{ project.creation_date }}</li>
        </ul>
       
    </div>
    
</template>

<style scoped></style>