<template>
    <div class="w-full">
        <div class="h-screen w-full relative">
            <div class="h-full w-full relative">
                <div class="w-full h-full ">
                    <NuxtImg format="webp" class="h-full w-full object-cover rounded-lg"
                        src="/images/home-third/default.png">
                    </NuxtImg>
                </div>


                <div ref="upholsterySelect" class="h-full w-full absolute opacity-0 top-0">
                    <NuxtImg format="webp" class="h-full w-full object-cover  rounded-lg"
                        src="/images/home-third/upholstery-hover.png"></NuxtImg>
                </div>

                <div ref="curtainsSelect" class="h-full w-full absolute opacity-0 top-0">
                    <NuxtImg format="webp" class="h-full w-full object-cover rounded-lg"
                        src="/images/home-third/curtains-hover.png"></NuxtImg>
                </div>


            </div>

            <div class="h-full w-full absolute top-0 px-10 xl:px-20 py-44 bg-black bg-opacity-20 ">
                <div class="flex items-center justify-between w-full">
                    <div>
                        <h2 class="text-2xl xl:text-3xl font-semibold mt-20">What are you looking for today?</h2>
                        <p class="text-xs xl:text-sm mt-2.5">Choose your fabric</p>
                    </div>
                    <h3 class="text-xl hidden lg:block">Style your way</h3>
                </div>

                <NuxtLink to="/style-upholstery/area" @mouseover="triggerUpholsteryHover"
                    @mouseleave="triggerUpholsteryLeave"
                    class="flex flex-col absolute bottom-[34vh] lg:bottom-[38vh] transition-all cursor-pointer duration-700 hover:opacity-80 active:opacity-70 lg:left-[20vw]">
                    <h3 class="text-base font-semibold tracking-widest  text-creations">Upholstery</h3>
                    <img src="@/assets/images/icons/creations-circle.svg" class="h-10 mt-3 w-10" alt="">
                </NuxtLink>

                <NuxtLink to="/style-curtains/area" @mouseover="triggerCurtainsHover" @mouseleave="triggerCurtainsLeave"
                    class="flex flex-col absolute top-[14vh] lg:top-[30vh] transition-all cursor-pointer duration-700 hover:opacity-80 active:opacity-70 right-[5vw] lg:right-[20vw]">
                    <h3 class="text-base font-semibold tracking-widest  text-creations">Curtains</h3>
                    <img src="@/assets/images/icons/creations-circle.svg" class="h-10 mt-3 w-10" alt="">
                </NuxtLink>

            </div>
        </div>

        <AFooter></AFooter>
    </div>
</template>

<script setup>
import gsap from 'gsap';

const curtainsSelect = ref(null);
const upholsterySelect = ref(null);

definePageMeta({
    pageTransition: {
        name: 'page'
    }
})

const triggerCurtainsHover = () => {
    console.log('hovered c')
    gsap.to(curtainsSelect.value, {
        opacity: 1,
        duration: 1
    })
}


const triggerCurtainsLeave = () => {
    gsap.to(curtainsSelect.value, {
        opacity: 0,
        duration: 1
    })
}


const triggerUpholsteryHover = () => {
    console.log('hovered U')
    gsap.to(upholsterySelect.value, {
        opacity: 1,
        duration: 1
    })
}


const triggerUpholsteryLeave = () => {
    gsap.to(upholsterySelect.value, {
        opacity: 0,
        duration: 1
    })
}

</script>

