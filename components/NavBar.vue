<template>
    <nav class=" w-screen bg-zinc-900">
        <ol class=" font-bold font-mono leading-relaxed flex gap-12 justify-center content-center">
            <li>
                <NuxtLink to="/">Home page</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/top-movies">About page</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/about">About page</NuxtLink>
            </li>
        </ol>
    </nav>
</template>

<style scoped>
li {
    @apply border-zinc-400 rounded-lg p-3
}
</style>