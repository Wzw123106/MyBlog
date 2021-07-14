<!--
 * @Author: chiLi
 * @Date: 2021-05-12 13:38:57
 * @LastEditors: Small electric motor
 * @Description: For reference only
 * @FilePath:: 当乌云散去，自会有繁星出现
-->
<template>
    <div id="Mainpage">
        <!-- 主体部分 -->
        <div class="nav" ref="nav">
            <!-- 头部 -->
            <div class="head">
                
                <!-- 移动端左图标 -->
                <div class="move"  ref="z">
                     <i class="el-icon-s-unfold" @click="go"></i>
                </div>
                
                <!-- 移动端右图标 -->
                <div class="moves" ref="y">
                     <i class="el-icon-s-fold" @click="gos"></i>
                </div>

                <!-- logo 左头部 -->
                <div class="left">
                   <img src="https://cdn.jsdelivr.net/gh/ihewro/blog_now@master/logo.svg" alt="">
                </div>

                <!-- 播放器 右头部 -->
                <div class="right">
                    <music></music>
                </div>
                  
            </div>
            <!-- 左下侧部分 -->
            <div class="lefts" ref="addAlert">
                <!-- 上 -->
                <div class="head-t">
                    <!-- 资料头像 -->
                    <div class="tx" @mouseenter="suiji">
                            <div class="box" >
                                <img :src="user.imgsrc" alt="">
                                <div class="box-content">
                                    <div class="inner-content">
                                        <span class="post" ref="divination">七龙珠</span>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <!-- 昵称信息 -->
                    <div class="nc" style="font-weight: bold;">
                        <p>{{this.user.nickname}}</p>
                    </div>
                    <!-- 个性签名 -->
                    <div class="gxqm">
                        <p>{{day.title}}</p>
                    </div>
                    <!-- 动图 -->
                    <img src="../assets/img/1.gif" alt="" class="gifs">
                </div>
                <!-- 中 -->
                <div class="head-z">
                    <p>导航</p>
                    <ul>
                        <li @click="sy"><i>首页</i></li>
                        <li v-for="item,index in dlcoment" :key="index" @click="djdl(item)"><i>{{item.classification}}</i></li>
                    </ul>
                </div>
                <!-- 下 -->
                <div class="head-x">
                    <p>组成</p>
                    <div @click="cx">
                        <i>分类</i>
                        <!-- 左图标 -->
                        <div class="ztb" ref="ztb">
                             <span class="el-icon-arrow-right"></span>
                        </div>
                        <!-- 下图标 -->
                        <div class="xtb"  ref="xtb">
                            <span class="el-icon-arrow-down"></span>
                        </div>
                        
                    </div>
                    <ul ref="list">
                        <li v-for="item,index in fl" :key="index" @click="flxr(item)"><p>{{item.classname}}</p></li>
                    </ul>

                </div>
                <!-- 管理 -->
                <div class="gl" @click="sing">
                    <p class="el-icon-setting"></p>
                    <p>管理</p>
                </div>
                
            </div>

            
            <!-- 右下侧部分 -->
            <div class="rights" ref="rgihts">

                <router-view></router-view>
                
                <!-- 右 -->
                <div class="n-r">
                    <!-- 头部 -->
                    <div class="tbt">
                        <div @click="zym">
                            <h3 class="el-icon-sunrise"></h3>
                            <!-- 条 -->
                            <div class="jt" ref="zxs"></div>

                        </div>
                        <div @click="yym">
                            <h3 class="el-icon-chat-line-round"></h3>
                            <!-- 条 -->
                            <div class="nomon" ref="xstwo"></div>
                        </div>
                    </div>
                    <!-- 左图标 -->
                    <div class="lefticon" ref="lefticon">
                        <!-- 文章 -->
                        <div class="article">
                            <p>热门文章</p>
                            <ul>
                                <li v-for="item,index in  fiveviews" :key="index" @click="djjr(item)">
                                    <!-- 动漫头像 -->
                                    <img :src="item.imgsrc">
                                    <!-- 文章标题 -->
                                    <p>{{item.title}}</p>
                                    <!-- 浏览次数 -->
                                    <span class="el-icon-view icon"><i>{{item.views}}</i></span>
                                </li>
                            </ul>
                        </div>

                        <!-- 博客信息 -->
                        <div class="information">
                            <p>博客信息</p>
                            <div class="bkkuang">
                                <ul>
                                    <li>
                                        <span class="el-icon-document-copy"><i>文章数目</i></span>
                                        <div><i>{{this.contentlist}}</i></div>
                                    </li>
                                    <li>
                                        <span class="el-icon-chat-line-round"><i>评论数目</i></span>
                                        <div><i>{{this.pllist}}</i></div>
                                    </li>
                                    <li>
                                        <span class="el-icon-position"><i>运行天数</i></span>
                                         <div><i>{{this.dayse}}天</i></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- 标签云 -->
                        <div class="label">
                            <p>标签云</p>
                            <ul>
                                <li v-for="item,index in tablelist" :key="index" @click="bqtz(item)"><i>{{item.lablename}}</i></li>
                            </ul>
                        </div>
                    </div>
                    <!-- 右图标 -->
                    <div class="righticon" ref="rgihticon">
                        <p>最新评论</p>
                        <ul>
                            <li v-for="item,index in plnew" :key="index">
                                <p>{{item.name}}</p>
                                <span>{{item.inside}}</span>
                            </li>
                        </ul>
                        <!-- 博客信息 -->
                          <div class="information">
                            <p>博客信息</p>
                            <div class="bkkuang">
                                <ul>
                                    <li>
                                        <span class="el-icon-document-copy"><i>文章数目</i></span>
                                        <div><i>{{this.contentlist}}</i></div>
                                    </li>
                                    <li>
                                        <span class="el-icon-chat-line-round"><i>评论数目</i></span>
                                        <div><i>{{this.pllist}}</i></div>
                                    </li>
                                    <li>
                                        <span class="el-icon-position"><i>运行天数</i></span>
                                         <div><i>{{this.dayse}}天</i></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- 标签云 -->
                        <div class="label">
                            <p>标签云</p>
                            <ul>
                                <li v-for="item,index in tablelist" :key="index" @click="bqtz(item)"><i>{{item.lablename}}</i></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    </div>
