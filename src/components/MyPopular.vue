<template>
  <div class="contain">
    <h4>最受好评电影</h4> 
    <div class="ul_move">
      <ul>
        <li v-for="item in list" :key="item._id">
          <div>
            <img :src="item.imgUrl" alt="" />
            <div v-if="item.score" class="movie_score">
              观众评分 {{ item.score }}
            </div>
            <div v-else class="movie_score">{{ item.wishNum }} 人想看</div>
          </div>
          <p>{{ item.title }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
//引入滚动的模块
import BetterScroll from "better-scroll";
export default {
  props: ["list"],
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {
    /* this.getMoviePic(); */
  },

  methods: {
    /* getMoviePic(){
      fetch("http://pudge.wang:3080/api/rated/list")
      .then(respon=>respon.json())
      .then(res=>console.log(res))
    } */
  },
  watch: {
    async list() {
      // console.log("list改变了");
      await this.$nextTick();
      new BetterScroll(".ul_move", {
        scrollX: true,
        scrollY: false,
        click: true
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.contain {
  width: 100%;
  height: 200px;
  background: white;
  padding: 0 20px;
  margin-bottom: 10px;
  h4 {
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    color: #333;
  }
  .ul_move {
    white-space: nowrap;
    overflow: hidden;
  }
  ul {
    /* display: flex; */
    display: inline-flex;
    height: 100%;
    // overflow: auto;
    li {
      // flex-shrink: 0;
      margin-right: 10px;
      div {
        position: relative;
      }
      img {
        width: 85px;
        height: 115px;
      }
      .movie_score {
        font-size: 12px;
        width: 100%;
        color: orange;
        font-weight: bold;
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;
        bottom: 8px;
        background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
      }
      p {
        font-size: 13px;
        color: #222;
        font-weight: bold;
        width: 85px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>
