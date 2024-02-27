<template>
    <div class="w-full px-10 lg:px-20 pt-14 pb-10">
        <div class="lg:flex items-center justify-between">
            <img src="@/assets/images/hero-text.svg" class="h-3.5 sm:h-4 lg:h-4 xl:h-4 2xl:h-5 3xl:h-6" alt="">
            <div
                class="mt-16 uppercase lg:normal-case lg:mt-0 flex items-center gap-x-14 font-semibold text-sm sm:text-base lg:text-lg 3xl:text-xl">
                <NuxtLink to="/curtains/blackout">Curtains</NuxtLink>
                <NuxtLink to="/upholstery/design">Upholstery</NuxtLink>
                <NuxtLink to="/blogs">Blogs</NuxtLink>
            </div>
        </div>

        <div class="lg:flex gap-x-5 lg:mt-20 xl:mt-20 2xl:mt-24 3xl:mt-28 justify-between items-center">
            <div class="flex items-center gap-x-5 lg:gap-x-10 mt-14 lg:mt-0">
                <NuxtLink to="/curtains/blackout"
                    class="bg-creations p-2.5 px-8 text-sm lg:p-2.5 lg:text-sm lg:px-8 3xl:p-3 3xl:px-9 font-semibold 3xl:text-base text-white rounded-full">Order
                    Now</NuxtLink>
                <div class="h-8 lg:h-8 3xl:h-10 w-0.5 bg-creations"> </div>
                <NuxtLink to="/style" class="text-creations font-semibold lg:text-lg 3xl:text-xl">Style Your Way</NuxtLink>
            </div>


            <div class="flex items-center gap-x-10 lg:gap-x-20 mt-14 lg:mt-0">
                <a href="https://www.facebook.com/CreationReimagined?mibextid=LQQJ4d">
                    <img src="@/assets/images/icons/facebook.svg" class="h-6 lg:h-7 3xl:h-8" alt="">
                </a>

                <a href="https://instagram.com/creation.furnishings?igshid=YmMyMTA2M2Y=">
                    <img src="@/assets/images/icons/instagram.svg" class="h-6 lg:h-7 3xl:h-8" alt="">
                </a>
            </div>
        </div>

        <div
            class="mt-14 text-[0.60rem] lg:mt-20 2xl:mt-28 lg:text-xs 3xl:text-base flex items-center justify-between font-medium">
            <NuxtLink to="/privacy">Privacy Policy</NuxtLink>

            <h3>© Creation 2022 | All Rights Reserved</h3>
        </div>
    </div>
</template>

<script setup>

</script>
