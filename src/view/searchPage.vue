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
        <a-col
          :span="4"
          v-for="(a, b) in picList"
          :key="b"
          @click="searchPageForTid(a.id)"
        >
          <div>
            <img
              :src="picRootPath + a.picUrl"
              alt=""
              class="w-[150px] h-[150px] mx-auto cursor-pointer"
            />
            <div class="text-center text-base cursor-pointer">{{ a.name }}</div>
          </div>
        </a-col>
      </a-row>
    </div>
    <div class="w-full flex px-[100px] mt-[30px]">
      <div class="flex-1 pr-[10%]">
        <div class="text-2xl">All Products</div>
        <div v-for="(a, b) in leftList" :key="b" class="pb-5 border-b-2">
          <div class="text-xl flex justify-between mt-2">
            <span>{{ a.name }}</span
            ><span>{{ a.amount }}</span>
          </div>
          <div
            class="flex justify-between mt-[10px]"
            v-for="(c, d) in a.childs"
            :key="d"
          >
            <a-checkbox
              v-model:checked="checkedList[c.id]"
              :disabled="c.amount == 0"
              >{{ c.name }}</a-checkbox
            ><span>{{ c.amount }}</span>
          </div>
          <div class="text-[#208d7b] cursor-pointer mt-2" @click="selectAll(a)">
            + See all
          </div>
        </div>
        <div class="text-2xl mt-5">Filter By</div>
        <div class="font-bold mt-2">Price</div>
        <a-slider v-model:value="filterArr" range max="60" />
        <div>RANGE ${{ filterArr[0] || 0 }} - ${{ filterArr[1] || 0 }}</div>
        <div class="text-2xl mt-5">Colours</div>
        <a-row :gutter="10" class="mt-2">
          <a-col :span="4" v-for="(a, b) in selectList.colorList" :key="b"
            ><div
              class="w-[30px] h-[30px] rounded-full mt-2 shadow-slate-400"
              :class="colorOne === a.id ? 'shadow-lg' : ''"
              :style="{ backgroundColor: a.remark }"
              @click="colorOne = a.id"
            ></div
          ></a-col>
        </a-row>
        <a-button type="primary" class="rounded-none mt-10" @click="searchLeft"
          >Search</a-button
        >
      </div>
      <div class="w-[70%]">
        <div class="select_box">
          <div class="left">
            <a-select
              v-model:value="selectItem.Height"
              placeholder="Height"
              style="width: 120px"
              @change="(val: any) => selectChange(val, 'Height')"
            >
              <a-select-option
                v-for="item in selectList.heightList"
                :value="item.name"
                >{{ item.name }}</a-select-option
              >
            </a-select>
            <a-select
              v-model:value="selectItem.Material"
              placeholder="Material"
              style="width: 120px"
              @change="(val: any) => selectChange(val, 'Material')"
            >
              <a-select-option
                v-for="item in selectList.materialList"
                :value="item.id"
                >{{ item.name }}</a-select-option
              >
            </a-select>
            <a-select
              v-model:value="selectItem.Placement"
              placeholder="Placement"
              style="width: 120px"
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
                <HeartTwoTone
                  @click.stop="loveClick(item)"
                  :twoToneColor="item.favor ? '#eb2f96' : ''"
                />
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
              <div class="tips">Weight: {{ item.weight }}g</div>
              <div class="tips">Size: {{ item.sizeInfo }}</div>
            </div>
          </div>
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

const checkedList: any = ref([]);

const searchText = ref("");
const leftList: any = ref([]);
const filterArr: any = ref([]);
const colorOne = ref("");
const selectItem: any = ref({
  Height: undefined,
  Material: undefined,
  Placement: undefined,
});

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

const selectChange = (_val: any, _name: any) => {
  const height = selectList.value.heightList.filter(
    (item: any) => item.name == selectItem.value.Height
  )[0];
  const material = selectList.value.materialList.filter(
    (item: any) => item.id == selectItem.value.Material
  )[0];
  const placement = selectList.value.palceList.filter(
    (item: any) => item.id == selectItem.value.Placement
  )[0];
  const params = {
    hs: height?.start ?? null,
    he: height?.end ?? null,
    mid: material?.id ?? null,
    pid: placement?.id ?? null,
  };
  searchLeft(params);
};

const getPicList = async () => {
  const res2: any = await http.get("/api/front/product/selectcriteria");
  selectList.value = res2.data.data;
  picList.value = res2.data.data.adtypeList;
};

const search = async (params: any = {}) => {
  const searchParams = {
    word: searchText.value,
    ...params,
  };
  const data: any = await http.get("/api/front/product/page", {
    params: searchParams,
  });
  console.log("😅 ~ search ~ data:", data.data.data.list);
  datalist.value = data.data.data.list;
  total.value = data.data.data.total;
};
const getLeft = async () => {
  const data: any = await http.get(
    // 获取左侧接口
    "/api/front/product/search/typelist"
  );
  console.log("😅 ~ getLeft ~ data:", data.data.data);
  leftList.value = data.data.data;
};
const selectAll = (a: any) => {
  const idList = a.childs
    .map((item: any) => {
      if (item.amount != 0) {
        return item.id;
      }
    })
    .filter((a: any) => !!a);
  idList.forEach((item: any) => {
    checkedList.value[item] = true;
  });
};
search();
getPicList();
getLeft();
const loveClick = async (love: any) => {
  const favor = !Boolean(love.favor);
  const data: any = await http.post("/api/front/member/favorproduct", {
    params: {
      favor,
      id: love.id,
    },
  });
  if (data.data.code == 200) {
    love.favor = favor;
  }
  console.log("😅 ~ loveClick ~ data:", data);
};
const searchPageForTid = (tid: any) => {
  searchText.value = "";
  checkedList.value = {};
  selectItem.value = {
    Height: undefined,
    Material: undefined,
    Placement: undefined,
  };
  search({ tid });
};
const searchLeft = (select: any = {}) => {
  const params = {
    tids: Object.keys(checkedList.value).join(","),
    ps: filterArr.value[0] ?? null,
    pe: filterArr.value[1] ?? null,
    cid: colorOne.value,
    ...select,
  };
  search(params);
};
</script>

<style lang="less" scoped>
.select_box {
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
