<template>
    <div ref="container" class="w-full lg:h-screen flex flex-col justify-evenly py-20 lg:py-10 2xl:py-20 xl:px-20">
        <h2 class="font-medium px-10 lg:px-0 text-sm sm:text-lg lg:text-xl xl:text-lg 2xl:text-xl 3xl:text-2xl">
            <div class="overflow-y-clip">
                <div class="translate-y-[100%] scroll-reveal"> The country’s finest raw materials</div>
            </div>
            <div class="overflow-y-clip">
                <div class="translate-y-[100%] scroll-reveal">
                    only to weave the finest to meet
                </div>
            </div>
        </h2>
        <div class="w-full hidden lg:block overflow-x-clip py-[5vh]">
            <div ref="scrollStuff" class="w-full flex scroll-stuff items-center gap-x-10">
                <NuxtImg format="webp" src="/images/home-first/one.png"
                    class="lg:xl:h-[18vw] lg:w-[34vw] xl:h-[20vw] xl:w-[35vw] 2xl:h-[20vw] 2xl:w-[35vw] 3xl:h-[25vw] 3xl:w-[40vw] rounded-md object-cover"
                    alt="" />
                <NuxtImg format="webp" src="/images/home-first/two.png"
                    class="lg:xl:h-[18vw] lg:w-[34vw] xl:h-[20vw] xl:w-[35vw] 2xl:h-[20vw] 2xl:w-[35vw] 3xl:h-[25vw] 3xl:w-[40vw] rounded-md object-cover"
                    alt="" />
                <NuxtImg format="webp" src="/images/home-first/three.png"
                    class="lg:xl:h-[18vw] lg:w-[34vw] xl:h-[20vw] xl:w-[35vw] 2xl:h-[20vw] 2xl:w-[35vw] 3xl:h-[25vw] 3xl:w-[40vw] rounded-md object-cover"
                    alt="" />
                <NuxtImg format="webp" src="/images/home-first/three.png"
                    class="lg:xl:h-[18vw] opacity-0 lg:w-[20vw] xl:h-[20vw] xl:w-[20vw] 2xl:h-[20vw] 2xl:w-[20vw] 3xl:h-[25vw] 3xl:w-[20vw] rounded-md object-cover"
                    alt="" />
            </div>
        </div>

        <div class="w-full py-20 lg:hidden">
            <div class="flex items-center w-full overflow-x-scroll px-5 gap-x-10">
                <NuxtImg format="webp" class="w-80 h-60 rounded-md" src="/images/home-first/one.png" />
                <NuxtImg format="webp" class="w-80 h-60 rounded-md" src="/images/home-first/two.png" />
                <NuxtImg format="webp" class="w-80 h-60 rounded-md" src="/images/home-first/three.png" />
            </div>
        </div>

        <h2 class="ml-auto px-10 lg:px-0 font-medium text-sm sm:text-lg lg:text-xl xl:text-lg 2xl:text-xl 3xl:text-2xl">
            <div class="overflow-y-clip">
                <div class="translate-y-[100%] scroll-reveal"> we design we layout and we screen print</div>
            </div>
            <div class="overflow-y-clip">
                <div class="translate-y-[100%] scroll-reveal ">
                    using the advanced fabrics and inks
                </div>
            </div>

            <div class="overflow-y-clip">
                <div class="translate-y-[100%] scroll-reveal ">
                    combined with computer technology.
                </div>
            </div>
        </h2>
    </div>
</template>

<script setup>
import gsap from 'gsap';
const container = ref(null);
const scrollStuff = ref(null);
onMounted(() => {


    setTimeout(() => {
        gsap.to('.scroll-reveal', {
            y: 0,
            stagger: 0.5,
            scrollTrigger: {
                trigger: '.scroll-reveal',
            },
            duration: 1,
        })

        gsap.to(scrollStuff.value, {
            // x: -(scrollStuff.value.scrollWidth - window.innerWidth),
            x: -(scrollStuff.value.scrollWidth - window.innerWidth),
            ease: "none",
            scrollTrigger: {
                trigger: container.value,
                pin: true,
                scrub: 2,

                end: () => "+=" + document.querySelector('.scroll-stuff').scrollWidth //scrollStuff.value.offsetWidth
            }
        });
    }, 1000);


})

</script>


<style >
.scroll-stuff::-webkit-scrollbar {
    width: 0px;
    background: transparent;
}

.scroll-stuff-res::-webkit-scrollbar {
    width: 0px;
    background: transparent;
}

.active .t-s-s-i {
    opacity: 100%;
}
</style>