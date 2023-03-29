<template>
  <div class="mr-10 mt-5 border-b pb-5">
    <div
      v-for="(feature, index) in features"
      :key="index"
      class="flex text-lg mt-2"
    >
      <p class="rounded text-lime-800 mr-3">✔</p>
      <p>{{ feature }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  features: {
    type: Array,
    default: () => [],
  },
});
</script>

<style scoped></style>
