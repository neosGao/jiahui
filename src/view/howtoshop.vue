<template>
  <topNav />
  <div class="cut_mian">
    <div
      class="w-full h-[633px] bg-cover bg-center relative"
      :style="{ backgroundImage: `url(${picRootPath + picLastPath})` }"
    >
      <img
        src="@/assets/img/howtoshop/howtoshop1.png"
        alt=""
        class="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      />
    </div>
    <div
      class="bg-slate-200 bg-opacity-50 w-full h-[50px] flex items-center justify-end"
    >
      <img
        src="@/assets/img/howtoshop/howtoshop2.png"
        alt=""
        class="mr-[15%]"
      />
    </div>
    <div class="w-[70%] mx-auto mt-[100px] bg-[#f8f7f8] p-[60px]">
      <div class="text-3xl">Log In</div>
      <div class="mt-[30px]">
        To access our product information, you need to have an account. If you
        want to become a distributor, please register here. If you are already a
        distributor of our products but need an account, please contact us.
        Unfortunately, we do not sell directly to private individuals. Find the
        content you are looking for Under the search bar, you can find all of
        our product categories. After clicking on a specific product, you can
        choose to add it directly to your shopping cart or add it to your
        favorites (which requires you to log in to your account). All prices are
        unit prices. Items placed in the shopping basket will not be deleted
        until the order is placed and confirmed.
      </div>
      <div class="text-3xl mt-[100px]">Delivery date</div>
      <div class="mt-[30px]">
        Once you have added the desired products to the basket, they are divided
        into one or more orders depending on the stock status. In the basket,
        select the desired delivery date on these. Selected delivery date means
        the week your order is dispatched from our warehouse. Delivery address
        Check that the delivery address and the order acknowledgement email are
        correct. Send orders An order acknowledgement is sent to the specified
        email address.
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
        code: "howtoshop_banner",
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
