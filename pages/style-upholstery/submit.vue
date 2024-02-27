<template>
    <div class="w-full h-[120vh]">
        <div class="h-full w-full relative">
            <NuxtImg format="webp" src="/images/upholstery/Suede.png" class="h-full w-full object-cover" alt="" />

            <div
                class="w-full h-full absolute top-0 pt-32 bg-black bg-opacity-50 px-10 lg:hidden flex flex-col justify-between">
                <h2 class="text-4xl font-semibold mt-[10vh] text-white">Upholstery</h2>

                <div class="w-full text-white font-semibold pb-10">
                    <div class="flex items-center text-white gap-x-3">
                        <h3 class="text-base">Room</h3>
                        <div class="h-0.5 w-10 bg-white rounded-md"></div>
                    </div>

                    <div class="flex items-center gap-x-6 mt-10">
                        <button :class="{
                            '!bg-creations': bedroom,
                            '!border-creations': bedroom,
                        }"
                            class="text-white text-xs font-semibold p-2.5 px-6 border-2 transition-all duration-700 border-white rounded-lg">
                            Bedroom
                        </button>

                        <button :class="{ '!bg-creations': living, '!border-creations': living }"
                            class="text-white text-xs font-semibold p-2.5 px-6 border-2 transition-all duration-700 border-white rounded-lg">
                            Living
                        </button>
                    </div>
                    <div class="flex items-center gap-x-6 mt-5">
                        <button :class="{
                            '!bg-creations': homeTheathre,
                            '!border-creations': homeTheathre,
                        }"
                            class="text-white text-xs font-semibold p-2.5 px-6 border-2 transition-all duration-700 border-white rounded-lg">
                            Home Theatre
                        </button>

                        <button :class="{ '!bg-creations': dining, '!border-creations': dining }"
                            class="text-white text-xs font-semibold p-2.5 px-6 border-2 transition-all duration-700 border-white rounded-lg">
                            Dining
                        </button>
                    </div>

                    <div class="flex items-center text-white mt-10 gap-x-3">
                        <h3 class="text-base">Choice of fabric</h3>
                        <div class="h-0.5 w-10 bg-white rounded-md"></div>
                    </div>
                    <div class="flex flex-col mt-10 gap-y-5">
                        <div class="flex items-center gap-x-6">
                            <button :class="{
                                '!bg-creations': blackout,
                                '!border-creations': blackout,
                            }"
                                class="text-white text-xs font-semibold p-2.5 px-6 border-2 transition-all duration-700 border-white rounded-lg">
                                Blackout
                            </button>

                            <button :class="{
                                '!bg-creations': digitalPrints,
                                '!border-creations': digitalPrints,
                            }"
                                class="text-white text-xs font-semibold p-2.5 px-6 border-2 transition-all duration-700 border-white rounded-lg">
                                Digital Prints
                            </button>
                        </div>
                        <div class="flex items-center gap-x-6">
                            <button :class="{
                                '!bg-creations': embroidery,
                                '!border-creations': embroidery,
                            }"
                                class="text-white text-xs font-semibold p-2.5 px-6 border-2 transition-all duration-700 border-white rounded-lg">
                                Embroidery
                            </button>

                            <button :class="{
                                '!bg-creations': jackquard,
                                '!border-creations': jackquard,
                            }"
                                class="text-white text-xs font-semibold p-2.5 px-6 border-2 transition-all duration-700 border-white rounded-lg">
                                Jackquard
                            </button>
                        </div>

                        <div class="flex items-center gap-x-6">
                            <button :class="{
                                '!bg-creations': sheers,
                                '!border-creations': sheers,
                            }"
                                class="text-white text-xs font-semibold p-2.5 px-6 border-2 transition-all duration-700 border-white rounded-lg">
                                Sheers
                            </button>

                            <button :class="{
                                '!bg-creations': textures,
                                '!border-creations': textures,
                            }"
                                class="text-white text-xs font-semibold p-2.5 px-6 border-2 transition-all duration-700 border-white rounded-lg">
                                Textures
                            </button>
                            <button :class="{ '!bg-creations': wider, '!border-creations': wider }"
                                class="text-white text-xs font-semibold p-2.5 px-6 border-2 transition-all duration-700 border-white rounded-lg">
                                Wider
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="absolute top-0 bg-black bg-opacity-50 w-full h-full hidden lg:flex flex-col pb-16 justify-between">
                <div></div>
                <div class="flex items-center px-10 xl:px-20 justify-between">
                    <div>
                        <h2 class="text-4xl font-semibold text-white">Upholstery</h2>
                        <p class="text-sm text-white mt-2.5">Your style pallete</p>
                    </div>

                    <p class="text-white text-lg">Style your way</p>
                </div>

                <div>
                    <div class="flex items-center text-white gap-x-7 px-10 mb-10 xl:px-20">
                        <h3 class="text-xl">Room</h3>
                        <div class="h-0.5 w-20 bg-white rounded-md"></div>
                    </div>

                    <div class="mt-5 flex items-center px-10 xl:px-20 gap-x-7">
                        <button :class="{
                            '!bg-creations': bedroom,
                            '!border-creations': bedroom,
                        }"
                            class="text-white text-base font-semibold p-2 px-8 border-2 transition-all duration-700 border-white rounded-lg">
                            Bedroom
                        </button>

                        <button :class="{ '!bg-creations': living, '!border-creations': living }"
                            class="text-white text-base font-semibold p-2 px-8 border-2 transition-all duration-700 border-white rounded-lg">
                            Living
                        </button>

                        <button :class="{
                            '!bg-creations': homeTheathre,
                            '!border-creations': homeTheathre,
                        }"
                            class="text-white text-base font-semibold p-2 px-8 border-2 transition-all duration-700 border-white rounded-lg">
                            Home Theatre
                        </button>

                        <button :class="{ '!bg-creations': dining, '!border-creations': dining }"
                            class="text-white text-base font-semibold p-2 px-8 border-2 transition-all duration-700 border-white rounded-lg">
                            Dining
                        </button>
                    </div>

                    <div class="flex items-center text-white gap-x-7 mt-20 px-10 mb-10 xl:px-20">
                        <h3 class="text-xl">Choice of fabric</h3>
                        <div class="h-0.5 w-20 bg-white rounded-md"></div>
                    </div>

                    <div class="mt-5 flex items-center px-10 xl:px-20 gap-x-7">
                        <button :class="{
                            '!bg-creations': blackout,
                            '!border-creations': blackout,
                        }"
                            class="text-white text-base font-semibold p-2 px-8 border-2 transition-all duration-700 border-white rounded-lg">
                            Blackout
                        </button>

                        <button :class="{
                            '!bg-creations': digitalPrints,
                            '!border-creations': digitalPrints,
                        }"
                            class="text-white text-base font-semibold p-2 px-8 border-2 transition-all duration-700 border-white rounded-lg">
                            Digital Prints
                        </button>

                        <button :class="{
                            '!bg-creations': embroidery,
                            '!border-creations': embroidery,
                        }"
                            class="text-white text-base font-semibold p-2 px-8 border-2 transition-all duration-700 border-white rounded-lg">
                            Embroidery
                        </button>

                        <button :class="{
                            '!bg-creations': jackquard,
                            '!border-creations': jackquard,
                        }"
                            class="text-white text-base font-semibold p-2 px-8 border-2 transition-all duration-700 border-white rounded-lg">
                            Jackquard
                        </button>
                    </div>

                    <div class="mt-7 flex items-center px-10 xl:px-20 gap-x-7">
                        <button :class="{ '!bg-creations': sheers, '!border-creations': sheers }"
                            class="text-white text-base font-semibold p-2 px-8 border-2 transition-all duration-700 border-white rounded-lg">
                            Sheers
                        </button>

                        <button :class="{
                            '!bg-creations': textures,
                            '!border-creations': textures,
                        }"
                            class="text-white text-base font-semibold p-2 px-8 border-2 transition-all duration-700 border-white rounded-lg">
                            Textures
                        </button>

                        <button :class="{ '!bg-creations': wider, '!border-creations': wider }"
                            class="text-white text-base font-semibold p-2 px-8 border-2 transition-all duration-700 border-white rounded-lg">
                            Wider
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-full py-20 px-10 xl:px-20">
            <h3>Choice of color</h3>

            <div class="lg:flex items-center justify-between">
                <div class="flex items-center gap-x-4 mt-10">
                    <div ref="primaryColor" :style="{ backgroundColor: primaryColor }"
                        class="px-10 lg:px-20 py-2.5 lg:py-6 border-black border-2"></div>
                    <div ref="secondaryColor" :style="{ backgroundColor: secondaryColor }"
                        class="px-10 lg:px-20 py-2.5 lg:py-6 border-black border-2"></div>
                    <div ref="teritaryColor" :style="{ backgroundColor: teritaryColor }"
                        class="px-10 lg:px-20 py-2.5 lg:py-6 border-black border-2"></div>
                </div>

                <div @click="triggerSubmit" class="text-creations mt-7 flex gap-x-4 font-semibold items-center text-lg">
                    <p>Submit</p>
                    <img src="@/assets/images/icons/arrow-right.svg" alt="" />
                </div>
            </div>
        </div>
        <AFooter></AFooter>
    </div>
