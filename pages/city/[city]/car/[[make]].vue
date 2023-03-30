<template>
  <div>
    <nav-bar />
    <div
      class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5"
    >
      <div class="mt-32 flex">
        <NuxtErrorBoundary>
          <CarSideBar />

          <template #error="{ error }">
            <h1 class="text-red-800 mx-auto flex flex-col text-xl5">sorry</h1>
            <code>
              {{ error }}
            </code>
            <button class="text-white bg-sky-500 px-10 py-5">go back</button>
          </template>
        </NuxtErrorBoundary>
        <CarCards />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../../../../components/NavBar";
export default {
  name: "[[make]]",
  components: { NavBar },
};
</script>

<style scoped></style>
