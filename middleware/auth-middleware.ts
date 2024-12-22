export default defineNuxtRouteMiddleware((to, from) => {
  const { loggedIn, user, fetch } = useUserSession();
  console.log(`User ${user.value?.username} trying to reach dashboard`);
  fetch();
  if (!loggedIn.value) {
    return navigateTo("/login");
  }
});
