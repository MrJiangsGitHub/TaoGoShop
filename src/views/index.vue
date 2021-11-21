<template>
  <div class="app">

      <!-- 头部搜索框 -->
    <van-sticky>
      <div id="box">
        <div id="box1">
          <img src="../assets/images/log.png" alt="" />
        </div>
        <div id="box2">
          <van-search v-model="value" placeholder="请输入搜索关键词" />
        </div>
      </div>
    </van-sticky>
    
    <!-- 轮播 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(imgs, index) in imgs" :key="index">
        <img v-lazy="imgs.img" alt="" />
      </van-swipe-item>
    </van-swipe>


    <!-- 九宫格 -->
    <van-grid clickable>
      <van-grid-item v-for="item in grid" :key="item.image">
        <div class="img-boot">
          <img :src="item.image" alt="" />
          <div>
            {{ item.text }}
          </div>
        </div>
      </van-grid-item>
    </van-grid>

    <van-divider>为你推荐</van-divider>

    <!-- 推荐商品 -->
    <div class="shop-head">
      <div class="imgContent" v-for="item in shop" :key="item.id">
        <div class="imgBox flex_center">
          <img v-lazy="item.img_url" alt />
        </div>
        <div class="text Single-line">{{ item.title }}</div>
        <div class="price">
          <span>&yen; {{ item.sell_price }}</span>
          <span>{{ item.buy }}购买</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { Getlunbo, GetShop } from "@/api/api.js";
export default {
  data() {
    return {
      value: "",
      imgs: [],
      grid: [
        { text: "电器", image: require("@/assets/images/4.png") },
        { text: "电器", image: require("@/assets/images/2.png") },
        { text: "电器", image: require("@/assets/images/3.png") },
        { text: "电器", image: require("@/assets/images/5.png") },
        { text: "电器", image: require("@/assets/images/7.png") },
        { text: "电器", image: require("@/assets/images/8.png") },
        { text: "电器", image: require("@/assets/images/9.png") },
        { text: "电器", image: require("@/assets/images/10.png") },
      ],
      shop: [],
    };
  },
  created() {
    this._Getlunbo();
    this._GetShop();
  },
  mounted() {},
  methods: {
    async _Getlunbo() {
      let data = await Getlunbo();
      this.imgs = data.message;
    },
    async _GetShop() {
      let { message } = await GetShop();
      this.shop = message;
      console.log(this.shop);
    },
  },
};
</script>
 
<style lang="scss" scoped>
.app {
  padding-bottom: 50px;
  .my-swipe .van-swipe-item {
    color: #fff;
    height: 200px;
    font-size: 20px;
    text-align: center;
    background-color: #39a9ed;
    img {
      width: 100%;
      height: 100%;
    }
  }
  #box {
    display: flex;
    width: 750px;
    margin: auto;
    #box1 {
      img {
        max-width: 50px;
        min-width: 30px;
        min-height: 45px;
      }
    }
    #box2 {
      flex: 1;
    }
  }

  .van-search {
    padding: 0;
    min-height: 45px;
  }

  .van-grid {
    .img-boot {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      color: #524949;
      img {
        width: 50%;
      }
    }
  }

  .shop-head {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background: #f0eded;
    padding-top: 10px;

    .imgContent {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 350px;
      width: 45%;
      padding: 6px;
      border-radius: 8px;
      background: #fff;
      margin-bottom: 4px;
      font-size: 14px;
      .imgBox {
        height: 268px;
        width: 100%;
        img {
          height: 100%;
          width: 100%;
        }
      }

      .price {
        display: flex;
        justify-content: space-between;
        align-items: center;

        span:nth-child(1) {
          color: #ff845e;
          font-size: 16px;
          font-weight: 700;
        }

        span:nth-child(2) {
          font-size: 12px;
          color: #999;
        }
      }
    }
  }
}
</style>
