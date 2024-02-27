<template>
    <div class="w-full">
        <NuxtPage></NuxtPage>
        <AFooter></AFooter>
    </div>
</template>

<script setup>

definePageMeta({
    pageTransition: {
        name: 'page'
    }
})
</script>
