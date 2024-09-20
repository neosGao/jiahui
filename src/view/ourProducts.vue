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
        <div class="mt-10 text-xl w-[70%] mx-auto text-slate-500">
          We are passionate about everything in artificial plants - We have a
          large selection for homes and public environments with an assortment
          under constant change to suit your needs. Artificial plants have long
          been used as gifts and in interior design, yet the feeling lives on in
          many that artificial plants should be low quality and cheap because
          they do not look or feel natural. This is no longer the truth. Today's
          modern technology makes it possible to produce high quality flowers
          that are very close to the real thing. See for example our range
          ofReal Touch are created with extra love and have the feeling of real
          flowers. Why artificial plants? We see that demand is increasing at
          all our retailers and large chains have begun to pick it up in their
          range. There are many plants that are super nice but do not last very
          long, you may not have the energy to buy new plants or take care of
          large arrangements that constantly require your care and it is not
          certain that they will survive for it. Everything you can do with
          ordinary plants can also be done with our products and it is
          guaranteed to last longer. Many do not even reflect on the fact that
          they are artificial plants as they are so similar in color and shape.
          In our range we have everything from cut flowers to large trees and
          green plants - there is something for everyone.
        </div>
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
