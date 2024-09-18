<template>
  <topNav />
  <div
    class="w-full h-[880px] bg-cover bg-center bg-[url('@/assets/img/home/home.png')]"
  ></div>
  <div
    class="bg-[#f8f7f8] w-full h-[200px] flex flex-col items-center justify-center"
  >
    <div class="flex flex-row items-center justify-center">
      <div
        class="flex items-center justify-center p-[50px] px-[100px]"
        v-for="(a, b) in picList"
        :key="b"
      >
        <img :src="picRootPath + a.picUrl" alt="" class="w-[50px]" />
        <div class="ml-5">
          <div class="mt-[25px] text-[#208d7b]">{{ a.enName }}</div>
          <div class="mt-[10px]">{{ a.name }}</div>
        </div>
      </div>

      <!-- <div class="flex items-center justify-center p-[50px] px-[100px]">
        <img src="@/assets/img/home/home1.png" alt="" />
        <div class="ml-5">
          <img src="@/assets/img/home/home2.png" alt="" class="mt-[25px]" />
          <img src="@/assets/img/home/home3.png" class="mt-[10px]" alt="" />
        </div>
      </div>
      <div class="flex items-center justify-center p-[50px] px-[100px]">
        <img src="@/assets/img/home/home4.png" alt="" />
        <div class="ml-5">
          <img src="@/assets/img/home/home5.png" alt="" class="mt-[25px]" />
          <img src="@/assets/img/home/home6.png" class="mt-[10px]" alt="" />
        </div>
      </div>
      <div class="flex items-center justify-center p-[50px] px-[100px]">
        <img src="@/assets/img/home/home7.png" alt="" />
        <div class="ml-5">
          <img src="@/assets/img/home/home8.png" alt="" class="mt-[25px]" />
          <img src="@/assets/img/home/home9.png" class="mt-[10px]" alt="" />
        </div>
      </div> -->
    </div>
  </div>
  <div class="w-full px-[500px] py-[50px] incenter">
    <div>
      <img src="@/assets/img/home/home10.png" alt="" />
      <div class="bg-[#57b8a8] incenter py-[40px]">
        <img src="@/assets/img/home/home11.png" alt="" />
      </div>
    </div>
    <div class="ml-[70px]">
      <img src="@/assets/img/home/home12.png" alt="" />
      <div class="bg-[#57b8a8] incenter py-[40px]">
        <img src="@/assets/img/home/home13.png" alt="" />
      </div>
    </div>
  </div>
  <div
    class="bg-[#f8f7f8] w-full h-[200px] flex flex-col items-center justify-center"
  >
    <div class="flex items-center justify-center">
      <div>
        <img src="@/assets/img/home/home14.png" alt="" />
        <img src="@/assets/img/home/home15.png" class="mt-[15px]" alt="" />
      </div>
    </div>
  </div>
  <bottomNav />
</template>

<script lang="ts" setup>
import { http } from "../http";
import { ref } from "vue";
// 图片根目录
const picRootPath = import.meta.env.VITE_PIC_URL;
// 图片地址
const picList: any = ref([]);
const getPicList = async () => {
  const data: any = await http.get("/api/front/home/homeadsamlllist");
  picList.value = data.data.data;
};

getPicList();
</script>
