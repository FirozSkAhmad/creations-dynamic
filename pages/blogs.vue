
<template>
  <div class="w-full">
    <div class="px-10 xl:px-20 pb-28 pt-32 lg:pt-48">
      <NuxtLink to="/" class="flex items-center gap-x-3">
        <img src="@/assets/images/icons/arrow-right.svg" class="h-5 lg:h-8 rotate-180" alt="">
        <p class="text-creations text-lg font-semibold">Back</p>
      </NuxtLink>
      <h2 class="text-creations text-4xl font-semibold xl:text-5xl mt-10">Blogs</h2>
      <div class="flex flex-wrap mt-20 gap-x-10 gap-y-10">
        <NuxtLink v-for="blog in blogsData" :key="blog.id" :to="`/blog/${blog.id}/${blog.title.replace(/\s+/g, '-').toLowerCase()}`"
          class="w-full sm:w-80 transition-all duration-700 hover:opacity-75 active:opacity-80 cursor-pointer">
          <div class="h-96 w-full">
            <img :src="blog.imageUrl" class="object-cover h-full rounded-lg w-full" alt="" />
          </div>
          <div class="w-[80vw] sm:w-96 lg:w-[40vh] mt-7">
                    <div class="w-full font-semibold text-base lg:text-xl"> {{ blog.title }}</div>
                    <div class="mt-4 w-full text-sm lg:text-lg font-semibold text-black text-opacity-30">View More</div>
                </div>
        </NuxtLink>
      </div>
    </div>
    <AFooter></AFooter>
  </div>
</template>

<script setup>
import { onMounted,computed } from 'vue';
import { useBlogStore } from '~/stores/blogStore';

definePageMeta({
  pageTransition: {
    name: 'page'
  }
});

const blogStore = useBlogStore();

onMounted(async () => {
  await blogStore.fetchBlogs();
});

const blogsData = computed(() => blogStore.blogs);
</script>