<template>
  <topNav />
  <div class="cut_mian">
    <div
      class="w-full h-[633px] bg-cover bg-center bg-[url('@/assets/img/FAQ/FAQ.png')] relative"
    >
      <img
        src="@/assets/img/FAQ/FAQ1.png"
        alt=""
        class="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      />
    </div>
    <div
      class="bg-slate-200 bg-opacity-50 w-full h-[50px] flex items-center justify-end"
    >
      <img src="@/assets/img/FAQ/FAQ2.png" alt="" class="mr-[15%]" />
    </div>
    <div class="w-[70%] mx-auto mt-[100px] mb-[100px]">
      <a-collapse v-model:activeKey="activeKey">
        <a-collapse-panel :header="a.name" v-for="(a, b) in FAQList" :key="b">
          <p>{{ a.remark }}</p>
        </a-collapse-panel>
      </a-collapse>
    </div>
  </div>
  <bottomNav />
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { http } from "../http";
const FAQList: any = ref([]);
const activeKey = ref([]);
// 获取faq
const getFAQList = async () => {
  const data: any = await http.get("/api/front/article/faqenlist");
  FAQList.value = data.data.data;
};
getFAQList();
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
