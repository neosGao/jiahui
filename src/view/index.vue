<template>
  <div
    class="w-full h-full bg-cover bg-center bg-[url('@/assets/img/index/bg.jpg')]"
  >
    <div
      class="bg-slate-600 bg-opacity-50 w-1/4 h-full p-4 pl-[5%] pt-60 relative"
    >
      <div class="mb-[30%]">
        <img class="cursor-pointer" :src="url1" />
      </div>
      <div class="mb-[20%]">
        <img class="cursor-pointer" @click="router.push('home')" :src="url2" />
      </div>
      <div class="mb-[20%]">
        <img
          class="cursor-pointer"
          @click="router.push('inspiration')"
          :src="url3"
        />
      </div>
      <div class="mb-[20%]">
        <img
          class="cursor-pointer"
          @click="router.push('contact')"
          :src="url4"
        />
      </div>
      <div class="mb-[20%]">
        <img class="cursor-pointer" @click="router.push('story')" :src="url5" />
      </div>
      <div class="flex">
        <img class="cursor-pointer" :src="url6" />
        <img class="cursor-pointer ml-10" :src="url7" />
      </div>
      <div class="absolute bottom-[5%]">
        <img class="cursor-pointer" :src="url8" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useMyStore } from "../store/goodsCount";
const myStore = useMyStore();
myStore.fetchData();
console.log("😅 ~ myStore:", myStore);
import { useRouter } from "vue-router";
const router = useRouter();
const url1 = new URL("@/assets/img/index/index1.png", import.meta.url).href;
const url2 = new URL("@/assets/img/index/index2.png", import.meta.url).href;
const url3 = new URL("@/assets/img/index/index3.png", import.meta.url).href;
const url4 = new URL("@/assets/img/index/index4.png", import.meta.url).href;
const url5 = new URL("@/assets/img/index/index5.png", import.meta.url).href;
const url6 = new URL("@/assets/img/index/index6.png", import.meta.url).href;
const url7 = new URL("@/assets/img/index/index7.png", import.meta.url).href;
const url8 = new URL("@/assets/img/index/index8.png", import.meta.url).href;
</script>
