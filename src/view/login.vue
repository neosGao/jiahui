<template>
  <topNav />

  <div class="w-full px-[30%] py-[50px] min-w-[1280px]">
    <div
      class="bg-[#f8f7f8] bg-opacity-50 inline-block w-full p-[50px] incenter"
    >
      <div class="w-[800px] incenter flex-col">
        <img src="@/assets/img/login/login.png" alt="" class="mb-20" />
        <div>
          <div class="text-left">
            <DownloadOutlined
              style="
                color: #208d7b;
                top: -4px;
                position: relative;
                margin-right: 20px;
              "
            />Download catalog and dwg
          </div>
          <div class="text-left mt-5">
            <HeartOutlined
              style="
                color: #208d7b;
                top: -4px;
                position: relative;
                margin-right: 20px;
              "
            />Save your wish list
          </div>
          <div class="text-left mt-5">
            <PlusOutlined
              style="
                color: #208d7b;
                top: -4px;
                position: relative;
                margin-right: 20px;
              "
            />and more...
          </div>
        </div>
      </div>
      <a-form
        class="ml-10 border-l-4 border-l-slate-500 border-dotted pl-10"
        :model="formState"
        name="basic"
        autocomplete="off"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
        layout="vertical"
      >
        <div class="text-left text-3xl font-bold text-[#474443] mb-5">
          Log In
        </div>
        <a-row :gutter="24">
          <a-col :span="24">
            <a-form-item
              name="account"
              :rules="[
                { required: true, message: 'Please input your account!' },
              ]"
            >
              <a-input v-model:value="formState.account" placeholder="account">
                <template #prefix>
                  <UserOutlined />
                </template>
              </a-input>
            </a-form-item>
          </a-col>
          <a-col :span="24">
            <a-form-item
              name="password"
              :rules="[
                { required: true, message: 'Please input your password!' },
              ]"
            >
              <a-input-password v-model:value="formState.password">
                <template #prefix>
                  <LockOutlined />
                </template>
              </a-input-password>
            </a-form-item>
          </a-col>
          <a-col :span="24" class="text-left">
            <a-checkbox v-model:checked="formState.checkbox"
              >Remember me</a-checkbox
            >
          </a-col>
          <a-col :span="24" class="text-left">
            <img src="@/assets/img/login/login1.png" alt="" class="py-10" />
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="24" style="text-align: right">
            <a-form-item>
              <a-button
                style="border-radius: 0%"
                block
                type="primary"
                html-type="submit"
                >LOG IN</a-button
              >
            </a-form-item>
          </a-col>
          <a-col :span="24" class="mb-5"
            ><img src="@/assets/img/login/login2.png" alt=""
          /></a-col>
        </a-row>
      </a-form>
    </div>
    <div
      class="bg-[#f8f7f8] bg-opacity-50 inline-block w-full p-[50px] incenter flex-col mt-5"
    >
      <img src="@/assets/img/login/login3.png" alt="" />
      <div class="w-[500px] mt-5">
        <a-button
          style="border-radius: 0%"
          block
          ghost
          type="primary"
          html-type="submit"
          @click="router.push('signup')"
          >SIGN UP</a-button
        >
      </div>
    </div>
  </div>
  <a-modal v-model:open="openTips" :footer="null" style="top: 30%">
    <div class="pt-[50px] text-center px-[50px]">
      <CheckCircleFilled class="text-8xl text-[#208d7b]" />
      <div class="text-3xl mt-[20px] mb-[60px]">
        Congratulations, Login Successful<br />
        <span class="text-sm">Automatically jump to home in 3 seconds</span>
      </div>
      <a-button
        class="rounded-full"
        block
        type="primary"
        html-type="submit"
        @click="router.go(-1)"
        >JUMP IMMEDIATE</a-button
      >
    </div>
  </a-modal>
  <bottomNav />
</template>

<script lang="ts" setup>
import { ref, reactive, onUnmounted } from "vue";
import {
  DownloadOutlined,
  HeartOutlined,
  PlusOutlined,
  UserOutlined,
  LockOutlined,
} from "@ant-design/icons-vue";
import router from "../router";
import { http } from "../http";
import { CheckCircleFilled } from "@ant-design/icons-vue";
const openTips = ref(false);
interface FormState {
  account: string;
  password: string;
  checkbox: boolean;
}

const formState = reactive<FormState>({
  account: "",
  password: "",
  checkbox: false,
});
let timer: any;
const onFinish = async (values: any) => {
  const res: any = await http.post("/api/front/member/login", {
    params: values,
  });
  if (res.data.code === 200) {
    // 储存登录信息
    const token = res.data.data;
    // 将 token 存储到 localStorage
    const oneWeekInMilliseconds = 7 * 24 * 60 * 60 * 1000; // 一周的毫秒数
    const expiresAt = Date.now() + oneWeekInMilliseconds; // 当前时间 + 一周
    localStorage.setItem("authToken", JSON.stringify(token)); // 缓存数据
    localStorage.setItem("expiresAt", expiresAt.toString());
    openTips.value = true;
    timer = setTimeout(() => {
      router.go(-1);
    }, 3000);
  }
};
onUnmounted(() => {
  clearInterval(timer);
});

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
</script>
