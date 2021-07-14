<!--
 * @Author: chiLi
 * @Date: 2021-05-16 20:41:30
 * @LastEditors: Small electric motor
 * @Description: For reference only
 * @FilePath:: 当乌云散去，自会有繁星出现
-->
<template>
    <div id="Backstage">
        <!-- 头部 -->
        <div class="B-head">
            <!-- 头部内容 -->
            <ul>
                <li>
                    控制台
                    <div class="kzt">
                        <ul>
                            <li @click="gy"><p>概要</p></li>
                            <li @click="grsz"><p>个人设置</p></li>
                        </ul>
                    </div>
                </li>
                <li>
                    撰写
                    <div class="kzt">
                        <ul>
                            <li @click="zx"><p>撰写文章</p></li>
                            <li @click="xym"><p>创建页面</p></li>
                        </ul>
                    </div>  
                </li>
                <li>
                    管理
                    <div class="kzt">
                        <ul>
                            <li @click="wz"><p>文章</p></li>
                            <li @click="dl"><p>独立页面</p></li>
                            <li @click="pl"><p>评论</p></li>
                            <li @click="fl"><p>分类</p></li>
                            <li @click="bq"><p>标签</p></li>
                            <li @click="mr"><p>每日一句</p></li>
                        </ul>
                    </div>
                </li>
                <li @click="sz">设置</li>
            </ul>
            <!-- 头部资料退出 -->
            <ol>
                <li @click="tc">退出</li>
                <li>{{this.nikename}}</li>
            </ol>
        </div>

        <!-- 下方主体部分 -->
        <div class="B-body">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            // 账号信息
            nikename:''
        }
    },
    methods: {

        //未登录 
        open3() {
            this.$message({
            message: '未登录,请登录',
            type: 'warning'
            });
        },
        // 跳转个人设置
        grsz(){
            this.$router.push('/Backstage/information')
        },
        // 跳转设置
        sz(){
             this.$router.push('/Backstage/settings')
        },
        // 跳转概要
        gy(){
             this.$router.push('/Backstage/index')
        },
        // 跳转管理文章
        wz(){
            this.$router.push('/Backstage/management')
        },
        // 跳转管理独立页面
        dl(){
            this.$router.push('/Backstage/independent')
        },
        // 跳转管理评论页面
        pl(){
            this.$router.push('/Backstage/comment')
        },
        // 跳转分类页面
        fl(){
            this.$router.push('/Backstage/classification')
        },
        // 跳转标签页面
        bq(){
             this.$router.push('/Backstage/label')
        },
        // 跳转每日一句
        mr(){
             this.$router.push('/Backstage/day')
        },
        // 撰写新文章
        zx(){
            this.$router.push('/Backstage/article')
        },
        // 创建新页面
        xym(){
            this.$router.push('/Backstage/establish')
        },

        // 退出
        tc(){
            // 清空本地数据
            window.localStorage.removeItem("data")
            // 跳转
            this.$router.push('/Sing')
        }
    },
    created () {

        // 判断是否登录
        if(window.localStorage.getItem("data")){
            console.log("已登录")
            // 获取全部个人信息
            this.axios.get('/getuser')
            .then((res)=>{
               this.nikename = res.data.list[0].nickname
            })

        }else{
            this.$router.push('/Sing')
            this.open3()
        }

    }
}
</script>

<style scoped>
    @import '../assets/css/Blog/Backstage.css'
</style>