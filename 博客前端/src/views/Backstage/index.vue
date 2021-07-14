<!--
 * @Author: chiLi
 * @Date: 2021-05-16 22:23:35
 * @LastEditors: Small electric motor
 * @Description: For reference only
 * @FilePath:: 当乌云散去，自会有繁星出现
-->
<template>
  <div id="index">
        <!-- 后台主页面 -->
        <div class="z-index">
            <h4>网站概要</h4>
            <p>
                目前有<span class="shuzi">{{this.wz}}</span>篇文章,
                <span class="shuzi">{{this.pl}}</span>条评论,<span class="wz">网站运行了</span>
                <span class="shuzi">{{this.dayse}}</span>天
            </p>
            <div class="na">点击下面链接快速开始&nbsp;:</div>
            
            <ul>
                <li @click="zxxwz">撰写新文章</li>
                <li @click="xinx">个人信息设置</li>
                <li @click="xtsz">系统设置</li>
            </ul>

        </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            // 文章数目
            wz:"",
            // 评论数目
            pl:"",
            // 运行天数
            dayse:null

        }
    },
    methods: {
        // 跳转个人信息设置
        xinx(){
             this.$router.push('/Backstage/information')
        },
        // 跳转系统设置
        xtsz(){
            this.$router.push('/Backstage/settings')
        },
        // 跳转撰写文章页面
        zxxwz(){
            this.$router.push('/Backstage/article')
        }
    },
    created () {

        // 获取文章数目
        this.axios.get('/getcontent')
        .then((res)=>{
           this.wz =  res.data.list.length
        })  


        // 获取评论数目
        this.axios.get('/getcomment')
        .then((res)=>{
            this.pl =  res.data.list.length
        })


        // 获取当前时间距离设置的日期为多少天作为运行的天数
        var date1 = new Date('2021/3/20').getTime(),
        date2 = new Date().getTime();
        var diff = date2 - date1; //相差的毫秒数
        var day = diff / 1000; //相差秒数
        day = day / 60; //相差分钟数
        day = day / 60; //相差小时数
        day = day / 24; //相差天数
        day = diff / 1000 / 60 / 60 / 24;
        day = Math.floor(diff / 1000 / 60 / 60 / 24);
        this.dayse = day
    }
}
</script>

<style scoped>
    @import '../../assets/css/Backstage/index.css'
</style>