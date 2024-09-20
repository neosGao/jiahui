<template>
  <topNav />
  <div class="product-page mt-10">
    <!-- 搜索栏 -->
    <!-- <a-input-search
      v-model:value="searchText"
      placeholder="Enter product code"
      enter-button
      @search="onSearch"
      style="width: 400px; margin-bottom: 16px"
    /> -->
    <div class="w-full incenter">
      <a-input
        v-model:value="searchText"
        placeholder="Dozen Roses"
        class="rounded-full h-[50px] w-[50%]"
        @pressEnter="search()"
      >
        <template #prefix>
          <SearchOutlined class="text-[#208d7b]" @click="search()" />
        </template>
        <template #suffix>
          <a-tooltip title="Extra information">
            <CloseCircleOutlined @click="searchText = ''" />
          </a-tooltip>
        </template>
      </a-input>
    </div>

    <!-- 流行过滤器 -->
    <div class="mt-[50px] text-[#208d7b] text-3xl text-center">
      Popular Filters
    </div>
    <div class="w-[70%] mx-auto">
      <a-row :gutter="20">
        <a-col :span="4" v-for="(a, b) in picList" :key="b">
          <div>
            <img :src="picRootPath + a.picUrl" alt="" />
            <div class="text-center text-base">{{ a.name }}</div>
          </div>
        </a-col>
      </a-row>
    </div>
    <div class="select_box">
      <div class="left">
        <a-select
          v-model="price"
          placeholder="Price Group"
          @change="(val: any) => selectChange(val, 'Price Group')"
        >
          <a-select-option
            v-for="item in selectList.priceList"
            :value="item.id"
            >{{ item.name }}</a-select-option
          >
        </a-select>
        <a-select
          v-model="price"
          placeholder="Colours"
          @change="(val: any) => selectChange(val, 'Colours')"
        >
          <a-select-option
            v-for="item in selectList.colorList"
            :value="item.id"
            >{{ item.name }}</a-select-option
          >
        </a-select>
        <a-select
          v-model="price"
          placeholder="Height"
          @change="(val: any) => selectChange(val, 'Height')"
        >
          <a-select-option
            v-for="item in selectList.heightList"
            :value="item.name"
            >{{ item.name }}</a-select-option
          >
        </a-select>
        <a-select
          v-model="price"
          placeholder="Material"
          @change="(val: any) => selectChange(val, 'Material')"
        >
          <a-select-option
            v-for="item in selectList.materialList"
            :value="item.id"
            >{{ item.name }}</a-select-option
          >
        </a-select>
        <a-select
          v-model="price"
          placeholder="Placement"
          @change="(val: any) => selectChange(val, 'Placement')"
        >
          <a-select-option
            v-for="item in selectList.palceList"
            :value="item.id"
            >{{ item.name }}</a-select-option
          >
        </a-select>
      </div>
      <div class="right">
        <div class="total">
          <span>{{ total }}</span
          >Products Found
        </div>
        <div class="btn"><SwapOutlined /></div>
      </div>
    </div>
    <a-empty v-if="datalist.length === 0" />
    <div class="content_box">
      <div class="item" v-for="(item, index) in datalist" :key="index">
        <div
          class="img_box cursor-pointer"
          @click="
            router.push({
              path: '/detail',
              query: {
                name: route.query.name,
                id: item.id,
                tid: route.query.id,
              },
            })
          "
        >
          <img :src="picRootPath + item.picUrl" />
          <div class="like">
            <!-- 这里是双色点收藏按钮，判断是否收藏更改twoToneColor的颜色 -->
            <HeartTwoTone :twoToneColor="item.favor ? '#eb2f96' : ''" />
          </div>
        </div>
        <div class="title_box">
          <div class="title">{{ item.name }}</div>
          <div class="look">
            <EyeOutlined />
            <span>{{ item.clickNum }}</span>
          </div>
        </div>
        <div class="tips_box">
          <div class="tips">{{ item.hhNo }}</div>
          <div class="tips">Items packed: {{ item.weight }}st</div>
          <div class="tips">PG: {{ item.sizeInfo }}</div>
        </div>
      </div>
    </div>
  </div>
  <bottomNav />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { http } from "../http";
import {
  SearchOutlined,
  CloseCircleOutlined,
  HeartTwoTone,
  EyeOutlined,
  SwapOutlined,
} from "@ant-design/icons-vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
// 图片根目录
const picRootPath = import.meta.env.VITE_PIC_URL;

const searchText = ref("");
const price = ref("");

const total = ref(0);

const datalist: any = ref([1, 2, 3, 4, 6, 7, 8, 9, 11, 2]);

const picList: any = ref([]);

const selectList: any = ref({
  colorList: [],
  heightList: [],
  materialList: [],
  palceList: [],
  priceList: [],
});

const selectChange = (val: any, name: any) => {
  console.log("😅 ~ selectChange ~ val, name:", val, name);
};

const search = async () => {
  const searchParams = {
    word: searchText.value,
  };
  const data: any = await http.get("/api/front/product/page", {
    params: searchParams,
  });
  console.log("😅 ~ search ~ data:", data.data.data.list);
  datalist.value = data.data.data.list;
  total.value = data.data.data.total;
};

const getPic = async () => {
  const data: any = await http.get(
    // 获取banner接口
    "/api/front/advert/limitlist",
    {
      params: {
        code: "search_typepic",
      },
    }
  );
  console.log("😅 ~ getPic ~ data:", data.data.data);
  picList.value = data.data.data;
};
getPic();
search();
</script>

<style lang="less" scoped>
.select_box {
  width: 70%;
  min-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left {
    > div {
      margin-right: 15px;
    }
  }
  .right {
    display: flex;
    align-items: center;
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
  }
}
.content_box {
  width: 70%;
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
      .tips {
        margin-bottom: 10px;
      }
    }
  }
}
.more_btn {
  width: 200px;
  text-align: center;
  font-size: 16px;
  padding: 15px 30px;
  word-break: keep-all;
  margin: auto;
  margin-bottom: 50px;
  background-color: #208d7b;
  color: #fff;
  cursor: pointer;
}
</style>
