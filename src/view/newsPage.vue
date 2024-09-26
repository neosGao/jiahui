<template>
  <topNav />
  <div class="cut_mian">
    <div
      class="bg-slate-200 bg-opacity-50 w-full h-[50px] flex items-center justify-end"
    >
      <img src="@/assets/img/event/event2.png" alt="" class="mr-[15%]" />
    </div>
    <div class="w-[70%] mx-auto mt-[72px] mb-[100px]">
      <a-row :gutter="50">
        <a-col :span="16">
          <div class="text-4xl font-semibold">{{ eventList.name }}</div>
          <div class="flex justify-between mt-[37px]">
            <div>{{ eventList.date }}</div>
            <div class="incenter">
              <EyeOutlined class="text-[#208d7b] mr-2" />
              {{ eventList.clickNum }}
              <LikeOutlined class="text-[#208d7b] mx-2" />
              {{ eventList.favorNum }}
            </div>
          </div>
          <div class="mt-[50px]" v-html="eventList.content"></div>
          <!-- <div class="w-[150px] h-[150px] rounded-full"></div> -->
          <div class="incenter mt-[100px]">
            <img
              src="@/assets/img/event/good.png"
              alt=""
              class="cursor-pointer"
              @click="likeThis"
            />
          </div>
        </a-col>
        <a-col :span="8">
          <div
            class="border-t-4 pt-[20px] border-t-[#208d7b] text-[#208d7b] text-2xl mb-[37px]"
          >
            LATEST NEWS
          </div>
          <div
            class="p-[15px] bg-[#f8f7f8] h-[130px] mb-[6px] flex cursor-pointer"
            v-for="(a, b) in eventList.latests"
            :key="b"
            @click="lastNews(a)"
          >
            <img
              :src="picRootPath + a.picUrl"
              alt=""
              class="w-[140px] h-[97px]"
            />
            <div class="ml-[17.5px]">
              <div class="my-[5px]">{{ a.date }}</div>
              <div class="font-semibold">
                {{ a.name }}
              </div>
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
import { EyeOutlined, LikeOutlined } from "@ant-design/icons-vue";
import { useRoute, useRouter } from "vue-router";
import { message } from "ant-design-vue";
const route = useRoute();
const router = useRouter();
const eventList: any = ref([]);
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
  const data: any = await http.get(
    "/api/front/article/detail/" + route.query.id
  );
  eventList.value = data.data.data;
};
geteventList();
getPic();
const lastNews = async (a: any) => {
  const data: any = await http.get("/api/front/article/detail/" + a.id);
  eventList.value = data.data.data;
  router.push({ path: "/newsPage", query: { id: a.id } });
};
const likeThis = async () => {
  const data: any = await http.get("/api/front/member/favornews", {
    params: { favor: true, id: route.query.id },
  });
  if (data.data.code === 200) {
    message.success("Favor success");
  }
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
