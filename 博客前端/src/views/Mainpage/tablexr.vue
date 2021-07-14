<!--
 * @Author: chiLi
 * @Date: 2021-05-21 16:05:56
 * @LastEditors: Small electric motor
 * @Description: For reference only
 * @FilePath:: 当乌云散去，自会有繁星出现
-->
<template>
         <div id="tablexr">
                <!-- 左 -->
                <div class="n-z">
                   
                    <!-- 下方列表循环 -->
                    <div class="list-zy" style="margin-top:10%;">
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
                        </ul>

                    </div>
                </div>

         </div>
</template>

<script>
export default {
    data () {
        return {
            
            // 第一页
            delist:['1','2','3','4','5'],

            // 距离
            scroll:'',


            // 文章的全部数据
            nomeo:[],
            // 管理文章的分页数据
             contentlist:[],
            // 默认展示第一页
             default:'1',
            // 管理文章总得数据条数
            listlength:null,

            // 标签名称
            label:''
        }
    },
    methods: {
        // 失败的提示
         open3() {
            this.$message({
            showClose: true,
            message: '此标签暂无内容,去看看别的吧',
            type: 'warning'
            });
         },

        
        // 点击页面
        listok(item,index){
            this.$store.state.details = item
            sessionStorage.setItem('data', JSON.stringify(item))
            this.$router.push('/details')
        },

    },
    created () {
        
        // 计算vuex 的属性
        this.$store.watch((state, getters) => {
            // 获取当前分类文章数据
            this.axios.post('/getcommentfl',this.$qs.stringify({
                label:state.tablename
            }))
            .then((res)=>{
                this.contentlist = res.data.list
                if(this.contentlist.length !== 0){
                    for(let i = 0; i <this.contentlist.length ;i++){
                        this.axios.post('/getcommentid',this.$qs.stringify({
                            contentid:this.contentlist[i].id
                        }))
                        .then((res)=>{
                            this.$set(this.contentlist[i],'os',res.data.list.length)
                        })
                   }
                }else{
                    this.$router.push('/jump')
                }
                
            })
        })
        

        // 判断是否点击过标签
        if(this.$store.state.tablename == ""){
            this.$router.push('/jump')
        }else{
            // 获取当前分类文章数据
            this.axios.post('/getcommentfl',this.$qs.stringify({
                label:this.$store.state.tablename
            }))
            .then((res)=>{
                this.contentlist = res.data.list
                if(this.contentlist.length !== 0){
                    for(let i = 0; i <this.contentlist.length ;i++){
                        this.axios.post('/getcommentid',this.$qs.stringify({
                            contentid:this.contentlist[i].id
                        }))
                        .then((res)=>{
                            this.$set(this.contentlist[i],'os',res.data.list.length)
                        })
                   }
                }else{
                    this.open3()
                    this.$router.push('/jump')
                }
                
            })
        }
       
    },

}
</script>

<style>
    @media screen and (min-width:800px){
        #tablexr .list-zy{
            margin-top: 10%;
        }
    }

    @media screen and (max-width:600px){
        #tablexr .list-zy{
            margin-top: -23%;
        }
    }
    /* 平板端 */
    @media screen and (max-width:779px) and (min-width:600px){
        #tablexr .list-zy{
            margin-top: -18%;
        }
    }
</style>