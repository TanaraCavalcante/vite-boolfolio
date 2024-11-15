<script>
export default {
    name:"ProjectCard",
    data() {
        return {

        }
    },
    props:{
         project:{
            type: object,
            required: true
         }
    }
}
</script>

<template>
    <div class="card" >
        <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>  
</template>

<style scoped>

</style>