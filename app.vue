<template>
  <ClientOnly>
    <div class="w-full relative ">
      <NuxtPage></NuxtPage>
      <A-Header></A-Header>
    </div>

  </ClientOnly>
</template>

<script setup>
import gsap from 'gsap';
import Lenis from '@studio-freight/lenis'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);
//#TODO add image moving animation to the the second section

onMounted(() => {
  const lenis = new Lenis({
    smooth: true
  })

  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
})
</script>


<style>
* {
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
}

body,
html {
  width: 100%;
  font-family: 'URW Gothic';
}

html.lenis {
  height: auto;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.lenis.lenis-smooth {
  scroll-behavior: auto;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}

.lenis.lenis-stopped {
  overflow: hidden;
}

.lenis.lenis-scrolling iframe {
  pointer-events: none;
}
</style>
