<template>
  <topNav />
  <div class="px-[160px] py-[80px] flex">
    <div class="bg-[#f8f7f8] w-[450px] h-[850px]">
      <div class="incenter pt-[85px] flex-col">
        <img src="@/assets/img/personal/personal.png" alt="" />
        <div class="mt-[30px] font-semibold">
          {{ isLogin().name }} <EditOutlined />
        </div>
        <div class="text-sm mt-2">ID: {{ isLogin().id }}</div>
      </div>
      <div
        class="mt-10 h-[60px] flex items-center cursor-pointer"
        @click="router.push('personal')"
      >
        <div class="mx-[50px]">
          <UserOutlined class="text-3xl text-[#208d7b]" />
        </div>
        <span class="text-xl">My Account</span>
      </div>
      <div
        class="mt-10 h-[60px] flex items-center cursor-pointer"
        @click="router.push('shoppingBag')"
      >
        <div class="mx-[50px]">
          <ShoppingOutlined class="text-3xl text-[#208d7b]" />
        </div>
        <span class="text-xl">Shopping Bag [0]</span>
      </div>
      <div
        class="mt-10 h-[60px] flex items-center cursor-pointer"
        @click="router.push('order')"
      >
        <div class="mx-[50px]">
          <ShoppingCartOutlined class="text-3xl text-[#208d7b]" />
        </div>
        <span class="text-xl">My Order [0]</span>
      </div>
      <div class="mt-10 h-[60px] flex items-center cursor-pointer bg-[#57b8a8]">
        <div class="mx-[50px]">
          <HeartOutlined class="text-3xl text-white" />
        </div>
        <span class="text-xl text-white">Favorite</span>
      </div>
    </div>
    <div style="width: 70%" class="ml-[100px]">
      <div class="flex items-center justify-between">
        <div class="total">
          <span>{{ total }}</span
          >Products Found
        </div>
        <div class="btn"><SwapOutlined /></div>
      </div>
      <a-empty v-if="datalist.length === 0" />
      <div class="content_box">
        <div class="item" v-for="(item, index) in datalist" :key="index">
          <div class="img_box">
            <img :src="picRootPath + item.picUrl" />
            <div class="like">
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
      <div class="incenter">
        <a-pagination
          v-model:current="current"
          :total="total"
          show-less-items
        />
      </div>
    </div>
  </div>
  <bottomNav />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { SwapOutlined, HeartTwoTone, EyeOutlined } from "@ant-design/icons-vue";
import {
  EditOutlined,
  UserOutlined,
  ShoppingOutlined,
  ShoppingCartOutlined,
  HeartOutlined,
} from "@ant-design/icons-vue";
import { http } from "../../http";
import { useRouter } from "vue-router";
// 图片根目录
const picRootPath = import.meta.env.VITE_PIC_URL;
const router = useRouter();

const datalist: any = ref<number[]>([1, 2, 3, 4, 6, 7, 8, 9, 11, 2]);

const search = async () => {
  const searchParams = {
    page: current.value,
    size: 10,
  };
  const data: any = await http.get("/api/front/member/shop/favorproduct/page", {
    params: searchParams,
  });
  datalist.value = data.data.data.list;
  total.value = data.data.data.total;
};

const total = ref<number>(0);

const current = ref<number>(1);

search();
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
    return "Name";
  } else {
    const name = JSON.parse(token);
    return name;
  }
};
</script>

<style scoped>
.content_box {
  /* width: 70%; */
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
</style>
