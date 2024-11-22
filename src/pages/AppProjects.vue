<script>
import ProjectListCard from '../components/ProjectListCard.vue';

export default {
    name: "AppProject",
    data() {
        return {

        }
    },
    components: {
        ProjectListCard,
    },

    created() {

    }
}
</script>

<template>

    <div class="row">
        <div class="col-12 my-3">
            <h2>Projects</h2>
        </div>
        <div class="col-12">
            <ProjectListCard />
        </div>
    </div>
</template>

<style scoped></style>