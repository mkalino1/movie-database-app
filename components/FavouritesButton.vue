<template>
  <button class="mb-48" @click.prevent="addToFavourite">{{ loading ? 'Loading...' : 'Add to favourites' }}</button>
</template>

<script lang="ts" setup>
const props = defineProps<{ movieId: number }>()
const { user } = useUserSession();
const loading = ref(false);

async function addToFavourite() {
  loading.value = true;
  try {
    await $fetch("/api/movies/favourite", {
      method: "POST",
      body: { username: user.value?.username, movieId: props.movieId },
    });
    loading.value = false;
  } catch (error) {
    alert(error.statusMessage || error);
    loading.value = false;
  }
};
</script>