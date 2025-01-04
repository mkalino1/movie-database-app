<template>
  <div class="mx-auto max-w-[800px]">
    <div class="flex">
      <Icon v-for="i in 5" :name="i <= lastStarToShow ? 'carbon:star-filled' : 'carbon:star'" @click="rate(i)"
        @mouseover="hoveredIndex = i" @mouseleave="hoveredIndex = 0" size="38" style="color: cadetblue;" class="px-6" />
    </div>
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
const props = defineProps<{
  description: string;
  releaseDate: string;
  director: string;
  genre: string;
  runtime: string;
  id: number
}>();

const { data, refresh } = await useFetch(`/api/movies/rating/${props.id}`)
const { loggedIn } = useUserSession()

const hoveredIndex = ref(0)
const lastStarToShow = computed(() => hoveredIndex.value || data.value.score)

async function rate(score: number) {
  if (!loggedIn.value) {
    await navigateTo('/login')
    return
  }
  try {
    await $fetch("/api/movies/rating", {
      method: "POST",
      body: { movieId: props.id, score: score }
    });
    refresh()
  } catch (error) {
    alert(error.statusMessage || error);
  }
};
</script>
