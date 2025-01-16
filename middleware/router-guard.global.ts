export default defineNuxtRouteMiddleware((to) => {
  if (!to.matched.length) {
    /**
     * Redirect to custom 404 page
     */
    return navigateTo('/404')
  }
})
