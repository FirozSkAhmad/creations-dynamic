<template>
    <div class="bg-center bg-cover bg-no-repeat" style="
      background-image: url('https://images.pexels.com/photos/1487834/pexels-photo-1487834.jpeg')
    ">
        <div class="flex flex-col lg:flex-row items-center justify-center w-full h-screen backdrop-blur-3xl">
            <div class="bg-white rounded-lg shadow-lg p-8 max-w-md flex flex-col items-center justify-center w-full">
                <h1 class="text-2xl font-bold mb-4 lg:text-center text-#c4a888">
                    Login
                </h1>
                <form @submit.prevent="submitFunc">
                    <label class="block mb-2 font-bold text-#c4a888" for="username">Username:</label><input v-model="email"
                        class="bg-gray-200 rounded-lg px-3 py-2 mb-8 w-full hover:border-blue-500 focus:border-blue-500"
                        type="text" id="username" name="username" placeholder="Enter your username" /><label
                        class="block mb-2 font-bold text-#c4a888" for="password">Password:</label><input v-model="password"
                        class="bg-gray-200 rounded-lg px-3 py-2 mb-8 w-full hover:border-blue-500 focus:border-blue-500"
                        type="password" id="password" name="password" placeholder="Enter your password" /><button
                        class="bg-blue-500 rounded-lg px-4 py-2 text-white font-bold hover:bg-blue-700 focus:outline-none"
                        type="submit">
                        Login
                    </button>
                    <div v-show="err"
                        class="text-base text-red-500 p-2.5 rounded-md mt-10 text-center bg-red-400 bg-opacity-20">
                        Incorrect
                        Credentials!</div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'vue-router'
const { $auth } = await useNuxtApp()


const email = ref('')
const password = ref('')
const err = ref(false)
const router = useRouter()


const submitFunc = async () => {
    console.log(email.value, password.value)
    try {
        const { user } = await signInWithEmailAndPassword($auth, email.value, password.value)
        console.log(user)
        err.value = false
        router.push('/upload')
    } catch (error) {
        console.log(error)
        if (error) err.value = true
    }

}

</script>