</template>

<script>

// 引入音乐播放器组件
import music from '../views/Mainpage/music'
export default {
    
    data () {
        return {
           //  列表控制阀    
           isnum:false,
           //  预测吉凶数组
           luck:['大吉','上吉','中吉','上上','中平','中下','下下'],
           // 显示隐藏
           istrue:true,
           ison:true,
           

           //动漫图标
           dmtb:[
                 'https://cdn.jsdelivr.net/gh/ihewro/blog@master/usr/themes/handsome/assets/img/sj2/2.jpg',
                 'https://cdn.jsdelivr.net/gh/ihewro/blog@master/usr/themes/handsome/assets/img/sj2/3.jpg',
                 'https://cdn.jsdelivr.net/gh/ihewro/blog@master/usr/themes/handsome/assets/img/sj2/9.jpg',
                 'https://cdn.jsdelivr.net/gh/ihewro/blog@master/usr/themes/handsome/assets/img/sj2/6.jpg',
                 'https://cdn.jsdelivr.net/gh/ihewro/blog@master/usr/themes/handsome/assets/img/sj2/2.jpg'
           ],    
           //每日一句
           day:'',
           // 前五条浏览量最高的数据
           fiveviews:[],
           // 运行天数
           dayse:null,
           // 评论条数
           pllist:null,
           // 文章数目
           contentlist:null,
           // 标签数据
           tablelist:[],
           // 前四条最新评论数据
           plnew:[],
           // 获取个人信息
           user:[],
           // 获取独立页面数据
           dlcoment:[],
           // 分类
           fl:[]   
        }
    },
    methods: {
        // 左出
        go(){
            this.$refs.z.style.display = "none";
            this.$refs.y.style.display = "block";
            this.$refs.addAlert.style.display = "block";

            // 判断宽度来决定
           if(this.$refs.nav.clientWidth > 600){
                 this.$refs.rgihts.style.left = "50%"
           }else{
                this.$refs.rgihts.style.left = "60%"
           }

        },
        // 右进
        gos(){
           this.$refs.z.style.display = "block";
           this.$refs.y.style.display = "none";
           this.$refs.addAlert.style.display = "none"; 
           this.$refs.rgihts.style.left = "0px"
        },
        // 列表出现
        cx(){
            this.isnum = !this.isnum
            if(this.isnum == true){
                this.$refs.ztb.style.display = "none"; 
                this.$refs.xtb.style.display = "block";
                this.$refs.list.style.display = "block";
            }
            if(this.isnum == false){
                this.$refs.ztb.style.display = "block"; 
                this.$refs.xtb.style.display = "none";
                this.$refs.list.style.display = "none";
            }
        },
        // 抽签
        suiji(){
           var rand = this.luck[Math.floor(Math.random() * this.luck.length)]
           this.$refs.divination.innerText = rand
        },
        // 后台登录
        sing(){

           //  判断宽度来决定
           if(this.$refs.nav.clientWidth < 800){
                this.open3()
           }else{
              this.$router.push('/Sing')
           }
        },
        // 点击左页面
        zym(){
            this.$refs.zxs.style.display = "block";
            this.$refs.xstwo.style.display = "none"
            this.$refs.rgihticon.style.display = 'none'
            this.$refs.lefticon.style.display = 'block'
        },
        // 点击右页面
        yym(){
            this.$refs.zxs.style.display = "none";
            this.$refs.xstwo.style.display = "block"
            this.$refs.rgihticon.style.display = 'block'
            this.$refs.lefticon.style.display = 'none'
        },
        // 点击置顶
        zdlj(){
            this.$router.push('/index/jump')
        },

        // 非PC端登录后台警告
        open3() {
            this.$message({
            showClose: true,
            message: '移动设备不可登录后台,请更换设备',
            type: 'warning'
            });
        },

        // 点击前五进入各自页面
        djjr(item){
            this.$store.state.details = item
            sessionStorage.setItem('data', JSON.stringify(item))
            this.$router.push('/details')
        },

        // 点击标签跳转对应
        bqtz(item){
            this.$store.state.tablename = item.lablename
            this.$router.push('/tablexr')
        },

        // 点击分类跳转
        flxr(item){
            // alert(this.$route.path)
            // this.$router.push('/jump')
            this.$store.state.flname = item.classname
            this.$router.push('/calss')
        },
        

        // 点击首页
        sy(){
            this.$router.push('/jump')
        },

        // 点击独立页面
        djdl(item){
            this.$store.state.details = item
            sessionStorage.setItem('data', JSON.stringify(item))
            this.$router.push('/inde')
        },
        
    },
    // 注册组件
    components: { 
        music
    }, 
    created () {

        // 获取每日一句列表，随机出现每日一句
        this.axios.get('http://localhost:3000/getsentenceday')
        .then((res)=>{
            // 以数据的总条数为范围获取一个随机整数
            var a = Math.round(Math.random()*res.data.list.length)
            // 根据上方随机数获取数据当中的数据,将数据传递给每日一句的变量
            this.day = res.data.list[a]
            this.$store.state.day = this.day.title
        })


        // 获取前五条浏览量最大的数据
        this.axios.get('/getcommentfivevies')
        .then((res)=>{
            this.fiveviews = res.data.list
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

        // 获取文章的数目
        this.axios.get('/getcontent')
        .then((res)=>{
            this.contentlist = res.data.list.length
        })

        // 获取评论的数目
        this.axios.get('/getcomment')
        .then((res)=>{
            this.pllist = res.data.list.length
        })


        // 获取标签云的数目
        this.axios.get('/getlable')
        .then((res)=>{
            this.tablelist = res.data.list
        })

        // 获取最新4条评论数据
        this.axios.get('/getcommentfor')
        .then((res)=>{
            this.plnew=res.data.list
        })

        // 获取个人信息
        this.axios.get('/getuser')
        .then((res)=>{
           this.user = res.data.list[0]
        })

        // 获取独立页面数据
        this.axios.get('/getindependent')
        .then((res)=>{
            this.dlcoment =  res.data.list
        })

        // 获取分类数据
        this.axios.get('/getclassification')
        .then((res)=>{
            this.fl = res.data.list
        })
    }
}
</script>

<style scopend>
    /* 引入主页面css文件 */
    @import '../assets/css/Blog/Mainpage.css';
    /* 引入去除全局样式 */
    @import '../assets/css/Blog/eliminate.css';
    /* 引入动画样式 */
    @import '../assets/css/Blog/animation.css';
</style>