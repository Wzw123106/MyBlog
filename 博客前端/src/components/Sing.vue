<!--
 * @Author: chiLi
 * @Date: 2021-05-15 22:01:40
 * @LastEditors: Small electric motor
 * @Description: For reference only
 * @FilePath:: 当乌云散去，自会有繁星出现
-->
<template>
    <div id="sing">
        <!-- 登录 -->
        <div class="login">
            <!-- head logo部分 -->
            <div class="login-head">
                <img src="https://cdn.jsdelivr.net/gh/ihewro/blog_now@master/logo.svg" alt="">
            </div>
            <!-- 表单部分 -->
            <div class="login-body">          
                    <input type="text" placeholder="用户名" v-model="name">
                    <input type="password" placeholder="密码" v-model="password">
                    <button @click="logins">登录</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            // 个人信息数据
            xxlist:[],
            // 用户名
            name:'',
            // 密码
            password:''
        }
    },
    methods: {

        // 成功的提示
        open2() {
            this.$message({
            showClose: true,
            message: '登录成功',
            type: 'success'
            });
        },

        // 失败的提示
         open3() {
            this.$message({
            showClose: true,
            message: '用户名或密码错误',
            type: 'warning'
            });
        },


        // 跳转后台页面
        logins(){
            if(this.name == this.xxlist.name && this.password == this.xxlist.password){
                // 储存本地
                window.localStorage.setItem("data",this.xxlist.name)
                // 提示
                this.open2()
                // 跳转
                this.$router.push('/Backstage/index')
            }else{
                this.open3()
            }
        }
    },
    created () {

        this.axios.get('/getuser')
        .then((res)=>{
            this.xxlist = res.data.list[0]
        })
    }
}
</script>

<style scopend>
    @import '../assets/css/Blog/sing.css'
</style>