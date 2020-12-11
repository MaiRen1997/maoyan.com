<template>
  <nav>
    <address v-on:click ="goToCities">{{ city.name }}</address>
    <ul>
      <!-- <li
        v-for="(item, index) in navList"
        :key="index"
        @click="handleClick(index)"
        :class="{ active: activeIndex === index }"
      >
        {{ item }}
      </li> -->
      <router-link
        tag="li"
        v-for="(item, index) in navList"
        :key="index"
        :to="item.url"
        active-class="active"
        @click="abc"
      >
        {{ item.title }} 
      </router-link>
    </ul>
    <span class="iconfont icon-icon-test"></span>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      /* navList: ["热映", "影院", "待映", "其他"], */
      navList: [
        {
          title: "热映",
          url: "hot"
        },
        {
          title: "影院",
          url: "cinema"
        },
        {
          title: "待映",
          url: "wait"
        },
        {
          title: "经典",
          url: "classic"
        }
      ],
      activeIndex: 0
    };
  },
  methods: {
    handleClick(i) {
      this.activeIndex = i;
    },
    abc(){
      console.log(1);
    },
    goToCities(){
      this.$router.push("/cities");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/var.scss";
nav {
  height: 46px;
  border-bottom: 1px solid $border-color;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 14px;
  ul {
    display: flex;
    height: 100%;
    li {
      width: 60px;
      height: 100%;
      // padding: 0 14px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }
    .active {
      color: $active-color;
      font-size: 20px;
      font-weight: bold;
      &::after {
        content: "";
        position: absolute;
        width: 35px;
        height: 3px;
        background: $theme-color;
        bottom: 2px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
}
</style>
