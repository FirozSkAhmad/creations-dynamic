<template>
    <div class="w-full">
        <div class="h-[40vh]">
            <NuxtImg format="webp" src="/images/upholstery/Textured.jpg" class="h-full w-full object-cover" alt=""/>
        </div>

        <div class="lg:flex px-10 w-full justify-between pt-14 lg:pt-28 xl:px-20">
            <h2 class="text-5xl font-semibold">Upholstery</h2>
            <div class="text-2xl mt-4 lg:mt-0">Style Your Way</div>
        </div>
        <h3 class="px-10 mt-20 lg:mt-5 text-sm xl:px-20">Choose your color pallete</h3>

        <div class="px-10 lg:flex mt-20 text-2xl items-center justify-between xl:px-20">
            <div class="w-60 mt-7 lg:mt-0">
                <h2>Primary</h2>
                <input v-model="primary" type="color" name="primary" id="primary" class="w-full mt-5 h-60">
            </div>

            <div class="w-60 mt-7 lg:mt-0">
                <h2>Secondary</h2>
                <input v-model="secondary" type="color" name="primary" id="primary" class="w-full mt-5 h-60">
            </div>

            <div class="w-60 mt-7 lg:mt-0">
                <h2>Teritary</h2>
                <input v-model="teritary" type="color" name="primary" id="primary" class="w-full mt-5 h-60">
            </div>

            <button @click="triggerSubmit">
                <img src="@/assets/images/icons/arrow-right.svg" class="h-20 mt-7 lg:mt-0" alt="">
            </button>

        </div>
        <AFooter></AFooter>
    </div>
</template>

<script setup>
const primary = ref(null);
const secondary = ref(null);
const teritary = ref(null)

const router = useRouter();
definePageMeta({
    pageTransition: {
        name: 'page'
    }
})

// Function to convert a color to hexadecimal format
const convertToHex = (color) => {
    // Check if the color is already in hexadecimal format
    const hexRegex = /^#(?:[0-9a-fA-F]{3}){1,2}$/;
    if (hexRegex.test(color)) {
        return color.toUpperCase();
    }

    // Check if the color is in RGB format
    const rgbRegex = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/;
    const rgbMatch = color.match(rgbRegex);
    if (rgbMatch) {
        const [, r, g, b] = rgbMatch;
        return `#${componentToHex(parseInt(r, 10))}${componentToHex(parseInt(g, 10))}${componentToHex(parseInt(b, 10))}`;
    }

    // Check if the color is in HSL format
    const hslRegex = /^hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)$/;
    const hslMatch = color.match(hslRegex);
    if (hslMatch) {
        const [, h, s, l] = hslMatch;
        const rgbColor = hslToRgb(parseInt(h, 10) / 360, parseInt(s, 10) / 100, parseInt(l, 10) / 100);
        return rgbToHex(rgbColor[0], rgbColor[1], rgbColor[2]);
    }

    return null;
};

// Function to convert a component (r, g, b) to hexadecimal format
const componentToHex = (component) => {
    const hex = component.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
};

// Function to convert RGB color to hexadecimal format
const rgbToHex = (r, g, b) => {
    return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
};

// Function to convert HSL color to RGB format
const hslToRgb = (h, s, l) => {
    let r, g, b;

    if (s === 0) {
        r = g = b = l;
    } else {
        const hue2rgb = (p, q, t) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };

        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
};



const triggerSubmit = () => {
    // Create an object to store the selected colors
    const selectedColors = {};

    // Convert the selected colors to hexadecimal format and add them to the object
    if (primary.value !== null) {
        const hexPrimary = convertToHex(primary.value);
        if (hexPrimary !== null) {
            selectedColors.primary = hexPrimary;
        }
    }
    if (secondary.value !== null) {
        const hexSecondary = convertToHex(secondary.value);
        if (hexSecondary !== null) {
            selectedColors.secondary = hexSecondary;
        }
    }
    if (teritary.value !== null) {
        const hexTeritary = convertToHex(teritary.value);
        if (hexTeritary !== null) {
            selectedColors.teritary = hexTeritary;
        }
    }

    // Check if any colors are selected
    if (Object.keys(selectedColors).length === 0) {
        // No colors selected, do nothing
        return;
    }

    // Save the selected colors object to local storage
    localStorage.setItem('selectedColors', JSON.stringify(selectedColors));

    // Log the confirmation message
    console.log('Selected colors saved to local storage.');
    router.push('/style-upholstery/submit')
};




</script>
