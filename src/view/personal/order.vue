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
        <span class="text-xl">Shopping Bag</span>
      </div>
      <div class="mt-10 bg-[#57b8a8] h-[60px] flex items-center cursor-pointer">
        <div class="mx-[50px]">
          <ShoppingCartOutlined class="text-3xl text-white" />
        </div>
        <span class="text-xl text-white"
          >My Order
          <span v-if="orderList.total != 0">[{{ orderList.total }}]</span></span
        >
      </div>
      <div
        class="mt-10 h-[60px] flex items-center cursor-pointer"
        @click="router.push('collection')"
      >
        <div class="mx-[50px]">
          <HeartOutlined class="text-3xl text-[#208d7b]" />
        </div>
        <span class="text-xl">Favorite</span>
      </div>
    </div>
    <div class="ml-[100px] flex-1">
      <div class="text-3xl pb-5">My Order</div>
      <div v-for="(c, d) in orderList.list" :key="d">
        <div class="bg-[#f8f7f8] flex px-[20px] py-[30px]">
          <div class="font-semibold basis-3/12">Order #:{{ c.orderNo }}</div>
          <div class="font-semibold basis-3/12">Date: {{ c.orderTime }}</div>
          <div class="font-semibold basis-5/12 text-right">
            Transaction completed
          </div>
        </div>
        <div class="mt-5 flex border-b-2 pb-5">
          <div class="basis-7/12">ltem(s) Ordered</div>
          <div class="basis-2/12">Price</div>
          <div class="basis-2/12">Qty</div>
          <div class="basis-1/12">Total</div>
        </div>
        <div
          class="mt-5 flex border-b-2 pb-5"
          v-for="(a, b) in c.list"
          :key="b"
        >
          <div class="basis-7/12 flex items-center">
            <img
              :src="picRootPath + a.picUrl"
              alt=""
              class="w-[150px] h-[150px]"
            />
            <div class="ml-5">
              <div>{{ a.name }}</div>
              <div class="mt-2 text-slate-400">{{ a.hhNo }}</div>
              <div class="mt-4 text-slate-400 text-sm">
                Color: {{ a.colorName }} Weight : {{ a.weight }}g
              </div>
            </div>
          </div>
          <div class="basis-2/12 flex items-center">{{ a.price }}</div>
          <div class="basis-2/12 flex items-center">{{ a.amount }}</div>
          <div class="basis-1/12 flex items-center">{{ a.totalPrice }}</div>
        </div>
        <div class="mt-5 flex items-center justify-between h-[60px]">
          <div class="basis-2/12"></div>
          <div class="basis-2/12 text-center">
            <div class="text-xl font-semibold">Total: ${{ c.total }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <bottomNav />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import {
  EditOutlined,
  UserOutlined,
  ShoppingOutlined,
  ShoppingCartOutlined,
  HeartOutlined,
} from "@ant-design/icons-vue";
import { http } from "../../http";
const router = useRouter();
// 图片根目录
const picRootPath = import.meta.env.VITE_PIC_URL;
// const onFinish = (values: any) => {
//   console.log("Success:", values);
// };

// const onFinishFailed = (errorInfo: any) => {
//   console.log("Failed:", errorInfo);
// };
const orderList: any = ref({});
const search = async () => {
  const data: any = await http.get("/api/front/member/shop/order/page");
  console.log("😅 ~ search ~ data:", data);
  orderList.value = data.data.data;
};
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
// const totalPrice = computed(() => {
//   return orderList?.value?.list.reduce(
//     (sum: any, item: any) => sum + item.totalPrice,
//     0
//   );
// });
</script>
