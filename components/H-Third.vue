<template>
    <div class="w-full px-10 py-10 lg:py-20 xl:px-20">
        <div class="overflow-y-clip">
            <h2 class="text-3xl lg:text-2xl 2xl:text-4xl translate-y-[100%] scroll-reveal-third">A</h2>
        </div>

        <div class="text-2xl lg:text-xl 2xl:text-3xl lg:mt-3 text-creations font-semibold">
            <div class="overflow-y-clip">
                <div class="translate-y-[100%] scroll-reveal-third">Fine Thread</div>
            </div>
        </div>
        <div>
            <h2 class="lg:text-lg 2xl:text-xl mt-10 lg:mt-10">
                <div class="overflow-y-clip">
                    <div class="translate-y-[100%] scroll-reveal-third">A fine thread makes a fine fabric </div>
                </div>

                <div class="overflow-y-clip">
                    <div class="translate-y-[100%] scroll-reveal-third">and we take pride in our collection.</div>
                </div>
            </h2>

            <h2 class="lg:text-lg 2xl:text-xl mt-5 lg:mt-16">
                <div class="overflow-y-clip">
                    <div class="translate-y-[100%] scroll-reveal-third">Each section of threads is </div>
                </div>

                <div class="overflow-y-clip">
                    <div class="translate-y-[100%] scroll-reveal-third">monitored by professionals.</div>
                </div>
            </h2>

            <h2 class="lg:text-lg 2xl:text-xl mt-16 ml-auto w-fit lg:mt-20">
                <div class="overflow-y-clip">
                    <div class="translate-y-[100%] scroll-reveal-third">Threads are sleeved to quality and </div>
                </div>

                <div class="overflow-y-clip">
                    <div class="translate-y-[100%] scroll-reveal-third">beauty fabrics only to appeal to</div>
                </div>


                <div class="overflow-y-clip">
                    <div class="translate-y-[100%] scroll-reveal-third"> the kings and queens of this world.</div>
                </div>


            </h2>
        </div>
    </div>
</template>

<script setup>
import gsap from 'gsap';


onMounted(() => {
    gsap.to('.scroll-reveal-third', {
        y: 0,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.scroll-reveal',
        },
        duration: 0.7,
    })
})
</script>
