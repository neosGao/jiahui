<template>
  <topNav />
  <div class="px-[160px] py-[80px]">
    <img src="@/assets/img/signup/signup.png" alt="" />
    <img src="@/assets/img/signup/signup1.png" alt="" class="mt-5" />
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
            :rules="[
              { required: true, message: 'Please input your email!' },
              { type: 'email', message: 'Please enter a valid email!' },
            ]"
          >
            <a-input v-model:value="formState.email">
              <template #suffix>
                <a-popover>
                  <template #content>
                    <p>get code</p>
                  </template>
                  <UnorderedListOutlined
                    class="cursor-pointer"
                    @click="getCode"
                  />
                </a-popover>
              </template>
            </a-input>
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item
            label="code"
            name="code"
            :rules="[{ required: true, message: 'Please input your code!' }]"
          >
            <a-input v-model:value="formState.code" />
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
            label="telephone"
            name="telephone"
            :rules="[
              { required: true, message: 'Please input your telephone!' },
            ]"
          >
            <a-input v-model:value="formState.telephone" />
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
            name="vatOrg"
            :rules="[
              { required: true, message: 'Please input your VAT/Org.no!' },
            ]"
          >
            <a-input v-model:value="formState.vatOrg" />
          </a-form-item>
        </a-col>

        <a-col :span="8">
          <a-form-item
            label="Country"
            name="country"
            :rules="[
              { required: true, message: 'Please select your country!' },
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
        <a-col :span="24" style="font-size: 16px">
          After hawing read and understood Haccle <span v-on:click="openPrivacy = true" style="font-size: 18px;">Privacy Notice</span> lagree /l do notagree to the procesing of my personal data for managing the registraion the Download Area as beter speciafiedin the abouvementioned Privacy Notice
          <!-- <img src="@/assets/img/signup/signup2.png" alt="" /> -->
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
  <a-modal v-model:open="openPrivacy" :footer="null" style="top:50px;" :width="800">
    <div class="pt-[20px] text-left px-[20px]">
       <p class="text-center">Registration Agreement</p> 
        This Registration Agreement (the “Agreement”) is entered into between [Company Name] (the “Company”) and the individual or entity registering for an account (the “User”). By completing the registration process and using the Company’s services, the User agrees to be bound by the terms and conditions set forth in this Agreement.
        <br>
        Account Registration<br>
        1.1 The User must provide accurate and complete information during the registration process.<br>
        1.2 The User is responsible for maintaining the confidentiality of their account login credentials.<br>
        1.3 The User must promptly notify the Company of any unauthorized use of their account.<br>

        Use of Services<br>
        2.1 The User agrees to use the Company’s services in compliance with all applicable laws and regulations.<br>
        2.2 The User shall not use the services for any illegal or unauthorized purposes.<br>
        2.3 The User is solely responsible for any content they upload, transmit, or display through the services.<br>

        Intellectual Property<br>
        3.1 The Company retains all rights, title, and interest in its intellectual property.<br>
        3.2 The User shall not use the Company’s intellectual property without prior written consent.<br>

        Termination<br>
        4.1 Either party may terminate this Agreement at any time for any reason.<br>
        4.2 Upon termination, the User’s access to the services will be immediately revoked.<br>

        Limitation of Liability<br>
        5.1 The Company shall not be liable for any direct, indirect, incidental, or consequential damages.<br>
        5.2 The User agrees to indemnify and hold the Company harmless from any claims arising out of their use of the services.<br>

        Governing Law and Jurisdiction<br>
        6.1 This Agreement shall be governed by and construed in accordance with the laws of [Jurisdiction].<br>
        6.2 Any disputes arising out of this Agreement shall be subject to the exclusive jurisdiction of the courts of [Jurisdiction].<br>

        By completing the registration process, the User acknowledges that they have read, understood, and agreed to be bound by the terms and conditions of this Agreement.<br>
    </div>
  </a-modal>
  <a-modal v-model:open="openTips" :footer="null" style="top: 30%">
    <div class="pt-[50px] text-center px-[50px]">
      <CheckCircleFilled class="text-8xl text-[#208d7b]" />
      <div class="text-3xl mt-[20px] mb-[60px]">
        Registration Completed<br />Please Log In !
      </div>
      <a-button
        class="rounded-full"
        block
        type="primary"
        html-type="submit"
        @click="router.push('login')"
        >LOG IN</a-button
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
import {
  CheckCircleFilled,
  UnorderedListOutlined,
} from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
const router = useRouter();
const countryList = country;
const openTips = ref(false);
const openPrivacy = ref(false);

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
  code: string;
  agree: boolean;
}

const formState = reactive<FormState>({
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
  code: "",
  agree: false,
});
const onFinish = async (values: any) => {
  if(formState.agree){
    message.error("Please select agree!");
    return;
  }
  const res: any = await http.post("/api/front/member/register", {
    params: values,
  });
  if (res.data.code === 200) {
    openTips.value = true;
  }else{
    message.error(res.data.message||"register fail!");
  }
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
const getCode = async () => {
  const res: any = await http.post("/api/front/member/validate/sendcode", {
    params: { email: formState.email },
  });
  if (res.data.code == 200) {
    message.success("send code success!");
  } else {
    message.error("send code error!");
  }
};
</script>
