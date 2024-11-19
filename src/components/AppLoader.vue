<script>
export default {
    name:"loader",
  data() {
    return {
   
    }
  }
}
</script>

<template>
    <!-- credits https://css-loaders.com/dots/ -->
     <section >
        <div class="loader"></div>
     </section>
 
</template>

<style scoped>
.loader {
  width: 60px;
  aspect-ratio: 4;
  background: radial-gradient(circle closest-side,#000 90%,#0000) 0/calc(100%/3) 100% space;
  clip-path: inset(0 100% 0 0);
  animation: l1 1s steps(4) infinite;
}
@keyframes l1 {to{clip-path: inset(0 -34% 0 0)}}
</style>
