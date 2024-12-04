<template>
  <div class="prose mx-auto rounded-md bg-zinc-200 p-4">
    <h3>{{ title }}</h3>
    <h4>{{ year }}</h4>
  </div>
</template>

<script lang="ts" setup>
defineProps<{ title: string; year: string }>();
</script>

<style></style>
