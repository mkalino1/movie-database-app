<template>
  <div class="my-2 border-2 border-zinc-600 p-4">
    <h4 class="font-bold">Favourite Movies</h4>
    <ol class="grid grid-cols-1 px-16">
      <li class="flex justify-between border-b-2 border-zinc-600 font-bold">
        <p>Movie name</p>
        <p>Release date</p>
      </li>
      <li v-for="movie in data" :key="movie.id" class="flex justify-between">
        <p>{{ movie.name }}</p>
        <p>{{ movie.releaseDate }}</p>
      </li>
    </ol>
    <button @click="refresh">Refresh</button>
  </div>
</template>

<script lang="ts" setup>
const { data, status, error, clear, refresh } = useFetch(
  "/api/movies/favourite",
);
</script>
