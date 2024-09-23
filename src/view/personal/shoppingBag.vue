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
      <div class="mt-10 bg-[#57b8a8] h-[60px] flex items-center cursor-pointer">
        <div class="mx-[50px]">
          <ShoppingOutlined class="text-3xl text-white" />
        </div>
        <span class="text-xl text-white">Shopping Bag [0]</span>
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
      <div class="text-3xl border-b-2 pb-5">Shopping Bag</div>
      <div class="mt-5 flex border-b-2 pb-5">
        <div class="basis-5/12">Item Description</div>
        <div class="basis-2/12">Price</div>
        <div class="basis-2/12">Options</div>
        <div class="basis-2/12">Quantity</div>
        <div class="basis-1/12">Total</div>
      </div>
      <div class="mt-5 flex border-b-2 pb-5">
        <div class="basis-5/12 flex items-center">
          <img src="@/assets/img/personal/personal.png" alt="" />
          <div class="ml-5">
            <div>Big Banyan Tree</div>
            <div class="mt-2 text-slate-400">HA4LY19680</div>
          </div>
        </div>
        <div class="basis-2/12 flex items-center">$50</div>
        <div class="basis-2/12 flex items-center">
          <div>
            <div>Color: Black</div>
            <div>Items packed : 2st</div>
          </div>
        </div>
        <div class="basis-2/12 flex items-center">
          <a-input-number
            id="inputNumber"
            v-model:value="formState.email"
            :min="1"
            :max="10"
          />
        </div>
        <div class="basis-1/12 flex items-center">$50</div>
      </div>
      <div class="mt-5 flex items-center justify-between h-[60px]">
        <div class="basis-2/12">
          <a-button
            type="primary"
            block
            html-type="submit"
            size="large"
            class="!rounded-full"
            >Checkout</a-button
          >
        </div>
        <div class="basis-2/12 text-center">
          <div class="text-xl font-semibold">Total: $500</div>
        </div>
      </div>
    </div>
  </div>
  <bottomNav />
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { http } from "../../http";
import {
  EditOutlined,
  UserOutlined,
  ShoppingOutlined,
  ShoppingCartOutlined,
  HeartOutlined,
} from "@ant-design/icons-vue";
interface FormState {
  email: string;
  telphone: string;
  firstName: string;
  lastName: string;
  password: string;
  company: string;
  org: string;
  country: string;
  website: string;
  address: string;
  agree: boolean;
}
const router = useRouter();

const formState = reactive<FormState>({
  email: "",
  telphone: "",
  firstName: "",
  lastName: "",
  password: "",
  company: "",
  org: "",
  country: "",
  website: "",
  address: "",
  agree: false,
});
const search = async () => {
  const data: any = await http.get("/api/front/member/shop/mycartlist");
  console.log("😅 ~ search ~ data:", data);
};
search();
// const onFinish = (values: any) => {
//   console.log("Success:", values);
// };

// const onFinishFailed = (errorInfo: any) => {
//   console.log("Failed:", errorInfo);
// };
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
