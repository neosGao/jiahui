<template>
  <topNav />
  <div class="cut_mian">
    <div
      class="w-full h-[633px] bg-cover bg-center relative"
      :style="{ backgroundImage: `url(${picRootPath + picLastPath})` }"
    >
      <img
        src="@/assets/img/aboutAs/aboutAs1.png"
        alt=""
        class="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      />
    </div>
    <div
      class="bg-slate-200 bg-opacity-50 w-full h-[50px] flex items-center justify-end"
    >
      <img src="@/assets/img/aboutAs/aboutAs2.png" alt="" class="mr-[15%]" />
    </div>
    <div class="w-[70%] mx-auto mt-[100px]">
      <a-row>
        <a-col :span="8" class="incenter flex-col">
          <img src="@/assets/img/aboutAs/aboutUs3.png" alt="" />
          <img src="@/assets/img/aboutAs/aboutUs6.png" alt="" class="my-10" />
          <div class="w-[300px] text-slate-500">
            From life, serve life. Life-oriented brand values orientation, Is
            the most intuitive interpretation of brand extension.
          </div>
        </a-col>
        <a-col :span="8" class="incenter flex-col">
          <img src="@/assets/img/aboutAs/aboutUs4.png" alt="" />
          <img src="@/assets/img/aboutAs/aboutUs7.png" alt="" class="my-10" />
          <div class="w-[300px] text-slate-500">
            From life and above life Art is the distillation of creativity, It
            is also the creative concept that HACCLE always adheres to.
          </div>
        </a-col>
        <a-col :span="8" class="incenter flex-col">
          <img src="@/assets/img/aboutAs/aboutUs5.png" alt="" />
          <img src="@/assets/img/aboutAs/aboutUs8.png" alt="" class="my-10" />
          <div class="w-[300px] text-slate-500">
            Home is the harbor of life and the carrier of love. The focal points
            of life and art finally converge at the node of the home.
          </div>
        </a-col>
      </a-row>
      <div class="mt-40 text-right relative">
        <img
          src="@/assets/img/aboutAs/aboutUs9.png"
          alt=""
          class="absolute top-20 w-[40%]"
        />
        <div class="bg-slate-100 inline-block w-[70%] p-[150px] pl-[20%]">
          <img src="@/assets/img/aboutAs/aboutUs10.png" alt="" />
          <div class="text-left text-slate-500">
            Guangdong Jiahui Home Accessories Co., LTD., founded in 2020, was
            formerly known as Dongguan Jiahui Crafts Co., LTD., founded in 2008,
            headquartered in Dongguan City, Guangdong Province. There are three
            branches of Hong Kong Jiahui Crafts Co., LTD., Dongguan Hershey
            Crafts Co., LTD., Dongguan Huili Crafts Co., LTD. The business scope
            includes household accessories, artificial plants, artificial
            flowers, glass products, metal products, ceramic products, wood
            products, woven goods, handicrafts (except ivory and its products),
            toys, gifts (excluding food).
          </div>
        </div>
      </div>
    </div>
    <img src="@/assets/img/aboutAs/aboutUs12.png" alt="" class="w-full" />
    <div class="w-[70%] mx-auto">
      <div class="incenter flex-col">
        <img
          src="@/assets/img/aboutAs/aboutUs13.png"
          alt=""
          class="mt-[160px] mb-[80px]"
        />
        <!-- <img
          src="@/assets/img/aboutAs/aboutUs14.png"
          alt=""
          class="mb-[120px]"
        /> -->
        <div class="text-left text-slate-500 my-10">
          With a team that is keen on art and engaged in sales and innovation of
          home accessories, we have a wealth of innovative ideasand a broad
          international vision.The company has complete qualification
          certification, the plant size of more than 10,000 square meters,
          equipped with advanced equipment and efficient production lines,
          strong quality management system, has a number of large-scale product
          exhibition halls, and the total number of products exceeds 30,000. The
          company has always adhered to the principle of quality management,
          strictly controlled every finished product, and won the praise and
          trust of our customers. With enthusiasm, dedication and innovative
          work spirit, we continue to meet the needs of customers in different
          countries and regions around the world.
        </div>
      </div>
      <img src="@/assets/img/aboutAs/aboutUs15.png" alt="" class="w-full" />
      <div
        class="w-full bg-cover bg-center bg-[url('@/assets/img/aboutAs/aboutUs16.png')] p-[90px] incenter flex-col"
      >
        <!-- <img src="@/assets/img/aboutAs/aboutUs18.png" alt="" /> -->
        <div class="text-3xl text-slate-500">
          To access our product information, you need to obtain permission,
          register, and have an account. If you want to obtain permission,
          please register here.
          <br />
          >If you are already a distributor of our products but need an account,
          please contact us.
        </div>
        <img
          src="@/assets/img/aboutAs/aboutUs17.png"
          alt=""
          class="mt-10 cursor-pointer"
          @click="router.push('howtoshop')"
        />
      </div>
    </div>
    <div
      class="bg-[url('@/assets/img/aboutAs/aboutUs19.png')] bg-cover bg-center py-[120px]"
    >
      <div class="text-[#fff] text-3xl text-center">
        Qualification Certification
      </div>
      <div class="flex text-[#fff] border w-[70%] mx-auto mt-[50px]">
        <div class="flex-1 border text-center py-[2%]">
          Social responsibility<br />BSCI
        </div>
        <div class="flex-1 border text-center py-[2%]">
          Quality system<br />FCCA
        </div>
        <div class="flex-1 border text-center py-[2%]">
          Environmental<br />ICS
        </div>
        <div class="flex-1 border text-center py-[2%]">C-TPAT<br />SCS</div>
        <div class="flex-1 border text-center py-[2%]">
          National Credit Certification<br />AAA
        </div>
      </div>
      <div class="text-[#fff] w-[70%] mx-auto mt-[50px]">
        <div>
          <swiper
            :slides-per-view="5"
            :space-between="20"
            :modules="[Navigation]"
            navigation
          >
            <swiper-slide v-for="(a, b) in bookList" :key="b"
              ><img :src="picRootPath + a" alt=""
            /></swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
  <bottomNav />
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { http } from "../http";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/navigation";
import "swiper/css";
import { useRouter } from "vue-router";
const router = useRouter();
// 图片根目录
const picRootPath = import.meta.env.VITE_PIC_URL;
// 图片地址
const picLastPath = ref("");
const bookList: any = ref([]);
const getPic = async () => {
  const data: any = await http.get(
    // 获取banner接口
    "/api/front/advert/limitlist",
    {
      params: {
        code: "aboutus_banner",
      },
    }
  );
  picLastPath.value = data.data.data[0].picUrl;
  const res2: any = await http.get(
    // 获取banner接口
    "/api/front/advert/limitlist",
    {
      params: {
        code: "aboutus_cert",
        size: 50,
      },
    }
  );
  bookList.value = res2.data.data.map((item: any) => item.picUrl);
};
getPic();
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
