<template>
  <div class="font-mono text-zinc-300">
    <NuxtRouteAnnouncer />
    <NavBar />
    <NuxtPage />
  </div>
</template>

<style>
:root {
  @apply bg-slate-950;
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
