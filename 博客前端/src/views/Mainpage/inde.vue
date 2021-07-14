<!--
 * @Author: chiLi
 * @Date: 2021-05-22 09:40:34
 * @LastEditors: Small electric motor
 * @Description: For reference only
 * @FilePath:: 当乌云散去，自会有繁星出现
-->
<template>
  <div id="details">
    <!-- 头部 -->
    <div class="deta-head">
        <!--标题部分 -->
        <div class="de-title">
            <!-- 标题 -->
            <p><span>#</span>{{this.nr.title}}</p>
            <!-- 标签 -->
            <div class="biaoq">
                <ul>
                  <!-- 标题 -->
                  <li>
                    <span class="el-icon-user"></span>
                    <span>{{this.nr.author}}</span>
                  </li>
                  <!-- 时间 -->
                  <li>
                    <span class="icon el-icon-time"></span>
                    <span class="btssj">{{this.nr.crea}}</span>
                  </li>
                  <!-- 评论条数 -->
                  <!-- <li>
                    <span class="el-icon-chat-round"></span>
                    <span>{{this.pllist.length}}</span>
                  </li> -->
                  <!-- 浏览次数 -->
                  <!-- <li> -->
                    <!-- <span class="el-icon-view"></span> -->
                    <!-- <span>{{this.nr.views}}次浏览</span> 
                  </li> -->
                  <!-- 兴趣爱好1 -->
                  <li>
                    <span class="el-icon-light-rain"></span>
                    <span>{{this.nr.classification}}</span>                    
                  </li>
                  <!-- 兴趣爱好2 -->
                  <li>
                    <span class="el-icon-lightning"></span>
                    <span>{{this.nr.label}}</span>
                  </li>
                </ul>
            </div>
        </div>
        <!-- 内容部分 -->
        <div class="de-content">
            <!-- 上方显示条 -->
            <div class="de-tiao">
                  <span class="el-icon-house" style="color:#777" @click="fh">首页</span>
                  <span class="xg" style="color:#777">/</span>
                  <span style="color:#777">独立页面</span>
            </div>
            <!-- 正文内容 -->
            <div class="de-neirong">
                <!-- 使正文内容有边距 -->
                <div class="content">

                  <!-- 富文本样式代码不生效解决 -->
                    <div  class="ql-snow" style="color:#777;">
                         <div class="ql-editor" v-html="this.nra"  style="line-height:35px;"></div>
                    </div>

                </div>
            </div>

            <!-- 时间及gif动图 -->
            <div class="xk">
              
              <div class="gif"> 
                <img src="../../assets/img/x.gif" alt="">
              </div>
              
              <div class="sj">
                <span class="icon el-icon-time">最后修改时间:</span>
                <i>{{this.nr.crea}}PM</i>
              </div>
             
              <div class="zz">
                <i class="el-icon-coffee">允许规范转载</i>
              </div>
            </div>


            <!-- 评论内容 -->
            <div class="de-plnr" v-show="yes">
                <h3 style="color:#777;  font-weight: normal;">{{this.pllist.length}}条评论</h3>
                
                <!-- 评论人员 -->
                <div class="ry">
                  
                  <!-- 评论 -->
                    <ul v-for="item,index in pllist" :key="index">
                      <div class="divs"><img :src="item.img" alt=""></div>
                      <li><p class="jc"  style="color:#777;margin-left:50px;">{{item.name}}</p></li>
                      <li><p class="plsj" style="color:#a0a0a0;margin-left:50px">{{item.created}}</p></li>
                      <li><div class="plnr" style="color:#777;font-size:14px;margin-left:50px">{{item.inside}}</div></li>
                      <li><button @click="cx(item,index)"  style="margin-left:50px">回复</button></li>

                      <!-- 回复 -->
                      <ul v-for="a,b in item.pl" :key="b">
                          <div class="divs"><img :src="a.img" alt=""></div>
                          <li><p class="jc" style="color:#777;margin-left:50px;">{{a.name}}</p></li>
                          <li><p class="plsj" style="color:#a0a0a0;margin-left:50px">{{a.created}}</p></li>
                          <li><div class="plnr" style="color:#777;font-size:14px;;margin-left:50px">{{a.replaynr}}</div></li>
                          <li><button @click="cx(item,index)" style="margin-left:50px">回复</button></li>
                      </ul>

              
                    </ul>
                    

                </div>

            </div>


            <!-- 发布评论 -->
            <div class="de-fbpl" v-show="yes">
                <h3 style="color:#777;  font-weight: normal;">发表评论</h3>
                <p  style="color:#777">评论<img src="../../assets/img/hx.png" alt=""></p>
                <input type="text" placeholder="评论内容 , 不可为空" v-model="comment">
                <ul>
                  <li class="ul-z">
                    <p  style="color:#777">名称<img src="../../assets/img/hx.png" alt=""></p>
                    <input type="text" placeholder="姓名或昵称 (必填)" v-model="name">
                    <button class="fbplsa" @click="fbpl">发表评论</button>
                  </li>

                  <li class="ul-y">
                    <p  style="color:#777">邮箱<img src="../../assets/img/hx.png" alt=""></p>
                    <input type="text"  placeholder="邮箱 (必填)" v-model="email" @focus="jk">
                  </li>
                </ul>
            </div>

            <!-- 备案号 -->
            <div class="beian">
                  <p class="zuo">{{this.fw}}</p>
                  <p class="you">{{this.ba}}</p>
            </div>

            <transition name="fade">
            <div class="de" v-show="istk">
                <h3 style="color:#777;  font-weight: normal;">发表评论</h3>
                <p style="color:#777">评论<img src="../../assets/img/hx.png" alt=""></p>
                <input type="text"  placeholder="回复内容 , 不可为空" v-model="hfnr"  class="mcc">
                <ul>
                  <li class="ul-z">
                    <p style="color:#777">名称<img src="../../assets/img/hx.png" alt=""></p>
                    <input type="text"  placeholder="姓名或昵称 (必填)" v-model="hfname" class="mcs">
                    <button class="fb" @click="hfpk">发表评论</button>
                  </li>

                  <li class="ul-y">
                    <p style="color:#777">邮箱<img src="../../assets/img/hx.png" alt=""></p>
                    <input type="text"  placeholder="邮箱 (必填)" v-model="hfemail" class="mcb">
                     <button class="qx" @click="qx">取消</button>
                  </li>
                </ul>
            </div>
            </transition>
            
        </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      // 控制弹框的阀门
      istk:false,
      // 文章数据
      nr:[],
      // 文章内容
      nra:[],



      // 评论内容
      comment:'',
      // 评论姓名
      name:'',
      // 评论邮箱
      email:'',
      // 评论的整体数据
      pllist:[],
      // 评论数据长度
      pllength:null,
      // 评论头像
      pltx:"",
      // 回复头像
      hftx:"",
      // 是否允许评论
      yes:null,





      // 回复内容
      hfnr:"",
      // 回复名字
      hfname:"",
      // 回复邮箱,
      hfemail:"",
      // 点击获取对应的回复id值
      hfidz:"",


      // 站点服务
      fw:"",
      // 站点备案
      ba:""
    }
  },
  methods: {

        // 失败的提示
         open3() {
            this.$message({
            showClose: true,
            message: '评论失败，请联系管理员',
            type: 'warning'
            });
        },

        // 成功的提示
        open2() {
            this.$message({
            showClose: true,
            message: '评论成功',
            type: 'success'
            });
        },

        // 缺少数据提示
        open4() {
            this.$message({
            showClose: true,
            message: '输入信息不完整',
            type: 'warning'
            });
        },

        

      // 取消
      qx(){
        this.istk = false
        this.hfname=""
        this.hfnr=""
        this.hfidz=""
        this.hfemail=""
        this.hftx = ""

        
      },
      // 回复出现
      cx(item,index){
        this.hfidz = item.id
        this.istk = true
        this.jcna()
        // alert(item.id)
      },

      
      // 点击首页回到列表
      fh(){
        this.$router.push('/jump')
      },

      // 监控评论表单获得随机头像
      jk(){
            //获取随机头像
            this.axios.get('/gtecommentbaby').then((res)=>{
                // 获取一个根据数据长度得成随机数
                var aimg = Math.floor(Math.random()*res.data.length+1)
                this.pltx = res.data[aimg].imgsrc
            })

      },
      
      // 监控回复表单获得随机头像
      jcna(){
         //获取随机头像
            this.axios.get('/gtecommentbaby').then((res)=>{
                // 获取一个根据数据长度得成随机数
                var aimg = Math.floor(Math.random()*res.data.length+1)
                this.hftx = res.data[aimg].imgsrc
            })
      },

      // 发布评论
      fbpl(){
            // 新增信息
            if(this.comment !== "" && this.name !== "" && this.email !== ""){
              this.axios.post('/getcommentadd',this.$qs.stringify({
                  name:this.name,
                  emial:this.email,
                  contentid:this.nr.id,
                  inside:this.comment,
                  img:this.pltx
                }))
                .then((res)=>{
                  if(res.data.list == '添加成功'){
                    // 弹窗
                    this.open2()
                    // 重新渲染
                    this.qbpl()
                    // 数据归零
                    this.name = "",
                    this.email = "",
                    this.comment = "",
                    this.pltx = ""
                  }else{
                    this.open3()
                  }
                })
            }else{
              this.open4()
            }
      },

      // 点击回复评论
      hfpk(){
          if(this.hfnr !== ""  && this.hfname !== "" && this.hfemail !== ""){
            this.axios.post('/getreplayadd',this.$qs.stringify({
                name:this.hfname,
                replaynr:this.hfnr,
                contentid:this.hfidz,
                emial:this.hfemail,
                img:this.hftx
            }))
            .then((res)=>{
                      // 重新渲染数据归零 
                      this.qbpl()
                      this.hfname=""
                      this.hfnr=""
                      this.hfidz=""
                      this.hfemail=""
                      this.hftx = ""
                      this.istk = false
                      this.open2()
            })

          }else{
            this.open4()
          }
      },


      // 获取评论的数据
      qbpl(){
          this.axios.post('/getcommentid',this.$qs.stringify({
                contentid:this.nr.id
            }))
            .then((res)=>{ 
                  this.pllist = res.data.list
                  for(let i = 0; i < this.pllist.length;i++){
                    // 通过当前对象的id值循环作为回复的参数
                    this.axios.post('/getreplayid',this.$qs.stringify({
                        contentid: this.pllist[i].id
                    }))
                    .then((res)=>{
                        // 给对象添加属性 
                        this.$set(this.pllist[i],'pl',res.data.list)
                    })
                }
            })
      }
      

  },
  created () {  

      //  取本地存储的数据
      this.$store.state.details = JSON.parse(sessionStorage.getItem("data"))
      this.nr = this.$store.state.details
      this.nra = this.nr.contentnr
      // 获取评论的数据  
      this.qbpl()

      // 获取是否允许评论
      this.yes=JSON.parse(this.nr.pl)

    //   // 增加次文章浏览次数
    //   this.axios.post('/getcontentview',this.$qs.stringify({
    //       id:this.nr.id,
    //       views:this.nr.views+1
    //   }))
    //   .then((res)=>{
    //      // 无输出
    //   })

       //  设置站点名称
       this.axios.get('/getup')
       .then((res)=>{
           this.fw = res.data.list[0].sitefw
           this.ba = res.data.list[0].siteba
       })

  }

}
</script>

<style scoped>

@import '../../assets/css/Mainpage/details.css';
.fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
  
}
.fade-enter, .fade-leave-to  {
    opacity: 0
};
</style>
