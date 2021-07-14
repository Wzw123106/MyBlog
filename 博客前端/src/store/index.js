/*
 * @Author: chiLi
 * @Date: 2021-05-12 13:26:23
 * @LastEditors: Small electric motor
 * @Description: For reference only
 * @FilePath:: 当乌云散去，自会有繁星出现
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      // 删除的id值
      delectid:'<p>1</p>',
      // 编辑文章数据传入的文章数据
      contentnrs:[],
      // 每日一句
      day:'',
      // 文章详情
      details:[],
      // 详情
      as:'123',
      // 文章列表数据
      contlist:[],
      // 标签的名称
      tablename:'',
      // 分类的名称
      flname:'',

  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
