<template>
  <button v-if="loggedIn" class="mb-48" @click.prevent="toggleFavourite">{{ buttonText }}</button>
</template>

<script lang="ts" setup>
const props = defineProps<{ movieId: number }>()
const loading = ref(false);

const { data, refresh } = useFetch("/api/movies/favourite");
const { loggedIn } = useUserSession()

const isFavourite = computed(() => {
  return data.value?.some(el => el.id === props.movieId);
})

const buttonText = computed(() => {
  if (loading.value) { return 'Loading...' };
  return isFavourite.value ? 'Remove from favourites' : 'Add to favourites';
})

async function toggleFavourite() {
  loading.value = true;
  try {
    await $fetch("/api/movies/favourite", {
      method: isFavourite.value ? "DELETE" : "POST",
      body: { movieId: props.movieId }
    });
    loading.value = false;
    refresh()
  } catch (error) {
    alert(error.statusMessage || error);
    loading.value = false;
  }
};
</script>