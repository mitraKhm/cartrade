<template>
  <div class="w-full">
    <card v-for="car in cars" :key="car.id" :car="car" />
  </div>
</template>

<script setup>
import { useCars } from "../../composables/useCars";
import Card from "./Card";

const { cars } = useCars();
</script>
