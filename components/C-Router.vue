<template>
    <div class="min-w-fit h-fit hidden lg:block sticky pt-4 top-0">
        <h2 class="text-xs">Select Style</h2>

        <div class="flex flex-col xl:w-52 2xl:w-60 3xl:w-80 gap-y-5 mt-10 xl:text-base 2xl:text-lg 3xl:text-2xl">
            <NuxtLink to="/curtains/blackout"
                class=" text-neutral-300 border-b-2 xl:pb-1.5 2xl:pb-2 3xl:pb-2.5 border-neutral-300">
                Blackout</NuxtLink>
            <NuxtLink to="/curtains/digital-prints"
                class=" text-neutral-300 border-b-2 xl:pb-1.5 2xl:pb-2 3xl:pb-2.5 border-neutral-300">
                Digital Prints</NuxtLink>
            <NuxtLink to="/curtains/embroidery"
                class=" text-neutral-300 border-b-2 xl:pb-1.5 2xl:pb-2 3xl:pb-2.5 border-neutral-300">
                Embroidery</NuxtLink>
            <NuxtLink to="/curtains/jackquard"
                class=" text-neutral-300 border-b-2 xl:pb-1.5 2xl:pb-2 3xl:pb-2.5 border-neutral-300">
                Jackquard</NuxtLink>
            <NuxtLink to="/curtains/sheers"
                class=" text-neutral-300 border-b-2 xl:pb-1.5 2xl:pb-2 3xl:pb-2.5 border-neutral-300">
                Sheers</NuxtLink>

            <NuxtLink to="/curtains/textures"
                class=" text-neutral-300 border-b-2 xl:pb-1.5 2xl:pb-2 3xl:pb-2.5 border-neutral-300">
                Textures</NuxtLink>

            <NuxtLink to="/curtains/wilder"
                class=" text-neutral-300 border-b-2 xl:pb-1.5 2xl:pb-2 3xl:pb-2.5 border-neutral-300">
                Wilder</NuxtLink>
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
            <NuxtLink @click="openState = false" to="/curtains/blackout"
                class=" text-neutral-300 border-b-2  border-neutral-300">
                Blackout</NuxtLink>
            <NuxtLink @click="openState = false" to="/curtains/digital-prints"
                class=" text-neutral-300 border-b-2  border-neutral-300">
                Digital Prints</NuxtLink>
            <NuxtLink @click="openState = false" to="/curtains/embroidery"
                class=" text-neutral-300 border-b-2  border-neutral-300">
                Embroidery</NuxtLink>
            <NuxtLink @click="openState = false" to="/curtains/jackquard"
                class=" text-neutral-300 border-b-2  border-neutral-300">
                Jackquard</NuxtLink>
            <NuxtLink @click="openState = false" to="/curtains/sheers"
                class=" text-neutral-300 border-b-2  border-neutral-300">
                Sheers</NuxtLink>

            <NuxtLink @click="openState = false" to="/curtains/textures"
                class=" text-neutral-300 border-b-2  border-neutral-300">
                Textures</NuxtLink>

            <NuxtLink @click="openState = false" to="/curtains/wilder"
                class=" text-neutral-300 border-b-2  border-neutral-300">
                Wilder</NuxtLink>
        </div>
    </div>
</template>

<script setup>
const openState = ref(false)
</script>


<style scoped>
.router-link-exact-active {
    color: #C4A888;
    border-color: #C4A888;
}
</style>