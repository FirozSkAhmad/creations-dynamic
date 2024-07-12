<template>
  <div class="w-full">
    <div class="h-[70vh] w-full">
      <NuxtImg
        format="webp"
        src="/images/curtains/Wider Sheers.jpg"
        class="h-full w-full object-cover"
        alt=""
      />
    </div>
    <div
      class="flex items-center px-10 xl:px-20 py-10 lg:py-20 justify-evenly lg:justify-start lg:gap-x-20"
    >
      <div class="font-semibold text-lg lg:text-3xl text-creations">
        Curtains
      </div>
      <div class="h-5 bg-neutral-400 w-0.5"></div>
      <NuxtLink
        class="font-semibold text-lg lg:text-3xl opacity-30"
        to="/upholstery/design"
        >Upholstery</NuxtLink
      >
    </div>

    <div class="w-full lg:mt-20 lg:flex relative px-5 lg:px-10 xl:px-20">
      <C-Router></C-Router>
      <div
        v-if="isLoaded"
        class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 lg:px-10 gap-5 mt-5"
      >
        <a
          v-for="item in sortedCollectionArray"
          :href="item.pdfURL"
          target="_blank"
          class="justify-self-start transition-all duration-700 hover:opacity-80 active:opacity-90"
          :key="item.id"
        >
          <div
            class="aspect-w-1 aspect-h-1 sm:aspect-h-2 sm:aspect-w-2 xl:aspect-h-1 xl:aspect-w-1"
          >
            <NuxtImg
              format="webp"
              class="rounded-md object-cover"
              :src="item.imageURL"
              alt=""
            />
          </div>
          <div
            class="mt-2 text-[0.60rem] sm:text-xs xl:text-sm 2xl:text-base 3xl:text-lg font-semibold"
          >
            {{ item.title }}
          </div>
        </a>
      </div>

      <div v-else class="w-full grid place-content-center">
        <h2 class="text-creations uppercase text-xs font-bold">Loading ...</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
import { collection, getDocs } from "firebase/firestore";
import { ref as storageRef, getDownloadURL } from "firebase/storage";

const { $firestore, $storage } = await useNuxtApp();

const collectionArray = ref([]);
const isLoaded = ref(false);

useHead({
  title: "Wilder Curtains Online | Stylish Wilder Curtains India",
  meta: [
    {
      name: "description",
      content:
        "Explore stylish wilder curtains at Creation Furnishings. Unique designs to elevate your home decor. Available in Hyderabad and all over India.",
    },
  ],
});

onMounted(async () => {
  const colRef = collection($firestore, "curtainswiderwidthsheer");

  try {
    console.log(colRef);
  } catch (error) {
    // Handle error
  }

  const snapshot = await getDocs(colRef);
  snapshot.docs.forEach(async (doc) => {
    const data = await doc.data();
    const imageURL = await getDownloadURL(
      storageRef($storage, data.imgFileName)
    );
    const pdfURL = await getDownloadURL(storageRef($storage, data.pdfFileName));
    collectionArray.value.push({ ...data, imageURL, pdfURL, id: doc.id });
  });

  // Sort the collectionArray by title in alphabetical order
  collectionArray.value.sort((a, b) => a.title.localeCompare(b.title));
  isLoaded.value = true;
});

const sortedCollectionArray = computed(() => {
  console.log(
    "sortedCollectionArray computed property called",
    collectionArray.value
  );
  return collectionArray.value.sort((a, b) => a.title.localeCompare(b.title));
});
</script>

<style scoped>
/* Add your custom styles here */
</style>
