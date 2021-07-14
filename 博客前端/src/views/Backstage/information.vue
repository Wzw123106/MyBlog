<!--
 * @Author: chiLi
 * @Date: 2021-05-17 01:32:37
 * @LastEditors: Small electric motor
 * @Description: For reference only
 * @FilePath:: 当乌云散去，自会有繁星出现
-->
<template>
    <div id="information">
        <div class="info">
            <!-- 个人头像及签名 -->
            <div class="txjq">
                <!-- 左半边部分 -->
                <div class="tx-x">
                    <!-- 标题 -->
                    <h3>个人设置</h3>
                    <!-- 头像 -->
                    <div class="txk">
                        <img :src="this.user.imgsrc" alt="">
                    </div>
                    <!-- 名字 -->
                    <h2>{{this.user.nickname}}</h2>
                    <!-- 个性签名 -->
                    <p>{{this.$store.state.day}}</p>
                </div>
            </div>
            <!-- 个人资料 -->
            <div class="grzl">
                <div class="xgzl">
                    <h3>个人资料</h3>
                    <ul>
                        <li>
                            <h4>昵称</h4>
                            <input type="text" value="123" v-model="nc">
                            <h3>用户昵称可以与用户名不同,用于前台展示</h3>
                        </li>
                        <li>
                            <h4>个人头像地址</h4>
                            <input type="text" value="123" v-model="tx">
                            <h3>个人头像地址,用于前台展示</h3>
                        </li>
                         <li>
                            <h4>GitHub地址</h4>
                            <input type="text" value="123" v-model="git">
                            <h3>用户GitHub地址,用于前台展示</h3>
                        </li>
                         <li>
                            <h4>电子邮箱地址</h4>
                            <input type="text" value="123" v-model="email">
                            <h3>电子邮箱地址将作为此用户主要联系方式</h3>
                        </li>
                         <li>
                            <h4>用户名</h4>
                            <input type="text" value="123" v-model="name">
                            <h3>用户名，用于登录后台</h3>
                            <button @click="bcone">保存设置</button>
                        </li>
                    </ul>

                    <!-- 更改密码 -->
                    <ul class="sjd">
                        <li>
                            <h2>密码修改</h2>
                            <h4>用户密码</h4>
                            <input type="text" value="123" v-model="password">
                            <h3>建议使用特殊字符与字母，数组的混编样式，以增加系统安全性</h3>
                        </li>
                        <li>
                            <h4>用户密码确认</h4>
                            <input type="text" value="123" v-model="passwordss">
                            <h3>请确认你的密码,与上面的密码保持一致</h3>
                            <button @click="bcthree">更新密码</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            // 全部个人信息
            user:[],

            // id
            id:'',
            // 昵称
            nc:'',
            // 头像
            tx:'',
            // git地址
            git:'',
            // 邮箱
            email:'',
            // 用户名
            name:'',
            // 密码
            password:'',
            // 确认密码
            passwordss:''
        }
    },
    methods: {

        
         // 失败的提示
        open3() {
            this.$message({
            showClose: true,
            message: '更新失败,请完善选择',
            type: 'warning'
            });
        },

        // 成功的提示
        open2() {
            this.$message({
            showClose: true,
            message: '修改成功',
            type: 'success'
            });
        },
        
        // 俩次密码不一样提示
        open4() {

            this.$message.error('俩次输入密码不一致，请重新确认');
         },

        // 修改个人信息
        bcone(){
            
            if(this.nc !== "" && this.tx !== "" && this.git !== "" && this.name !== "" && this.imgsrc !== ""){
            // 保存信息设置
            this.axios.post('/getuserbj',this.$qs.stringify({
                nickname: this.nc,
                name: this.name,
                imgsrc : this.tx,
                giturl : this.git,
                email : this.email,
                id :this.id
            }))
            .then((res)=>{
                if(res.data.list == "修改成功"){
                    this.$router.push('/Backstage/index')
                    this.open2()
                }else{
                    this.open3()
                }
            })
            }else{
                this.open3()
            }

        },

        // 更新密码
        bcthree(){
            if(this.password !== "" && this.passwordss !== ""){
                if(this.password == this.passwordss){

                   this.axios.post('/getuserpas',this.$qs.stringify({
                       id:this.id,
                       password:this.password
                   }))
                    .then((res)=>{
                      if(res.data.list == "修改成功"){
                          this.password = ""
                          this.passwordss = ""
                          this.open2()
                          // 清空本地数据
                          window.localStorage.removeItem("data")
                          // 跳转登录页面  
                          this.$router.push('/Sing')
                      }else{
                          this.open3()
                      }
                    })
                }else{
                this.open4()
                }
            }else{
                this.open3()
            }
        }
    },
    created () {

        // 获取全部个人信息
        this.axios.get('/getuser')
        .then((res)=>{
            this.user = res.data.list[0]
            // 昵称
            this.nc = this.user.nickname
            // 头像
            this.tx = this.user.imgsrc
            // git地址
            this.git = this.user.giturl
            // 电子邮箱
            this.email = this.user.email
            // 用户名
            this.name = this.user.name
            // id
            this.id = this.user.id
        })
  
    }
}
</script>

<style scoped>
    @import '../../assets/css/Backstage/information.css'
</style>