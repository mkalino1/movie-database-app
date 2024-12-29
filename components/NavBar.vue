<template>
  <nav class="bg-zinc-900 shadow-xl">
    <ol class="flex content-center justify-center gap-12 font-bold leading-relaxed">
      <li>
        <NuxtLink to="/">Home page </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/top-movies">Top movies</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about">About page</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/login">Login</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/dashboard">Dashboard</NuxtLink>
      </li>
      <li>
        <div v-if="loggedIn">
          <h1>Welcome {{ user?.username }}!</h1>
        </div>
        <div v-else>
          <h1>Not logged in</h1>
        </div>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
const { loggedIn, user } = useUserSession();
</script>

<style scoped>
li {
  @apply rounded-lg border-zinc-400 p-3;
}
</style>
