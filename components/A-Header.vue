<template>
    <div class="w-full overflow-x-clip">
        <nav class="w-full py-10 xl:py-14 flex items-center justify-between absolute top-0 px-10 xl:px-20">
            <NuxtLink to="/" aria-label="home">
                <img src="@/assets/images/icons/logo.svg"
                    class="h-10 sm:h-12 lg:h-12 xl:h-12 2xl:h-[3.7rem] transition-opacity duration-700" alt="">
            </NuxtLink>

            <button @click="menu = true">
                <img src="@/assets/images/icons/bruger-creations.svg" class="h-8 sm:h-10 lg:h-8 xl:h-8 2xl:h-10" alt="">
            </button>
        </nav>

        <A-Menu v-if="menu"></A-Menu>
    </div>
</template>

<script setup>
const menu = useState('menu', () => false)

</script>
