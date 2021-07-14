<!--
 * @Author: chiLi
 * @Date: 2021-06-05 16:28:25
 * @LastEditors: Small electric motor
 * @Description: For reference only
 * @FilePath:: 当乌云散去，自会有繁星出现
-->
<template>
  <div id="estab">
      <h4>创建新页面</h4>
      <input type="text" placeholder="标题" class="one" v-model="title">

      <quill-editor v-model="constent"  :options="editorOption"></quill-editor>
      <input type="text" placeholder="封面" class="thre" v-model="imgsrc">
      
      <input type="text" placeholder="页面分类名称" class="thre" v-model="flmz">
      <input type="text" placeholder="页面描述" class="thre" v-model="label" disabled="disabled">
      <button @click="fbs">发布文章</button>
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

            // 标题
            title:'',
            // 作者
            author:'',
            // 分类
            flmz:'',
            // 内容
            constent:'',
            // 文章地址
            imgsrc:'',
            // 标签
            label:'独立页面'
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


        // 点击发布文章
        fbs(){
            if(this.title !== "" && this.flmz !== "" && this.constent !== "" && this.imgsrc !== ""){
            this.axios.post('/gettindependentadd',this.$qs.stringify({
                    // 标题
                    title:this.title,
                    // 作者
                    author:this.author,
                    // 分类
                    classification:this.flmz,
                    // 标签
                    label:this.label,
                    // 置顶
                    zd:'false',
                    // 内容
                    contentnr:this.constent,
                    // 封面
                    imgsrc:this.imgsrc,
                    // 评论
                    pl:'false'
            }))
            .then((res)=>{
                if(res.data.list = "添加成功"){
                    this.title = ""
                    this.author = ""
                    this.flmz = ""
                    this.constent = ""
                    this.imgsrc = ""
                    this.open2()
                    this.$router.push('/Backstage/independent')
                }else{
                    alert("请联系管理员，发现错误")
                }
            })

            }else{
                this.open3()
            }
            
        }        
    },
    created () {

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