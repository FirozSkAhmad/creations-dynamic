<template>
    <div class="w-full relative">
        <H-Hero></H-Hero>
        <H-First></H-First>
        <H-Second></H-Second>
       <!--  <H-Third></H-Third> -->
        <H-Fourth></H-Fourth>
        <H-Fifth></H-Fifth>
        <A-Footer></A-Footer>
    </div>
</template>

<script setup>
/* definePageMeta({
    pageTransition: false,
    layoutTransition: false
}) */


definePageMeta({
    pageTransition: {
        name: 'page',
    }
})
</script>
