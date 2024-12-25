<template>
  <div>
    <MovieBanner v-bind="data?.[1]"/>
    <div class="p-6">
      <h4 class="mb-2 text-xl">Popular movies</h4>
      <ol class="flex gap-4">
        <MovieCard v-for="movie in data" :title="movie.name" :year="movie.releaseDate" :id="movie.id" />
      </ol>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data, status, error, clear, refresh } = useFetch("/api/movies",);
</script>