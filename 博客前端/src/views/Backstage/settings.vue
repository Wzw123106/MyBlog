<!--
 * @Author: chiLi
 * @Date: 2021-05-17 22:34:13
 * @LastEditors: Small electric motor
 * @Description: For reference only
 * @FilePath:: 当乌云散去，自会有繁星出现
-->
<template>
  <div id="settings">
      <!-- 主体 -->
      <div class="sbody">
          <!-- 主体里面 -->
          <div class="sbody-n">
              <h4>基本设置</h4>
              <ul>
                  <li>
                      <p>站点名称</p>
                      <input type="text" v-model="upname">
                      <h4>站点的名称将显示在网页标题处</h4>
                  </li>
                  <li>
                      <p>网站logo地址</p>
                      <input type="text" v-model="updz">
                      <h4>网站logo地址将显示在网页logo处</h4>
                  </li>
                  <li>
                      <p>站点服务</p>
                      <input type="text" v-model="upfw">
                      <h4>站点服务将显示在网页的最低处</h4>
                  </li>
                  <li>
                      <p>站点备案</p>
                      <input type="text" v-model="upba">
                      <h4>站点备案将显示在网页的最底处</h4>
                      <button @click="bc">保存设置</button>
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
            upid:'',
            upname:'',
            updz:'',
            upfw:'',
            upba:''
        }
    },
    methods: {

        
        // 成功的提示
        open2() {
            this.$message({
            showClose: true,
            message: '修改成功',
            type: 'success'
            });
        },

        // 失败的提示
         open3() {
            this.$message({
            showClose: true,
            message: '修改失败',
            type: 'warning'
            });
        },




        bc(){
            this.axios.post('/gteupbj',this.$qs.stringify({
                 sitename:this.upname,
                 websitelogo:this.updz,
                 sitefw: this.upfw,
                 siteba:this.upba,
                 id:this.upid,
            }))
            .then((res)=>{
                if(res.data.list = "修改成功"){
                    this.open2()
                }else{
                    this.open3()
                }
            })
        }
    },
    created () {

        // 获取设置全部数据
        this.axios.get('/getup')
        .then((res)=>{
            this.upname = res.data.list[0].sitename
            this.updz = res.data.list[0].websitelogo
            this.upfw =res.data.list[0].sitefw
            this.upba = res.data.list[0].siteba
            this.upid = res.data.list[0].id
        })


    }
}
</script>

<style scoped>
    @import '../../assets/css/Backstage/settings.css'
</style>