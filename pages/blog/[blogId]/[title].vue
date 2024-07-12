<template>
  <div class="w-full">
    <div class="px-10 xl:px-20 pb-5 pt-32 lg:pt-48">
      <NuxtLink to="/blogs" class="flex items-center gap-x-3">
        <img src="@/assets/images/icons/arrow-right.svg" class="h-5 lg:h-8 rotate-180" alt="">
        <p class="text-creations text-lg font-semibold">Back</p>
      </NuxtLink>
      <div class="mt-10 text-xl lg:text-3xl">
        {{ blog.title }}
      </div>

      <div class="aspect-video">
        <img :src="blog.imageUrl" class="h-full w-full rounded-xl object-cover mt-20" alt="">
      </div>

      <div class="lg:flex h-fit mt-14 lg:mt-40">
        <div class="lg:w-[40%] 2xl:w-[35%] 3xl:w-[30%] h-full">
          <div class="text-5xl ">{{ blog.uploadDate }}</div>
          <div class="mt-7 tracking-[0.5rem] opacity-50 font-semibold text-xs lg:text-lg">
            By Creations
          </div>
        </div>
        <div class="w-full flex flex-col mt-20 lg:mt-0 gap-y-4 lg:gap-y-10 text-sm lg:text-lg">
          <p v-for="(tip, index) in blog.description" :key="index">{{ tip }}</p>
        </div>
      </div>
    </div>
    <AFooter></AFooter>
  </div>
</template>


<script setup>
import { computed, ref, onMounted } from 'vue';
import { useBlogStore } from '~/stores/blogStore';
import { useRoute } from 'vue-router';

const route = useRoute();
const blogStore = useBlogStore();

onMounted(async () => {
  if (blogStore.blogs.length === 0) {
    await blogStore.fetchBlogs();
  }
});

// This computed property will reactively update when the route or store changes
const blog = computed(() => {
  const blogId = route.params.blogId;
  const blogData = blogStore.blogs.find(b => b.id === blogId) || {};

  return blogData;
});

</script>
