<template>
  <div class="w-full">
    <div class="px-10 xl:px-20 pb-28 pt-32 lg:pt-48">
      <h2 class="text-creations text-4xl font-semibold xl:text-5xl">Blogs</h2>
      <div class="flex flex-wrap mt-20 gap-x-10 gap-y-10">
        <NuxtLink to="/blog/one"
          class="w-full sm:w-80 transition-all duration-700 hover:opacity-75 active:opacity-80 cursor-pointer">
          <div class="h-96 w-full">
            <img src="https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=1600"
              class="object-cover h-full rounded-lg w-full" alt="" />
          </div>
          <h3 class="w-full mt-4 font-semibold text-lg">Curtains: Elevate Your Home Decor with Style and Functionality
          </h3>
        </NuxtLink>

        <NuxtLink to="/blog/two"
          class="w-full sm:w-80 transition-all duration-700 hover:opacity-75 active:opacity-80 cursor-pointer">
          <div class="h-96 w-full">
            <img src="https://images.pexels.com/photos/2179214/pexels-photo-2179214.jpeg?auto=compress&cs=tinysrgb&w=1600"
              class="object-cover h-full rounded-lg w-full" alt="" />
          </div>
          <h3 class="w-full mt-4 font-semibold text-lg">Curtains: Unleashing Creativity and Personalization in Your Home
          </h3>
        </NuxtLink>


        <NuxtLink to="/blog/three"
          class="w-full sm:w-80 transition-all duration-700 hover:opacity-75 active:opacity-80 cursor-pointer">
          <div class="h-96 w-full">
            <img
              src="https://images.pexels.com/photos/17264328/pexels-photo-17264328/free-photo-of-living-room-interior-mockup-b_02-3d-rendering.jpeg?auto=compress&cs=tinysrgb&w=1600"
              class="object-cover h-full rounded-lg w-full" alt="" />
          </div>
          <h3 class="w-full mt-4 font-semibold text-lg">Elevate Your Space: The Transformative Power of Upholstery
          </h3>
        </NuxtLink>


        <NuxtLink to="/blog/four"
          class="w-full sm:w-80 transition-all duration-700 hover:opacity-75 active:opacity-80 cursor-pointer">
          <div class="h-96 w-full">
            <img
              src="https://images.pexels.com/photos/12685292/pexels-photo-12685292.jpeg?auto=compress&cs=tinysrgb&w=1600"
              class="object-cover h-full rounded-lg w-full" alt="" />
          </div>
          <h3 class="w-full mt-4 font-semibold text-lg"> Enhance Your Space with Exquisite Upholstery: The Perfect Touch
            for Every Interior
          </h3>
        </NuxtLink>


      </div>
    </div>

    <AFooter></AFooter>
  </div>
</template>
  
<script setup>
definePageMeta({
  pageTransition: {
    name: 'page'
  }
});
</script>
  