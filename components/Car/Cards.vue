<template>
  <div class="w-full">
    <ClientOnly>
      <card
        v-for="car in cars"
        :key="car.id"
        :car="car"
        :favored="car.id in favorite"
        @favor="handelFavorite"
      />
    </ClientOnly>
  </div>
</template>

<script setup>
import { useCars } from "../../composables/useCars";
import Card from "./Card";

const { cars } = useCars();
const favorite = useLocalStorage("favorite", {});
const handelFavorite = (id) => {
  if (id in favorite.value) {
    delete favorite.value[id];
  } else {
    favorite.value = { ...favorite.value, [id]: true };
  }
};
</script>
