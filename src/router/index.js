// import Vue from "vue";
// import VueRouter from "vue-router";
// // import Home from "../views/Home.vue";
// Vue.use(VueRouter);

// const routes = [
//   {
//     path: "/",
//     redirect:"/movie", 
//     name:"movie"
//     // component: movie
//   },
//   {
//     path:"/home",
//     name:"home",
//     component: ()=>import("../views/home.vue"),
//     children:[
//       {
//         path: "/movie",
//         redirect:"../views/movie/hot",
//         name:"hot" 
//         // component: movie
//       },
//       {
//         path: "/hot", 
//         component: () => import("../view/movie/Hot.vue"),
//         name:"hot",
//       },
//     ]
//   },
//   {
//     path: "/about",
//     name: "About",
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () =>
//       import(/* webpackChunkName: "about" */ "../views/About.vue")
//   },
//   {
//     path: "*",
//     component :()=>import("../view/Not404.vue")
//   }
// ];

// const router = new VueRouter({
//   routes
// });

// export default router;

import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/movie",
   /*  mode:'history' */
  },
  {
    path: "/home",
    component: () => import("../views/Home.vue"),
    children: [
      {
        path: "/movie",
        component: () => import("../views/Movie.vue"),
        children: [
          {
            path: "/movie",
            redirect: "/movie/hot"
          }, 
          {
            path: "hot",
            component: () => import("../views/movie/Hot.vue")
          },
          {
            path: "cinema",
            component: () => import("../views/movie/Cinema.vue")
          },
          {
            path: "wait",
            component: () => import("../views/movie/Wait.vue")
          },
          {
            path: "classic",
            component: () => import("../views/movie/Classic.vue")
          }
        ]
      },
      {
        path: "/video",
        component: () => import("../views/Video.vue")
      },
      {
        path: "/minivideo",
        component: () => import("../views/MiniVideo.vue")
      },
      {
        path: "/show",
        component: () => import("../views/Show.vue")
      },
      {
        path: "/mine",
        component: () => import("../views/Mine.vue")
      },
      {
        path: "*",
        component: () => import("../views/Not404.vue")
      }
    ]
  },
  {
    path: "/detail/:movieId",
    name:"detail",
    props:true,
    component: ()=>import ("../views/Detail.vue")
  },
  {
    path: "*",
    component: () => import("../views/Not404.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
