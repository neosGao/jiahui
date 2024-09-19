<template>
  <topNav />
  <div class="cut_mian">
    <div
      class="w-full h-[633px] bg-cover bg-center bg-[url('@/assets/img/event/event.png')] relative"
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
      >
        <a-tab-pane key="1" tab="ALL"></a-tab-pane>
        <a-tab-pane key="2" tab="EVENTS"
          ><a-row :gutter="50">
            <a-col :span="8" v-for="(a, b) in eventList" :key="b" class="mb-10">
              <div>
                <img
                  src="@/assets/img/event/event3.png"
                  alt=""
                  class="w-full"
                />
              </div>
              <div class="flex justify-between my-5">
                <span>EVENTS</span><span>20 MARCH 2024</span>
              </div>
              <div class="text-3xl font-semibold">
                Seize the opportunity and develop the market
              </div>
              <div>
                Guangdong jiahui home accessories co., ltd., founded in 2020,
                was formerly known as dongguan jiahuiGuangdong jiahui home
                accessories co., ltd., founded in 2020, was formerly known as
                dongguan jiahui {{ a }}
              </div>
            </a-col></a-row
          ></a-tab-pane
        >
        <a-tab-pane key="3" tab="NEWS"></a-tab-pane>
      </a-tabs>
    </div>
  </div>
  <bottomNav />
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { http } from "../http";
const activeKey = ref("2");
const FAQList: any = ref([]);
// 获取faq
const getFAQList = async () => {
  const data: any = await http.get("/api/front/article/faqenlist");
  FAQList.value = data.data.data;
};
getFAQList();
const eventList = ref<number[]>([1, 2, 3, 4]);
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
