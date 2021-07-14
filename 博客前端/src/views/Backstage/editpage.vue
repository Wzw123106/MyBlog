<!--
 * @Author: chiLi
 * @Date: 2021-06-05 16:28:25
 * @LastEditors: Small electric motor
 * @Description: For reference only
 * @FilePath:: 当乌云散去，自会有繁星出现
-->
<template>
  <div id="estab">
      <h4>编辑页面</h4>
      <input type="text" placeholder="标题" class="one" v-model="title">
      <quill-editor v-model="constent"  :options="editorOption"></quill-editor>
      <input type="text" placeholder="封面" class="thre" v-model="imgsrc">
      <input type="text" placeholder="页面分类名称" class="thre" v-model="flmz">
      <input type="text" placeholder="页面描述" class="thre" v-model="bqmz" disabled="disabled">
      <button @click="fb">发布文章</button>
  </div>
</template>

<script>
import hljs from 'highlight.js';
export default {
    data () {
        return {
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
            // 数据部分
            id:'',
            constent:'',
            title:"",
            imgsrc:"",
            flmz:"",
            bqmz:"",
            author:''
        }
    },
    methods: {
        // 失败的提示
         open3() {
            this.$message({
            showClose: true,
            message: '编辑失败,请完善选择',
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

        // 编辑独立页面
        fb(){

        if(this.title !== "" && this.flmz !=="暂未选择" && this.bqmz !== "暂未选择" && this.constent !== "" && this.imgsrc !== ""){
            this.axios.post('/gettindependentdelect',this.$qs.stringify({
                id:this.id,
                title:this.title,
                imgsrc:this.imgsrc,
                contentnr:this.constent,
                classification:this.flmz,
                label:'独立页面',
                pl:'false',
                zd:'false',
                author:this.author,
                                    
            }))
            .then((res)=>{
                if(res.data.list == '修改成功'){
                    this.open2()
                    // 跳转到文章列表页面
                    this.$router.push('/Backstage/independent')
                    }else{
                        alert('未知错误，请联系管理员')
                        
                    }
            })            
        }else{
            this.open3()
        }
    }
    },
    created () {

            // 每次进来先取本地的数据赋值给vuex
            this.$store.state.contentnrs = JSON.parse(sessionStorage.getItem("data"))
            // 标题
            this.title=this.$store.state.contentnrs.title,
            // 图片链接
            this.imgsrc=this.$store.state.contentnrs.imgsrc,
            // 内容
            this.constent=this.$store.state.contentnrs.contentnr,
            // 分类
            this.flmz=this.$store.state.contentnrs.classification,
            // 标签
            this.bqmz=this.$store.state.contentnrs.label
            // 文章id值
            this.id=this.$store.state.contentnrs.id

            // 获取登录作者标签
            this.axios.get('/getuser')
            .then((res)=>{
                this.author = res.data.list[0].nickname
            })
    }
    
}
</script>

<style>
    @import '../../assets/css/Backstage/establish.css';
</style>