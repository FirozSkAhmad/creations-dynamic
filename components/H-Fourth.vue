<template>
    <div class="w-full  xl:px-20 py-20">
        <div class="flex px-10 xl:px-0 w-full justify-between items-center">
            <div class="text-creations text-xl sm:text-3xl font-semibold">Spread The Story</div>
            <NuxtLink to="/blogs"
                class="text-center text-sm sm:text-lg font-semibold transition-all cursor-pointer active:opacity-80 hover:text-creations duration-700">
                Show All</NuxtLink>
        </div>

        <ul class="flex px-3 lg:px-0 w-full items-start mt-14 sm:mt-20 gap-x-14 overflow-x-auto">
            <NuxtLink tto="/blog/one"
                class="cursor-pointer hover:opacity-75 active:opacity-90 transition-opacity duration-700">
                <div class="h-60 sm:h-96 sm:w-96 w-[80vw] lg:h-[40vh] lg:w-[40vh] bg-neutral-200 rounded-xl">
                    <NuxtImg format="webp" class="h-full w-full object-cover rounded-xl"
                        src="https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=1600">
                    </NuxtImg>
                </div>
                <div class="w-[80vw] sm:w-96 lg:w-[40vh] mt-7">
                    <div class="w-full font-semibold text-base lg:text-xl"> Curtains: Elevate Your Home Decor with Style and
                        Functionality</div>

                    <div class="mt-4 w-full text-sm lg:text-lg font-semibold text-black text-opacity-30">View More</div>

                </div>
            </NuxtLink>


            <NuxtLink to="/blog/two"
                class="cursor-pointer hover:opacity-75 active:opacity-90 transition-opacity duration-700">
                <div class="h-60 sm:h-96 sm:w-96 w-[80vw] lg:h-[40vh] lg:w-[40vh] bg-neutral-200 rounded-xl">
                    <NuxtImg format="webp" class="h-full w-full object-cover rounded-xl"
                        src="https://images.pexels.com/photos/2179214/pexels-photo-2179214.jpeg?auto=compress&cs=tinysrgb&w=1600">
                    </NuxtImg>
                </div>
                <div class="w-[80vw] sm:w-96 lg:w-[40vh] mt-7">
                    <div class="w-full font-semibold text-base lg:text-xl"> Curtains: Unleashing Creativity and
                        Personalization in Your Home</div>

                    <div class="mt-4 w-full text-sm lg:text-lg font-semibold text-black text-opacity-30">View More</div>

                </div>
            </NuxtLink>

            <NuxtLink to="/blog/three"
                class="cursor-pointer hover:opacity-75 active:opacity-90 transition-opacity duration-700">
                <div class="h-60 sm:h-96 sm:w-96 w-[80vw] lg:h-[40vh] lg:w-[40vh] bg-neutral-200 rounded-xl">
                    <NuxtImg format="webp" class="h-full w-full object-cover rounded-xl"
                        src="https://images.pexels.com/photos/17264328/pexels-photo-17264328/free-photo-of-living-room-interior-mockup-b_02-3d-rendering.jpeg?auto=compress&cs=tinysrgb&w=1600">
                    </NuxtImg>
                </div>
                <div class="w-[80vw] sm:w-96 lg:w-[40vh] mt-7">
                    <div class="w-full font-semibold text-base lg:text-xl"> Elevate Your Space: The Transformative Power of
                        Upholstery</div>

                    <div class="mt-4 w-full text-sm lg:text-lg font-semibold text-black text-opacity-30">View More</div>

                </div>
            </NuxtLink>

            <NuxtLink to="/blog/four"
                class="cursor-pointer hover:opacity-75 active:opacity-90 transition-opacity duration-700">
                <div class="h-60 sm:h-96 sm:w-96 w-[80vw] lg:h-[40vh] lg:w-[40vh] bg-neutral-200 rounded-xl">
                    <NuxtImg format="webp" class="h-full w-full object-cover rounded-xl"
                        src="https://images.pexels.com/photos/12685292/pexels-photo-12685292.jpeg?auto=compress&cs=tinysrgb&w=1600">
                    </NuxtImg>
                </div>
                <div class="w-[80vw] sm:w-96 lg:w-[40vh] mt-7">
                    <div class="w-full font-semibold text-base lg:text-xl"> Enhance Your Space with Exquisite Upholstery:
                        The Perfect Touch
                        for Every Interior</div>

                    <div class="mt-4 w-full text-sm lg:text-lg font-semibold text-black text-opacity-30">View More</div>

                </div>
            </NuxtLink>

            <!--     <div class="h-[40vh] w-[40vh] bg-neutral-200 rounded-xl"></div>
            <div class="h-[40vh] w-[40vh] bg-neutral-200 rounded-xl"></div> -->
        </ul>
    </div>
</template>

<script setup>
import gsap from 'gsap';


onMounted(() => {
    /*    gsap.to('.scroll-reveal-fourth', {
           y: 0,
           stagger: 0.2,
           scrollTrigger: {
               trigger: '.scroll-reveal',
           },
           duration: 0.7,
       }) */
})
</script>
