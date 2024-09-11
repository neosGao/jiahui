<template>
  <topNav />
  <div class="px-[160px] py-[80px]">
    <img src="../assets/img/signup/signup.png" alt="" />
    <img src="../assets/img/signup/signup1.png" alt="" class="mt-5" />
    <div class="font-bold mt-[60px]">CONCAT</div>
    <a-form
      :model="formState"
      name="basic"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
      layout="vertical"
    >
      <a-row :gutter="24">
        <a-col :span="8">
          <a-form-item
            label="Email"
            name="email"
            :rules="[{ required: true, message: 'Please input your email!' }]"
          >
            <a-input v-model:value="formState.email" />
          </a-form-item>
        </a-col>
        <a-col :span="8">
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
        <a-col :span="8">
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
        <a-col :span="8">
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
        <a-col :span="8">
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

        <a-col :span="24" class="font-bold mt-[0px]"> COMPANY </a-col>

        <a-col :span="8">
          <a-form-item
            label="Company"
            name="company"
            :rules="[{ required: true, message: 'Please input your company!' }]"
          >
            <a-input v-model:value="formState.company" />
          </a-form-item>
        </a-col>
        <a-col :span="8">
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

        <a-col :span="8">
          <a-form-item
            label="Country"
            name="country"
            :rules="[{ required: true, message: 'Please input your country!' }]"
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
        <a-col :span="8">
          <a-form-item
            label="Website"
            name="website"
            :rules="[{ required: true, message: 'Please input your website!' }]"
          >
            <a-input v-model:value="formState.website" />
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item
            label="Mailing address"
            name="address"
            :rules="[
              { required: true, message: 'Please input your mailing address!' },
            ]"
          >
            <a-textarea v-model:value="formState.address" />
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <img src="../assets/img/signup/signup2.png" alt="" />
        </a-col>
        <a-col :span="24" class="mt-4">
          <a-checkbox v-model:checked="formState.agree"
            >l do not agree</a-checkbox
          >
        </a-col>
        <a-col :span="8" class="mt-4">
          <a-button type="primary" html-type="submit" block class="rounded-none"
            >SIGN UP</a-button
          >
        </a-col>
      </a-row>
    </a-form>
  </div>
  <bottomNav />
</template>

<script lang="ts" setup>
import { reactive } from "vue";
interface FormState {
  email: string;
  telphone: string;
  firstName: string;
  lastName: string;
  password: string;
}

const formState = reactive<FormState>({
  email: "",
  telphone: "",
  firstName: "",
  lastName: "",
  password: "",
});
const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
</script>
