<template>
  <topNav />
  <div class="px-[160px] py-[80px] flex">
    <div class="bg-[#f8f7f8] w-[450px] h-[850px]">
      <div class="incenter pt-[85px] flex-col">
        <img src="@/assets/img/personal/personal.png" alt="" />
        <div class="mt-[30px] font-semibold">Name <EditOutlined /></div>
        <div class="text-sm mt-2">ID: 321321321321</div>
      </div>
      <div class="mt-10 bg-[#57b8a8] h-[60px] flex items-center cursor-pointer">
        <div class="mx-[50px]">
          <UserOutlined class="text-3xl text-white" />
        </div>
        <span class="text-xl text-white">My Account</span>
      </div>
      <div class="mt-10 h-[60px] flex items-center cursor-pointer">
        <div class="mx-[50px]">
          <ShoppingOutlined class="text-3xl text-[#208d7b]" />
        </div>
        <span class="text-xl">Shopping Bag [0]</span>
      </div>
      <div class="mt-10 h-[60px] flex items-center cursor-pointer">
        <div class="mx-[50px]">
          <ShoppingCartOutlined class="text-3xl text-[#208d7b]" />
        </div>
        <span class="text-xl">My Order [0]</span>
      </div>
      <div class="mt-10 h-[60px] flex items-center cursor-pointer">
        <div class="mx-[50px]">
          <HeartOutlined class="text-3xl text-[#208d7b]" />
        </div>
        <span class="text-xl">Favorite</span>
      </div>
    </div>
    <div class="ml-[100px] flex-1">
      <div class="text-3xl border-b-4 border-b-slate-500 border-dotted pb-5">
        Personal Information
      </div>

      <a-form
        class="mt-10"
        :model="formState"
        name="basic"
        autocomplete="off"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
        layout="vertical"
      >
        <a-row :gutter="24">
          <a-col :span="12">
            <a-form-item
              label="Email"
              name="email"
              :rules="[{ required: true, message: 'Please input your email!' }]"
            >
              <a-input v-model:value="formState.email" />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item
              label="Company"
              name="company"
              :rules="[
                { required: true, message: 'Please input your company!' },
              ]"
            >
              <a-input v-model:value="formState.company" />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item
              label="Password"
              name="password"
              :rules="[
                { required: true, message: 'Please input your password!' },
              ]"
            >
              <a-input v-model:value="formState.password" />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item
              label="Country"
              name="country"
              :rules="[
                { required: true, message: 'Please input your country!' },
              ]"
            >
              <a-select
                v-model:value="formState.country"
                placeholder="please select your country"
              >
                <a-select-option value="zhongguo">china</a-select-option>
                <a-select-option value="meiguo">amlk</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item
              label="First Name"
              name="firstName"
              :rules="[
                { required: true, message: 'Please input your first mame!' },
              ]"
            >
              <a-input v-model:value="formState.firstName" />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item
              label="VAT/Org.no"
              name="org"
              :rules="[
                { required: true, message: 'Please input your VAT/Org.no!' },
              ]"
            >
              <a-input v-model:value="formState.org" />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item
              label="Last Name"
              name="lastName"
              :rules="[
                { required: true, message: 'Please input your last mame!' },
              ]"
            >
              <a-input v-model:value="formState.lastName" />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item
              label="Website"
              name="website"
              :rules="[
                { required: true, message: 'Please input your website!' },
              ]"
            >
              <a-input v-model:value="formState.website" />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item
              label="Telphone"
              name="telphone"
              :rules="[
                { required: true, message: 'Please input your telphone!' },
              ]"
            >
              <a-input v-model:value="formState.telphone" />
            </a-form-item>
          </a-col>
          <a-col :span="24">
            <a-form-item
              label="Mailing address"
              name="address"
              :rules="[
                {
                  required: true,
                  message: 'Please input your mailing address!',
                },
              ]"
            >
              <a-textarea v-model:value="formState.address" />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="6" style="text-align: left">
            <a-form-item>
              <a-button
                type="primary"
                block
                html-type="submit"
                class="rounded-none"
                >Change</a-button
              >
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
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
const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
</script>
