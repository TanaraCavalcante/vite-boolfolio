<script>
import { RouterLink } from 'vue-router';

export default {
    name: "AppHeader",
    data() {
        return {
            
        }
    },
   
}
</script>

<template>
   <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Menu</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <router-link :to="{ name: 'home'}" class="nav-link">
                        Homepage
                    </router-link>
                    </li>
                    <li class="nav-item">
                    <router-link :to="{ name: 'about'}" class="nav-link">
                        About
                    </router-link >
                    </li>
                    <li class="nav-item">
                    <router-link :to="{ name: 'projects'}" class="nav-link">
                        Projects
                    </router-link >
                    </li>                
                </ul>
                </div>
            </div>
        </nav>
   </header>
</template>

<style scoped></style>