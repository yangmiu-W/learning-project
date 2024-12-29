import Vue from "vue";
import VueRouter from 'vue-router'

import LogIn from "@/components/LogIn.vue";
import ViewPage from "@/components/ViewPage.vue";

Vue.use(VueRouter);

const router = new VueRouter({
    //tips:不想要 #（锚点）就添加下面代码
     mode:'history', 
    //4.配置路由的path和组件
    routes :[
        {
          path: "/",
          name:'home',
          component: ViewPage,
        },
        {
          path: "/login",
          name:'login',
          component: LogIn,
        },
      ]
})

export default router

