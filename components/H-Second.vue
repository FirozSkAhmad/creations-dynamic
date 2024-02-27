<template>
    <div class="w-full h-80 sm:h-[48rem] lg:h-screen relative">

        <div class="w-full h-full px-10 py-7 sm:py-16 xl:py-10 xl:px-32">
            <NuxtImg format="webp" class="h-full w-full object-cover rounded-lg" src="/images/home-third/default.png">
            </NuxtImg>
        </div>
        <div ref="curtainsSelect" class="h-full w-full absolute opacity-0 top-0 px-10 py-7 sm:py-16 xl:py-10 xl:px-32">
            <NuxtImg format="webp" class="h-full w-full object-cover rounded-lg"
                src="/images/home-third/curtains-hover.png"></NuxtImg>
        </div>

        <div ref="upholsterySelect" class="h-full w-full absolute opacity-0 top-0 px-10 py-7 sm:py-16 xl:py-10 xl:px-32">
            <NuxtImg format="webp" class="h-full w-full object-cover  rounded-lg"
                src="/images/home-third/upholstery-hover.png"></NuxtImg>
        </div>
        <NuxtLink to="/curtains/blackout" class="absolute flex flex-col items-center gap-y-1 lg:gap-y-4 top-[25%] right-[30%]">
                 <p class="text-creations tracking-[0.4rem] font-semibold text-xs">Curtains</p>
            <img @mouseover="triggerCurtainsHover" @mouseleave="triggerCurtainsLeave"
                src="@/assets/images/icons/creations-circle.svg"
                class="h-10 w-10   cursor-pointer  transition-all duration-700 hover:opacity-75" alt="">
        </NuxtLink>


        <NuxtLink to="/upholstery/design" class="absolute flex flex-col items-center gap-y-1 lg:gap-y-4 top-[55%] left-[25%]">
            <p class="text-creations tracking-[0.4rem] font-semibold text-xs">Upholstery</p>
            <img @mouseover="triggerUpholsteryHover" @mouseleave="triggerUpholsteryLeave"
                src="@/assets/images/icons/creations-circle.svg"
                class="h-10 w-10  cursor-pointer  transition-all duration-700 hover:opacity-75" alt="">
        </NuxtLink>

    </div>
</template>

<script setup>
import gsap from 'gsap';
const curtainsSelect = ref(null);
const upholsterySelect = ref(null);

const triggerCurtainsHover = () => {
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
