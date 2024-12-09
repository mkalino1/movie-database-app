<template>
  <header>
    <template v-if="loggedIn">
      <p>
        Hi
        {{ user?.username }}
      </p>
      <p>Logged in since {{ session.loggedInAt }}</p>
      <p>This is your personal page. You will see your favourite movies here</p>
      <button @click="clear">Log out</button>
    </template>
    <p v-else>
      Hi Guest,
      <nuxt-link :to="{ name: 'login' }">Login to see your dashboard</nuxt-link>
    </p>
  </header>
</template>

<script setup lang="ts">
const { loggedIn, user, session, clear, fetch } = useUserSession();
fetch();
</script>
