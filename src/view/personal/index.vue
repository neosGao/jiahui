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
      <div class="mt-10 bg-[#57b8a8] h-[60px] flex items-center cursor-pointer">
        <div class="mx-[50px]">
          <UserOutlined class="text-3xl text-white" />
        </div>
        <span class="text-xl text-white">My Account</span>
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
      <div
        class="mt-10 h-[60px] flex items-center cursor-pointer"
        @click="router.push('order')"
      >
        <div class="mx-[50px]">
          <ShoppingCartOutlined class="text-3xl text-[#208d7b]" />
        </div>
        <span class="text-xl">My Order</span>
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
      <div class="text-3xl border-b border-b-slate-500 pb-5">
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
            <a-form-item label="Password" name="password">
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
              name="vatOrg"
              :rules="[
                { required: true, message: 'Please input your VAT/Org.no!' },
              ]"
            >
              <a-input v-model:value="formState.vatOrg" />
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
              name="telephone"
              :rules="[
                { required: true, message: 'Please input your telephone!' },
              ]"
            >
              <a-input v-model:value="formState.telephone" />
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
import { ref } from "vue";
import { useRouter } from "vue-router";
import { http } from "../../http";
import { message } from "ant-design-vue";
import {
  EditOutlined,
  UserOutlined,
  ShoppingOutlined,
  ShoppingCartOutlined,
  HeartOutlined,
} from "@ant-design/icons-vue";
interface FormState {
  email: string;
  telephone: string;
  firstName: string;
  lastName: string;
  password: string;
  company: string;
  vatOrg: string;
  country: string;
  website: string;
  address: string;
  agree: boolean;
}
const router = useRouter();

const formState = ref<FormState>({
  email: "",
  telephone: "",
  firstName: "",
  lastName: "",
  password: "",
  company: "",
  vatOrg: "",
  country: "",
  website: "",
  address: "",
  agree: false,
});
const getInfo = async () => {
  const token = localStorage.getItem("authToken");
  if (!token) return;
  const id = JSON.parse(token).id;
  const data: any = await http.post("/api/front/member/myinfo", {
    params: { id },
  });
  console.log("😅 ~ getInfo ~ data:", data);
  formState.value = data.data.data;
};
getInfo();
const onFinish = async (values: any) => {
  const res: any = await http.post("/api/front/member/editinfo", {
    params: values,
  });
  if (res.data.code === 200) {
    message.success("Change success");
  }
};

const onFinishFailed = async (errorInfo: any) => {
  console.log("Failed:", errorInfo);
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
    return "Name";
  } else {
    const name = JSON.parse(token);
    return name;
  }
};
</script>
