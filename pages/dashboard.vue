<template>
  <div class="mx-auto max-w-[700px]">
    <template v-if="loggedIn">
      <p class="my-3 text-lg">
        Hi
        {{ user?.username }}
      </p>
      <p>Logged in since {{ session.loggedInAt }}</p>
      <p>This is your personal page. You will see your favourite movies here</p>
      <FavouriteMovies />
      <button @click="logout">Log out</button>
    </template>
    <p v-else>
      Hi Guest,
      <nuxt-link :to="{ name: 'login' }">Login to see your dashboard</nuxt-link>
    </p>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ middleware: "auth-middleware" });
const { loggedIn, user, session, clear, fetch } = useUserSession();
fetch();

const router = useRouter();
function logout() {
  clear();
  router.push({ name: "index" });
}
</script>
