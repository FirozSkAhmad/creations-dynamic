<template>
    <div class="w-full h-screen relative">
        <div class="h-full w-full">
            <H-Carousel-Item :index="currentSlide"></H-Carousel-Item>
        </div>
        <div class="h-full bg-black bg-opacity-40 w-full flex px-10 justify-center items-center absolute top-0">
            <img src="@/assets/images/hero-text.svg" class="h-4 lg:h-6 xl:h-7" alt="">
        </div>

        <div class="py-20 w-full absolute bottom-0 px-10 xl:px-20">
            <HCarouselStatus :currentSlide="currentSlide"></HCarouselStatus>
            <div class="flex items-center mt-10 gap-x-10 2xl:gap-x-20">
                <div class="w-full h-0.5 rounded-full bg-white"></div>
                <div class="flex items-center gap-x-5 text-white">
                    <span class="text-sm tracking-[0.5rem] 2xl:text-lg 2xl:tracking-[1rem]">Discover</span>
                    <img class="h-5 2xl:h-10" src="@/assets/images/icons/arrow-down.svg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>


const currentSlide = ref(0);
const slideInterval = ref(null);
const direction = ref("slide-out");

const next = () => {
    const index =
        currentSlide.value < slides.length - 1 ? currentSlide.value + 1 : 0;
    direction.value = "slide-out";
    currentSlide.value = index;
};
const slides = [

    "home-hero-one.webp",
    "home-hero-two.webp",
    "home-hero-two.webp",
    "home-hero-two.webp",
    "home-hero-two.webp",
];

onMounted(() => {

    slideInterval.value = setInterval(() => {
        next();
        console.log(currentSlide.value)
    }, 5000);
})

onBeforeUnmount(() => {
    clearInterval(slideInterval.value);

});

</script>
