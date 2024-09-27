<template>
  <topNav />
  <div class="cut_mian">
    <div
      class="w-full h-[633px] bg-cover bg-center] relative"
      :style="{ backgroundImage: `url(${picRootPath + picLastPath})` }"
    ></div>
    <div
      class="bg-slate-200 bg-opacity-50 w-full h-[50px] flex items-center justify-end"
    >
      <img src="@/assets/img/history/history.png" alt="" class="mr-[15%]" />
    </div>
    <div class="w-[70%] mx-auto mt-[100px] mb-[100px]">
      <div class="incenter flex-col">
        <img src="@/assets/img/history/history1.png" alt="" />
      </div>
      <div class="mt-10">
        <a-row :gutter="50">
          <a-col :span="8" v-for="(a, b) in ListData" :key="b">
            <!-- 动态类名绑定，根据条件添加/移除类名 -->
            <div
              :class="[
                'py-[45px]', // 公共类名
                { 'border-b-4 border-b-slate-500': b < ListData.length - 3 }, // 条件类名
              ]"
            >
              <div class="text-4xl">{{ a.name }}</div>
              <div class="mt-5 text-xl break-words">{{ a.remark }}</div>
            </div>
          </a-col>
        </a-row>
        <img
          src="@/assets/img/history/history2.png"
          alt=""
          class="w-full mt-20"
        />
        <div class="incenter">
          <img src="@/assets/img/history/history3.png" alt="" class="mt-20" />
        </div>
        <div class="text-center text-3xl boldFont">why choose us</div>
        <div class="incenter mt-[60px] border">
          <img src="@/assets/img/history/history4.png" alt="" class="w-[50%]" />
          <div class="w-[50%] px-[5%]">
            <div class="text-4xl boldFont">
              Comprehensive Strength Of The Enterprise
            </div>
            <div class="mt-10">
              Possess a forward-looking vision, perfect management system,
              suficient talent reserve, and rising asset scale.driving the
              sustainable and healthy development of the enterprise.
            </div>
          </div>
        </div>
        <div class="incenter mt-[60px] border">
          <div class="w-[50%] px-[5%]">
            <div class="text-4xl boldFont">
              Professional Manufacturing Capabilities
            </div>
            <div class="mt-10">
              We have a sales team, design team, production team, quality
              inspection team, warehousing and logistics team that adapt to
              market development in an all-round way, as well as a plan for
              technology and material research and development.
            </div>
          </div>
          <img src="@/assets/img/history/history5.png" alt="" class="w-[50%]" />
        </div>
        <div class="incenter mt-[60px] border">
          <img src="@/assets/img/history/history6.png" alt="" class="w-[50%]" />
          <div class="w-[50%] px-[5%]">
            <div class="text-4xl boldFont">Rich And Diverse Products</div>
            <div class="mt-10">
              Possess a forward-looking vision, perfect management system,
              suficient talent reserve, and rising asset scale.driving the
              sustainable and healthy development of the enterprise.
            </div>
          </div>
        </div>
        <div class="mt-[60px]">
          <div class="text-4xl mb-2 boldFont">
            Steady Increase In Market Share
          </div>
          <div>
            Products are exported to all over the world, and we have reached
            parnerships with many well-known brands
          </div>
          <img
            src="@/assets/img/history/history7.png"
            alt=""
            class="w-[100%] mt-10"
          />
        </div>
        <div class="incenter mt-[60px] border h-[400px]">
          <div class="w-[50%] incenter gap-5 h-full">
            <div class="w-[64%] h-full">
              <img
                src="@/assets/img/history/history8.png"
                alt=""
                class="w-full h-full"
              />
            </div>
            <div class="w-[45%] h-full">
              <img
                src="@/assets/img/history/history9.png"
                alt=""
                class="w-full h-full"
              />
            </div>
          </div>
          <div class="w-[50%] px-[5%]">
            <div class="text-4xl boldFont">
              High-quality Ecological Supply Chain System
            </div>
            <div class="mt-10">
              Strive to become a intelligent enterprise in the new era.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="incenter">
      <img src="@/assets/img/history/history10.png" alt="" class="mt-40" />
    </div>
    <div class="bg-[#f8f7f8] p-[100px] mt-[50px]">
      <div class="text-3xl text-center boldFont">Market Distribution:</div>
      <div class="text-center">
        Multiple countries in Europe, Australia, North America, South America,
        Southeast Asia, Oceania, and Africa
      </div>
      <div class="incenter mt-20">
        <img src="@/assets/img/history/history11.png" alt="" />
      </div>
    </div>
    <div class="max-w-[70%] mx-auto mt-[120px]">
      <a-row>
        <a-col :span="12" class="text-4xl boldFont"
          >Exhibiting experience</a-col
        >
        <a-col :span="12" class="text-xl"
          >Canton Fair, Lahore Exhibition, Dubai Exhibition, Birmingham
          Exhibition, Moscow Exhibition, Germany Frankfurt Exhibition, Shanghai
          Department Store Exhibition, Guangdong Expo;</a-col
        >
      </a-row>
      <a-row :gutter="20" class="mt-[120px]">
        <a-col :span="8" class="relative" @click="router.push('event')">
          <!-- 添加 relative 类 -->
          <img
            :src="picBottomPath[0]"
            alt=""
            class="w-[554.5px] max-h-[540px]"
          />
          <!-- 遮罩层 -->
          <div class="absolute inset-0 bg-[#1a8e7d] opacity-50 mx-[10px]"></div>

          <!-- 文本居中显示 -->
          <div
            class="absolute inset-0 flex justify-center items-center text-white border border-white"
          >
            <div class="border border-white p-[20px] py-[10px] cursor-pointer">
              More Of Our Events
            </div>
          </div>
        </a-col>
        <a-col :span="16">
          <a-row :gutter="20">
            <a-col :span="8">
              <img
                :src="picBottomPath[1]"
                alt=""
                class="w-[374px] max-h-[337px]"
              /> </a-col
            ><a-col :span="8">
              <img
                :src="picBottomPath[2]"
                alt=""
                class="w-[374px] max-h-[337px]"
              /> </a-col
            ><a-col :span="8">
              <img
                :src="picBottomPath[3]"
                alt=""
                class="w-[374px] max-h-[337px]"
              />
            </a-col>
          </a-row>
          <a-row :gutter="20" class="mt-[20px]"
            ><a-col :span="12">
              <img
                :src="picBottomPath[4]"
                alt=""
                class="w-[567px] max-h-[341.5px]"
              /> </a-col
            ><a-col :span="12">
              <img
                :src="picBottomPath[5]"
                alt=""
                class="w-[567px] max-h-[341.5px]"
              />
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </div>
  </div>
  <bottomNav />
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { http } from "../http";
import { useRouter } from "vue-router";
const router = useRouter();
// 图片根目录
const picRootPath = import.meta.env.VITE_PIC_URL;
// 图片地址
const picLastPath = ref("");
const picBottomPath: any = ref([]);
const ListData: any = ref([]);
const getPic = async () => {
  const data: any = await http.get(
    // 获取banner接口
    "/api/front/advert/limitlist",
    {
      params: {
        code: "devleop_banner",
      },
    }
  );
  console.log("😅 ~ getPic ~ data:", data.data.data[0].picUrl);
  picLastPath.value = data.data.data[0].picUrl;
};
const getPicBottom = async () => {
  const data: any = await http.get(
    // 获取banner接口
    "/api/front/advert/limitlist",
    {
      params: {
        code: "devleop_exhibiting",
        size: 6,
      },
    }
  );
  console.log("😅 ~ getPic ~ data:", data.data.data);
  picBottomPath.value = data.data.data.map(
    (item: any) => picRootPath + item.picUrl
  );
};
const getPicList = async () => {
  const data: any = await http.get(
    // 获取banner接口
    "/api/front/article/developenlist"
  );
  console.log("😅 ~ getPic ~ data:", data.data.data);
  ListData.value = data.data.data;
};
getPic();
getPicList();
getPicBottom();
</script>
<style lang="less" scoped>
.container {
  display: flex;
  gap: 20px;
}
.left-image {
  width: 50%;
}
.right-images {
  width: 50%; /* 调整容器的宽度 */
  column-count: 2; /* 2列布局 */
  column-gap: 20px; /* 列间距 */
}
.right-images img {
  width: 100%;
  margin-bottom: 20px;
  display: block;
  break-inside: avoid; /* 防止图片被打断 */
}
</style>
