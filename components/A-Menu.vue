<template>
    <div ref="container"
        class="h-screen menuSlide translate-x-[100vw] w-full lg:w-[40%] flex flex-col justify-between fixed top-0 right-0 bg-opacity-40 backdrop-blur-xl px-10 xl:px-20 bg-black">
        <div>
            <div class="flex items-center justify-end py-10 3xl:py-20 w-full">
                <img src="@/assets/images/icons/x.svg" @click="triggerMenuClose"
                    class="h-10 opacity-40 hover:opacity-30 cursor-pointer active:opacity-50 transition-all duration-500"
                    alt="">
            </div>

            <div class="flex flex-col gap-y-5 lg:gap-y-10">
                <NuxtLink @click="triggerMenuClose" to="/" class="text-white text-xl lg:text-2xl 3xl:text-3xl opacity-30">
                    Home
                </NuxtLink>
                <NuxtLink @click="triggerMenuClose" to="/about"
                    class="text-white text-xl lg:text-2xl 3xl:text-3xl opacity-30">
                    About
                    Us
                </NuxtLink>
                <NuxtLink @click="triggerMenuClose" to="/blogs"
                    class="text-white text-xl lg:text-2xl 3xl:text-3xl opacity-30">
                    Blogs
                </NuxtLink>
            </div>
        </div>


        <div class="flex flex-col py-10 gap-y-5 lg:gap-y-10">
            <div class="flex items-center gap-x-10 text-center">
                <h2 class="text-white opacity-20 text-sm">Products</h2>
                <div class="h-0.5 bg-white bg-opacity-30 w-[35%]"></div>
            </div>

            <div class="flex w-full gap-x-10 lg:gap-x-28">
                <NuxtLink @click="triggerMenuClose" class="text-white text-opacity-20 text-xl lg:text-2xl 3xl:text-4xl"
                    to="/curtains/blackout">Curtains</NuxtLink>
                <NuxtLink @click="triggerMenuClose" class="text-white text-opacity-20 text-xl lg:text-2xl 3xl:text-4xl"
                    to="/upholstery/design">Upholstery</NuxtLink>
            </div>

            <div class="flex items-center gap-x-10 text-center">
                <h2 class="text-white opacity-20 text-sm">Products</h2>
                <div class="h-0.5 bg-white bg-opacity-30 w-[35%]"></div>
            </div>

            <div class="flex w-full gap-x-10 lg:gap-x-28">
                <NuxtLink @click="triggerMenuClose" class="text-white text-opacity-20 text-xl lg:text-2xl 3xl:text-4xl"
                    to="/style">Style Your Way</NuxtLink>

            </div>

            <div class="h-0.5 bg-white w-full bg-opacity-30"></div>

            <div class="flex items-center justify-between">
                <NuxtLink @click="triggerMenuClose" to="/contact-us" class="flex items-center gap-x-3 lg:gap-x-7">
                    <h2 class="text-lg lg:text-2xl text-white text-opacity-20">Contact Us</h2>
                    <img src="@/assets/images/icons/arrow-right.svg" class="h-10 opacity-30" alt="">
                </NuxtLink>

                <div class="flex items-center gap-x-10 lg:gap-x-20">


                    <a href="https://www.facebook.com/CreationReimagined?mibextid=LQQJ4d">
                        <img src="@/assets/images/icons/facebook.svg" class="h-7 invert" alt="">
                    </a>

                    <a href="https://instagram.com/creation.furnishings?igshid=YmMyMTA2M2Y=">
                        <img src="@/assets/images/icons/instagram.svg" class="h-7 invert" alt="">
                    </a>



                </div>
            </div>

        </div>

    </div>
</template>

<script setup>
import gsap from 'gsap';
const container = ref(null);
const menu = useState('menu')


const triggerMenuClose = () => {


    menu.value = false

}
</script>


<style>
.menuSlide {
    animation: menuSlide 500ms linear forwards;
}


.router-link-exact-active {
    opacity: 1;
}

@keyframes menuSlide {
    0% {
        transform: translateX(100%);
    }

    100% {
        transform: translateX(0%);
    }
}
</style>