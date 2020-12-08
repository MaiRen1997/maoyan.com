<template>
  <div class="movie_list">
    <div 
    v-for="(item, index) in movie_list" 
    :key="index" 
    class="item_contain"
    @click="MoveToDetail(item.movieid)"
    >
      <!-- 图片 -->
      <div class="item_left">
        <img :src="item.img | filter_url" alt="" />
      </div>
      <!--中间内容 -->
      <div class="item_center">
        <h4>{{ item.nm }}</h4>
        <p v-if="item.sc">
          观众评:<span class="score">{{ item.sc }}</span>
        </p>
        <p v-else-if="item.wish">
          <span class="score">{{ item.wish }}</span
          >人想看
        </p>
        <p v-else>暂无评分</p>
        <p>主演:{{ item.star }}</p>
        <p>{{ item.showInfo }}</p>
      </div>
      <!-- 右侧按钮 -->
      <div class="item_right">
        <span v-if="item.sc">购票</span>
        <span class="book_ticket" v-else>预售</span>
      </div>
    </div>
  </div>
</template>

<script>
// import MyMovieItem from "../components/MyMovieItem";
export default {
  props: ["movie_list"],
  data() {
    return {};
  },
  methods:{
    MoveToDetail(id){
      this.$router.push({
        name:"detail",params:{movieId:id}
      });
    }
  },
  filters: {
    filter_url(val) {
      // console.log(val.split("/w.h").join(''));
      return val.split("/w.h").join("");
    }
  }
};
</script>
<style lang="scss" scoped>
.movie_list {
  width: 100%;
  .item_contain {
    width: 100%;
    height: 114px;
    padding: 10px 15px;
    // margin: 0 15px;
    background: white;
    display: flex;
    justify-content: space-between;
    position: relative;
    border-bottom: 1px solid#f2f2f2;

    .item_left {
      img {
        width: 64px;
        height: 90px;
        margin-top: 10px;
      }
    }
    .item_center {
      width: 212px;
      height: 100%;
      margin-top: 10px;
      h4 {
        font-size: 17px;
        margin-bottom: 5px;
      }
      p {
        font-size: 14px;
        margin-bottom: 5px;
        .score {
          color: orange;
          font-weight: bold;
          font-size: 15px;
        }
      }
    }
    .item_right {
      width: 47px;
      height: 100%;
      display: flex;
      align-items: center;
      span {
        display: inline-block;
        width: 47px;
        height: 27px;
        background: #f03d37;
        font-size: 12px;
        color: white;
        border-radius: 3px;
        text-align: center;
        line-height: 27px;
      }
      .book_ticket {
        background: lightblue;
      }
    }
  }
}
</style>
