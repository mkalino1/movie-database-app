<template>
  <button v-if="loggedIn" class="mb-48" @click.prevent="toggleFavourite">
    <Icon :name="iconName" size="28" style="color: goldenrod;" />
  </button>
</template>

<script lang="ts" setup>
const props = defineProps<{ movieId: number }>()
const loading = ref(false);

const { data, refresh } = useFetch("/api/movies/favourite");
const { loggedIn } = useUserSession()

const isFavourite = computed(() => {
  return data.value?.some(el => el.id === props.movieId);
})

const iconName = computed(() => {
  if (loading.value) { return 'svg-spinners:180-ring-with-bg' };
  return isFavourite.value ? 'carbon:star-filled' : 'carbon:star';
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