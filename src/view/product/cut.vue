<template>
  <topNav />
  <div class="cut_mian">
    <div class="top_img">
      <img :src="picRootPath + ProData.picUrl" class="w-full" />
    </div>
    <div class="title_switch">
      <div class="left">
        <div class="nul"></div>
        <div class="title">{{ route.query.name }}</div>
      </div>
      <div class="right">
        <div class="item_box">
          <!-- <div class="item active">Cut Flowers</div> -->
          <div
            :class="a.id === typeId ? 'item active' : 'item'"
            v-for="(a, b) in ProData.typePicList"
            :key="b"
            @click="changeTypeId(a)"
          >
            {{ a.name }}
          </div>
        </div>
        <div class="nul"></div>
      </div>
    </div>
    <div class="select_box">
      <div class="left">
        <a-select
          v-model:value="selectItem.Price"
          placeholder="Price Group"
          @change="selectChange"
        >
          <a-select-option
            v-for="item in selectList.priceList"
            :value="item.id"
            >{{ item.name }}</a-select-option
          >
        </a-select>
        <a-select
          v-model:value="selectItem.Colours"
          placeholder="Colours"
          @change="selectChange"
        >
          <a-select-option v-for="item in selectList.colorList" :value="item.id"
            ><div
              class="w-[10px] h-[10px] rounded-full inline-block"
              :style="{ backgroundColor: item.remark }"
            ></div>
            {{ item.name }}</a-select-option
          >
        </a-select>
        <a-select
          v-model:value="selectItem.Height"
          placeholder="Height"
          @change="selectChange"
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
          @change="selectChange"
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
          @change="selectChange"
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
    <a-spin :spinning="loading">
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
            <img
              :src="picRootPath + item.picUrl"
              style="height: 305px; width: 305px"
            />
            <div class="like" @click.stop="loveClick(item)">
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
            <div class="tips">Weight: {{ item.weight }}g</div>
            <div class="tips">Size: {{ item.sizeInfo }}</div>
          </div>
        </div>
      </div>
    </a-spin>
    <a-empty v-if="datalist.length === 0" />
    <div class="incenter">
      <a-pagination
        v-model:current="page.page"
        :total="total"
        show-less-items
        :showSizeChanger="false"
        @change="changePage"
      />
    </div>
  </div>
  <bottomNav />
</template>
<script lang="ts" setup>
import { ref, watch } from "vue";
import { SwapOutlined, HeartTwoTone, EyeOutlined } from "@ant-design/icons-vue";
import { http } from "../../http";
import { useRoute, useRouter } from "vue-router";
import { message } from "ant-design-vue";
// 图片根目录
const picRootPath = import.meta.env.VITE_PIC_URL;
const route = useRoute();
const router = useRouter();

const ProData: any = ref({});
const typeId: any = ref("");
const loading = ref(false);

const selectList: any = ref({
  colorList: [],
  heightList: [],
  materialList: [],
  palceList: [],
  priceList: [],
});
const selectItem: any = ref({
  Price: undefined,
  Colours: undefined,
  Height: undefined,
  Material: undefined,
  Placement: undefined,
});

const selectChange = (clear: boolean) => {
  if (clear) {
    page.value.page = 1;
  }
  const height = selectList.value.heightList.filter(
    (item: any) => item.name == selectItem.value.Height
  )[0];
  const material = selectList.value.materialList.filter(
    (item: any) => item.id == selectItem.value.Material
  )[0];
  const placement = selectList.value.palceList.filter(
    (item: any) => item.id == selectItem.value.Placement
  )[0];
  const price = selectList.value.priceList.filter(
    (item: any) => item.name == selectItem.value.Price
  )[0];
  const colours = selectList.value.colorList.filter(
    (item: any) => item.id == selectItem.value.Colours
  )[0];
  const params = {
    hs: height?.start ?? null,
    he: height?.end ?? null,
    mid: material?.id ?? null,
    pid: placement?.id ?? null,
    ps: price?.start ?? null,
    pe: price?.end ?? null,
    cid: colours?.id ?? null,
  };
  search(params);
};

const page = ref({
  page: 1,
  size: 12,
});

const total = ref<number>(0);

const datalist: any = ref([1, 2, 3, 4, 6, 7, 8, 9, 11, 2]);
// 产品大类
const getPicList = async () => {
  const data: any = await http.get("/api/front/product/typebanner", {
    params: {
      tid: route.query.id,
    },
  });
  const res: any = await http.get("/api/front/product/selectcriteria");
  console.log("😅 ~ getPicList ~ res:", res.data.data);
  selectList.value = res.data.data;
  console.log("😅 ~ getPicList ~ data:", data.data.data);
  ProData.value = data.data.data;
  typeId.value = route.query.id;
  search();
};

const search = async (params: any = {}) => {
  loading.value = true;
  const searchParams = {
    tid: typeId.value,
    ...params,
    ...page.value,
  };
  const data: any = await http.get("/api/front/product/page", {
    params: searchParams,
  });
  console.log("😅 ~ search ~ data:", data.data.data.list);
  datalist.value = data.data.data.list;
  total.value = data.data.data.total;
  loading.value = false;
};

const changeTypeId = (a: any) => {
  typeId.value = a.id;
  search();
};
// onMounted(() => {
// });
getPicList();
// 监听路由参数的变化
watch(
  () => route.query.id,
  () => {
    // 调用函数来获取新数据
    getPicList();
  }
);
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
    if (favor) {
      message.success("favor success");
    } else {
      message.success("cancel success");
    }
  } else if (data.data.code == 401) {
    message.error("Please Log In !");
  }
  console.log("😅 ~ loveClick ~ data:", data);
};
const changePage = (val: number) => {
  page.value.page = val;
  selectChange(false);
};
</script>
<style lang="less" scoped>
.cut_mian {
  min-width: 1280px;
  .top_img {
    position: relative;
    font-size: 0;
    .sgin_img {
      position: absolute;
      bottom: 10%;
      width: 385px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .title_switch {
    width: 100%;
    // height: 120px;
    min-width: 1280px;
    display: flex;
    border-top: 2px #606060 solid;
    border-bottom: 2px #606060 solid;
    margin: 65px 0;
    .left {
      width: 32.55%;
      display: flex;
      align-items: center;
      border-right: 2px #606060 solid;
      .nul {
        width: 46%;
        flex-shrink: 1;
        height: 1px;
      }
      .title {
        width: 54%;
        padding-right: 50px;
        flex-shrink: 0;
        font-size: 30px;
        font-weight: bold;
        word-break: break-all;
        font-family: "Courier New", Courier, monospace;
      }
    }
    .right {
      width: 67.45%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .nul {
        width: 23%;
        flex-shrink: 1;
        height: 1px;
      }
      .item_box {
        margin-top: 50px;
        width: calc(100% - 23% - 45px);
        padding-left: 45px;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        .item {
          cursor: pointer;
          margin-left: 80px;
          margin-bottom: 50px;
          border-bottom: 1px solid #fff;
          &:hover {
            border-bottom: 1px solid #606060;
          }
        }
        .active {
          border-bottom: 1px solid #606060;
        }
      }
    }
  }
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
}
</style>
