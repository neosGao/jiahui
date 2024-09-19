<template>
  <div class="bottom_nav_bottom">
    <div class="top_bg">
      <div class="top">
        <div class="item">
          <div class="title">ABOUT US</div>
          <div class="content">
            <div class="content_item" @click="router.push('ourProducts')">
              OUR PRODUCTS
            </div>
            <div class="content_item" @click="router.push('home')">
              HOW TO SHOP
            </div>
            <div class="content_item" @click="router.push('aboutUs')">
              COMPANY INFO
            </div>
            <div class="content_item" @click="router.push('event')">EVENT</div>
            <div class="content_item">HISTORY OF DEVELOPMENT</div>
          </div>
        </div>
        <div class="item">
          <div class="title">ASSORTMENT</div>
          <div class="content">
            <div class="content_item" @click="router.push('allProducts')">
              ALL PRODUCTS
            </div>
            <div
              class="content_item"
              v-for="(a, b) in picList"
              :key="b"
              @click="
                router.push({
                  name: 'Products',
                  query: { id: a.id, name: a.name },
                })
              "
            >
              {{ a.name }}
            </div>
            <!-- <div class="content_item">POTTED PLANTS</div>
            <div class="content_item">SPICE</div>
            <div class="content_item">TREES</div>
            <div class="content_item">SEASONALITEMS</div>
            <div class="content_item">ORNAMENTS</div> -->
          </div>
        </div>
        <div class="item">
          <div class="title">SUPPORT</div>
          <div class="content">
            <div class="content_item" @click="router.push('contact')">
              CONTACT US
            </div>
            <div class="content_item" @click="router.push('FAQ')">F.A.Q</div>
            <div class="content_item">REGISTER A ACCOUNT</div>
          </div>
        </div>
        <div class="item">
          <div class="title">COMPANY</div>
          <div class="content" style="margin-bottom: 30px">
            <div class="content_item">WWW.HACDESIGNS.COM</div>
            <div class="content_item">+86 769 22989980</div>
            <div class="content_item">
              No.6 Lane 6 Hadi New Countryside Nancheng District<br />DongGuang
              City Guang Dong Province,China
            </div>
          </div>
          <div class="title">HACCLE</div>
          <div class="content">
            <div class="content_item">STORY</div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="tips">Copyright ◎ 2024 HACCLE</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
// import { http } from "../http";
import { useMyStore } from "../store/goodsCount";
const myStore = useMyStore();
const router = useRouter(); // 产品大类
const picList: any = ref([]);
const getPicList = async () => {
  // const data: any = await http.get("/api/front/product/allonelist");
  await myStore.fetchDataPro();
  picList.value = myStore.dataPro;
};
getPicList();
</script>

<style lang="less" scoped>
.bottom_nav_bottom {
  width: 100%;
  margin-top: 20px;
  .top_bg {
    width: 100%;
    padding: 45px 0px;
    background-color: #f8f7f8;
    display: flex;
    justify-content: center;
    font-size: 14px;
    min-width: 1280px;
    .top {
      width: 70%;
      min-width: 1280px;
      background-color: #f8f7f8;
      display: flex;
      justify-content: space-between;
      .item {
        text-align: left;
        .title {
          font-size: 16px;
          font-weight: bold;
          margin-bottom: 25px;
        }
        .content {
          color: #575453;
          .content_item {
            cursor: pointer;
            font-size: 14px;
          }
        }
      }
    }
  }
  .bottom {
    background-color: #208d7b;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    padding: 15px 25px;
    text-align: left;
  }
}
</style>
