<template>
  <div class="mx-auto mt-8 max-w-80">
    <AuthForm :loading="loading" @submit="register" title="Sign up" />
    <p class="text-right">
      Already registered?
      <nuxt-link :to="{ name: 'login' }">Log in</nuxt-link>
    </p>
  </div>
</template>

<script setup lang="ts">
const loading = ref(false);

const register = async (body: { username: string; password: string }) => {
  loading.value = true;
  try {
    await $fetch("/api/auth/signup", {
      method: "POST",
      body,
    });
    navigateTo("/dashboard");
    loading.value = false;
  } catch (error) {
    alert(error.statusMessage || error);
    loading.value = false;
  }
};
</script>
