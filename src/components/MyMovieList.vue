<template>
  <div class="movie_list">
    <my-movie-item :movie_list="movie_list"> </my-movie-item>
    <!-- <p v-if="isToBottom">到底了</p> -->
  </div>
</template>

<script>
import MyMovieItem from "../components/MyMovieItem";
export default {
  // props: ["movie_list"],
  props:{
    movie_list:Array,
    /* isTobottom:Boolean */
  },
  data() {
    return {};
  },
  components: {
    MyMovieItem
  }
};
</script>
<style lang="scss" scoped>
.movie_list {
  background: #fff;
  margin-top: 10px;
}
</style>
