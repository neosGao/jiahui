<template>
  <topNav />
  <div
    class="w-full h-[880px] bg-cover bg-center"
    :style="{ backgroundImage: `url(${picRootPath + picLastPath})` }"
  ></div>
  <div
    class="bg-[#f8f7f8] bg-opacity-50 w-full h-[450px] flex flex-col items-center justify-center"
  >
    <img src="@/assets/img/contact/contact2.png" alt="" />
    <div class="flex flex-row items-center justify-center mt-[50px]">
      <div
        class="flex flex-col items-center justify-center p-[50px] px-[100px] border-r-2"
      >
        <img src="@/assets/img/contact/contact3.png" alt="" />
        <img src="@/assets/img/contact/contact4.png" alt="" class="mt-[25px]" />
        <img src="@/assets/img/contact/contact5.png" class="mt-[10px]" alt="" />
      </div>
      <div
        class="flex flex-col items-center justify-center p-[50px] px-[100px] border-r-2"
      >
        <img src="@/assets/img/contact/contact6.png" alt="" />
        <img src="@/assets/img/contact/contact7.png" alt="" class="mt-[25px]" />
        <img src="@/assets/img/contact/contact8.png" class="mt-[10px]" alt="" />
      </div>
      <div
        class="flex flex-col items-center justify-center p-[50px] px-[100px] border-r-2"
      >
        <img src="@/assets/img/contact/contact9.png" alt="" />
        <img
          src="@/assets/img/contact/contact10.png"
          alt=""
          class="mt-[25px]"
        />
        <img
          src="@/assets/img/contact/contact11.png"
          class="mt-[10px]"
          alt=""
        />
      </div>
      <div
        class="flex flex-col items-center justify-center p-[50px] px-[100px]"
      >
        <img src="@/assets/img/contact/contact12.png" alt="" />
        <img
          src="@/assets/img/contact/contact13.png"
          alt=""
          class="mt-[25px]"
        />
        <img
          src="@/assets/img/contact/contact14.png"
          class="mt-[10px]"
          alt=""
        />
      </div>
    </div>
  </div>
  <div class="w-full px-80 py-[50px]">
    <div class="bg-[#f8f7f8] bg-opacity-50 inline-block w-full p-[100px]">
      <a-form
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
              label="Name"
              name="name"
              :rules="[{ required: true, message: 'Please input your name!' }]"
            >
              <a-input v-model:value="formState.name" />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item
              label="Email"
              name="email"
              :rules="[
                { required: true, message: 'Please input your email!' },
                { type: 'email', message: 'Please enter a valid email!' },
              ]"
            >
              <a-input v-model:value="formState.email" />
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
                <a-select-option
                  :value="a.country"
                  :key="b"
                  v-for="(a, b) in countryList"
                  >{{ a.country }}</a-select-option
                >
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="24">
            <a-form-item
              label="Message"
              name="message"
              :rules="[
                { required: true, message: 'Please input your message!' },
              ]"
            >
              <a-textarea v-model:value="formState.message" />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="24" style="text-align: right">
            <a-form-item>
              <a-button type="primary" html-type="submit">Submit</a-button>
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    </div>
  </div>
  <a-modal v-model:open="openTips" :footer="null" style="top: 30%">
    <div class="pt-[50px] text-center px-[50px]">
      <CheckCircleFilled class="text-8xl text-[#208d7b]" />
      <div class="text-3xl mt-[20px] mb-[60px]">Submitted Successfully</div>
      <a-button
        class="rounded-full"
        block
        type="primary"
        html-type="submit"
        @click="router.push('home')"
        >CONFIRM</a-button
      >
    </div>
  </a-modal>
  <bottomNav />
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import { http } from "../http";
import country from "../country.json";
import { useRouter } from "vue-router";
import { CheckCircleFilled } from "@ant-design/icons-vue";
// 图片根目录
const picRootPath = import.meta.env.VITE_PIC_URL;
// 图片地址
const picLastPath = ref("");
const getPic = async () => {
  const data: any = await http.get(
    // 获取banner接口
    "/api/front/advert/limitlist",
    {
      params: {
        code: "contactus_banner",
      },
    }
  );
  picLastPath.value = data.data.data[0].picUrl;
};
getPic();
const router = useRouter();
const countryList = country;
const openTips = ref(false);
interface FormState {
  company: string;
  name: string;
  email: string;
  telphone: string;
  country: string;
  message: string;
}

const formState = reactive<FormState>({
  company: "",
  name: "",
  email: "",
  telphone: "",
  country: "",
  message: "",
});
const onFinish = async (values: any) => {
  console.log("Success:", values);
  const res: any = await http.post("/api/front/member/feedback/save/", {
    params: values,
  });
  if (res.data.code === 200) {
    openTips.value = true;
  }
};
const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
</script>
