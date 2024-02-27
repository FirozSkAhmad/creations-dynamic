<template>
    <div class="w-full flex mt-10 lg:mt-0 pb-20 lg:pb-0 flex-col lg:flex-row px-10 lg:px-20 lg:h-screen">
        <div class=" w-full lg:w-[50%] lg:max-w-[50%] flex flex-col justify-center h-full">

            <div class="justify-start">
                <img src="@/assets/images/hero-text.svg" class="h-2.5 lg:h-3.5 xl:h-3.5 2xl:h-4 3xl:h-5" alt="">
                <h2
                    class="text-4xl mt-5 lg:text-4xl lg:mt-4 xl:text-5xl 2xl:text-5xl 3xl:text-6xl xl:mt-5 2xl:mt-5 3xl:mt-7">
                    Re Define Fabric</h2>
            </div>
            <div
                class="h-60 sm:h-80 lg:h-[22rem] xl:h-[24rem] 2xl:h-[30rem] 3xl:h-[34rem] rounded-xl w-full relative mt-10 bg-black">
                <div ref="imageOne" class="absolute w-full h-full opacity-100">
                    <NuxtImg format="webp" src="/images/home-fifth/Home Page_Putting The Best Minds.jpg"
                        class="h-full w-full rounded-xl  object-cover" alt="" />
                </div>
                <div ref="imageTwo" class="absolute w-full h-full opacity-0">
                    <NuxtImg format="webp" src="/images/home-fifth/Home Page_Rich In Culture.jpg"
                        class="h-full w-full rounded-xl  object-cover" alt="" />
                </div>
                <div ref="imageThree" class="absolute w-full h-full opacity-0">
                    <NuxtImg format="webp" src="/images/home-fifth/Home Page_Space Comfort & Style.jpg"
                        class="h-full w-full rounded-xl  object-cover" alt="" />
                </div>
                <div ref="imageFour" class="absolute w-full h-full opacity-0">
                    <NuxtImg format="webp" src="/images/home-fifth/Home Page_The Choices.jpg"
                        class="h-full w-full rounded-xl  object-cover" alt="" />
                </div>
                <div ref="imageFive" class="absolute w-full h-full opacity-0">
                    <NuxtImg format="webp" src="/images/home-fifth/Home Page_We Design.jpg"
                        class="h-full w-full rounded-xl  object-cover" alt="" />
                </div>
            </div>

        </div>
        <div
            class="w-full mt-14 lg:mt-0 gap-y-12 lg:w-[50%] h-full flex flex-col lg:px-16 2xl:px-28 lg:gap-y-8 xl:gap-y-9 2xl:gap-y-12 3xl:gap-y-14 justify-center lg:pt-28 xl:pt-32 2xl:pt-28 3xl:pt-36">
            <div class="w-full cursor-pointer" @click="triggerSlide(0)">
                <h2 :class="{ '!opacity-100': count == 0 }"
                    class="text-xl lg:text-sm xl:text-sm 2xl:text-lg 3xl:text-2xl tracking-widest lg:tracking-[0.6rem] transition-all duration-700 opacity-60">
                    Putting <span :class="{ '!text-black': count == 0 }"
                        class="font-semibold transition-all duration-700 text-creations">The best
                        mind</span></h2>
                <div :class="{ '!h-1.5': count == 0 }"
                    class="w-full h-0.5 transition-all duration-700 rounded-full overflow-clip mt-3 lg:mt-3.5 xl:mt-5 2xl:mt-5 3xl:mt-7">
                    <div :class="{ '!bg-creations': count == 0, 'width-animation': count == 0 }"
                        class="h-full w-2/2 transition-all duration-700 bg-neutral-200"></div>
                </div>
            </div>

            <div class="w-full cursor-pointer" @click="triggerSlide(1)">
                <h2 :class="{ '!opacity-100': count == 1 }"
                    class="text-xl lg:text-sm xl:text-sm 2xl:text-lg 3xl:text-2xl tracking-widest lg:tracking-[0.6rem] transition-all duration-700 opacity-60">
                    Rich
                    <span class="font-semibold transition-all duration-700 text-creations"
                        :class="{ '!text-black': count == 1 }">in
                        Culture</span>
                </h2>
                <div :class="{ '!h-1.5': count == 1 }"
                    class="w-full h-0.5 transition-all duration-700 rounded-full overflow-clip mt-3 lg:mt-3.5 xl:mt-5 2xl:mt-5 3xl:mt-7">
                    <div :class="{ '!bg-creations': count == 1, 'width-animation': count == 1 }"
                        class="h-full transition-all duration-700 w-2/2 bg-neutral-200">
                    </div>
                </div>
            </div>

            <div class="w-full cursor-pointer" @click="triggerSlide(2)">
                <h2 :class="{ '!opacity-100': count == 2 }"
                    class="text-xl lg:text-sm xl:text-sm 2xl:text-lg 3xl:text-2xl tracking-widest lg:tracking-[0.6rem] transition-all duration-700 opacity-60">
                    Space
                    <span class="font-semibold transition-all duration-700 text-creations"
                        :class="{ '!text-black': count == 2 }">Comfort & Style</span>
                </h2>
                <div :class="{ '!h-1.5': count == 2 }"
                    class="w-full h-0.5 transition-all duration-700 rounded-full overflow-clip mt-3 lg:mt-3.5 xl:mt-5 2xl:mt-5 3xl:mt-7">
                    <div :class="{ '!bg-creations': count == 2, 'width-animation': count == 2 }"
                        class="h-full transition-all duration-700 w-2/2 bg-neutral-200"></div>
                </div>
            </div>

            <div class="w-full cursor-pointer" @click="triggerSlide(3)">
                <h2 :class="{ '!opacity-100': count == 3 }"
                    class="text-xl lg:text-sm xl:text-sm 2xl:text-lg 3xl:text-2xl tracking-widest lg:tracking-[0.6rem] transition-all duration-700 opacity-60">
                    The
                    <span class="font-semibold transition-all duration-700 text-creations"
                        :class="{ '!text-black': count == 3 }">Choices</span>
                </h2>
                <div :class="{ '!h-1.5': count == 3 }"
                    class="w-full h-0.5 transition-all duration-700 rounded-full overflow-clip mt-3 lg:mt-3.5 xl:mt-5 2xl:mt-5 3xl:mt-7">
                    <div :class="{ '!bg-creations': count == 3, 'width-animation': count == 3 }"
                        class="h-full transition-all duration-700 w-2/2 bg-neutral-200"></div>
                </div>
            </div>

            <div class="w-full cursor-pointer" @click="triggerSlide(4)">
                <h2 :class="{ '!opacity-100': count == 4 }"
                    class="text-xl lg:text-sm xl:text-sm 2xl:text-lg 3xl:text-2xl tracking-widest lg:tracking-[0.6rem] transition-all duration-700 opacity-60">
                    We
                    <span class="font-semibold transition-all duration-700 text-creations"
                        :class="{ '!text-black': count == 4 }">Design</span>
                </h2>
                <div :class="{ '!h-1.5': count == 4 }"
                    class="w-full h-0.5 transition-all duration-700 rounded-full overflow-clip mt-3 lg:mt-3.5 xl:mt-5 2xl:mt-5 3xl:mt-7">
                    <div :class="{ '!bg-creations': count == 4, 'width-animation': count == 4 }"
                        class="h-full transition-all duration-700 w-2/2 bg-neutral-200"></div>
                </div>
            </div>
        </div>
    </div>

    <div class="w-full px-10 lg:px-20 pb-10">
        <div class="h-0.5 rounded-xl w-full bg-creations"></div>
    </div>
