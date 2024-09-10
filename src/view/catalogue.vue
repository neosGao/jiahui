<template>
  <topNav />
  <div
    class="w-full h-[333px] bg-cover bg-center bg-[url('/src/assets/img/catalogue/catalogue1.png')]"
  ></div>
  <div
    class="bg-slate-200 bg-opacity-50 w-full h-[50px] flex items-center justify-end"
  >
    <img src="../assets/img/catalogue/catalogue2.png" alt="" class="mr-[10%]" />
  </div>
  <div class="w-full text-center flex items-center justify-center mt-20">
    <img src="../assets/img/catalogue/catalogue3.png" alt="" />
  </div>
  <div class="w-full text-center flex items-center justify-center mt-10">
    <img src="../assets/img/catalogue/catalogue4.png" alt="" />
  </div>
  <div class="w-full flex items-center justify-around mt-10 px-10">
    <div class="flex flex-col items-center">
      <img src="../assets/img/catalogue/catalogue5.png" alt="" />
      <img src="../assets/img/catalogue/catalogue8.png" alt="" />
    </div>
    <div class="flex flex-col items-center">
      <img src="../assets/img/catalogue/catalogue6.png" alt="" />
      <img src="../assets/img/catalogue/catalogue8.png" alt="" />
    </div>
    <div class="flex flex-col items-center pb-20">
      <img src="../assets/img/catalogue/catalogue7.png" alt="" />
      <img src="../assets/img/catalogue/catalogue8.png" alt="" />
    </div>
  </div>
  <bottomNav></bottomNav>
</template>

<script lang="ts" setup>
import topNav from "../components/topNav.vue";
import bottomNav from "../components/bottomNav.vue";
</script>
