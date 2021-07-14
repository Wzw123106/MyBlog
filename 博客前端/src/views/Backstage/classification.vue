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
              <h3>管理分类<button class="xz" @click="centerDialogVisible = true">新增</button></h3>

              <div class="co-wz">
                    <!-- 说明 -->
                    <div class="am">
                        <span>标题</span>
                        <span>时间</span>
                        <span>操作</span>
                    </div>

                      <!-- 列表 -->
                    <ul>
                        <li v-for="item,index in classlist" :key="index">
                            <div class="b-bt">{{item.classname}}</div>
                            <div class="b-sj">{{item.create_time}}</div>
                            <div class="b-cz">
                                <button class="bj"  @click="edit(item,index)">编辑</button>
                                <button class="sc" @click="delects(item,index)">删除</button>
                            </div>
                        </li>
                    </ul>
              </div>
             <!-- 分页 -->
            <el-pagination background layout="prev, pager"  :page-size="8" :total="this.classlistlength"  @current-change="change"> </el-pagination>
        </div>
        
        <!-- 添加分类弹框 -->
       <el-dialog title="添加分类" :visible.sync="centerDialogVisible" width="30%" height="20%" center>
            <input type="text" class="navsaw" placeholder="请输入分类名称" v-model="classaddlist">
            <span slot="footer" class="dialog-footer">
                <el-button @click="centerDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dayyes">确 定</el-button>
            </span> 
        </el-dialog>

        <!-- 编辑分类弹框 -->
        <el-dialog title="编辑标签" :visible.sync="twocenter" width="30%" height="20%" center>
            <input type="text" class="navsaw" placeholder="分类" v-model="classeditile">
            <span slot="footer" class="dialog-footer">
                <el-button @click="twocenter = false">取 消</el-button>
                <el-button type="primary" @click="ok">确 定</el-button>
            </span> 
        </el-dialog>

        <!-- 删除每日一句弹框 -->
        <el-dialog title="" :visible.sync="delecttk" width="30%" height="20%" center>
            <p class="qr">请确认是否删除该标签</p>
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
              // 添加分类弹框
              centerDialogVisible: false,
              // 编辑分类弹框
              twocenter:false,
              // 删除每日一句弹框
              delecttk:false,
              
              //分页整体数据
              classlistlength:null,   
              // 默认分页数据
              default:1,   
              // 分类分页数据
              classlist:[],
              // 增加数据变量
              classaddlist:"",  

              // 编辑数据变量
              classeditlist:"",
              classeditile:"" ,
              classeditindex:"",

              // 删除数据变量
              classdelectindex:"",
              classdelectid:""
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
            this.axios.get(`/getclassificationfy?page=${val}`)
                .then((res)=>{
                    // 将第一页分页数据赋值给变量并展示到页面当中
                     this.classlist = res.data.list
            })
        },

        // 点击确认增加添加数据
        dayyes(){
            this.axios.post(`/getclassificationadd`,this.$qs.stringify({
                classname:this.classaddlist
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
                    this.classlist.push(
                        {
                            classname:this.classaddlist,
                            create_time:nowDate 
                        }
                    )
                    this.classaddlist = ""
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
            this.classeditlist = item.id
            this.classeditile = item.classname
            this.classeditindex = index
        },
        // 点击确认修改数据
        ok(){
            this.axios.post(`/getclassificationedit`,this.$qs.stringify({
                    id:this.classeditlist,
                    classname:this.classeditile
            }))
            .then((res)=>{
                if(res.data.list == '修改成功'){
                     this.classlist[this.classeditindex].classname=  this.classeditile
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
            this.classdelectindex = index
            this.classdelectid = item.id
        },

        // 点击确认删除数据
        deqr(){
            this.axios.post('/getclassificationdelect',this.$qs.stringify({
                id:this.classdelectid,
            }))
            .then((res)=>{
                if(res.data.list == '删除成功'){
                     this.classlist.splice(this.classdelectindex,1)
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

        // 获取分类整体数据
        this.axios.get(`/getclassification`)
            .then((res)=>{
                // 将数据总条数转化为整数类型并赋值给变量
               this.classlistlength = Number(res.data.list.length)  
        })

        // 获取分类分页数据
        this.axios.get(`/getclassificationfy?page=${this.default}`)
            .then((res)=>{
                // 将第一页分页数据赋值给变量并展示到页面当中
                this.classlist = res.data.list
        })
    }
}
</script>
<style scoped>
    @import '../../assets/css/Backstage/classification.css';
    .navsaw{
        width: 100%;
        height: 30px;
    }
</style>
