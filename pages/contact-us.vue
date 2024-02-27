<template>
    <div class="w-full">
        <div class="w-full lg:min-h-screen lg:flex">
            <div
                class="lg:w-[50%] h-96 lg:h-screen lg lg:flex lg:items-end bg-gradient-to-r lg:min-w-[50%] lg:sticky lg:top-0  text-white">

                <div class="h-full w-full relative">
                    <NuxtImg format="webp" src="/images/home-carousel/2.jpg" class="h-full w-full object-cover" alt="" />
                    <div class="h-full w-full absolute top-0 left-0 flex items-end pb-20 px-8 xl:px-20 lg:pb-[10vh]">
                        <h2 class="lg:mt-0 text-4xl mt-20 lg:text-6xl  font-semibold text-creations">
                            <div>Let's <br> Get in Touch</div>
                        </h2>
                    </div>
                </div>



            </div>
            <div class="lg:w-[50%] bg-white text-black lg:min-w-[50%] h-full pt-14 lg:pt-32 pb-10 px-10 lg:px-20 grid">
                <div class="w-full flex justify-between items-center place-self-start min-h-fit max-h-fit">
                    <div @click="menuState = true" class="hidden opacity-0 lg:flex cursor-pointer items-center">
                        <span class="tracking-[0.8rem] text-xl block">Products</span>
                       <!--  <img src="@/assets/icons/chevron-right.svg" class="h-5 w-5 invert rotate-90" alt="" /> -->
                    </div>


                </div>

                <form @submit.prevent class="place-self-end w-full flex flex-col gap-y-14 mt-20">
                    <input type="text" required
                        class="w-full outline-none text-lg lg:text-2xl border-neutral-600 border-b-2 pb-3"
                        placeholder="Name" />
                    <input type="email" required
                        class="w-full outline-none text-lg lg:text-2xl border-neutral-600 border-b-2 pb-3"
                        placeholder="Email ID" />
                    <input type="tel" required
                        class="w-full outline-none text-lg lg:text-2xl border-neutral-600 border-b-2 pb-3"
                        placeholder="Phone No" />

                    <input type="text" required
                        class="w-full outline-none text-lg lg:text-2xl border-neutral-600 border-b-2 pb-3"
                        placeholder="State" />

                    <input type="text" required
                        class="w-full outline-none text-lg lg:text-2xl border-neutral-600 border-b-2 pb-3"
                        placeholder="What are you looking for?" />


                    <button type="submit"
                        class="flex transition-all gap-x-3 hover:gap-x-5 duration-700 hover:translate-x-1 hover:opacity-80 active:opacity-90 ml-auto w-fit my-2 lg:my-14">
                        <img src="@/assets/images/icons/arrow-right.svg" class="h-20 " alt="" />
                    </button>
                </form>
            </div>
        </div>

        <A-Footer></A-Footer>
    </div>
</template>
  
<script setup>
const menuState = useState("menuState");
onMounted(() => {

    menuState.value = false;
});
useHead({
    title: "Contact Us",
});

definePageMeta({
    scrollToTop: true,
    pageTransition: {
        name: "rotate",
    },
});
</script>
  
<style scoped>
select {
    appearance: none;
}
</style>