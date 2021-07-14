/*
 * @Author: chiLi
 * @Date: 2021-05-12 13:26:23
 * @LastEditors: Small electric motor
 * @Description: For reference only
 * @FilePath:: 当乌云散去，自会有繁星出现
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
// 主页面
import Mainpage from '../components/Mainpage.vue'
// 主页面跳转文章目录
import jump from '../views/Mainpage/Jump.vue'
// 主页跳转文章详情页
import details from '../views/Mainpage/details.vue'
// 主页跳转独立页面详情页
import inde from '../views/Mainpage/inde.vue'
// 主页跳转根据标签渲染列表页
import tablexr from '../views/Mainpage/tablexr.vue'
// 主页跳转根据分类名称渲染列表页
import calss from '../views/Mainpage/calss.vue'


// 登录页
import Sing from '../components/Sing.vue'
// 后台页
import Backstage from '../components/Backstage.vue'
// 后台首页数据
import index from '../views/Backstage/index.vue'
// 后台个人信息数据
import information from '../views/Backstage/information.vue'
// 后台系统
import settings from '../views/Backstage/settings.vue'
// 后台管理文章
import management from '../views/Backstage/Management.vue'
// 后台管理独立页面
import independent from '../views/Backstage/independent.vue'
// 后台管理评论
import comment from '../views/Backstage/comment.vue'
// 后台管理分类
import classification from '../views/Backstage/classification.vue'
// 后台管理标签
import label from '../views/Backstage/label.vue'
// 后台管理每日一句
import day from '../views/Backstage/day.vue'
// 后台撰写新文章
import article from '../views/Backstage/article.vue'
// 后台创建新页面
import establish from '../views/Backstage/establish.vue'
// 后台编辑文章页面
import edit from '../views/Backstage/edit.vue'
// 后台编辑独立页面
import editpage from '../views/Backstage/editpage.vue'

Vue.use(VueRouter)


const routers = new VueRouter({ routes })
routers.beforeEach((to, from, next) => {
  // 让页面回到顶部
  document.documentElement.scrollTop = 0
  // 调用 next()，一定要调用 next 方法，否则钩子就不会被销毁
 next()
})




const routes = [
  // 主页面
  {
    path:'/',
    name: 'Mainpage',
    component:Mainpage,
    children:[
        // 中间首页数据
        {
          path:'jump',
          name:'jump',
          component:jump
        },
        // 中间跳转详情页
        {
          path:'details',
          name:'details',
          component:details    
        },
        // 跳转独立页面详情页
        {
          path:'inde',
          name:'inde',
          component:inde    
        },
        // 跳转标签的列表页
        {
          path:'tablexr',
          name:'tablexr',
          component:tablexr
        },
        // 跳转分类的列表页
        {
          path:'calss',
          name:'calss',
          component:calss
        }
        
    ],
    redirect: '/jump'
  },
  // 登录
  {
    path:'/Sing',
    name:'Sing',
    component:Sing
  },
  // 后台页
  {
    path:'/Backstage',
    name:'Backstage',
    component:Backstage,
    meta: { 
      // 添加该字段，表示进入这个路由是需要登录的
       isgo:true
    },
    children:[
      // 后台首页数据
      {
        path:'index',
        name:'index',
        component:index,
      },
      // 后台个人信息数据
      {
        path:'information',
        name:'information',
        component:information,
      },
      // 后台系统设置
      {
        path:'settings',
        name:'settings',
        component:settings
      },
      // 后台管理文章
      {
        path:'management',
        name:'management',
        component:management
      },
      // 后台管理独立页面
      {
        path:'independent',
        name:'independent',
        component:independent
      },
      // 后台管理评论
      {
        path:'comment',
        name:'comment',
        component:comment
      },
      // 后台管理分类
      {
        path:'classification',
        name:'classification',
        component:classification
      },
      // 后台管理标签
      {
        path:'label',
        name:'label',
        component:label
      },
      // 后台管理每日一句
      {
        path:'day',
        name:'day',
        component:day       
      },
      // 后台管理撰写新文章
      {
        path:'article',
        name:'article',
        component:article      
      },
      // 后台创建新页面
      {
        path:'establish',
        name:'establish',
        component:establish     
      },
      // 后台编辑文章页面
      {
        path:'edit',
        name:'edit',
        component:edit
      },
      // 后台编辑独立页面页面
      {
        path:'editpage',
        name:'editpage',
        component:editpage
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

// 做单页应用的时候重复点击一个跳转的路由会出现报错  这个报错是重复路由引起的   只需在注册路由组建后使用下方重写路由就可以
// (NavigationDuplicated: Avoided redundant navigation to current location: "/Backstage/label".)
const originalPush = VueRouter.prototype.push
  VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


export default router
