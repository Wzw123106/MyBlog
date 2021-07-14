<!--
 * @Author: chiLi
 * @Date: 2021-06-03 15:47:25
 * @LastEditors: Small electric motor
 * @Description: For reference only
 * @FilePath:: 当乌云散去，自会有繁星出现
-->
<template>
    <div id="article">

        <!-- 左边部分 -->
        <div class="ar-left">
            <h3>撰写新文章</h3>
            <input type="text" placeholder="标题" class="one" v-model="title">
            <quill-editor v-model="constent" @blur="nos" :options="editorOption"></quill-editor>
            <input type="text" placeholder="封面" v-model="imgsrc">
            <button @click="dayyes">发布文章</button>
        </div>

        <!-- 右边部分 -->
        <div class="ar-right">
            <!-- 上边 -->
            <div class="ar-top">
                <h4>分类</h4>
                <p>当前选择分类:<span class="zb">{{flmz}}</span></p>
                <ul>
                    <li v-for="item,index in fl" :key="index" @click="fldj($event,index)" :class="{actived:active==index}">{{item.classname}}</li>
                </ul>
            </div>

            <!-- 下边 -->
            <div class="ar-top">
                <h4>标签</h4>
                <p>当前选择分类:<span class="zb">{{bqmz}}</span></p>
                <ul>
                    <li v-for="item,index in bq" :key="index" @click="bqdj($event,index)" :class="{actived:cunum==index}">{{item.lablename}}</li>
                </ul>
            </div>
            
            <!-- 是否置顶 -->
            <form action="" method="get" class="fo"> 
                <h4>权限控制</h4>
                <p><label><input name="Fruit" type="checkbox" value="允许评论" v-model="pl"/><span>允许评论</span></label></p>
                <p><label><input name="Fruit" type="checkbox" value="是否置顶" v-model="zd"/><span>是否置顶</span></label></p>
            </form>
        </div>

        
    </div>
</template>

<script>
import hljs from 'highlight.js';
export default {
    data () {
        return {
            // 分类
            fl:[],
            active:null,

            // 标签
            bq:[],
            cunum:null,

            // 去除富文本一些不需要的按键
            editorOption:{
                modules:{
                    toolbar:[
                        ['bold', 'italic', 'underline', 'strike'],    // 加粗 斜体 下划线 删除线
                        ['blockquote', 'code-block'],                 // 引用 代码块
                        [{'header':1},{'header':2}],                  // 标题 键值对的形式: 1 , 2 表示字体的大小
                        [{'list':'ordered'},{'list':'bullet'}],        // 列表
                        [{'indent':'-1'},{'indent':'+1'}],             // 缩进
                        ['image']                                      // 上传图片
                    ],
                    syntax: {
                            highlight: text => {
                                return hljs.highlightAuto(text).value; // 这里就是代码高亮需要配置的地方
                            }
                        }
                }
            },

            // 标题
            title:'',
            // 作者
            author:'',
            // 分类
            flmz:'暂未选择',
            // 标签
            bqmz:'暂未选择',
            // 内容
            constent:'',
            // 文章地址
            imgsrc:'',
            // 置顶
            zd:false,
            // 评论
            pl:true,



            // 获取置顶文章信息
            zdlist:[]

        }
    },
    methods: {
        // 失败的提示
         open3() {
            this.$message({
            showClose: true,
            message: '发布失败,请完善选择',
            type: 'warning'
            });
        },

        // 成功的提示
        open2() {
            this.$message({
            showClose: true,
            message: '发布成功',
            type: 'success'
            });
        },


        // 点击分类
        fldj(e,index){
           this.flmz = e.target.innerHTML
           this.active = index

        },

        // 点击标签
        bqdj(e,index){
            this.bqmz = e.target.innerHTML
            this.cunum=index;
        },

        
        // 测试富文本
        nos(){
            this.$store.state.delectid = this.constent
        },

        // 发布文章
        dayyes(){

            if(this.title !== "" && this.flmz !=="暂未选择" && this.bqmz !== "暂未选择" && this.constent !== "" && this.imgsrc !== ""){
                
                // 判断当文章点击置顶以后,修改数据库拥有这个字段的元素为 false
                if(this.zd == true){

                    this.axios.post('/getcontentzd',this.$qs.stringify({
                        zd:this.zd
                    }))
                    .then((res)=>{
                        this.zdlist=res.data.list[0]
                        this.axios.post('/getcontentedit',this.$qs.stringify({
                                    id:this.zdlist.id,
                                    title:this.zdlist.title,
                                    imgsrc:this.zdlist.imgsrc,
                                    contentnr:this.zdlist.contentnr,
                                    classification:this.zdlist.classification,
                                    label:this.zdlist.label,
                                    pl:this.zdlist.pl,
                                    zd:false,
                                    author:this.author, 
                        }))
                        .then((res)=>{
                            this.axios.post('/getcontentadd',this.$qs.stringify({
                                                // 标题
                                                title:this.title,
                                                // 作者
                                                author:this.author,
                                                // 分类
                                                classification:this.flmz,
                                                // 标签
                                                label:this.bqmz,
                                                // 置顶
                                                zd:this.zd,
                                                // 内容
                                                contentnr:this.constent,
                                                // 封面
                                                imgsrc:this.imgsrc,
                                                // 评论
                                                pl:this.pl
                                            }))
                                            .then((res)=>{
                                               if(res.data.list == '添加成功'){
                                                    this.title = "",
                                                    this.flmz = "暂未选择",
                                                    this.bqmz = "暂未选择",
                                                    this.zd = "0",
                                                    this.constent = "",
                                                    this.imgsrc = "",
                                                    this.active = null,
                                                    this.cunum = null,
                                                    this.zd = false,
                                                    this.pl = true,
                                                    this.open2()
                                                    this.$router.push('/Backstage/management')
                                               }else{
                                                   alert('未知错误，请联系管理员')
                                               }
                                            })
                        })

                    })

                }else{

                    this.axios.post('/getcontentadd',this.$qs.stringify({
                                        // 标题
                                        title:this.title,
                                        // 作者
                                        author:this.author,
                                        // 分类
                                        classification:this.flmz,
                                        // 标签
                                        label:this.bqmz,
                                        // 置顶
                                        zd:this.zd,
                                        // 内容
                                        contentnr:this.constent,
                                        // 封面
                                        imgsrc:this.imgsrc,
                                        // 评论
                                        pl:this.pl
                                    }))
                                    .then((res)=>{
                                       if(res.data.list == '添加成功'){
                                            this.title = "",
                                            this.flmz = "暂未选择",
                                            this.bqmz = "暂未选择",
                                            this.zd = "0",
                                            this.constent = "",
                                            this.imgsrc = "",
                                            this.active = null,
                                            this.cunum = null,
                                            this.zd = false,
                                            this.pl = true,
                                            this.open2()
                                            this.$router.push('/Backstage/management')
                                       }else{
                                           alert('未知错误，请联系管理员')
                                       }
                                    })
                }


            }else{
                this.open3()
            }
        },
        
            
    },
    created () {
        
        // 获取分类列表
        this.axios.get('/getclassification')
        .then((res)=>{
            this.fl = res.data.list
        })

        // 获取标签列表
        this.axios.get('/getlable')
        .then((res)=>{
            this.bq = res.data.list
        })

        
        // 获取登录作者标签
        this.axios.get('/getuser')
        .then((res)=>{
            this.author = res.data.list[0].nickname
        })
        

    },
 
}
</script>

<style scoped>
    @import '../../assets/css/Backstage/article.css';
    
    /* 点击颜色 */
    .actived{background:#a6acad;}
</style>