<template>
  <div id="app">
    <van-nav-bar
      :title="title"
      :left-arrow="bbr"
      v-show="navbar"
      @click-left="onClickLeft"
    />

    <van-tabbar v-model="active" :active-color="color" v-show="tbbar">
      <van-tabbar-item icon="home-o" to="/index">首页</van-tabbar-item>
      <van-tabbar-item icon="cart-o" badge="99+" to="/car"
        >购物车</van-tabbar-item
      >
      <van-tabbar-item icon="manager-o" to="/user">个人中心</van-tabbar-item>
    </van-tabbar>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      title: "标题",
      color: "#ff6c00",
      navbar: true,
      tbbar: true,
      bbr: true,
      onLine: navigator.online,
    };
  },
  watch: {
    $route: {
      handler(val) {
        let { name, headnavbar, titlebbar, tbbat } = val.meta;
        this.title = name;
        this.tbbar = titlebbar ? true : false;
        this.bbr = tbbat ? true : false;
        this.navbar = headnavbar;
      },
      immediate: true,
    },
    onLine() {
      this.onLine === false && this.$toast.fail("网络连接失败");
      this.onLine === true && this.$toast.success("网络连接成功");
    },
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    NetworkStatusUpdate(e) {
      this.onLine = e.type === "online" ? true : false;
    },
  },
  mounted() {
    window.addEventListener("online", this.NetworkStatusUpdate);
    window.addEventListener("offline", this.NetworkStatusUpdate);
  },
};
</script>
<style lang="scss">
@import './assets/scss/common.scss';
#app {
  min-width: 320px;
  max-width: 750px;
  margin: auto;
  .van-tabbar {
    min-width: 320px;
    max-width: 750px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
