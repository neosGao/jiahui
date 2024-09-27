<template>
  <topNav />
  <div
    class="w-full h-[600px] bg-cover bg-center bg-[url('@/assets/img/home/home.png')]"
    :style="{ backgroundImage: `url(${picRootPath + picLastPath})` }"
  ></div>
  <div
    class="bg-[#f8f7f8] w-full h-[160px] flex flex-col items-center justify-center"
  >
    <div class="flex flex-row items-center justify-center">
      <div
        class="flex items-center justify-center p-[50px] px-[100px] cursor-pointer boldFont"
        v-for="(a, b) in picList"
        :key="b"
        @click="
          router.push({
            name: 'Products',
            query: { id: a.id, name: a.name },
          })
        "
      >
        <img :src="picRootPath + a.picUrl" alt="" class="w-[50px] h-[100px]" />
        <div class="ml-5">
          <div class="mt-[25px] text-[#208d7b]">{{ a.enName }}</div>
          <div class="mt-[10px] text-lg">{{ a.name }}</div>
        </div>
      </div>
    </div>
  </div>
  <div class="w-full px-[10%] py-[50px] incenter min-w-[1280px] gap-20">
    <div
      class="cursor-pointer"
      v-for="(a, b) in datalist2"
      :key="b"
      @click="
        router.push({
          name: 'Products',
          query: { id: a.id, name: a.name },
        })
      "
    >
      <img :src="picRootPath + a.picUrl" alt="" />
      <!-- <img src="@/assets/img/home/home14.png" alt="" />
        <img src="@/assets/img/home/home15.png" class="mt-[15px]" alt="" /> -->
      <div class="bg-[#57b8a8] incenter py-[40px] text-2xl text-white">
        {{ a.name }}
      </div>
    </div>
    <!-- <div>
      <img src="@/assets/img/home/home10.png" alt="" />
      <div class="bg-[#57b8a8] incenter py-[40px]">
        <img src="@/assets/img/home/home11.png" alt="" />
      </div>
    </div>
    <div class="ml-[70px]">
      <img src="@/assets/img/home/home12.png" alt="" />
      <div class="bg-[#57b8a8] incenter py-[40px]">
        <img src="@/assets/img/home/home13.png" alt="" />
      </div>
    </div> -->
  </div>
  <div
    class="bg-[#f8f7f8] w-full h-[200px] flex flex-col items-center justify-center"
  >
    <div class="flex items-center justify-center">
      <div>
        <img src="@/assets/img/home/home14.png" alt="" />
        <img src="@/assets/img/home/home15.png" class="mt-[15px]" alt="" />
      </div>
    </div>
  </div>
  <div class="relative">
    <a-spin :spinning="loading">
      <div class="absolute left-[10%] top-[40%]">
        <left-circle-outlined
          class="text-3xl cursor-pointer"
          @click="nextPage(-1)"
          v-if="page.page !== 1"
        />
      </div>

      <a-empty v-if="datalist.length === 0" />
      <!-- 其他内容 -->
      <div class="content_box">
        <div class="item" v-for="(item, index) in datalist" :key="index">
          <div
            class="img_box cursor-pointer"
            @click="
              router.push({
                path: '/detail',
                query: {
                  name: route.query.name,
                  id: item.id,
                  tid: route.query.id,
                },
              })
            "
          >
            <img
              :src="picRootPath + item.picUrl"
              style="height: 305px; width: 305px"
            />
            <div class="like" @click.stop="loveClick(item)">
              <!-- 这里是双色点收藏按钮，判断是否收藏更改twoToneColor的颜色 -->
              <HeartTwoTone :twoToneColor="item.favor ? '#eb2f96' : ''" />
            </div>
          </div>
          <div class="title_box">
            <div class="title">{{ item.name }}</div>
            <div class="look">
              <EyeOutlined />
              <span>{{ item.clickNum }}</span>
            </div>
          </div>
          <div class="tips_box">
            <div class="tips">{{ item.hhNo }}</div>
            <div class="tips">Weight: {{ item.weight }}g</div>
            <div class="tips">Size: {{ item.sizeInfo }}</div>
          </div>
        </div>
      </div>
      <div class="absolute right-[10%] top-[40%]">
        <right-circle-outlined
          class="text-3xl cursor-pointer"
          @click="nextPage(1)"
        />
      </div>
    </a-spin>
  </div>
  <bottomNav />
</template>

<script lang="ts" setup>
import { http } from "../http";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { message } from "ant-design-vue";
import {
  HeartTwoTone,
  EyeOutlined,
  LeftCircleOutlined,
  RightCircleOutlined,
} from "@ant-design/icons-vue";

const datalist: any = ref([1, 2, 3, 4, 6, 7, 8, 9, 11, 2]);
const datalist2: any = ref([]);
const picLastPath: any = ref("");
const router = useRouter();
const route = useRoute();
const loading = ref(false);
// 图片根目录
const picRootPath = import.meta.env.VITE_PIC_URL;
// 图片地址
const picList: any = ref([]);
const getPicList = async () => {
  const data: any = await http.get("/api/front/home/homeunifyinfo");
  picLastPath.value = data.data.data.bannerUrl;
  picList.value = data.data.data.adSmallList;
  datalist2.value = data.data.data.midList;
};
const search = async () => {
  loading.value = true;
  const data: any = await http.get("/api/front/home/productpage", {
    params: page.value,
  });
  datalist.value = data.data.data.list;
  loading.value = false;
};

const page = ref({
  page: 1,
  size: 12,
});

getPicList();
search();
const loveClick = async (love: any) => {
  const favor = !Boolean(love.favor);
  const data: any = await http.post("/api/front/member/favorproduct", {
    params: {
      favor,
      id: love.id,
    },
  });
  if (data.data.code == 200) {
    love.favor = favor;
    if (favor) {
      message.success("favor success");
    } else {
      message.success("cancel success");
    }
  } else if (data.data.code == 401) {
    message.error("Please Log In !");
  }
  console.log("😅 ~ loveClick ~ data:", data);
};
const nextPage = (num: number) => {
  page.value.page += num;
  search();
};
</script>

<style scoped>
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
      .tips {
        margin-bottom: 10px;
      }
    }
  }
}
</style>
