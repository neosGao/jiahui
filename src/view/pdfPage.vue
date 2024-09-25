<template>
  <pdf-app
    v-if="test"
    :pdf="pdfPath"
    class="w-screen h-screen"
    theme="dark"
    :config="config"
  />
</template>
<script lang="ts" setup>
import { http } from "../http";
import { ref } from "vue";
import PdfApp from "vue3-pdf-app";
import "vue3-pdf-app/dist/icons/main.css";
import { useRoute } from "vue-router";
const route = useRoute();
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
const test = ref(false);
const openTips = ref(false);
// 图片地址
const pdfPath: any = ref("");

const openPdf = async () => {
  const login: boolean = isLogin();
  if (!login) {
    openTips.value = true;
    return;
  }
  // /api/front/catalog/downloadalbum previewalbum
  const res: any = await http.get(
    "/api/front/catalog/downloadalbum",
    {
      params: { id: route.query.id },
    },
    { responseType: "blob" }
  );
  const data = res.data;

  const base64_str = await blobToBase64(data); // 移除可能存在的 'data:application/pdf;base64,' 前缀
  const base64Data = base64_str.replace(/^data:[^;]+;base64,/, ""); // 解码Base64数据

  const binaryData = atob(base64Data); // 创建Blob对象

  const arrayBuffer = new Uint8Array(binaryData.length);
  for (let i = 0; i < binaryData.length; i++) {
    arrayBuffer[i] = binaryData.charCodeAt(i);
  }
  const blob = new Blob([arrayBuffer], { type: "application/pdf" }); // 创建URL
  const url = URL.createObjectURL(blob); // 设置下载链接
  // const iframe = document.getElementById("iframe");
  // iframe.src = url;
  pdfPath.value = url;
  console.log("😅 ~ openPdf ~ pdfPath.value:", pdfPath.value);
  test.value = true;
};

// 将 Blob 转换为 Base64
const blobToBase64 = (blob: Blob): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      if (reader.result) {
        resolve(reader.result.toString());
      } else {
        reject(new Error("转换 Blob 为 Base64 失败"));
      }
    };

    reader.onerror = () => {
      reject(new Error("读取 Blob 失败"));
    };

    reader.readAsDataURL(blob); // 将 Blob 读取为 Base64 编码的 URL
  });
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
openPdf();
</script>
