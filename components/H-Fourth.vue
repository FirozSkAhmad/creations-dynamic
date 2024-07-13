<template>
    <div class="w-full xl:px-20 py-20">
        <div class="flex px-10 xl:px-0 w-full justify-between items-center">
            <div class="text-creations text-xl sm:text-3xl font-semibold">Spread The Story</div>
            <NuxtLink to="/blogs"
                class="text-center text-sm sm:text-lg font-semibold transition-all cursor-pointer active:opacity-80 hover:text-creations duration-700">
                Show All</NuxtLink>
        </div>

        <ul class="flex px-3 lg:px-0 w-full items-start mt-14 sm:mt-20 gap-x-14 overflow-x-auto">
            <li v-for="blog in blogsData.slice(0, 4)" :key="blog.id" class="cursor-pointer hover:opacity-75 active:opacity-90 transition-opacity duration-700">
                <NuxtLink :to="`/blog/${blog.id}/${blog.title.replace(/\s+/g, '-').toLowerCase()}`">
                    <div class="h-60 sm:h-96 sm:w-96 w-[80vw] lg:h-[40vh] lg:w-[40vh] bg-neutral-200 rounded-xl">
                        <NuxtImg format="webp" class="h-full w-full object-cover rounded-xl"
                            :src="blog.imageUrl">
                        </NuxtImg>
                    </div>
                    
                    <div class="w-[80vw] sm:w-96 lg:w-[40vh] mt-7">
                        <div class="w-full font-semibold text-base lg:text-xl">{{ blog.title }}</div>
                        <div class="mt-4 w-full text-sm lg:text-lg font-semibold text-black text-opacity-30">View More</div>
                    </div>
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { onMounted,computed } from 'vue';
import { useBlogStore } from '~/stores/blogStore';

const blogStore = useBlogStore();

onMounted(async () => {
  await blogStore.fetchBlogs();
});

const blogsData = computed(() => blogStore.blogs);
</script>






