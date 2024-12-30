<template>
  <div class="text-zinc-300">
    <NuxtRouteAnnouncer />
    <NavBar />
    <NuxtPage />
  </div>
</template>

<style>
:root {
  @apply bg-slate-950;
  font-family: 'Lato', sans-serif;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.3rem);
}
</style>
