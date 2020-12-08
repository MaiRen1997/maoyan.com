import qs from "qs";
//封装请求数据的代码
//设置请求头
const prefix = "http://pudge.wang:3080/api";
const http = {
  get(url, params) {
    //判断传入的参数是否为空
    //如果不为空
    if (params) {
      //使用对象的方法，将所有的key存储到一个数组中
      let arr = Object.keys(params);
      //根据参数，将参数拼接到url
      url += "?";
      arr = arr.map(item => {
        return item + "=" + params[item];
      });
      //将arr数组中的每一条数据都使用&符号连接起来
      url += arr.join("&");
    }
    //返回fetch拿到的数据
    return fetch(prefix + url)
      .then(respon => respon.json())
      .then(res => {
        if (res.status === 0) {
          return res;
        } else {
          console.log(res.msg);
        }
      });
  },
  post(url, params) {
    return fetch(prefix + url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: qs.stringify(params)
    })
      .then(response => response.json())
      .then(res => {
        if (res.status === 0) {
          return res;
        } else {
          console.log(res.msg);
        }
      });
  }
};
export default http;
