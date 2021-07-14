<!--
 * @Author: chiLi
 * @Date: 2021-05-26 15:51:06
 * @LastEditors: Small electric motor
 * @Description: For reference only
 * @FilePath:: 当乌云散去，自会有繁星出现
-->
<template>
    <div id="comment">
        <div class="co-body">
              <h3>管理评论</h3>

              <div class="co-wz">
                    <!-- 说明 -->
                    <div class="am">
                        <span>用户名</span>
                        <span>内容</span>
                        <span>文章标题</span>
                        <span>邮箱</span>
                        <span>时间</span>
                        <span>操作</span>
                    </div>

                      <!-- 列表 -->
                    <ul>
                        <li v-for="item,index in comment" :key="index">
                            <div class="b-yh">{{item.name}}</div>
                            <div class="b-nr">{{item.inside}}</div>
                            <div class="b-bt"  v-for="a,b in item.title" :key="b">{{a.title}}</div>
                            <div class="b-yx">{{item.emial}}</div>
                            <div class="b-sj">{{item.created}}</div>
                            <div class="b-cz">
                                <button class="bj" @click="ok(item,index)">回复</button>
                                <button class="sc">删除</button>
                            </div>
                        </li>
                    </ul>
              </div>
             <!-- 分页 -->
            <el-pagination background layout="prev, pager"  :page-size="8" :total="this.listlength" @current-change="change"> </el-pagination>
        </div>

        <!-- 回复内容弹框 -->
        <el-dialog title="评论内容" :visible.sync="twocenter" width="30%" height="20%" center>
            <h4 class="xmasx">{{texa}}</h4>
            <input type="text" class="navsaw" placeholder="回复内容" v-model="hfnr">
            <span slot="footer" class="dialog-footer">
                <el-button @click="twocenter = false">取 消</el-button>
                <el-button type="primary" @click="qd">确 定</el-button>
            </span> 
        </el-dialog>
    </div>
</template>

<script>
export default {
    data () {
        return {
            // 弹框出现隐藏
            twocenter:false,

            // 默认分页数据为第一页
            default:'1',
            // 评论全部数据
            listlength:null,
            // 评论分页数据
            comment:[],
            // 评论内容变量
            texa:"",
            // 评论id变量
            teid:null,
            // 回复内容
            hfnr:''
        }
    },
    methods: {

        // 成功的提示
        open2() {
            this.$message({
            showClose: true,
            message: '回复成功',
            type: 'success'
            });
        },

        // 失败的提示
         open3() {
            this.$message({
            showClose: true,
            message: '回复失败,回复信息不能为空',
            type: 'warning'
            });
        },

      // 点击回复将评论对应的id值和内容传递给变量 
      ok(item,index){
           this.twocenter = true
           this.texa = item.inside
           this.teid = item.id
           console.log(item)
      },

      //点击确定给对应的评论内容回复
      qd(){
          if(this.hfnr !== ''){
                this.axios.post('/getreplayadd',this.$qs.stringify({
                    name:'管理员',
                    replaynr:this.hfnr,
                    contentid:this.teid,
                    emial:'Boss@163.com',
                 }))
                 .then((res)=>{
                      this.open2()
                      this.twocenter = false
                 })
          }else{
              this.open3()
          }
      },
      // 点击分页数字重新渲染
     change(val){
          // 获取评论分页数据
              this.axios.get(`/getcommentfy?page=${val}`)
            .then((res)=>{
                // 将第一页分页数据赋值给变量并展示到页面当中
                this.comment = res.data.list
                    for(let i = 0; i < this.comment.length;i++){
                    // this.pllist[i]['title'] = ""
                    this.axios.post('/getcontentid',this.$qs.stringify({
                        id:Number(this.comment[i].contentid)
                    }))
                    .then((res)=>{
                        // 给对象添加属性 
                        this.$set(this.comment[i],'title',res.data)
                        // console.log(res.data)
                    })
                }
         })
     },
      
    },
    created () {
        
        // 获取评论全部数据
        this.axios.get('/getcomment')
        .then((res)=>{
            // 将数据总条数转化为整数类型并赋值给变量
            this.listlength = Number(res.data.list.length)  
        })


        // 获取评论分页数据
         this.axios.get(`/getcommentfy?page=${this.default}`)
            .then((res)=>{
                // 将第一页分页数据赋值给变量并展示到页面当中
                this.comment = res.data.list
                for(let i = 0; i < this.comment.length;i++){
                    this.axios.post('/getcontentid',this.$qs.stringify({
                        id:Number(this.comment[i].contentid)
                    }))
                    .then((res)=>{
                        // 给对象添加属性 
                        this.$set(this.comment[i],'title',res.data)
                    })
                }
        })
        
    }
    
}
</script>

<style>
    @import '../../assets/css/Backstage/comment.css';
    .navsaw{
        width: 100%;
        height: 30px;
    }
    .xmasx{
        margin-bottom: 20px;
    }
</style>
