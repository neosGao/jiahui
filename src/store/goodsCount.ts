// stores/myStore.js
import { defineStore } from "pinia";
import { http } from "../http/index.ts";

export const useMyStore = defineStore("myStore", {
  state: () => ({
    data: null, // 存储 API 返回的数据
    dataPro: null, // 存储 API 返回的数据
    isLoading: false, // 加载状态
    error: null, // 错误信息
  }),
  actions: {
    async fetchData() {
      // 检查本地是否有缓存
      const cachedData = localStorage.getItem("baseCode");
      if (cachedData) {
        this.data = JSON.parse(cachedData);
        return;
      }

      // 如果没有缓存，则从 API 获取数据
      this.isLoading = true;
      try {
        const response: any = await http.get("/api/front/advert/placelist"); // 替换成真实的 API 地址
        this.data = response.data.data;
        localStorage.setItem("baseCode", JSON.stringify(response.data.data)); // 缓存数据
      } catch (error: any) {
        this.error = error.message || "Failed to fetch data";
      } finally {
        this.isLoading = false;
      }
    },
    async fetchDataPro() {
      // 检查本地是否有缓存
      const cachedData = this.dataPro;
      if (cachedData) {
        return;
      }

      // 如果没有缓存，则从 API 获取数据
      this.isLoading = true;
      try {
        const response: any = await http.get("/api/front/product/allonelist"); // 替换成真实的 API 地址
        this.dataPro = response.data.data;
        localStorage.setItem("ProData", JSON.stringify(response.data.data)); // 缓存数据
        console.log("😅 ~ fetchDataPro ~ this.dataPro:", this.dataPro);
      } catch (error: any) {
        this.error = error.message || "Failed to fetch data";
      } finally {
        this.isLoading = false;
      }
    },
    clearCache() {
      // 清除缓存
      localStorage.removeItem("baseCode");
      localStorage.removeItem("ProData");
    },
  },
});
