<template>
  <div>
    <ol class="flex gap-4">
      <MovieCard v-for="movie in data" :title="movie.name" :year="movie.releaseDate" :id="movie.id" />
    </ol>
  </div>
</template>

<script setup lang="ts">
const { data, status, error, clear, refresh } = useFetch("/api/movies",);
</script>