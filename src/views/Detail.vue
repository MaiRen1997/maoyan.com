<template>
  <div class="detail"
  :style="{background:detailData.backgroundColor}"
  v-if="detailData.nm"
  > 
  <!-- 上面的路径 -->
    <p class="title">猫眼电影 > {{ detailData.nm}}</p>
    <!-- 详细内容 -->
    <div class="content">
      <img class="content-img" :src="detailData.img | formatUrl" alt="">
      <div class = "content-right">
        <h2>{{ detailData.nm }}</h2>
        <h5>{{ detailData.enm }}</h5>
        <h5>{{ detailData.cat | formatCat }}</h5>
        <h5>{{ detailData.star | formatCat }}</h5>
        <h5>{{ detailData.pubDesc + detailData.dur + "分钟 >" }}</h5>
        <div class="buttonGroup">
          <div class="button">想看</div>
          <div class="button">看过</div>
        </div>
      </div>
    </div>
    <div class="score">
      <div class="score-title">
        <span style="float: left">实时口碑</span>
        <span style="float: right">
          {{ detailData.wish }}人想看{{ detailData.watched }}人看过 
        </span>
      </div>
      <div class="middle">
        <div class='left-score'>
          <p>{{ detailData.sc }}分</p>
          <p>{{ detailData.snum }}人评</p>
        </div>
        <div class='right-star'>
          <star-bar
            v-for="(item, index) in detailData.distributions"
            :key="index"
            :starsCount="3 - index"
            :proportion="item.proportion"
          />
        </div>
      </div>
    </div>
  <!-- <div>
    <star-bar
    v-for="(item,index) in detailData.distributions"
    :key ="index"
    :starsCount = "3-index"
    :proportion = "item.proportion"
    ></star-bar>
  </div> -->
  
  
  </div>
</template>

<script>
//引入获取数据的API
import {getMovieDetailApi} from "../utils/api"
//引入星星的模块
import StarBar from "../components/detail/StarsBar"

export default {
  props:['movieId'],
  data() {
    return {
        id:this.movieId,
        detailData:{}
    };
  },

  components: {
    StarBar
  },
  filters:{
    formatUrl(val){
      return val.split('w.h/').join("");
    },
    formatCat(val){
      return val.split(",").join("/");
    }
  },
  computed: {},

  mounted() {
    this.getDetailData();
  },

  methods: {
    async getDetailData(){
      //请求数据
      const res = await getMovieDetailApi( 
        {id:this.id});
      /* console.log(this.id); */
      /* console.log(this.id);
      console.log(this.detailDat= res.result); */
      this.detailData = res.result;
    }
  }
};
</script>
<style lang='scss' scoped>
@import "../assets/css/var.scss";
.detail{
  padding:15px 15px;
  color:white;
  .title{
    color: rgb(204, 204, 204);
    font-size: 14px;
    padding-bottom: 15px;
  }
  .content{
    display: flex;
    flex:2;
    .content-img{
      width: 100px;
      height: 138px;
    }
  }
  .content-right{
      flex:7;
      margin-left: 10px;
    h2{
      font-size: 20px;
      color:white
    }
    h5{
      color: rgb(204, 204, 204);
      font-size: 14px;
      height: 20px;
      line-height: 20px;
    }
    .buttonGroup {
        height: 30px;
        width: 100%;
        display: flex;
        justify-content: space-between;

        .button {
          width: 45%;
          height: 100%;
          font-size: 14px;
          @include center;
          background: rgba(255, 255, 255, 0.35);
          border-radius: 4px;
          color: white;
        }
    }
  }
  .score {
    width: 100%;
    margin-top: 15px;
    padding: 10px 12px;
    background: rgba(0, 0, 0, 0.2);
    .score-title {
      height: 18px;
      font-size: 12px;
      color:rgb(204, 204, 204)
    }

    .middle {
      height: 128px;
      padding: 20px 0;
      .left-score{
        float: left;
      }
      .right-star{
        float: left;
        font-size: 12px;
      }
    }
  }
}
</style>
