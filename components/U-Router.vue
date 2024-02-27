<template>
    <div class="min-w-fit h-fit hidden lg:block sticky top-0">
        <h2 class="text-xs">Select Style</h2>

        <div class="flex flex-col xl:w-52 2xl:w-60 3xl:w-80 gap-y-5 mt-10 xl:text-base 2xl:text-lg 3xl:text-2xl">
            <NuxtLink to="/upholstery/design"
                class=" text-neutral-300 border-b-2 xl:pb-1.5 2xl:pb-2 3xl:pb-2.5 border-neutral-300">
                Design</NuxtLink>
            <NuxtLink to="/upholstery/rexin"
                class=" text-neutral-300 border-b-2 xl:pb-1.5 2xl:pb-2 3xl:pb-2.5 border-neutral-300">
                Rex in</NuxtLink>
            <NuxtLink to="/upholstery/texture"
                class=" text-neutral-300 border-b-2 xl:pb-1.5 2xl:pb-2 3xl:pb-2.5 border-neutral-300">
                Texture</NuxtLink>
            <NuxtLink to="/upholstery/suede"
                class=" text-neutral-300 border-b-2 xl:pb-1.5 2xl:pb-2 3xl:pb-2.5 border-neutral-300">
                Suede</NuxtLink>
            <NuxtLink to="/upholstery/plain"
                class=" text-neutral-300 border-b-2 xl:pb-1.5 2xl:pb-2 3xl:pb-2.5 border-neutral-300">
                Plain</NuxtLink>
        </div>
    </div>


    <div class="w-full lg:hidden relative">
        <div class="w-full flex items-center justify-between">
            <div class="flex items-center gap-x-4" @click="openState = true">
                <img src="@/assets/images/icons/bruger-creations.svg" class="h-5" alt="">
                <p class="text-[0.55rem]">Select Styles</p>
            </div>

            <img v-if="openState" src="@/assets/images/icons/x.svg" class="h-7" alt="" @click="openState = false">
        </div>
        <div v-if="openState" class="w-full absolute h-fit flex flex-col gap-y-8 py-14 bg-white">
            <NuxtLink @click="openState = false" to="/upholstery/design"
                class=" text-neutral-300 border-b-2  border-neutral-300">
                Design</NuxtLink>
            <NuxtLink @click="openState = false" to="/upholstery/rexin"
                class=" text-neutral-300 border-b-2  border-neutral-300">
                Rex in</NuxtLink>
            <NuxtLink @click="openState = false" to="/upholstery/texture"
                class=" text-neutral-300 border-b-2  border-neutral-300">
                Texture</NuxtLink>
            <NuxtLink @click="openState = false" to="/upholstery/suede"
                class=" text-neutral-300 border-b-2  border-neutral-300">
                Suede</NuxtLink>
            <NuxtLink @click="openState = false" to="/upholstery/plain"
                class=" text-neutral-300 border-b-2  border-neutral-300">
                Plain</NuxtLink>
        </div>
    </div>
</template>

<script setup>
const openState = ref(false)
</script>


<style scoped>.router-link-exact-active {
    color: #C4A888;
    border-color: #C4A888;
}</style>