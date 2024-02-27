<template>
    <div class="px-10 xl:px-20">
        <div class="w-full h-60 sm:h-96 lg:h-[80vh]  relative">
            <div class="h-full w-full">
                <AB-CarouselItem :index="currentSlide"></AB-CarouselItem>
            </div>
            <div class="py-10 lg:py-20 w-full absolute bottom-0 px-10 xl:px-20">
                <HCarouselStatus :currentSlide="currentSlide"></HCarouselStatus>
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
