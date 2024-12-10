<template>
  <form
    class="rounded-sm bg-slate-700 p-8 text-slate-200 ring-2"
    @submit.prevent="submit"
  >
    <h1>{{ title }}</h1>
    <div>
      <label for="username">Username</label>
      <input
        id="username"
        v-model="username"
        type="text"
        name="username"
        required
        class="rounded-sm bg-slate-600"
      />
    </div>
    <div>
      <label for="password">Password</label>
      <input
        id="password"
        v-model="password"
        type="password"
        name="password"
        required
        class="rounded-sm bg-slate-600"
      />
    </div>
    <button :disabled="loading">
      <template v-if="loading">please wait...</template>
      <template v-else>{{ title }}</template>
    </button>
  </form>
</template>

<script setup lang="ts">
const username = ref("");
const password = ref("");

defineProps<{ loading?: boolean; title: string }>();
const emit = defineEmits<{
  submit: [{ username: string; password: string }];
}>();

const submit = () => {
  const payload = {
    username: username.value,
    password: password.value,
  };
  emit("submit", payload);
};
</script>
