export default defineNuxtRouteMiddleware((to, from) => {
  if (!to.matched.length) {
    return navigateTo('/404') // Redirect to custom 404 page
  }
})
