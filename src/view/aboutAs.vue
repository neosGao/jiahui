<template>
  <topNav />
  <div class="cut_mian">
    <div
      class="w-full h-[633px] bg-cover bg-center relative"
      :style="{ backgroundImage: `url(${picRootPath + picLastPath})` }"
    >
      <img
        src="@/assets/img/aboutAs/aboutAs1.png"
        alt=""
        class="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      />
    </div>
    <div
      class="bg-slate-200 bg-opacity-50 w-full h-[50px] flex items-center justify-end"
    >
      <img src="@/assets/img/aboutAs/aboutAs2.png" alt="" class="mr-[15%]" />
    </div>
    <div class="w-[70%] mx-auto mt-[100px]">
      <a-row>
        <a-col :span="8" class="incenter flex-col">
          <img src="@/assets/img/aboutAs/aboutUs3.png" alt="" />
          <img src="@/assets/img/aboutAs/aboutUs6.png" alt="" class="my-10" />
          <div class="w-[300px] text-slate-500">
            From life, serve life. Life-oriented brand values orientation, Is
            the most intuitive interpretation of brand extension.
          </div>
        </a-col>
        <a-col :span="8" class="incenter flex-col">
          <img src="@/assets/img/aboutAs/aboutUs4.png" alt="" />
          <img src="@/assets/img/aboutAs/aboutUs7.png" alt="" class="my-10" />
          <div class="w-[300px] text-slate-500">
            From life and above life Art is the distillation of creativity, It
            is also the creative concept that HACCLE always adheres to.
          </div>
        </a-col>
        <a-col :span="8" class="incenter flex-col">
          <img src="@/assets/img/aboutAs/aboutUs5.png" alt="" />
          <img src="@/assets/img/aboutAs/aboutUs8.png" alt="" class="my-10" />
          <div class="w-[300px] text-slate-500">
            Home is the harbor of life and the carrier of love. The focal points
            of life and art finally converge at the node of the home.
          </div>
        </a-col>
      </a-row>
      <div class="mt-40 text-right relative">
        <img
          src="@/assets/img/aboutAs/aboutUs9.png"
          alt=""
          class="absolute top-20"
        />
        <div class="bg-slate-100 inline-block w-[70%] p-[150px] pl-[20%]">
          <img src="@/assets/img/aboutAs/aboutUs10.png" alt="" /><img
            src="@/assets/img/aboutAs/aboutUs11.png"
            alt=""
            class="mt-10"
          />
        </div>
      </div>
    </div>
    <img src="@/assets/img/aboutAs/aboutUs12.png" alt="" class="w-full" />
    <div class="w-[70%] mx-auto">
      <div class="incenter flex-col">
        <img
          src="@/assets/img/aboutAs/aboutUs13.png"
          alt=""
          class="mt-[160px] mb-[80px]"
        />
        <img
          src="@/assets/img/aboutAs/aboutUs14.png"
          alt=""
          class="mb-[120px]"
        />
      </div>
      <img src="@/assets/img/aboutAs/aboutUs15.png" alt="" class="w-full" />
      <div
        class="w-full bg-cover bg-center bg-[url('@/assets/img/aboutAs/aboutUs16.png')] p-[90px] incenter flex-col"
      >
        <img src="@/assets/img/aboutAs/aboutUs18.png" alt="" />
        <img src="@/assets/img/aboutAs/aboutUs17.png" alt="" class="mt-10" />
      </div>
    </div>
    <div
      class="bg-[url('@/assets/img/aboutAs/aboutUs19.png')] bg-cover bg-center py-[120px]"
    >
      <div class="text-[#fff] text-3xl text-center">
        Qualification Certification
      </div>
      <div class="flex text-[#fff] border w-[70%] mx-auto mt-[50px]">
        <div class="flex-1 border text-center py-[2%]">
          Social responsibility<br />BSCI
        </div>
        <div class="flex-1 border text-center py-[2%]">
          Quality system<br />FCCA
        </div>
        <div class="flex-1 border text-center py-[2%]">
          Environmental<br />ICS
        </div>
        <div class="flex-1 border text-center py-[2%]">C-TPAT<br />SCS</div>
        <div class="flex-1 border text-center py-[2%]">
          National Credit Certification<br />AAA
        </div>
      </div>
      <div
        class="flex text-[#fff] w-[70%] mx-auto mt-[50px] justify-between relative"
      >
        <div class="custom-slick-arrow" style="transform: translateY(50%)">
          <left-circle-outlined class="text-3xl" />
        </div>
        <img src="@/assets/img/aboutAs/aboutUs20.png" alt="" />
        <img src="@/assets/img/aboutAs/aboutUs21.png" alt="" />
        <img src="@/assets/img/aboutAs/aboutUs22.png" alt="" />
        <img src="@/assets/img/aboutAs/aboutUs23.png" alt="" />
        <img src="@/assets/img/aboutAs/aboutUs24.png" alt="" />
        <div class="custom-slick-arrow" style="transform: translateY(50%)">
          <right-circle-outlined class="text-3xl" />
        </div>
      </div>
    </div>
  </div>
  <bottomNav />
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { http } from "../http";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons-vue";
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
        code: "aboutus_banner",
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
