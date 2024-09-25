<template>
  <topNav />
  <div
    class="w-full h-[633px] bg-cover bg-center"
    :style="{ backgroundImage: `url(${picRootPath + picLastPath})` }"
  ></div>
  <div
    class="bg-slate-200 bg-opacity-50 w-full h-[50px] flex items-center justify-end"
  >
    <img src="@/assets/img/catalogue/catalogue2.png" alt="" class="mr-[10%]" />
  </div>
  <div class="w-full text-center flex items-center justify-center mt-20">
    <img src="@/assets/img/catalogue/catalogue3.png" alt="" />
  </div>
  <div class="w-full text-center flex items-center justify-center mt-10">
    <img src="@/assets/img/catalogue/catalogue4.png" alt="" />
  </div>
  <div
    class="w-[70%] flex items-center justify-around mt-10 mx-auto px-10 pb-20"
  >
    <!-- <div
      class="flex flex-col items-center cursor-pointer"
      v-for="(a, b) in picList"
      :key="b"
      @click="openPdf(a)"
    >
      <img :src="picRootPath + a.picUrl" alt="" />
      <div class="pt-5 text-2xl">{{ a.name }}</div>
    </div> -->
    <a-row :gutter="100">
      <a-col
        :span="8"
        class="flex flex-col items-center cursor-pointer"
        v-for="(a, b) in picList"
        :key="b"
        @click="openPdf(a)"
      >
        <img :src="picRootPath + a.picUrl" alt="" />
        <div class="pt-5 text-2xl">{{ a.name }}</div></a-col
      >
    </a-row>
    <a-modal v-model:open="test" title="preview" width="70%" :footer="null">
      <div class="h-[80vh]" v-if="test">
        <!-- <PDF :src="pdfPath" /> -->
        <!-- <iframe
          id="iframe"
          v-if="test"
          class="w-full h-full"
          :src="pdfPath"
        ></iframe> -->
        <pdf-app
          v-if="test"
          :pdf="pdfPath"
          class="w-full h-full"
          theme="dark"
          :config="config"
        />
      </div>
    </a-modal>
  </div>
  <a-modal v-model:open="openTips" :footer="null" style="top: 30%">
    <div class="pt-[50px] text-center px-[50px]">
      <CheckCircleFilled class="text-8xl text-[#208d7b]" />
      <div class="text-3xl mt-[20px] mb-[60px]">Please Log In !</div>
      <a-button class="rounded-full" block type="primary" html-type="submit"
        >LOG IN</a-button
      >
    </div>
  </a-modal>
  <bottomNav />
</template>
<script lang="ts" setup>
import { http } from "../http";
import { ref } from "vue";
import PdfApp from "vue3-pdf-app";
import { CheckCircleFilled } from "@ant-design/icons-vue";
// import { nextTick } from "vue";
import "vue3-pdf-app/dist/icons/main.css";
import { useRouter } from "vue-router";
const router = useRouter();
const config: any = {
  sidebar: {
    viewThumbnail: true,
    viewOutline: true,
    viewAttachments: true,
  },
  secondaryToolbar: {
    secondaryPresentationMode: true,
    secondaryOpenFile: true,
    secondaryPrint: true,
    secondaryDownload: true,
    secondaryViewBookmark: true,
    firstPage: true,
    lastPage: true,
    pageRotateCw: true,
    pageRotateCcw: true,
    cursorSelectTool: true,
    cursorHandTool: true,
    scrollVertical: true,
    scrollHorizontal: true,
    scrollWrapped: true,
    spreadNone: true,
    spreadOdd: true,
    spreadEven: true,
    documentProperties: true,
  },
  toolbar: {
    toolbarViewerLeft: {
      findbar: true,
      previous: true,
      next: true,
      pageNumber: true,
    },
    toolbarViewerRight: {
      presentationMode: true,
      openFile: false,
      print: false,
      download: false,
      viewBookmark: false,
    },
    toolbarViewerMiddle: {
      zoomOut: true,
      zoomIn: true,
      scaleSelectContainer: true,
    },
  },
  errorWrapper: true,
  // URL.revokeObjectURL(url)
};
// import { useRouter } from "vue-router";
// const router = useRouter();
// 图片根目录
const picRootPath = import.meta.env.VITE_PIC_URL;
// import { useMyStore } from "@/store/goodsCount";

