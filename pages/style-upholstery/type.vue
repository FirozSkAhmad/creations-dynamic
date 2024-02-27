<template>
    <div class="w-full h-screen">
        <div class="h-full w-full relative">
            <NuxtImg format='webp' src="/images/upholstery/Rexin.png" class="h-full w-full object-cover" alt="" />

            <div
                class="w-full h-full absolute top-0 pt-32 bg-black bg-opacity-50 px-10 lg:hidden flex flex-col justify-between">
                <h2 class="text-4xl font-semibold mt-[10vh] text-white">Upholstery</h2>

                <div class="w-full text-white font-semibold pb-10">
                    <h3 class="text-base">
                        Which area are you <br />
                        looking the upholstery for
                    </h3>
                    <div class="flex flex-col mt-10 gap-y-5">
                        <div class="flex items-center gap-x-6">
                            <button :class="{
                                '!bg-creations': blackout,
                                '!border-creations': blackout,
                            }" @click="blackout = !blackout"
                                class="text-white text-xs font-semibold p-2.5 px-6 border-2 transition-all duration-700 border-white rounded-lg">
                                Blackout
                            </button>

                            <button :class="{
                                '!bg-creations': digitalPrints,
                                '!border-creations': digitalPrints,
                            }" @click="digitalPrints = !digitalPrints"
                                class="text-white text-xs font-semibold p-2.5 px-6 border-2 transition-all duration-700 border-white rounded-lg">
                                Digital Prints
                            </button>
                        </div>
                        <div class="flex items-center gap-x-6">
                            <button :class="{
                                '!bg-creations': embroidery,
                                '!border-creations': embroidery,
                            }" @click="embroidery = !embroidery"
                                class="text-white text-xs font-semibold p-2.5 px-6 border-2 transition-all duration-700 border-white rounded-lg">
                                Embroidery
                            </button>

                            <button :class="{
                                '!bg-creations': jackquard,
                                '!border-creations': jackquard,
                            }" @click="jackquard = !jackquard"
                                class="text-white text-xs font-semibold p-2.5 px-6 border-2 transition-all duration-700 border-white rounded-lg">
                                Jackquard
                            </button>
                        </div>

                        <div class="flex items-center gap-x-6">
                            <button :class="{
                                '!bg-creations': sheers,
                                '!border-creations': sheers,
                            }" @click="sheers = !sheers"
                                class="text-white text-xs font-semibold p-2.5 px-6 border-2 transition-all duration-700 border-white rounded-lg">
                                Sheers
                            </button>

                            <button :class="{
                                '!bg-creations': textures,
                                '!border-creations': textures,
                            }" @click="textures = !textures"
                                class="text-white text-xs font-semibold p-2.5 px-6 border-2 transition-all duration-700 border-white rounded-lg">
                                Textures
                            </button>
                            <button :class="{ '!bg-creations': wider, '!border-creations': wider }" @click="wider = !wider"
                                class="text-white text-xs font-semibold p-2.5 px-6 border-2 transition-all duration-700 border-white rounded-lg">
                                Wider
                            </button>
                        </div>

                        <button @click="triggerSubmit" class="mt-5 w-fit">
                            <img src="@/assets/images/icons/arrow-right.svg" class="h-10" alt="" />
                        </button>
                    </div>
                </div>
            </div>

            <div class="absolute top-0 w-full h-full hidden lg:flex flex-col pb-16 justify-between">
                <div></div>
                <div class="flex items-center px-10 xl:px-20 justify-between">
                    <h2 class="text-4xl font-semibold text-white">Upholstery</h2>

                    <p class="text-white text-lg">Style your way</p>
                </div>

                <div>
                    <div class="flex items-center justify-between px-10 text-white xl:px-20">
                        <h3 class="text-3xl font-semibold">
                            What type of upholstery are you looking for?
                        </h3>
                        <button @click="triggerSubmit">
                            <img src="@/assets/images/icons/arrow-right.svg" class="h-14" alt="" />
                        </button>

                    </div>

                    <div class="mt-5 flex items-center px-10 xl:px-20 gap-x-7">
                        <button :class="{
                            '!bg-creations': blackout,
                            '!border-creations': blackout,
                        }" @click="blackout = !blackout"
                            class="text-white text-base font-semibold p-2 px-8 border-2 transition-all duration-700 border-white rounded-lg">
                            Blackout
                        </button>

                        <button :class="{
                            '!bg-creations': digitalPrints,
                            '!border-creations': digitalPrints,
                        }" @click="digitalPrints = !digitalPrints"
                            class="text-white text-base font-semibold p-2 px-8 border-2 transition-all duration-700 border-white rounded-lg">
                            Digital Prints
                        </button>

                        <button :class="{
                            '!bg-creations': embroidery,
                            '!border-creations': embroidery,
                        }" @click="embroidery = !embroidery"
                            class="text-white text-base font-semibold p-2 px-8 border-2 transition-all duration-700 border-white rounded-lg">
                            Embroidery
                        </button>

                        <button :class="{
                            '!bg-creations': jackquard,
                            '!border-creations': jackquard,
                        }" @click="jackquard = !jackquard"
                            class="text-white text-base font-semibold p-2 px-8 border-2 transition-all duration-700 border-white rounded-lg">
                            Jackquard
                        </button>
                    </div>

                    <div class="mt-7 flex items-center px-10 xl:px-20 gap-x-7">
                        <button :class="{ '!bg-creations': sheers, '!border-creations': sheers }" @click="sheers = !sheers"
                            class="text-white text-base font-semibold p-2 px-8 border-2 transition-all duration-700 border-white rounded-lg">
                            Sheers
                        </button>

                        <button :class="{
                            '!bg-creations': textures,
                            '!border-creations': textures,
                        }" @click="textures = !textures"
                            class="text-white text-base font-semibold p-2 px-8 border-2 transition-all duration-700 border-white rounded-lg">
                            Textures
                        </button>

                        <button :class="{ '!bg-creations': wider, '!border-creations': wider }" @click="wider = !wider"
                            class="text-white text-base font-semibold p-2 px-8 border-2 transition-all duration-700 border-white rounded-lg">
                            Wider
                        </button>
                    </div>
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
const router = useRouter()
definePageMeta({
    pageTransition: {
        name: 'page'
    }
})

const triggerSubmit = () => {
    // Check if any items are selected
    if (
        !blackout.value &&
        !digitalPrints.value &&
        !embroidery.value &&
        !jackquard.value &&
        !sheers.value &&
        !textures.value &&
        !wider.value
    ) {
        // No items selected, do nothing
        return;
    }

    // Create an object to store the selected items
    const selectedItems = {};

    // Check each item and add the selected ones to the object
    if (blackout.value) {
        selectedItems.blackout = true;
    }
    if (digitalPrints.value) {
        selectedItems.digitalPrints = true;
    }
    if (embroidery.value) {
        selectedItems.embroidery = true;
    }
    if (jackquard.value) {
        selectedItems.jackquard = true;
    }
    if (sheers.value) {
        selectedItems.sheers = true;
    }
    if (textures.value) {
        selectedItems.textures = true;
    }
    if (wider.value) {
        selectedItems.wider = true;
    }

    // Save the selected items object to local storage
    localStorage.setItem('selectedItems', JSON.stringify(selectedItems));

    // Log the confirmation message
    console.log('Selected items saved to local storage.');
    router.push('/style-upholstery/colors')
};

</script>
