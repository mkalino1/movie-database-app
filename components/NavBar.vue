<template>
  <nav class="bg-zinc-900 shadow-xl">
    <ol
      class="flex content-center justify-center gap-12 font-bold leading-relaxed"
    >
      <li>
        <NuxtLink to="/">Home page </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/top-movies">Top movies</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about">About page</NuxtLink>
      </li>
    </ol>
  </nav>
</template>

<style scoped>
li {
  @apply rounded-lg border-zinc-400 p-3;
}
</style>