// const myStore = useMyStore();
// myStore.fetchData();
// console.log("😅 ~ myStore:", myStore.data);
const test = ref(false);
const openTips = ref(false);
// 图片地址
const picLastPath = ref("");
const pdfPath: any = ref("");
const picList: any = ref([]);
const getPic = async () => {
  const data: any = await http.get(
    // 获取banner接口
    "/api/front/advert/limitlist",
    {
      params: {
        code: "catolog_banner",
      },
    }
  );
  console.log("😅 ~ getPic ~ data:", data.data.data[0].picUrl);
  picLastPath.value = data.data.data[0].picUrl;
};
// pdf列表
const getPicList = async () => {
  const data: any = await http.get("/api/front/catalog/enlist");
  picList.value = data.data.data;
};

const isLogin = () => {
  // 获取本地存储的 token 和过期时间
  function getAuthToken() {
    const token = localStorage.getItem("authToken");
    const expiresAt = parseInt(localStorage.getItem("expiresAt") || "0", 10);

    // 判断 token 是否存在且未过期
    if (token && Date.now() < expiresAt) {
      return token;
    } else {
      // 如果 token 过期或不存在，移除本地存储的 token 信息
      localStorage.removeItem("authToken");
      localStorage.removeItem("expiresAt");
      return null;
    }
  }
  const token: any = getAuthToken();
  if (!token) {
    return false;
  } else {
    return true;
  }
};

const openPdf = async (a: any) => {
  console.log("😅 ~ openPdf ~ a.id:", a.id);
  const login: boolean = isLogin();
  if (!login) {
    openTips.value = true;
    return;
  }
  const url: any = router.resolve({
    path: "/pdfPage",
    query: { id: a.id },
  }).href; // 使用路由名称解析 URL
  window.open(url, "_blank"); // '_blank' 表示在新标签页中打开
  // /api/front/catalog/downloadalbum previewalbum
  // const res: any = await http.get(
  //   "/api/front/catalog/downloadalbum",
  //   {
  //     params: { id: a.id },
  //   },
  //   { responseType: "blob" }
  // );
  // const data = res.data;

  // const blob = res.data;
  // const url = window.URL.createObjectURL(blob);
  // const link = document.createElement("a");
  // link.href = url;
  // link.setAttribute("download", "filename.pdf"); // 设置下载文件名
  // document.body.appendChild(link);
  // link.click(); // 触发下载
  // link.parentNode.removeChild(link); // 移除链接
  // window.URL.revokeObjectURL(url); // 释放内存

  // 将 ArrayBuffer 转换为 Blob
  // const pdfBlob = arrayBufferToBlob(data);
  // 将 Blob 转换为 Base64 编码
  // pdfPath.value = await blobToBase64(data);
  // const blobObj = parsePDFData(data);
  // console.log("😅 ~ openPdf ~ blobObj:", blobObj);
  // 原方案
  // pdfPath.value = await blobToBase64(data);
  // test.value = true;

  // const base64_str = await blobToBase64(data); // 移除可能存在的 'data:application/pdf;base64,' 前缀
  // const base64Data = base64_str.replace(/^data:[^;]+;base64,/, ""); // 解码Base64数据

  // const binaryData = atob(base64Data); // 创建Blob对象

  // const arrayBuffer = new Uint8Array(binaryData.length);
  // for (let i = 0; i < binaryData.length; i++) {
  //   arrayBuffer[i] = binaryData.charCodeAt(i);
  // }
  // const blob = new Blob([arrayBuffer], { type: "application/pdf" }); // 创建URL
  // const url = URL.createObjectURL(blob); // 设置下载链接
  // // const iframe = document.getElementById("iframe");
  // // iframe.src = url;
  // pdfPath.value = url;
  // test.value = true;
};

// 将 Blob 转换为 Base64
// const blobToBase64 = (blob: Blob): Promise<string> => {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();

//     reader.onloadend = () => {
//       if (reader.result) {
//         resolve(reader.result.toString());
//       } else {
//         reject(new Error("转换 Blob 为 Base64 失败"));
//       }
//     };

//     reader.onerror = () => {
//       reject(new Error("读取 Blob 失败"));
//     };

//     reader.readAsDataURL(blob); // 将 Blob 读取为 Base64 编码的 URL
//   });
// };

getPic();
getPicList();
</script>

<style scoped></style>
