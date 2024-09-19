<template>
  <topNav />
  <div class="cut_mian min-w-[1280px]">
    <div
      class="w-full h-[633px] bg-cover bg-center bg-[url('@/assets/img/inspiration/inspiration.png')] relative"
    >
      <img
        src="@/assets/img/inspiration/inspiration1.png"
        alt=""
        class="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      />
    </div>
    <div
      class="bg-slate-200 bg-opacity-50 w-full h-[50px] flex items-center justify-end"
    >
      <img
        src="@/assets/img/inspiration/inspiration2.png"
        alt=""
        class="mr-[15%]"
      />
    </div>
    <div class="w-[70%] mx-auto mt-[100px] mb-[100px]">
      <div class="incenter">
        <img src="@/assets/img/inspiration/inspiration3.png" alt="" />
      </div>
      <div class="incenter mt-[50px]">
        <div class="container">
          <!-- Left side large image -->
          <div class="left-image">
            <img src="@/assets/img/inspiration/inspiration4.png" />
          </div>

          <!-- Right side grid of 4 smaller images -->
          <div class="right-images">
            <img src="@/assets/img/inspiration/inspiration5.png" />
            <img src="@/assets/img/inspiration/inspiration6.png" />
            <img src="@/assets/img/inspiration/inspiration7.png" />
            <img src="@/assets/img/inspiration/inspiration8.png" />
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-full h-[400px] bg-cover bg-center bg-[url('@/assets/img/inspiration/inspiration9.png')] relative"
    >
      <div class="incenter flex-col pt-[120px]">
        <img src="@/assets/img/inspiration/inspiration10.png" alt="" />
        <img
          src="@/assets/img/inspiration/inspiration11.png"
          alt=""
          class="mt-[25px]"
        />
      </div>
      <div class="incenter mt-[60px]">
        <a-button type="primary" class="rounded-none">Primary Button</a-button>
        <a-button class="rounded-none ml-[25px]">Primary Button</a-button>
      </div>
    </div>
    <div class="w-full py-[50px] incenter min-w-[1280px]">
      <div
        class="w-[750px] h-[560px] bg-[url('@/assets/img/inspiration/inspiration12.png')] relative bg-cover bg-center"
      >
        <div
          class="bg-slate-200 opacity-80 incenter py-[40px] absolute bottom-0 w-full bg-cover"
        >
          <img src="@/assets/img/inspiration/inspiration16.png" alt="" />
        </div>
      </div>
      <div
        class="ml-[70px] w-[750px] h-[560px] bg-[url('@/assets/img/inspiration/inspiration13.png')] relative bg-cover bg-center"
      >
        <div
          class="bg-slate-200 opacity-80 incenter py-[40px] absolute bottom-0 w-full bg-cover"
        >
          <img src="@/assets/img/inspiration/inspiration17.png" alt="" />
        </div>
      </div>
    </div>
    <div class="w-full py-[50px] incenter min-w-[1280px]">
      <div
        class="w-[750px] h-[560px] bg-[url('@/assets/img/inspiration/inspiration14.png')] relative bg-cover bg-center"
      >
        <div
          class="bg-slate-200 opacity-80 incenter py-[40px] absolute bottom-0 w-full bg-cover"
        >
          <img src="@/assets/img/inspiration/inspiration18.png" alt="" />
        </div>
      </div>
      <div
        class="ml-[70px] w-[750px] h-[560px] bg-[url('@/assets/img/inspiration/inspiration15.png')] relative bg-cover bg-center"
      >
        <div
          class="bg-slate-200 opacity-80 incenter py-[40px] absolute bottom-0 w-full bg-cover"
        >
          <img src="@/assets/img/inspiration/inspiration19.png" alt="" />
        </div>
      </div>
    </div>
  </div>
  <bottomNav />
</template>
<script lang="ts" setup></script>
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
