<template>
  <topNav />
  <div class="cut_mian">
    <div
      class="w-full h-[633px] bg-cover bg-center] relative"
      :style="{ backgroundImage: `url(${picRootPath + picLastPath})` }"
    >
      <img
        src="@/assets/img/ourProducts/ourProducts1.png"
        alt=""
        class="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      />
    </div>
    <div
      class="bg-slate-200 bg-opacity-50 w-full h-[50px] flex items-center justify-end"
    >
      <img
        src="@/assets/img/ourProducts/ourProducts2.png"
        alt=""
        class="mr-[15%]"
      />
    </div>
    <div class="w-[70%] mx-auto mt-[100px] mb-[100px]">
      <div class="incenter flex-col">
        <img src="@/assets/img/ourProducts/ourProducts3.png" alt="" />
        <img
          src="@/assets/img/ourProducts/ourProducts4.png"
          alt=""
          class="mt-10"
        />
        <img
          src="@/assets/img/ourProducts/ourProducts5.png"
          alt=""
          class="mt-10"
        />
      </div>
    </div>
  </div>
  <bottomNav />
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { http } from "../http";
// 图片根目录
const picRootPath = import.meta.env.VITE_PIC_URL;
// 图片地址
const picLastPath = ref("");
const getPic = async () => {
  const data: any = await http.get(
    // 获取banner接口
    "/api/front/advert/limitlist",
    {
      params: {
        code: "ourproduct_banner",
      },
    }
  );
  console.log("😅 ~ getPic ~ data:", data.data.data[0].picUrl);
  picLastPath.value = data.data.data[0].picUrl;
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
