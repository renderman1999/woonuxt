<template>
  <div class="relative mx-auto">
    <div class="sfondo_home"></div>

    <NuxtImg
      width="1400"
      height="800"
      class="object-cover w-full h-[420px] lg:h-[560px] xl:h-[640px]"
      src="/images/hero-4.jpg"
      alt="Hero image"
      loading="eager"
      sizes="sm:100vw md:1400px"
      fetchpriority="high"
      preload
      placeholder
      placeholder-class="blur-xl" />

    <div class="container absolute inset-0 flex flex-col items-start justify-center bg-gradient-to-l from-gray-200 md:bg-none">
      <h1 class="text-3xl font-bold md:mb-4 md:text-4xl lg:text-6xl titolo_ombra">Taste Delivery</h1>
       <div class="  mb-8 text-md font-light   text-balance">
        <p class="lg:text-3xl text-white">Sapori autentici di Puglia, consegnati direttamente al tuo approdo: vini, delizie locali e tradizione a portata di mare.</p>
      </div>
      <NuxtLink class="px-6 py-3 font-bold sfondo_arancione text-white bg-gray-800 rounded-xl hover:bg-gray-800" to="/products">Tutti i prodotti</NuxtLink>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>