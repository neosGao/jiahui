<template>
  <topNav />
  <div class="detail_main">
    <div class="nav">
      <div class="item">
        <div class="name">HOME</div>
        <div class="name">/</div>
        <div class="name">ALL PRODUCTS</div>
        <div class="name">/</div>
        <div class="name">{{ route.query.name }}</div>
      </div>
    </div>
    <div class="buy_main">
      <div class="left">
        <a-carousel arrows dots-class="slick-dots slick-thumb">
          <template #customPaging="props">
            <a>
              <img :src="getImgUrl(props.i)" />
            </a>
          </template>
          <div v-for="(item, index) in imgLst" :key="index">
            <img :src="item" />
          </div>
        </a-carousel>
      </div>
      <div class="right">
        <div class="top_title">
          <div class="left">
            <div class="title">Black Leaves</div>
            <div class="tips">HA4LY19680</div>
          </div>
          <div class="right">
            <div class="like">
              <!-- 这里是双色点收藏按钮，判断是否收藏更改twoToneColor的颜色 -->
              <HeartTwoTone twoToneColor="#eb2f96" />
            </div>
          </div>
        </div>
        <div class="form_box">
          <div class="label_item">
            <div class="label">Colours</div>
            <div class="value">{{ infoObj.colorName }}</div>
          </div>
          <div class="label_item">
            <div class="label">Height</div>
            <div class="value">{{ infoObj.height }}</div>
          </div>
          <div class="label_item">
            <div class="label">Price Group</div>
            <div class="value">{{ infoObj.price }}</div>
          </div>
          <div class="label_item">
            <div class="label">Packing</div>
            <div class="value">{{ infoObj.weight }}</div>
          </div>
          <div class="label_item">
            <div class="label">Material</div>
            <div class="value">{{ infoObj.materialName }}</div>
          </div>
          <div class="label_item">
            <div class="label">Case Size</div>
            <div class="value">{{ infoObj.sizeInfo }}</div>
          </div>
          <div class="btns">
            <div class="add_btns">
              <div class="btn" @click="handleCount('-')">-</div>
              <div>{{ count }}</div>
              <div class="btn" @click="handleCount('+')">+</div>
            </div>
            <div class="confirm_btn">Add To Bag</div>
          </div>
        </div>
      </div>
    </div>
    <a-divider>Related products</a-divider>
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
import { HeartTwoTone, EyeOutlined } from "@ant-design/icons-vue";
import { useRoute, useRouter } from "vue-router";
import { http } from "../../http";
// 图片根目录
const picRootPath = import.meta.env.VITE_PIC_URL;
const route = useRoute();
const router = useRouter();

const datalist: any = ref([]);

const infoObj: any = ref({});

const imgLst = ref<string[]>([]);

const count = ref<number>(1);

const search = async () => {
  const data: any = await http.get(
    "/api/front/product/detail/" + route.query.id
  );
  console.log("😅 ~ search ~ data:", data.data.data);
  infoObj.value = data.data.data;
  const picList = JSON.parse(data.data.data.picMoreUrl);
  imgLst.value = picList.map((item: any) => picRootPath + item);
  // datalist.value = data.data.data.list;
};

const searchAbout = async () => {
  const searchParams = {
    tid: route.query.tid,
  };
  const data: any = await http.get("/api/front/product/page", {
    params: searchParams,
  });
  console.log("😅 ~ search ~ data:", data.data.data.list);
  datalist.value = data.data.data.list;
};

search();
searchAbout();

const getImgUrl = (i: number) => {
  // i 为图片下标，对应数组图片切换然后返回对应图片
  return imgLst.value[i];
};

const handleCount = (type: string) => {
  if (type == "-") {
    if (count.value <= 1) return;
    count.value--;
  } else {
    count.value++;
  }
};
</script>
<style lang="less" scoped>
.detail_main {
  .nav {
    width: 100%;
    background-color: #f8f7f8;
    min-width: 1280px;
    display: flex;
    justify-content: center;

    .item {
      width: 70%;
      min-width: 1280px;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      .name {
        margin: 20px 3px;
        cursor: pointer;
        color: #474443;
      }
    }
  }

  .buy_main {
    width: 70%;
    min-width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-bottom: 200px;
    margin-top: 60px;
    .left {
      width: 47%;
    }
    .right {
      width: 47%;
      .top_title {
        width: 100%;
        display: flex;
        border-bottom: 1px solid #474443;
        padding-bottom: 30px;
        margin-bottom: 40px;
        .left {
          flex: 1;
          .title {
            font-size: 28px;
          }
        }
        .right {
          width: 55px;
          .like {
            width: 55px;
            height: 55px;
            background-color: #f8f7f8;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            .anticon {
              font-size: 24px;
            }
          }
        }
      }
      .form_box {
        .label_item {
          display: flex;
          align-items: center;
          .label {
            width: 140px;
            margin-bottom: 13px;
          }
          .value {
            width: 60%;
            border: 1px solid #a0a0a0;
            padding: 5px 10px;
            border-radius: 3px;
            margin-bottom: 13px;
          }
        }
        .btns {
          display: flex;
          margin-top: 50px;
          .add_btns {
            display: flex;
            align-items: center;
            background-color: #f8f7f8;
            padding: 15px 0px;
            .btn {
              padding: 10px;
              cursor: pointer;
            }
          }
          .confirm_btn {
            background-color: #208d7b;
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            cursor: pointer;
          }
        }
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
      }
    }
  }

  .ant-carousel :deep(.slick-dots) {
    position: relative;
    height: auto;
  }

  .ant-carousel :deep(.slick-slide img) {
    border: 5px solid #fff;
    display: block;
    margin: auto;
    max-width: 100%;
  }

  // .ant-carousel :deep(.slick-arrow) {
  //     display: none !important;
  // }

  .ant-carousel :deep(.slick-thumb) {
    bottom: -20px;
    li {
      width: 60px;
    }
    .slick-active {
      width: 92px;
    }
  }
  .ant-divider {
    margin-bottom: 100px;
  }
  .ant-divider :deep(.ant-divider-inner-text) {
    font-size: 24px;
  }
}
</style>
