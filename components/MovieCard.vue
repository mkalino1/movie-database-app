<template>
  <NuxtLink :to="`movie/${id}`">
    <div
      class="prose flex h-96 w-72 flex-col items-end justify-end rounded-md bg-gradient-to-tl from-slate-400 to-slate-700 p-8"
    >
      <h3>{{ title }}</h3>
      <h4>{{ year }}</h4>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
defineProps<{ title: string; year: string, id: string }>();
</script>
