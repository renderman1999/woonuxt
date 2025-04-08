export default defineNuxtRouteMiddleware((to) => {
    const { viewer } = useAuth()

    if (to.path === '/checkout' && !viewer.value?.id) {
        return navigateTo(`/my-account?redirect=${to.fullPath}`)
    }
})
