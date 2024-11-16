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
    
    <h2>{{ project.title }}</h2>
</template>

<style scoped></style>