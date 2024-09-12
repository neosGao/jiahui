<template>
  <topNav />
  <div class="px-[160px] py-[80px] flex">
    <div class="bg-[#f8f7f8] w-[450px] h-[850px]">
      <div class="incenter pt-[85px] flex-col">
        <img src="../../assets/img/personal/personal.png" alt="" />
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
    <div style="width: 70%" class="ml-[100px]">
      <div class="flex items-center justify-between">
        <div class="total">
          <span>{{ total }}</span
          >Products Found
        </div>
        <div class="btn"><SwapOutlined /></div>
      </div>
      <div class="content_box">
        <div class="item" v-for="(item, index) in datalist" :key="index">
          <div class="img_box">
            <img src="../../assets/img/product/cut/cut.png" />
            <div class="like">
              <!-- 这里是双色点收藏按钮，判断是否收藏更改twoToneColor的颜色 -->
              <HeartTwoTone twoToneColor="#eb2f96" />
            </div>
          </div>
          <div class="title_box">
            <div class="title">Kentia Palm</div>
            <div class="look">
              <EyeOutlined />
              <span>55</span>
            </div>
          </div>
          <div class="tips_box">
            <div class="tips">HA4LT19680</div>
            <div class="tips">Items packed: {{ item }}st</div>
            <div class="tips">PG: {{ item }}</div>
          </div>
        </div>
      </div>
      <div class="incenter">
        <a-pagination v-model:current="current" :total="50" show-less-items />
      </div>
    </div>
  </div>
  <bottomNav />
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import { SwapOutlined, HeartTwoTone, EyeOutlined } from "@ant-design/icons-vue";
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

const datalist = ref<number[]>([1, 2, 3, 4, 6, 7, 8, 9, 11, 2]);

const total = ref<number>(0);

const current = ref<number>(1);

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