</template>

<script setup>
import gsap from 'gsap';
const imageOne = ref(null);
const imageTwo = ref(null);
const imageThree = ref(null);
const imageFour = ref(null);
const imageFive = ref(null);
const timer = ref(null);
let count = ref(0);
let timerStarted = false;

const switchSlide = (index) => {
    gsap.to(imageOne.value, { opacity: index === 0 ? 1 : 0, duration: 1 });
    gsap.to(imageTwo.value, { opacity: index === 1 ? 1 : 0, duration: 1 });
    gsap.to(imageThree.value, { opacity: index === 2 ? 1 : 0, duration: 1 });
    gsap.to(imageFour.value, { opacity: index === 3 ? 1 : 0, duration: 1 });
    gsap.to(imageFive.value, { opacity: index === 4 ? 1 : 0, duration: 1 });
};



const startTimer = () => {
    if (!timerStarted) {
        timer.value = setInterval(() => {
            count.value = (count.value + 1) % 5;
            switchSlide(count.value);
        }, 3000);
        timerStarted = true;
    }
};

const stopTimer = () => {
    clearInterval(timer.value);
    timerStarted = false;
};

const triggerSlide = (index) => {
    count.value = index;
    switchSlide(index);

    if (timerStarted) {
        stopTimer();
        startTimer();
    } else {
        startTimer();
    }
};
onMounted(() => {
    startTimer();
});

onUnmounted(() => {
    stopTimer();
});
</script>


<style>
.width-animation {
    animation: widthIncrease 3s linear;
}

@keyframes widthIncrease {
    0% {
        width: 0%;
    }

    100% {
        width: 100%;
    }
}


.fifth-active-carousel-item h2 {
    opacity: 1;
}



.fifth-active-carousel-item h2 span {
    color: black !important;
}


.fifth-active-carousel-item>div {
    height: 0.375rem
        /* 6px */
        !important;
}

.fifth-active-carousel-item>div>div {
    background-color: rgb(196 168 136) !important;
}
</style>