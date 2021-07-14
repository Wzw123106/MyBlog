<!--
 * @Author: chiLi
 * @Date: 2021-06-01 15:20:33
 * @LastEditors: Small electric motor
 * @Description: For reference only
 * @FilePath:: 当乌云散去，自会有繁星出现
-->
<!--
 * @Author: chiLi
 * @Date: 2021-06-01 11:22:03
 * @LastEditors: Small electric motor
 * @Description: For reference only
 * @FilePath:: 当乌云散去，自会有繁星出现
-->
<!--
 * @Author: chiLi
 * @Date: 2021-06-01 10:53:38
 * @LastEditors: Small electric motor
 * @Description: For reference only
 * @FilePath:: 当乌云散去，自会有繁星出现
-->
<template>
    <div id="clmment">
        <div class="cl-body">
              <h3>管理每日一句<button class="xz" @click="centerDialogVisible = true">新增</button></h3>

              <div class="co-wz">
                    <!-- 说明 -->
                    <div class="am">
                        <span>标题</span>
                        <span>时间</span>
                        <span>操作</span>
                    </div>

                      <!-- 列表 -->
                    <ul>
                        <li v-for="item,index in this.list" :key="index">
                            <div class="b-bt">{{item.title}}</div>
                            <div class="b-sj">{{item.create_time}}</div>
                            <div class="b-cz">
                                <button class="bj" @click="edit(item,index)">编辑</button>
                                <button class="sc" @click="delects(item,index)">删除</button>
                            </div>
                        </li>
                    </ul>
              </div>
             <!-- 分页 -->
            <el-pagination background layout="prev, pager"  :page-size="8" :total='this.listlength'  @current-change="change"> </el-pagination>
        </div>

       <!-- 添加每日一句弹框 -->
       <el-dialog title="添加标签" :visible.sync="centerDialogVisible" width="30%" height="20%" center>
            <input type="text" class="navsaw" placeholder="这里输入" v-model="addlist">
            <span slot="footer" class="dialog-footer">
                <el-button @click="centerDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dayyes">确 定</el-button>
            </span> 
        </el-dialog>


        <!-- 编辑每日一句弹框 -->
        <el-dialog title="编辑标签" :visible.sync="twocenter" width="30%" height="20%" center>
            <input type="text" class="navsaw" placeholder="每日一句" v-model="editile">
            <span slot="footer" class="dialog-footer">
                <el-button @click="twocenter = false">取 消</el-button>
                <el-button type="primary" @click="ok">确 定</el-button>
            </span> 
        </el-dialog>


        <!-- 删除每日一句弹框 -->
        <el-dialog title="" :visible.sync="delecttk" width="30%" height="20%" center>
            <p>请确认是否删除该签名</p>
            <span slot="footer" class="dialog-footer">
                <el-button @click=" delecttk = false">取 消</el-button>
                <el-button type="primary" @click="deqr">确 定</el-button>
            </span> 
        </el-dialog>

    </div>
</template>
<script>
export default {
    data () {
        return {
             // 添加每日一句弹框
              centerDialogVisible: false,
             // 编辑每日一句弹框
              twocenter:false,
             // 删除每日一句弹框
              delecttk:false,
             // 每日一句的分页数据
             list:[],   
             // 默认展示第一页
             default:'1',
             // 获取总得数据条数
             listlength:null,
             // 增加数据变量
             addlist:"",

             // 编辑数据变量
             editlist:"",
             editile:"" ,
             editindex:"",

            // 删除数据变量
            delectindex:"",
            delectid:""
        }
    },
    methods: {
        
        // 成功的提示
        open2() {
            this.$message({
            showClose: true,
            message: '操作成功',
            type: 'success'
            });
        },

        // 失败的提示
         open3() {
            this.$message({
            showClose: true,
            message: '操作失败',
            type: 'warning'
            });
        },


        // 点击分页数字重新渲染
        change(val){
            this.axios.get(`/getsentencefy?page=${val}`)
                .then((res)=>{
                    // 将第一页分页数据赋值给变量并展示到页面当中
                    this.list = res.data.list
            })

        },
        
        // 点击确认增加添加数据
        dayyes(){
            this.axios.post(`/postaddto`,this.$qs.stringify({
                title:this.addlist
            }))
            .then((res)=>{
                if(res.data.list =='添加成功'){

                    //获取当前时间
                    var date = new Date();
                    var year = date.getFullYear();
                    var month = date.getMonth() + 1;
                    var day = date.getDate();
                    if (month < 10) {
                        month = "0" + month;
                    }
                    if (day < 10) {
                        day = "0" + day;
                    }
                    // 后方字符纯粹是为了占位
                    var nowDate = year + "-" + month + "-" + day+'MSADASDASDASDASDASDASDDASD';
                
                    this.centerDialogVisible = false
                    this.list.push(
                        {
                            title:this.addlist,
                            create_time:nowDate 
                        }
                    )
                    this.addlist = ""
                    this.open2()
                    
                }else{
                    this.open3()
                }
                
            })
            
        },

        // 点击编辑编辑数据赋值id值
        edit(item,index){
            // 弹框出现
            this.twocenter = true
            this.editlist = item.id
            this.editile = item.title
            this.editindex = index
        },

        // 点击确认修改数据
        ok(){
            this.axios.post(`/postedit`,this.$qs.stringify({
                    id:this.editlist,
                    title:this.editile
            }))
            .then((res)=>{
                if(res.data.list == '修改成功'){
                     this.list[this.editindex].title =  this.editile
                     this.twocenter = false
                     this.open2()
                }else{
                     this.twocenter = false
                     this.open3()  
                }
            })

        },

        // 点击删除数据赋值id值
        delects(item,index){
            this.delecttk = true
            this.delectindex = index
            this.delectid = item.id
        },

        // 点击确认删除数据
        deqr(){
            this.axios.post('/postdelete',this.$qs.stringify({
                id:this.delectid,
            }))
            .then((res)=>{
                if(res.data.list == '删除成功'){
                     this.list.splice(this.delectindex,1)
                     this.delecttk = false
                     this.open2()
                }else{
                     this.delecttk = false
                     this.open3()  
                }
            })
        }

        
        

        
    },
    created () {
        
        // 获取每日一句整体数据
        this.axios.get(`/getsentenceday`)
            .then((res)=>{
                // 将数据总条数转化为整数类型并赋值给变量
               this.listlength = Number(res.data.list.length)  
        })
        
        // 获取每日一句分页数据
        this.axios.get(`/getsentencefy?page=${this.default}`)
            .then((res)=>{
                // 将第一页分页数据赋值给变量并展示到页面当中
                this.list = res.data.list
        })

    }


}
</script>
<style scoped>
    @import '../../assets/css/Backstage/day.css';
    .navsaw{
        width: 100%;
        height: 30px;
    }
    .qr{
        text-align: center;
        font-size: 18px;
        font-weight: bold;
    }
</style>