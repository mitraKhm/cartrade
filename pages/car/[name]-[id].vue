<template>
  <div v-if="car">
    <carDetailHero :car="car" />
    <carDetailAttributes :features="car.features" />
    <carDetailDescription :description="car.description" />
    <carDetailContact />
  </div>
</template>

<script setup>
const { cars } = useCars();
const route = useRoute();
const { toTitleCase } = useUtilities();
useHead({
  title: toTitleCase(route.params.name),
});

const car = computed(() => {
  return cars.find((c) => c.id === parseInt(route.params.id));
});
if (!car.value) {
  throw createError({
    statusCode: 404,
    message: "ملشسینه  نبود",
  });
}
</script>

<style scoped></style>
