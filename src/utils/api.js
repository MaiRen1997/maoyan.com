import http from "./http";
//首页受欢迎列表接口
export const getRatedListApi = params => {
  return http.get("/rated/list", params);
};
//首页电影列表
export const getMovieListApi = params => {
  return http.get("/movies/list", params);
};
//电影列表数据请求
export const getMovieListMoreApi = params => {
  return http.post("/movies/more", params);
};
