<template>
  <topNav />
  <div class="cut_mian">
    <div
      class="w-full h-[633px] bg-cover bg-center relative"
      :style="{ backgroundImage: `url(${picRootPath + picLastPath})` }"
    >
      <img
        src="@/assets/img/afterSale/afterSale1.png"
        alt=""
        class="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      />
    </div>
    <div
      class="bg-slate-200 bg-opacity-50 w-full h-[50px] flex items-center justify-end"
    >
      <img
        src="@/assets/img/afterSale/afterSale2.png"
        alt=""
        class="mr-[15%]"
      />
    </div>
    <div class="w-[50%] mx-auto mt-[100px]">
      <div>
        We adhere to the quality principle of "not affecting customer sales" as
        our core . Actively participate in all issues that affect customer sales
        with a responsible, cooperative, and improvement mindset, and bear the
        resulting losses to the end. While bringing excellent products to our
        customers, we can also assist them in store design, product display,
        packaging and matching, and provide free assistance. We are willing to
        solve their concerns with the utmost sincerity, and provide enthusiastic
        and warm high-quality service and technical support.
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
        code: "service_banner",
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
