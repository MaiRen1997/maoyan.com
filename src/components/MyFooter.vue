<template>
  <footer>
    <ul class="contain">
      <!-- <li
        v-for="(item, index) in foot_list"
        :key="item.icon"
        :class="{ active: activeIndex === index }"
        @click="handleClick(index)"
      >
        <span class="iconfont" :class="item.icon"></span>
        <p>{{ item.title }}</p>
      </li> -->
      <router-link
        tag="li"
        v-for="item in foot_list"
        :key="item.icon"
        :to="item.url"
        active-class="active"
      >
        <span class="iconfont" :class="item.icon"></span>
        <p>{{ item.title }}</p>
      </router-link>
    </ul>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      foot_list: [
        { icon: "icon-dianyingyuan", title: "电影/影院", url: "/movie" },
        { icon: "icon-shipin", title: "视频", url:"/video" },
        { icon: "icon-shipin1", title: "小视频", url:"/minivideo" },
        { icon: "icon-dianyingpiao", title: "演出", url:"/show" },
        { icon: "icon-wode", title: "我的", url:"/mine" }
      ],
      activeIndex: 0
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    handleClick(i) {
      this.activeIndex = i;
      console.log(i);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/css/var.scss";
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 48px;
  border-top: 1px solid $border-color;
  background: #fff;
  .contain {
    display: flex;
    width: 100%;
    height: 100%;
    li {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .icon-font {
        font-size: 25px;
      }
      p {
        font-size: 12px;
      }
    }
    .active {
      color: $theme-color;
    }
  }
}
</style>
