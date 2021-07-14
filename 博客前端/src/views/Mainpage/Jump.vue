<!--
 * @Author: chiLi
 * @Date: 2021-05-21 16:05:56
 * @LastEditors: Small electric motor
 * @Description: For reference only
 * @FilePath:: 当乌云散去，自会有繁星出现
-->
<template>
                <!-- 左 -->
                <div class="n-z">
                    <!-- 标题框 -->
                    <div class="n-title">
                        <!-- 标题 -->
                        <div class="title-k">
                            <!-- 标题 -->
                            <span>{{this.zdname}}</span>
                            <!-- 每日一句 -->
                            <p>{{this.$store.state.day}}</p>
                        </div>
                    </div>

                    <!-- 下方列表循环 -->
                    <div class="list-zy" >
                        <!-- 置顶 -->
                        <div class="list-xh" @click="zdff">
                         <!-- 图片 -->
                        <img :src="this.zdlist.imgsrc" alt="">
                          <div class="zezhao">
                            <!-- 置顶框 -->
                            <div class="zd">
                                <p>置顶</p>
                            </div>
                            <!-- 标题 -->
                            <h3>{{this.zdlist.title}}</h3>
                            <!-- 内容 -->
                            <div class="zd-title">
                               {{this.zdlist.contentnr}}
                            </div>
                          </div>
                          
                        </div>

                        <!-- 列表 -->
                        <ul>
                            <!-- 列表数据 -->
                            <li class="tone" v-for="item,index in contentlist" :key="index" @click="listok(item,index)">
                                <!-- 照片 -->
                               <div class="listtp"><img :src="item.imgsrc" alt=""></div>
                               <!-- 文字 -->
                               <div class="title">
                                   <!-- 标题 -->
                                   <div class="ti-bt">{{item.title}}</div>
                                   <!-- 内容 -->
                                   <div class="ti-nr">{{item.contentnr}}</div>
                               </div>
                               <!-- 下方信息 -->
                               <div class="listxx">
                                    <!-- 名字 -->
                                    <span class="icon el-icon-user"><i>{{item.author}}</i></span>

                                    <!-- 时间 -->
                                    <span class="icon el-icon-time"><i>{{item.crea}}</i></span>

                                    <!-- 评论数 -->
                                    <span class="icon el-icon-chat-square"><i>{{item.os}}</i></span>
                               </div>
                            </li>

                            <!-- 分页 -->
                            <div class="block">
                                <el-pagination background layout="prev, pager"  :page-size="8" :total="this.listlength"  @current-change="change"> </el-pagination>
                            </div>
                        </ul>

                    </div>
        </div>
</template>

<script>
export default {
    data () {
        return {
            
            // 第一页
            delist:['1','2','3','4','5'],


            // 文章的全部数据
            nomeo:[],
            // 管理文章的分页数据
             contentlist:[],
            // 默认展示第一页
             default:'1',
            // 管理文章总得数据条数
            listlength:null,
            // 管理置顶文章的数据
            zdlist:[],
            // 站点名称
            zdname:''
        }
    },
    methods: {
        
        // 置顶
        zdff(){
            this.$store.state.details = this.zdlist
            sessionStorage.setItem('data', JSON.stringify(this.zdlist))
            this.$router.push('/details')
        },
        
        // 点击分页数字重新渲染
        change(val){
            this.axios.get(`/getcontentfy?page=${val}`)
                .then((res)=>{
                    // 将第一页分页数据赋值给变量并展示到页面当中
                    this.contentlist = res.data.list
                    for(let i = 0; i <this.contentlist.length ;i++){
                    this.axios.post('/getcommentid',this.$qs.stringify({
                        contentid:this.contentlist[i].id
                    }))
                    .then((res)=>{
                            this.$set(this.contentlist[i],'os',res.data.list.length)
                    })
               }
        
            })
        },

        // 点击页面
        listok(item,index){
            this.$store.state.details = item
            sessionStorage.setItem('data', JSON.stringify(item))
            this.$router.push('/details')
        },


        
    },
    created () {

        // 获取管理文章整体数据
        this.axios.get(`/getcontent`)
            .then((res)=>{
                // 将数据总条数转化为整数类型并赋值给变量
               this.listlength = Number(res.data.list.length) 

        })



        // 获取管理文章分页数据
        this.axios.get(`/getcontentfy?page=${this.default}`)
            .then((res)=>{
                 // 将第一页分页数据赋值给变量并展示到页面当中
                //  this.contentlist = res.data.list
                 //
                 this.$store.state.contlist = res.data.list
                 this.contentlist =  this.$store.state.contlist
                 
                for(let i = 0; i <this.contentlist.length ;i++){
                   this.axios.post('/getcommentid',this.$qs.stringify({
                       contentid:this.contentlist[i].id
                   }))
                   .then((res)=>{
                        this.$set(this.contentlist[i],'os',res.data.list.length)
                   })
               }
        })
        
      
      
       //  获取置文章数据
       this.axios.post('/getcontentzd',this.$qs.stringify({
           zd:'true'
       }))
       .then((res)=>{
             this.zdlist=res.data.list[0]
       })


       //  设置站点名称
       this.axios.get('/getup')
       .then((res)=>{
           this.zdname = res.data.list[0].sitename
       })
       
    },
}
</script>

<style>

</style>