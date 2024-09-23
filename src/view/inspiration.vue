<template>
  <topNav />
  <div class="cut_mian min-w-[1280px]">
    <div
      class="w-full h-[633px] bg-cover bg-center relative"
      :style="{ backgroundImage: `url(${picRootPath + picLastPath})` }"
    >
      <img
        src="@/assets/img/inspiration/inspiration1.png"
        alt=""
        class="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      />
    </div>
    <div
      class="bg-slate-200 bg-opacity-50 w-full h-[50px] flex items-center justify-end"
    >
      <img
        src="@/assets/img/inspiration/inspiration2.png"
        alt=""
        class="mr-[15%]"
      />
    </div>
    <div class="w-[70%] mx-auto mt-[100px] mb-[100px]">
      <div class="incenter">
        <img src="@/assets/img/inspiration/inspiration3.png" alt="" />
      </div>
      <div class="incenter mt-[50px]">
        <!-- <div class="container">
          <div class="left-image">
            <img src="@/assets/img/inspiration/inspiration4.png" />
          </div>

          <div class="right-images">
            <img src="@/assets/img/inspiration/inspiration5.png" />
            <img src="@/assets/img/inspiration/inspiration6.png" />
            <img src="@/assets/img/inspiration/inspiration7.png" />
            <img src="@/assets/img/inspiration/inspiration8.png" />
          </div>
        </div> -->
        <a-row :gutter="20">
          <a-col :span="8" v-for="(a, b) in midPics" :key="b">
            <img :src="picRootPath + a.picUrl" />
          </a-col>
        </a-row>
      </div>
    </div>
    <div
      class="w-full h-[400px] bg-cover bg-center bg-[url('@/assets/img/inspiration/inspiration9.png')] relative"
    >
      <div class="incenter flex-col pt-[120px]">
        <img src="@/assets/img/inspiration/inspiration10.png" alt="" />
        <img
          src="@/assets/img/inspiration/inspiration11.png"
          alt=""
          class="mt-[25px]"
        />
      </div>
      <div class="incenter mt-[60px]">
        <a-button
          type="primary"
          class="rounded-none"
          @click="router.push('searchPage')"
          >Explore</a-button
        >
        <a-button class="rounded-none ml-[25px]" @click="router.push('contact')"
          >Contact Us</a-button
        >
      </div>
    </div>
    <div class="w-[70%] py-[50px] min-w-[1280px] mx-auto">
      <a-row :gutter="20">
        <a-col :span="12" v-for="(a, b) in typeList" :key="b" class="mb-5">
          <div
            class="w-full h-[560px] relative bg-cover bg-center cursor-pointer"
            :style="{ backgroundImage: `url(${picRootPath + a.picUrl})` }"
            @click="
              router.push({
                path: '/seasons',
                query: { name: a.name, id: a.id },
              })
            "
          >
            <div
              class="bg-slate-200 opacity-80 incenter py-[40px] absolute bottom-0 w-full bg-cover text-[#000] text-3xl"
            >
              {{ a.name }}
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
  <bottomNav />
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { http } from "../http";
import { useRouter } from "vue-router";
const router = useRouter();
// 图片根目录
const picRootPath = import.meta.env.VITE_PIC_URL;
// 图片地址
const picLastPath = ref("");
const midPics: any = ref([]);
const typeList: any = ref([]);
const getPic = async () => {
  const data: any = await http.get(
    // 获取banner接口
    "/api/front/inpiration/homeunify"
  );
  console.log("😅 ~ getPic ~ data:", data.data.data);
  picLastPath.value = data.data.data.bannerPic;
  midPics.value = data.data.data.midPics;
  typeList.value = data.data.data.typeList;
};
getPic();
</script>
<style lang="less" scoped>
.container {
  display: flex;
  gap: 20px;
}
.left-image {
  width: 50%;
}
.right-images {
  width: 50%; /* 调整容器的宽度 */
  column-count: 2; /* 2列布局 */
  column-gap: 20px; /* 列间距 */
}
.right-images img {
  width: 100%;
  margin-bottom: 20px;
  display: block;
  break-inside: avoid; /* 防止图片被打断 */
}
</style>
