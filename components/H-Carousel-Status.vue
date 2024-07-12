<!--
<template>
    <div class="flex items-center gap-x-5">
        <div class="h-2.5 w-2.5 xl:h-3.5 xl:w-3.5 transition-all duration-700 rounded-full "
            :class="{ 'bg-creations': currentSlide == 0, 'bg-white': currentSlide != 0 }">
        </div>
        <div class="h-2.5 w-2.5 xl:h-3.5 xl:w-3.5 transition-all duration-700 rounded-full "
            :class="{ 'bg-creations': currentSlide == 1, 'bg-white': currentSlide != 1 }">
        </div>

        <div class="h-2.5 w-2.5 xl:h-3.5 xl:w-3.5 transition-all duration-700 rounded-full "
            :class="{ 'bg-creations': currentSlide == 2, 'bg-white': currentSlide != 2 }">
        </div>

        <div class="h-2.5 w-2.5 xl:h-3.5 xl:w-3.5 transition-all duration-700 rounded-full "
            :class="{ 'bg-creations': currentSlide == 3, 'bg-white': currentSlide != 3 }">
        </div>


        <div class="h-2.5 w-2.5 xl:h-3.5 xl:w-3.5 transition-all duration-700 rounded-full "
            :class="{ 'bg-creations': currentSlide == 4, 'bg-white': currentSlide != 4 }">
        </div>

    </div>
 
</template>
-->
<script setup>
const props = defineProps(["currentSlide"])
</script>

<style lang="scss" scoped></style>
