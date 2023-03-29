<template>
  <div class="flex justify-center items-center">
    <div class="test mt-22">
      <h1>{{ error.statusCode }}</h1>
      <p>{{ error.message }}</p>
      <button
        class="bg-sky-500 text-white px-5 py-1 mt-5 rounded"
        @click="handleError"
      >
        go back
      </button>
    </div>
  </div>
</template>

<script setup>
const error = useError();
const handleError = () => {
  clearError({
    redirect: "/",
  });
};
</script>

<style scoped>
.test {
  margin-top: 200px;
}
</style>
