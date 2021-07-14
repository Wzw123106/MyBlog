<!--
 * @Author: chiLi
 * @Date: 2021-05-26 15:10:09
 * @LastEditors: Small electric motor
 * @Description: For reference only
 * @FilePath:: 当乌云散去，自会有繁星出现
-->
<template>
    <div id="independent">
        <div class="in-body">

             <h3>管理独立页面<button class="xz" @click="xym">新增</button></h3>

               <div class="in-wz">
                  <!-- 说明 -->
                    <div class="om">
                        <span>标题</span>
                        <span>页面名称</span>
                        <span>时间</span>
                        <span>操作</span>
                    </div>

                     <!-- 列表 -->
                    <ul>
                        <li v-for="item,index in list" :key="index">
                            <div class="a-bt">{{item.title}}</div>
                            <div class="a-zz">{{item.classification}}</div>
                            <div class="a-sj">{{item.crea}}</div>
                            <div class="a-cz">
                                <button class="bj" @click="bjdlym(item,index)">编辑</button>
                                <button class="sc" @click="sc(item,index)">删除</button>
                            </div>
                        </li>
                    </ul>
               </div>
               
            <!-- 分页 -->
            <el-pagination background layout="prev, pager"  :page-size="8" :total="this.listlength"  @current-change="change"> </el-pagination>
            

             <!-- 删除每日一句弹框 -->
            <el-dialog title="" :visible.sync="delecttk" width="30%" height="20%" center>
                <p>请确认是否删除该页面</p>
                <span slot="footer" class="dialog-footer">
                    <el-button @click=" delecttk = false">取 消</el-button>
                    <el-button type="primary" @click="ok">确 定</el-button>
                </span> 
            </el-dialog>

        </div>


        
    </div>
</template>

<script>
export default {
    data () {
        return {
             // 获取总得数据条数
             listlength:null,
             // 默认展示第一页
             default:'1',  
             // 独立页面的分页数据
             list:[],
             // 删除出现
             delecttk:false,
            //  被删除的id值
             id:null 
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

        
        // 跳转至创建独立页面
        xym(){
            this.$router.push('/Backstage/establish')
        },

        // 跳转至编辑独立页面
        bjdlym(item,index){
            // 先把数据存储到本地
            sessionStorage.setItem('data', JSON.stringify(item))
            // 再让vuex 等于刚才的数据
            this.$store.state.contentnrs = item
            this.$router.push('/Backstage/editpage')
        },

        // 点击分页数字重新渲染
        change(val){
            this.axios.get(`/getindependentfy?page=${val}`)
                .then((res)=>{
                    // 将第一页分页数据赋值给变量并展示到页面当中
                    this.list = res.data.list
            })

        },

        // 点击删除独立页面
        sc(item,index){
            this.id = item.id
            this.delecttk = true
        },

        // 确认删除独立页面
        ok(){
             this.axios.post('/gettindependentsc',this.$qs.stringify({
                id:this.id,
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


        // 获取全部数据接口
        this.axios.get('/getindependent')
        .then((res)=>{
             this.listlength = Number(res.data.list.length) 
        })

                
        // 获取每日一句分页数据
        this.axios.get(`/getindependentfy?page=${this.default}`)
            .then((res)=>{
                // 将第一页分页数据赋值给变量并展示到页面当中
                this.list = res.data.list
        })
        
    }
    
}
</script>

<style scoped>
    @import '../../assets/css/Backstage/independent.css';
</style>