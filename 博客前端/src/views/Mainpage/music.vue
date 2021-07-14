<!--
 * @Author: chiLi
 * @Date: 2021-05-18 01:05:06
 * @LastEditors: Small electric motor
 * @Description: For reference only
 * @FilePath:: 当乌云散去，自会有繁星出现
-->
<!--
 * @Author: chiLi
 * @Date: 2021-05-18 01:05:06
 * @LastEditors: Small electric motor
 * @Description: For reference only
 * @FilePath:: 当乌云散去，自会有繁星出现
-->
<template>
  <div id="music">
      <!-- 音乐图像 -->
       <img src="http://p3.music.126.net/34YW1QtKxJ_3YnX9ZzKhzw==/2946691234868155.jpg" id="img">
       <!-- 图像中间的园点 -->
       <div class="k"></div>
       <!-- 音乐名字 -->
       <p id="musicname">成都</p>
       <!-- 播放图标 -->
       <div class="tb">
           <ul>
               <!-- 左切换 -->
               <li><p class="el-icon-d-arrow-left"></p></li>
               <!-- 播放 -->
               <li id="zhong">
                   <!-- 初始状态 -->
                   <p class="el-icon-video-play" id="qy"></p>
                   <!-- 正在播放 -->
                   <p class="el-icon-video-pause" id="zzai"></p>   
                </li>
               <!-- 右切换 -->
               <li><p class="el-icon-d-arrow-right"></p></li>
           </ul>
       </div>

       <!-- 音频控件 -->
       <audio id="music1">
           <source src="http://music.163.com/song/media/outer/url?id=436514312.mp3">
       </audio>
  </div>    
</template>

<script>
export default {
    data () {
        return {
        }
    },
    methods: {
        
    },
    mounted () {
              
            var rotateVal = 0 // 旋转角度
            var InterVal // 定时器
            window.onload = function () {

            // 获取播放器元素
            var audio = document.getElementById('music1');
            // 初始播放状态
            var qy = document.getElementById('qy');
            // 开始播放状态
            var zzai = document.getElementById('zzai');
            // 音乐照片
            var img = document.getElementById('img')
            // 音乐名字
            var musiname = document.getElementById('musicname')

            // 点击开始进行播放
            qy.onclick = function(){
            
                 audio.play();// 这个就是播放  
                 zzai.style.display = 'block';
                 qy.style.display = 'none';            
                 rotate()
            }

            // 点击暂停播放
            zzai.onclick = function(){
                 audio.pause();// 这个就是暂停
                 zzai.style.display = 'none';
                 qy.style.display = 'block';
                 clearInterval(InterVal)
            }
	        }
			
        // 设置定时器
        function rotate () {
                    InterVal = setInterval(function () {
                        var img = document.getElementById('img')
                        rotateVal += 1
                        // 设置旋转属性(顺时针)
                        img.style.transform = 'rotate(' + rotateVal + 'deg)'
                        // 设置旋转属性(逆时针)
                        //img.style.transform = 'rotate(-' + rotateVal + 'deg)'
                        // 设置旋转时的动画  匀速0.1s
                        img.style.transition = '0.1s linear'
                    }, 100)
        }
    },
    created () {
        
    },
    destroyed() {
        window.removeEventListener('beforeunload', e => this.beforeunloadFn(e))
    }
}
</script>

<style scoped>
    #music  #musicname{
        font-size: 13px;
        font-weight: normal;
        color:  #777;
    }
    #music{
        width: 100%;
        height: 100%;
        position: relative;
    }
    .txs{
        width: 100px;
        height: 100px;
        background: red;
        position: relative;
    }
    
    #music>img{
        position: absolute;
        width: 40px;
        height: 40px;
        left:3%;
        border-radius: 40px;
        top: 10%;
    }
     #music>p{
         position: absolute;
         top: 10px;
         left: 85px;
         font-size: 14px;
         color: #999;
         margin-left: 8px;
         color: black;
         font-weight: bold;
     }
    .k{
        position: absolute;
        width: 10px;
        height: 10px;
        background-color: rgb(239,239,239);
        z-index: 999;
        top: 38%;
        left: 9%;
        border-radius: 10px;
    }
    .tb{
        position: absolute;
        width: 100px;
        height: 30px;
        /* background-color: red; */
        left: 28%;
        top: 49%;
    }
    .tb>ul>li{
        float: left;
        margin-top: 3px;
        /* margin-left: 8px; */
        cursor: pointer;
        margin-right: 18px;
    }
    /* .tb>ul>li>p{
        font-size: 25px;
    } */
    #zzbf{
        display: none;
        margin-left: 100px;
        margin-right: 100px;
    }
    /* 播放按钮 */
    .tb>#zzbf>span{
        position: absolute;
         margin-top: 3px;
        margin-left: -60px;
        /* font-size: 25px; */
    }
    /* 播放 */
    .el-icon-video-pause{
        display: none;
        color: green;
        font-size: 17px;
        color: #777;
    }
    .el-icon-video-play{
        display: block;
        color: #777;
        font-size: 17px;
        
      
    }
    /* 左右 */
    .el-icon-d-arrow-left{
        font-size: 14px;
        color: #777;
    }
    .el-icon-d-arrow-right{
        font-size: 14px;
        color: #777;
    }
</style>