<template>
  <div class="mx-auto max-w-[800px]">
    <h4 class="my-6 text-3xl">Storyline</h4>
    <p>{{ description }}</p>
    <div class="my-4 border-t-2 border-zinc-700"></div>
    <div class="grid grid-cols-1 gap-x-20 gap-y-4 md:grid-cols-2">
      <div class="flex justify-between">
        <p>Released</p>
        <p>{{ releaseDate }}</p>
      </div>
      <div class="flex justify-between">
        <p>Director</p>
        <p>{{ director }}</p>
      </div>
      <div class="flex justify-between">
        <p>Runtime</p>
        <p>{{ runtime }}</p>
      </div>
      <div class="flex justify-between">
        <p>Genre</p>
        <p>{{ genre }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ description: string, releaseDate: string, director: string, genre: string, runtime:string }>();
</script>