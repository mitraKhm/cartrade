<template>
  <div>
    <carDatailHero />
    <carDatailAttributes />
    <carDatailContact />
  </div>
</template>

<script setup>
import { useRoute } from "nuxt/app";

const route = useRoute();
const { toTitleCase } = useUtilities();
useHead({
  title: toTitleCase(route.params.name),
});
</script>

<style scoped></style>
