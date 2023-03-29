<template>
<div>
  <nav-bar />
  <car-hero />
</div>
</template>

<script>
import NavBar from "../components/NavBar";
import CarHero from "../components/CarHero";
export default {
  name: "index",
  components: {CarHero, NavBar}
}
</script>

<style scoped>

</style>