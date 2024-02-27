<template>
    <div class="bg-center bg-cover bg-no-repeat"
        style="background-image: url('https://images.pexels.com/photos/1487834/pexels-photo-1487834.jpeg');">
        <div class="flex flex-col lg:flex-row items-center justify-center w-full h-screen backdrop-blur-3xl">
            <div class="bg-white rounded-lg shadow-lg p-8 max-w-md flex flex-col" style="backdrop-filter: blur(5px)">
                <form @submit.prevent="uploadSubmit"><label class="block mb-2 font-bold text-gray-700"
                        for="title">Title:</label><input ref="itemTitle"
                        class="bg-gray-200 rounded-lg px-3 py-2 mb-8 w-full" type="text" id="title" name="title"
                        placeholder="Enter the title of your files"><label class="block mb-2 font-bold text-gray-700"
                        for="pdf">PDF File:</label><input ref="pdfFile" @change="triggerPdfChange"
                        class="bg-transparent rounded-lg px-3 py-2 mb-8 w-full h-12 appearance-none" type="file" id="pdf"
                        name="pdf"><label class="block mb-2 font-bold text-gray-700" for="image">Image:</label><input
                        @change="triggerImageChange" ref="imgFile"
                        class="bg-transparent rounded-lg px-3 py-2 mb-8 w-full h-12 appearance-none" type="file" id="image"
                        name="image"><label class="block mb-2 font-bold text-gray-700"
                        for="category">Category:</label><select @change="triggerCategorySelect" ref="CategoriesTypeSelect"
                        class="bg-gray-200 rounded-lg px-3 py-2 mb-8 w-full h-12 appearance-none" id="category"
                        name="category">
                        <option value="curtains">Curtains</option>
                        <option value="upholstery">Upholstery</option>
                    </select><label class="block mb-2 font-bold text-gray-700" for="type">Type:</label><select
                        v-if="TypeSelectRender" ref="TypeSelect" @change="triggerTypeSelect"
                        class="bg-gray-200 rounded-lg px-3 py-2 mb-8 w-full h-12 appearance-none" id="type" name="type">
                        <option value="design">Design</option>
                        <option value="plain">Plain</option>
                        <option value="rexin">Rexin</option>
                        <option value="texture">Texture</option>
                        <option value="suede">Suede</option>
                    </select>
                    <select v-else ref="TypeSelect" @change="triggerTypeSelect"
                        class="bg-gray-200 rounded-lg px-3 py-2 mb-8 w-full h-12 appearance-none" id="type" name="type">
                        <option value="blackout">Blackout</option>
                        <option value="digitalprints">Digitalprints</option>
                        <option value="embroidery">Embroidery</option>
                        <option value="jacquard">Jacquard</option>
                        <option value="sheers">sheers</option>
                        <option value="texturesandplain">Textures and Plain</option>
                        <option value="widerwidthsheer">Wider Width Sheer</option>
                    </select>

                    <button class="bg-blue-500 rounded-lg px-4 py-2 text-white font-bold hover:bg-blue-700"
                        type="submit">Upload</button>
                </form>
                <div v-if="uploadReadyState"
                    class="my-4 text-sm text-center rounded-lg p-2 text-green-500 bg-green-500 bg-opacity-40">Ready</div>
                <div v-else class="my-4 text-sm text-center rounded-lg p-2 text-red-500 bg-red-500 bg-opacity-40">Not Ready
                </div>
            </div>
            <div class="w-full lg:w-1/2 pl-8 flex lg:block ">
                <h1 class="text-2xl font-bold text-white mb-4">Preview</h1>
                <div id="preview-title" class="mb-8"></div>
                <img ref="pdfPreview" id="preview-pdf" class="mb-8 h-10 w-10 lg:h-64 lg:w-64 object-cover" />
                <img ref="imgPreview" id="preview-image" class="mb-8 h-10 w-10 lg:h-64 lg:w-64 object-cover" />
            </div>
        </div>
    </div>
</template>
 <!-- background-image: url('https://images.pexels.com/photos/1487834/pexels-photo-1487834.jpeg'); -->
 
 
 
<script setup>
import { onMounted, ref } from 'vue';
import { collection, addDoc } from "firebase/firestore";
import { ref as storageRef, uploadBytes } from 'firebase/storage'


const { $storage, $firestore, $auth } = useNuxtApp()
const router = useRouter()
const TypeSelect = ref(null)
const CategoriesTypeSelect = ref(null)
const uploadReadyState = ref(true)
const TypeSelectRender = ref(false)
const pdfFile = ref(null)
const imgFile = ref(null)
const pdfPreview = ref(null)
const imgPreview = ref(null)
const itemTitle = ref(null)

const triggerTypeSelect = () => {
    //  console.log('triggers select')
    console.log(TypeSelect.value.value)
}

const triggerCategorySelect = () => {
    // console.log('category trigger triggered')
    console.log(CategoriesTypeSelect.value.value)

    if (CategoriesTypeSelect.value.value == 'curtains') {
        TypeSelectRender.value = false
    } else {
        TypeSelectRender.value = true
    }
}


const triggerPdfChange = async () => {
    console.log(pdfFile.value.value)
    const file = pdfFile.value.files[0]
    const fileUrl = URL.createObjectURL(file)
    const reader = new FileReader()
    reader.readAsDataURL(file)
    pdfPreview.value.src = fileUrl
    console.log(file)
}


const triggerImageChange = async () => {
    console.log(imgFile.value.value)
    const file = imgFile.value.files[0]
    const fileUrl = URL.createObjectURL(file)
    const reader = new FileReader()
    reader.readAsDataURL(file)
    imgPreview.value.src = fileUrl
    console.log(file)
}

const uploadSubmit = async () => {
    uploadReadyState.value = false
    const submitObject = {
        title: itemTitle.value.value,
        category: CategoriesTypeSelect.value.value,
        type: TypeSelect.value.value,
        imgFileName: imgFile.value.files[0].name,
        pdfFileName: pdfFile.value.files[0].name
    }

    try {
        const docRef = await addDoc(collection($firestore, CategoriesTypeSelect.value.value + TypeSelect.value.value), submitObject);
        const storageRefPDF = storageRef($storage, pdfFile.value.files[0].name);
        const storageRefIMG = storageRef($storage, imgFile.value.files[0].name);

        await uploadBytes(storageRefPDF, pdfFile.value.files[0])
        console.log('Uploaded a blob or file!');

        await uploadBytes(storageRefIMG, imgFile.value.files[0])
        console.log('Uploaded a blob or file!');

        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
    /*  console.log() */
    uploadReadyState.value = true
    console.log('submitting an update', submitObject)
}

onMounted(() => {
    console.log($auth.currentUser)
    if ($auth.currentUser == null) router.replace('/login')
    console.log(CategoriesTypeSelect.value.value)
    console.log(TypeSelect.value.value)
})
</script>