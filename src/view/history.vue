<template>
  <topNav />
  <div class="cut_mian">
    <div
      class="w-full h-[633px] bg-cover bg-center] relative"
      :style="{ backgroundImage: `url(${picRootPath + picLastPath})` }"
    ></div>
    <div
      class="bg-slate-200 bg-opacity-50 w-full h-[50px] flex items-center justify-end"
    >
      <img src="@/assets/img/history/history.png" alt="" class="mr-[15%]" />
    </div>
    <div class="w-[70%] mx-auto mt-[100px] mb-[100px]">
      <div class="incenter flex-col">
        <img src="@/assets/img/history/history1.png" alt="" />
      </div>
      <div class="mt-10">
        <a-row :gutter="50">
          <a-col :span="8" v-for="(a, b) in ListData" :key="b"
            ><div class="border-t-4 border-t-slate-500 py-[92px]">
              <div class="text-5xl">{{ a.name }}</div>
              <div class="mt-5 text-base">{{ a.remark }}</div>
            </div></a-col
          >
        </a-row>
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
const ListData: any = ref([]);
const getPic = async () => {
  const data: any = await http.get(
    // 获取banner接口
    "/api/front/advert/limitlist",
    {
      params: {
        code: "devleop_banner",
      },
    }
  );
  console.log("😅 ~ getPic ~ data:", data.data.data[0].picUrl);
  picLastPath.value = data.data.data[0].picUrl;
};
const getPicList = async () => {
  const data: any = await http.get(
    // 获取banner接口
    "/api/front/article/developenlist"
  );
  console.log("😅 ~ getPic ~ data:", data.data.data);
  ListData.value = data.data.data;
};
getPic();
getPicList();
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
