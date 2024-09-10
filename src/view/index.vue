<template>
  <div
    class="w-full h-full bg-cover bg-center bg-[url('/src/assets/img/index/bg.png')]"
  >
    <div
      class="bg-slate-600 bg-opacity-50 w-1/4 h-full p-4 pl-[5%] pt-60 relative"
    >
      <div class="mb-40">
        <img class="cursor-pointer" :src="url1" />
      </div>
      <div class="mb-20">
        <img class="cursor-pointer" :src="url2" />
      </div>
      <div class="mb-20">
        <img class="cursor-pointer" :src="url3" />
      </div>
      <div class="mb-20">
        <img class="cursor-pointer" :src="url4" />
      </div>
      <div class="mb-20">
        <img class="cursor-pointer" :src="url5" />
      </div>
      <div class="flex">
        <img class="cursor-pointer" :src="url6" />
        <img class="cursor-pointer ml-10" :src="url7" />
      </div>
      <div class="absolute bottom-20">
        <img class="cursor-pointer" :src="url8" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const url1 = "/src/assets/img/index/index1.png";
const url2 = "/src/assets/img/index/index2.png";
const url3 = "/src/assets/img/index/index3.png";
const url4 = "/src/assets/img/index/index4.png";
const url5 = "/src/assets/img/index/index5.png";
const url6 = "/src/assets/img/index/index6.png";
const url7 = "/src/assets/img/index/index7.png";
const url8 = "/src/assets/img/index/index8.png";
</script>