</template>

<script setup>
const blackout = ref(false);
const digitalPrints = ref(false);
const embroidery = ref(false);
const jackquard = ref(false);
const sheers = ref(false);
const textures = ref(false);
const wider = ref(false);
const bedroom = ref(false);
const living = ref(false);
const homeTheathre = ref(false);
const dining = ref(false);
const primaryColor = ref(null);
const secondaryColor = ref(null);
const teritaryColor = ref(null);
definePageMeta({
    pageTransition: {
        name: 'page'
    }
})
const triggerSubmit = () => { };


onMounted(() => {
    const selectedColors = JSON.parse(localStorage.getItem("selectedColors"));
    const selectedAreas = JSON.parse(localStorage.getItem("selectedAreas"));
    const selectedItems = JSON.parse(localStorage.getItem("selectedItems"));

    // Update color elements with selected colors
    if (selectedColors) {
        primaryColor.value = selectedColors.primary || '#000000';
        secondaryColor.value = selectedColors.secondary || '#000000';
        teritaryColor.value = selectedColors.teritary || '#000000';
    }

    // Update area variables based on selected areas
    if (selectedAreas) {
        bedroom.value = 'bedroom' in selectedAreas ? selectedAreas['bedroom'] : false;
        living.value = 'living' in selectedAreas ? selectedAreas['living'] : false;
        homeTheathre.value = 'homeTheathre' in selectedAreas ? selectedAreas['homeTheathre'] : false;
        dining.value = 'dining' in selectedAreas ? selectedAreas['dining'] : false;
    }

    // Update item variables based on selected items
    if (selectedItems) {
        blackout.value = 'blackout' in selectedItems ? selectedItems['blackout'] : false;
        digitalPrints.value = 'digitalPrints' in selectedItems ? selectedItems['digitalPrints'] : false;
        embroidery.value = 'embroidery' in selectedItems ? selectedItems['embroidery'] : false;
        jackquard.value = 'jackquard' in selectedItems ? selectedItems['jackquard'] : false;
        sheers.value = 'sheers' in selectedItems ? selectedItems['sheers'] : false;
        textures.value = 'textures' in selectedItems ? selectedItems['textures'] : false;
        wider.value = 'wider' in selectedItems ? selectedItems['wider'] : false;
    }
});
</script>
