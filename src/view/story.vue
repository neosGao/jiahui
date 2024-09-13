<template>
  <topNav />
  <div class="cut_mian">
    <div
      class="w-full h-[633px] bg-cover bg-center bg-[url('/src/assets/img/story/story.png')]"
    ></div>
    <div
      class="bg-slate-200 bg-opacity-50 w-full h-[50px] flex items-center justify-end"
    >
      <img src="../assets/img/story/story1.png" alt="" class="mr-[15%]" />
    </div>
    <div class="w-[70%] mx-auto mt-[100px] mb-[100px]">
      <img src="../assets/img/story/story2.png" alt="" />
      <div>视频占位</div>
      <div class="flex items-center">
        <img src="../assets/img/story/story3.png" alt="" />
        <div class="bg-[#aeacac] h-[3px] inline-block flex-1 ml-[30px]"></div>
      </div>
      <div class="flex items-center justify-between mt-[50px]">
        <img src="../assets/img/story/story4.png" alt="" />
        <img src="../assets/img/story/story5.png" alt="" />
        <img src="../assets/img/story/story6.png" alt="" />
      </div>
    </div>
    <div class="bg-[#f8f7f8] pt-[100px]">
      <div class="w-[70%] mx-auto incenter flex-col pb-[100px]">
        <img
          src="../assets/img/story/story8.png"
          alt=""
          class="transform -translate-x-[500px]"
        />
        <img src="../assets/img/story/story7.png" alt="" />
        <a-row :gutter="18" class="mt-[100px]">
          <a-col :span="8" v-for="(a, b) in picList" :key="b" class="mt-[50px]">
            <img :src="a.a" alt="" />
            <div class="flex items-end mt-2">
              <img :src="a.b" alt="" />
              <img :src="a.c" alt="" class="ml-2" />
            </div>
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
  <bottomNav />
</template>
<script lang="ts" setup>
import { ref } from "vue";

interface picListType {
  a: string;
  b: string;
  c: string;
}

const picList = ref<picListType[]>([
  {
    a: "/src/assets/img/story/story9.png",
    b: "/src/assets/img/story/story10.png",
    c: "/src/assets/img/story/story11.png",
  },
  {
    a: "/src/assets/img/story/story12.png",
    b: "/src/assets/img/story/story13.png",
    c: "/src/assets/img/story/story14.png",
  },
  {
    a: "/src/assets/img/story/story15.png",
    b: "/src/assets/img/story/story16.png",
    c: "/src/assets/img/story/story17.png",
  },
  {
    a: "/src/assets/img/story/story18.png",
    b: "/src/assets/img/story/story26.png",
    c: "/src/assets/img/story/story19.png",
  },
  {
    a: "/src/assets/img/story/story20.png",
    b: "/src/assets/img/story/story21.png",
    c: "/src/assets/img/story/story22.png",
  },
  {
    a: "/src/assets/img/story/story23.png",
    b: "/src/assets/img/story/story24.png",
    c: "/src/assets/img/story/story25.png",
  },
]);
</script>
<style lang="less" scoped>
.cut_mian {
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
  .title_switch {
    width: 100%;
    // height: 120px;
    min-width: 1280px;
    display: flex;
    border-top: 2px #606060 solid;
    border-bottom: 2px #606060 solid;
    margin: 65px 0;
    .left {
      width: 32.55%;
      display: flex;
      align-items: center;
      border-right: 2px #606060 solid;
      .nul {
        width: 46%;
        flex-shrink: 1;
        height: 1px;
      }
      .title {
        width: 54%;
        padding-right: 50px;
        flex-shrink: 0;
        font-size: 30px;
        font-weight: bold;
        word-break: break-all;
        font-family: "Courier New", Courier, monospace;
      }
    }
    .right {
      width: 67.45%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .nul {
        width: 23%;
        flex-shrink: 1;
        height: 1px;
      }
      .item_box {
        margin-top: 50px;
        width: calc(100% - 23% - 45px);
        padding-left: 45px;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        .item {
          cursor: pointer;
          margin-left: 80px;
          margin-bottom: 50px;
          border-bottom: 1px solid #fff;
          &:hover {
            border-bottom: 1px solid #606060;
          }
        }
        .active {
          border-bottom: 1px solid #606060;
        }
      }
    }
  }
  .select_box {
    width: 70%;
    min-width: 1280px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      > div {
        margin-right: 15px;
      }
    }
    .right {
      display: flex;
      align-items: center;
      .total {
        span {
          color: #208d7b;
          margin-right: 5px;
        }
      }
      .btn {
        display: flex;
        align-items: center;
        background-color: #f8f7f8;
        padding: 5px;
        cursor: pointer;
        transform: rotate(90deg);
        margin-left: 30px;
      }
    }
  }
  .content_box {
    width: 70%;
    min-width: 1280px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    margin-top: 30px;
    .item {
      margin-bottom: 30px;
      .img_box {
        position: relative;
        .like {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          right: 12px;
          top: 12px;
          width: 40px;
          height: 40px;
          background-color: #f8f7f8;
          border-radius: 50%;
          cursor: pointer;
        }
      }
      .title_box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 15px;
        margin-bottom: 15px;
        .title {
          color: #208d7b;
          font-weight: bold;
        }
        .look {
          display: flex;
          align-items: center;
          color: #474443;
          span {
            margin-left: 5px;
          }
        }
      }
      .tips_box {
        line-height: 15px;
        color: #474443;
      }
    }
  }
  .more_btn {
    width: 200px;
    text-align: center;
    font-size: 16px;
    padding: 15px 30px;
    word-break: keep-all;
    margin: auto;
    margin-bottom: 50px;
    background-color: #208d7b;
    color: #fff;
    cursor: pointer;
  }
}
</style>
