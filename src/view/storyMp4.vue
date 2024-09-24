<template>
  <topNav />
  <div class="cut_mian">
    <div
      class="w-full h-[633px] bg-cover bg-center bg-[url('@/assets/img/story/story.png')]"
    >
      <img
        src="@/assets/img/story/name.png"
        alt=""
        class="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      />
    </div>
    <div
      class="bg-slate-200 bg-opacity-50 w-full h-[50px] flex items-center justify-end"
    >
      <img src="@/assets/img/story/story1.png" alt="" class="mr-[15%]" />
    </div>
    <div class="mx-auto pt-[230px] pb-[260px] px-[20%] bg-[#cccccc]">
      <video width="100%" controls v-if="test">
        <source :src="picRootPath + mp4Path" type="video/mp4" />
      </video>
    </div>
  </div>
  <!-- <a-modal
    v-model:open="test"
    title="preview"
    width="60%"
    :footer="null"
    @afterClose="afterClose"
  >
    <video width="100%" controls v-if="test">
      <source :src="picRootPath + mp4Path" type="video/mp4" />
    </video>
  </a-modal> -->
  <bottomNav />
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { http } from "../http";
import { useRoute } from "vue-router";
const route = useRoute();
// 图片根目录
const picRootPath = import.meta.env.VITE_PIC_URL;

const test: any = ref(false);
const mp4Path: any = ref({});
const videoTit: any = ref({});
const videoList: any = ref([]);
// 视频列表
const getVideoList = async () => {
  const data: any = await http.get("/api/front/story/list");
  videoTit.value = data.data.data[0];
  videoList.value = data.data.data.slice(1);
};

getVideoList();

const playVideo = async () => {
  console.log("😅 ~ openPdf ~ a.id:");
  // /api/front/catalog/downloadalbum previewalbum
  const res: any = await http.get("/api/front/story/video/" + route.query.id);
  const data = res.data.data;
  mp4Path.value = data;
  test.value = true;
};
playVideo();
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
/* 外层容器，设置相对定位 */
.video-thumbnail {
  position: relative;
  cursor: pointer;
  overflow: hidden;
}

/* 遮罩层样式 */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4); /* 半透明黑色背景 */
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  transition: opacity 0.3s ease; /* 淡入淡出效果 */
}

/* 鼠标悬停时显示遮罩层和播放图标 */
// .video-thumbnail:hover .overlay {
//   opacity: 1;
// }

/* 播放图标样式 */
.play-icon {
  font-size: 48px; /* 图标大小 */
  color: #ffffff; /* 图标颜色 */
}
</style>
