<template>
  <topNav />
  <div class="px-[160px] py-[80px] flex">
    <div class="bg-[#f8f7f8] w-[450px] h-[850px]">
      <div class="incenter pt-[85px] flex-col">
        <img src="../../assets/img/personal/personal.png" alt="" />
        <div class="mt-[30px] font-semibold">Name <EditOutlined /></div>
        <div class="text-sm mt-2">ID: 321321321321</div>
      </div>
      <div class="mt-10 h-[60px] flex items-center cursor-pointer">
        <div class="mx-[50px]">
          <UserOutlined class="text-3xl text-[#208d7b]" />
        </div>
        <span class="text-xl">My Account</span>
      </div>
      <div class="mt-10 h-[60px] flex items-center cursor-pointer">
        <div class="mx-[50px]">
          <ShoppingOutlined class="text-3xl text-[#208d7b]" />
        </div>
        <span class="text-xl">Shopping Bag [0]</span>
      </div>
      <div class="mt-10 bg-[#57b8a8] h-[60px] flex items-center cursor-pointer">
        <div class="mx-[50px]">
          <ShoppingCartOutlined class="text-3xl text-white" />
        </div>
        <span class="text-xl text-white">My Order [0]</span>
      </div>
      <div class="mt-10 h-[60px] flex items-center cursor-pointer">
        <div class="mx-[50px]">
          <HeartOutlined class="text-3xl text-[#208d7b]" />
        </div>
        <span class="text-xl">Favorite</span>
      </div>
    </div>
    <div class="ml-[100px] flex-1">
      <div class="text-3xl pb-5">My Order</div>
      <div class="bg-[#f8f7f8] flex px-[20px] py-[30px]">
        <div class="font-semibold basis-3/12">Order #:209255334</div>
        <div class="font-semibold basis-3/12">Date: July 30,2024</div>
        <div class="font-semibold basis-5/12 text-right">
          Transaction completed
        </div>
      </div>
      <div class="mt-5 flex border-b-4 border-b-slate-500 border-dotted pb-5">
        <div class="basis-7/12">ltem(s) Ordered</div>
        <div class="basis-2/12">Price</div>
        <div class="basis-2/12">Qty</div>
        <div class="basis-1/12">Total</div>
      </div>
      <div class="mt-5 flex border-b-4 border-b-slate-500 border-dotted pb-5">
        <div class="basis-7/12 flex items-center">
          <img src="../../assets/img/personal/personal.png" alt="" />
          <div class="ml-5">
            <div>Big Banyan Tree</div>
            <div class="mt-2 text-slate-400">HA4LY19680</div>
            <div class="mt-4 text-slate-400 text-sm">
              Color: Black Items packed : 2st
            </div>
          </div>
        </div>
        <div class="basis-2/12 flex items-center">$50</div>
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
        <div class="basis-2/12"></div>
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
// const onFinish = (values: any) => {
//   console.log("Success:", values);
// };

// const onFinishFailed = (errorInfo: any) => {
//   console.log("Failed:", errorInfo);
// };
</script>
