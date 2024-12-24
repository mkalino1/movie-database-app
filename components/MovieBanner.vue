<template>
  <div
    class="flex h-[600px] w-full flex-col items-start justify-center bg-gradient-to-l from-slate-700 to-slate-900 p-20 gap-3"
  >
    <h3 class="text-4xl">{{ name }}</h3>
    <h2 class="text-sm">{{ releaseDate }}</h2>
    <h2 class="text-sm max-w-96">{{ description }}</h2>
  </div>
</template>

<script lang="ts" setup>
defineProps<{ name: string, releaseDate: string, description: string }>();
</script>
