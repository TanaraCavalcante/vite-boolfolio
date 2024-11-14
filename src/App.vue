<script>
import AppMain from './components/AppMain.vue';
export default {
    name: "AppMain",
    data() {
        return {

        }
    },
    components:{
      AppMain
    }
}
</script>

<template>
<AppMain/>
</template>

<style lang="scss">
@use "../node_modules/bootstrap/scss/bootstrap.scss" as *;
@use "./style/general.scss" as *;
</style>
