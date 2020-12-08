<template>
  <header>
    <span class="iconfont icon-zuojiantou" v-if="hasBack"></span>
    <span class="iconfont icon-menu"></span>
    <h3>猫眼电影</h3>
  </header>
</template>

<script>
export default {
  props: {
    hasBack: Boolean
  },
  data() {
    return {};
  },
  components: {}
};
</script>
<style lang="scss" scoped>
@import "../assets/css/var.scss";
header {
  width: 100%;
  height: 50px;
  background: $theme-color;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: solid 1px $border-color;
  h3 {
    font-size: 18px;
    color: #fff;
  }
  .icon-menu {
    position: absolute;
    color: white;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
  }
  .icon-zuojiantou {
    position: absolute;
    color: white;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
