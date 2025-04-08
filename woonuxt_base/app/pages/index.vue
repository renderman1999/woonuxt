<script lang="ts" setup>
import { ProductsOrderByEnum } from '#woo';
const { siteName, description, shortDescription, siteImage } = useAppConfig();

const { data } = await useAsyncGql('getProductCategories', { first: 6 });
const productCategories = data.value?.productCategories?.nodes || [];

const { data: productData } = await useAsyncGql('getProducts', { first: 5, orderby: ProductsOrderByEnum.POPULARITY });
const popularProducts = productData.value.products?.nodes || [];

useSeoMeta({
  title: `Home`,
  ogTitle: siteName,
  description: description,
  ogDescription: shortDescription,
  ogImage: siteImage,
  twitterCard: `summary_large_image`,
});
</script>

<template>
  <main>
    <HeroBanner />

    <div class="container flex flex-wrap items-center justify-center my-16 text-center gap-x-8 gap-y-4 brand lg:justify-between">
      <img src="/images/logoipsum-211.svg" alt="Brand 1" width="200px"  />
      <img src="/images/logoipsum-221.svg" alt="Brand 2"  width="200px"  />
      <img src="/images/logoipsum-225.svg" alt="Brand 3" width="200px"  />
      <img src="/images/logoipsum-280.svg" alt="Brand 4" width="200px"  />
      <img src="/images/logoipsum-284.svg" alt="Brand 5" width="200px"  />
      <img src="/images/logoipsum-215.svg" alt="Brand 6" width="200px"  />
    </div>

    <section class="container my-16">
      <div class="flex items-end justify-between">
        <h2 class="text-lg font-semibold md:text-2xl">{{ $t('messages.shop.shopByCategory') }}</h2>
        <NuxtLink class="text-primary" to="/categories">{{ $t('messages.general.viewAll') }}</NuxtLink>
      </div>
      <div class="grid justify-center grid-cols-2 gap-4 mt-8 md:grid-cols-3 lg:grid-cols-6">
        <CategoryCard v-for="(category, i) in productCategories" :key="i" class="w-full" :node="category" />
      </div>
    </section>

    <section class="container grid gap-4 my-24 md:grid-cols-2 lg:grid-cols-4">
      <div class="flex items-center gap-8 p-8 bg-white rounded-lg">
        <img src="/icons/box.svg" width="60" height="60" alt="Free Shipping" loading="lazy" />
        <div>
          <h3 class="text-xl font-semibold">Consegna Gratuita</h3>
          <p class="text-sm">Oltre i €50 la consegna è gratuita</p>
        </div>
      </div>
      <div class="flex items-center gap-8 p-8 bg-white rounded-lg">
        <img src="/icons/moneyback.svg" width="60" height="60" alt="Money Back" loading="lazy" />
        <div>
          <h3 class="text-xl font-semibold">Rilassati</h3>
          <p class="text-sm">Pensiamo a tutto noi!</p>
        </div>
      </div>
      <div class="flex items-center gap-8 p-8 bg-white rounded-lg">
        <img src="/icons/secure.svg" width="60" height="60" alt="Secure Payment" loading="lazy" />
        <div>
          <h3 class="text-xl font-semibold">Pagamento Sicuro</h3>
          <p class="text-sm">Pagamento 100% sicuro.</p>
        </div>
      </div>
      <div class="flex items-center gap-8 p-8 bg-white rounded-lg">
        <img src="/icons/support.svg" width="60" height="60" alt="Support 24/7" loading="lazy" />
        <div>
          <h3 class="text-xl font-semibold">Assistenza</h3>
          <p class="text-sm">Contattaci per avere supporto sul tuo ordine</p>
        </div>
      </div>
    </section>

    <section class="container my-16" v-if="popularProducts">
      <div class="flex items-end justify-between">
        <h2 class="text-lg font-semibold md:text-2xl">{{ $t('messages.shop.popularProducts') }}</h2>
        <NuxtLink class="text-primary" to="/products">{{ $t('messages.general.viewAll') }}</NuxtLink>
      </div>
      <ProductRow :products="popularProducts" class="grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mt-8" />
    </section>
  </main>
</template>

<style scoped>
.brand img {
  max-height: min(8vw, 120px);
  object-fit: contain;
  object-position: center;
}
</style>
