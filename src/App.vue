<script>
import AppProjects from './pages/AppProjects.vue';

export default {
    data() {
        return {

        }
    },
    components:{
      AppProjects
    }
}
</script>

<template>
  <AppProjects/>
</template>

<style lang="scss">
@use "../node_modules/bootstrap/scss/bootstrap.scss" as *;
@use "./style/general.scss" as *;
</style>
