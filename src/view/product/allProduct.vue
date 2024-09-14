<template>
  <topNav />
  <div class="all_product">
    <div class="top_img">
      <img src="@/assets/img/product/all/top_bg.jpg" class="big_img" />
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
      <div class="item">
        <img src="@/assets/img/product/all/cut.jpg" />
        <div class="title">Cut flowers and branches</div>
      </div>
      <div class="item">
        <img src="@/assets/img/product/all/potted.jpg" />
        <div class="title">Potted plants</div>
      </div>
      <div class="item">
        <img src="@/assets/img/product/all/spice.jpg" />
        <div class="title">Spice</div>
      </div>
      <div class="item">
        <img src="@/assets/img/product/all/trees.jpg" />
        <div class="title">Trees</div>
      </div>
      <div class="item">
        <img src="@/assets/img/product/all/seasonal.jpg" />
        <div class="title">Seasonal items</div>
      </div>
      <div class="item">
        <img src="@/assets/img/product/all/ornaments.jpg" />
        <div class="title">Ornaments</div>
      </div>
    </div>
  </div>
  <bottomNav />
</template>
<script lang="ts" setup></script>

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
