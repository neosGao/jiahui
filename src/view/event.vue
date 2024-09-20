<template>
  <topNav />
  <div class="cut_mian">
    <div
      class="w-full h-[633px] bg-cover bg-center relative"
      :style="{ backgroundImage: `url(${picRootPath + picLastPath})` }"
    >
      <img
        src="@/assets/img/event/event1.png"
        alt=""
        class="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      />
    </div>
    <div
      class="bg-slate-200 bg-opacity-50 w-full h-[50px] flex items-center justify-end"
    >
      <img src="@/assets/img/event/event2.png" alt="" class="mr-[15%]" />
    </div>
    <div class="w-[70%] mx-auto mt-[100px] mb-[100px]">
      <a-tabs
        v-model:activeKey="activeKey"
        centered
        size="large"
        :tabBarGutter="100"
        @change="tabsChange"
      >
        <a-tab-pane
          :key="b"
          :tab="a.name"
          v-for="(a, b) in eventList"
        ></a-tab-pane>
      </a-tabs>
      <a-row :gutter="50">
        <a-col :span="8" v-for="(a, b) in eventList2" :key="b" class="mb-10">
          <div>
            <img :src="picRootPath + a.picUrl" alt="" class="w-full" />
          </div>
          <div class="flex justify-between my-5">
            <span>{{ a.typeName }}</span
            ><span>{{ a.date }}</span>
          </div>
          <div class="text-3xl font-semibold">
            {{ a.name }}
          </div>
          <div>
            {{ a.remark }}
          </div>
        </a-col></a-row
      >
    </div>
  </div>
  <bottomNav />
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { http } from "../http";
const activeKey = ref(1);
const eventList: any = ref([]);
const eventList2: any = ref([1, 2, 3, 4]);
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
        code: "news_banner",
      },
    }
  );
  console.log("😅 ~ getPic ~ data:", data.data.data[0].picUrl);
  picLastPath.value = data.data.data[0].picUrl;
};
// 获取event
const geteventList = async () => {
  const data: any = await http.get("/api/front/article/newstypelist");
  eventList.value = data.data.data;
  tabsChange(1);
};
geteventList();
getPic();
const tabsChange = async (a: any) => {
  const res: any = await http.get("/api/front/article/page", {
    params: { tid: eventList.value[a].id },
  });
  eventList2.value = res.data.data.list;
};
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
:deep(.ant-tabs .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn) {
  color: #000 !important;
}
:deep(.ant-tabs-ink-bar) {
  background-color: #208d7b;
}
</style>
