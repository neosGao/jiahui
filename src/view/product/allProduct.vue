<template>
  <topNav />
  <div class="all_product">
    <div class="top_img">
      <!-- <img src="@/assets/img/product/all/top_bg.jpg" class="big_img" /> -->
      <img :src="picRootPath + picLastPath" class="big_img" />
      <img src="@/assets/img/product/all/top_sgin.png" class="sgin_img" />
    </div>
    <div class="nav">
      <div class="item">
        <div class="name">HOME</div>
        <div class="name">/</div>
        <div class="name">ALL PRODUCTS</div>
      </div>
    </div>
    <div class="content">
      <div
        class="item"
        v-for="(a, b) in picList"
        :key="b"
        @click="
          router.push({ name: 'Products', query: { id: a.id, name: a.name } })
        "
      >
        <img :src="picRootPath + a.picUrl" />
        <div class="title">{{ a.name }}</div>
      </div>
    </div>
  </div>
  <bottomNav />
</template>
<script lang="ts" setup>
import { http } from "../../http";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
// 图片根目录
const picRootPath = import.meta.env.VITE_PIC_URL;
// import { useMyStore } from "@/store/goodsCount";

// const myStore = useMyStore();
// myStore.fetchData();
// console.log("😅 ~ myStore:", myStore.data);
// 图片地址
const picLastPath = ref("");
const picList: any = ref([]);
const getPic = async () => {
  const data: any = await http.get(
    // 获取banner接口
    "/api/front/advert/limitlist",
    {
      params: {
        code: "product_home_banner",
      },
    }
  );
  console.log("😅 ~ getPic ~ data:", data.data.data[0].picUrl);
  picLastPath.value = data.data.data[0].picUrl;
};
// 产品大类
const getPicList = async () => {
  const data: any = await http.get("/api/front/product/allonelist");
  picList.value = data.data.data;
};

getPic();
getPicList();
</script>

<style lang="less">
.all_product {
  width: 100%;
  min-width: 1280px;
  .top_img {
    position: relative;
    font-size: 0;
    .sgin_img {
      position: absolute;
      bottom: 10%;
      width: 385px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .nav {
    width: 100%;
    background-color: #f8f7f8;
    min-width: 1280px;
    display: flex;
    justify-content: center;
    .item {
      width: 70%;
      min-width: 1280px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .name {
        margin: 20px 3px;
        cursor: pointer;
        color: #474443;
      }
    }
  }
  .content {
    width: 70%;
    min-width: 1280px;
    margin: auto;
    margin-top: 70px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    .item {
      width: 48%;
      cursor: pointer;
      margin-bottom: 70px;
      .title {
        text-align: center;
        padding: 25px 0;
        background-color: #57b8a8;
        font-size: 16px;
        color: #fff;
      }
    }
  }
}
</style>
