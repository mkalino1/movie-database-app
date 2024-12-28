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
const { fetch: refreshSession } = useUserSession();

const login = async (body: { username: string; password: string }) => {
  loading.value = true;
  try {
    await $fetch("/api/auth/login", {
      method: "POST",
      body,
    });
    await refreshSession();
    navigateTo("/dashboard");
    loading.value = false;
  } catch (error) {
    alert(error.statusMessage || error);
    loading.value = false;
  }
};
</script>
