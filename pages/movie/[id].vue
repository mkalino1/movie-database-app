<template>
  <div>
    <MovieBanner v-bind="data"/>
    <MovieDescription v-bind="data"/>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
const { data, pending, error, refresh } = await useFetch(`/api/movies/${route.params.id}`)
</script>
