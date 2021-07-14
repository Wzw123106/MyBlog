<!--
 * @Author: chiLi
 * @Date: 2021-05-26 13:53:44
 * @LastEditors: Small electric motor
 * @Description: For reference only
 * @FilePath:: 当乌云散去，自会有繁星出现
-->
<template>
    <div id="management">
        <div class="ma-body">
            <h3>管理文章 <button class="xz" @click="xz">新增</button></h3>

            <div class="ma-wz">
                    <!-- 说明 -->
                    <div class="sm">
                        <span>标题</span>
                        <span>作者</span>
                        <span>分类</span>
                        <span>时间</span>
                        <span>操作</span>
                    </div>
                    <!-- 列表 -->
                    <ul>
                        <li v-for="item,index in contentlist" :key="index">
                            <div class="li-bt">{{item.title}}</div>
                            <div class="li-zz">{{item.author}}</div>
                            <div class="li-fl">{{item.classification}}</div>
                            <div class="li-sj">{{item.crea}}</div>
                            <div class="li-cz">
                                <button class="bj" @click="bj(item,index)">编辑</button>
                                <button class="sc" @click="sc(item,index)">删除</button>
                            </div>
                        </li>
                    </ul>
            </div>
            
            <!-- 分页 -->
            <el-pagination background layout="prev, pager"  :page-size="8" :total="this.listlength"  @current-change="change"> </el-pagination>
        </div>

        <!-- 删除标签弹框 -->
        <el-dialog title="" :visible.sync="delecttk" width="30%" height="20%" center>
            <p class="qr">请确认是否删除该文章</p>
            <span slot="footer" class="dialog-footer">
                <el-button @click=" delecttk = false">取 消</el-button>
                <el-button type="primary" @click="qda">确 定</el-button>
            </span> 
        </el-dialog>

        
    </div>
</template>

<script>
export default {
    data () {
        return {

            // 管理文章总得数据条数
            listlength:null,
            // 管理文章的分页数据
             contentlist:[],   
             // 默认展示第一页
             default:'1',

             //删除的id值
             delectids:'',
             // 删除的索引值
             delectindex:'',
             // 记住页面
             indexs:'',
             //  删除弹框
             delecttk:false,

             // 被删除回复的对应值
             delechfs:[]  

        }
    },
    methods: {

        // 成功的提示
        open2() {
            this.$message({
            showClose: true,
            message: '删除成功',
            type: 'success'
            });
        },

        // 失败的提示
         open3() {
            this.$message({
            showClose: true,
            message: '删除失败,请联系管理员',
            type: 'warning'
            });
        },
        // 点击新增跳转至添加文章路由
        xz(){
            this.$router.push('/Backstage/article')
        },
        // 点击跳转至编辑文章页面
        bj(item,index){
            
            // 先把数据存储到本地
            sessionStorage.setItem('data', JSON.stringify(item))
            // 再让vuex 等于刚才的数据
            this.$store.state.contentnrs = item
            // 跳转
            this.$router.push('/Backstage/edit')
        },
        // 点击分页数字重新渲染
        change(val){
            this.indexs = val
            this.axios.get(`/getcontentfy?page=${val}`)
                .then((res)=>{
                    // 将第一页分页数据赋值给变量并展示到页面当中
                    this.contentlist = res.data.list
            })
        },
        // 点击删除文章
        sc(item,index){
            // 调用获取评论的接口,保存评论的id值
            this.axios.post('/getcommentid',this.$qs.stringify({
                 contentid:item.id
            }))
            .then((res)=>{
                for(let i = 0; i < res.data.list.length;i++){
                    this.delechfs.push(res.data.list[i].id)
                }
            })
            this.delectids = item.id
            this.delectindex = index
            this.delecttk = true
        },
        // 确定删除文章
        qda(){
            this.axios.post('/getcontentdelect',this.$qs.stringify({
                id:this.delectids
            }))
            .then((res)=>{
                // 调用删除评论的接口数据
                this.axios.post('/getcommentdelect',this.$qs.stringify({
                     contentid:this.delectids
                }))
                .then((res)=>{
                    if(res.data.list == '删除成功'){
                        // 循环刚才保存的需要删除的评论的id值
                        for(let i = 0; i < this.delechfs.length;i++){
                            this.axios.post('/getreplaydelect',this.$qs.stringify({
                                contentid:Number(this.delechfs[i])
                            }))
                            .then((res)=>{
                                // console.log(res.data.list)
                            })
                          }

                        this.contentlist.splice(this.delectindex,1)
                        this.open2()
                        this.delechfs = []
                        this.delecttk = false
                    }else{
                        this.open3()
                    }
         
                })
            })

            
        }

        
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
                this.contentlist = res.data.list
        })

        // 此代码代表编辑页面完成以后,直接回到页面顶部
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0

    },
}
</script>

<style scoped>
    @import '../../assets/css/Backstage/management.css';
</style>