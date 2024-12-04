<template>
  <div class="h-screen bg-zinc-700 text-zinc-300">
    <NuxtRouteAnnouncer />
    <NavBar />
    <div class="mx-auto max-w-3xl overflow-auto bg-zinc-800">
      <NuxtPage />
    </div>
  </div>
</template>

<style>
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
