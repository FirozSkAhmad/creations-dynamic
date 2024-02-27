<template>
    <div class="w-full h-screen">
        <div class="h-full w-full relative">
            <NuxtImg format="webp" src="/images/curtains/Wider Sheers.jpg" class="h-full w-full object-cover" alt="" />

            <div
                class="w-full h-full absolute top-0 pt-32 bg-black bg-opacity-50 px-10 lg:hidden flex flex-col justify-between">
                <h2 class="text-4xl font-semibold mt-[10vh] text-white">Curtains</h2>

                <div class="w-full text-white font-semibold pb-10">
                    <h3 class="text-base">Which area are you <br> looking the curtains for</h3>
                    <div class="flex flex-col mt-10 gap-y-5">
                        <div class="flex items-center gap-x-6">
                            <button :class="{ '!bg-creations': bedroom, '!border-creations': bedroom }"
                                @click="bedroom = !bedroom"
                                class="text-white text-xs font-semibold p-2.5 px-6 border-2 transition-all duration-700 border-white rounded-lg">Bedroom</button>

                            <button :class="{ '!bg-creations': living, '!border-creations': living }"
                                @click="living = !living"
                                class="text-white text-xs font-semibold p-2.5 px-6 border-2 transition-all duration-700 border-white rounded-lg">Living</button>
                        </div>
                        <div class="flex items-center gap-x-6">
                            <button :class="{ '!bg-creations': homeTheathre, '!border-creations': homeTheathre }"
                                @click="homeTheathre = !homeTheathre"
                                class="text-white text-xs font-semibold p-2.5 px-6 border-2 transition-all duration-700 border-white rounded-lg">Home
                                Theatre</button>

                            <button :class="{ '!bg-creations': dining, '!border-creations': dining }"
                                @click="dining = !dining"
                                class="text-white text-xs font-semibold p-2.5 px-6 border-2 transition-all duration-700 border-white rounded-lg">Dining</button>
                        </div>

                        <button @click="triggerSubmit" class="mt-5 w-fit">
                            <img src="@/assets/images/icons/arrow-right.svg" class="h-10" alt="">
                        </button>
                    </div>

                </div>
            </div>


            <div class="absolute top-0 w-full h-full hidden lg:flex flex-col pb-16 justify-between">

                <div></div>
                <div class="flex items-center px-10 xl:px-20 justify-between">
                    <h2 class="text-4xl font-semibold text-white">Curtains</h2>

                    <p class="text-white text-lg">Style your way</p>
                </div>

                <div>
                    <div class="flex items-center justify-between px-10 text-white xl:px-20">
                        <h3 class="text-3xl font-semibold">Which area are you looking the curtains for?</h3>
                        <button @click="triggerSubmit">
                            <img src="@/assets/images/icons/arrow-right.svg" class="h-14" alt="">
                        </button>

                    </div>

                    <div class="mt-5 flex items-center px-10 xl:px-20 gap-x-7">
                        <button :class="{ '!bg-creations': bedroom, '!border-creations': bedroom }"
                            @click="bedroom = !bedroom"
                            class="text-white text-base font-semibold p-2 px-8 border-2 transition-all duration-700 border-white rounded-lg">Bedroom</button>

                        <button :class="{ '!bg-creations': living, '!border-creations': living }" @click="living = !living"
                            class="text-white text-base font-semibold p-2 px-8 border-2 transition-all duration-700 border-white rounded-lg">Living</button>

                        <button :class="{ '!bg-creations': homeTheathre, '!border-creations': homeTheathre }"
                            @click="homeTheathre = !homeTheathre"
                            class="text-white text-base font-semibold p-2 px-8 border-2 transition-all duration-700 border-white rounded-lg">Home
                            Theatre</button>

                        <button :class="{ '!bg-creations': dining, '!border-creations': dining }" @click="dining = !dining"
                            class="text-white text-base font-semibold p-2 px-8 border-2 transition-all duration-700 border-white rounded-lg">Dining</button>
                    </div>
                </div>
            </div>
        </div>
        <AFooter></AFooter>
    </div>
</template>

<script setup>
const bedroom = ref(false)
const living = ref(false)
const homeTheathre = ref(false)
const dining = ref(false)
const router = useRouter()

definePageMeta({
    pageTransition: {
        name: 'page'
    }
})

const triggerSubmit = () => {
    // Check if any areas are selected
    if (!bedroom.value && !living.value && !homeTheathre.value && !dining.value) {
        // No areas selected, do nothing
        return;
    }

    // Create an object to store the selected areas
    const selectedAreas = {};

    // Check each area and add the selected ones to the object
    if (bedroom.value) {
        selectedAreas.bedroom = true;
    }
    if (living.value) {
        selectedAreas.living = true;
    }
    if (homeTheathre.value) {
        selectedAreas.homeTheathre = true;
    }
    if (dining.value) {
        selectedAreas.dining = true;
    }

    // Save the selected areas object to local storage
    localStorage.setItem('selectedAreas', JSON.stringify(selectedAreas));

    // Log the confirmation message
    console.log('Selected areas saved to local storage.');
    router.push('/style-curtains/type')
};
</script>
