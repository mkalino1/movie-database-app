<template>
  <div class="mx-auto mt-8 max-w-80">
    <AuthForm :loading="loading" @submit="login" title="Sign in" />
    <p class="text-right">
      New here?
      <nuxt-link :to="{ name: 'signup' }">Sign up</nuxt-link>
    </p>
  </div>
</template>

<script setup lang="ts">
const loading = ref(false);
const router = useRouter();

const login = async (body: { username: string; password: string }) => {
  loading.value = true;
  // TODO: After login it stays on the page
  try {
    await $fetch("/api/auth/login", {
      method: "POST",
      body,
    });
    router.push({ name: "dashboard" });
    loading.value = false;
  } catch (error) {
    alert(error.statusMessage || error);
    loading.value = false;
  }
};
</script>
