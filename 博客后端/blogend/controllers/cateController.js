/*
 * @Author: chiLi
 * @Date: 2021-06-08 15:30:58
 * @LastEditors: Small electric motor
 * @Description: For reference only
 * @FilePath:: 当乌云散去，自会有繁星出现
 */

var dbCongif = require('../util/sql')

// 建立一次连接
dbCongif.start();

// 获取分类
getCate=(req,res)=>{
    var sql = "select * from no";
    var sqlArr = [];
    var callBack = (err,data)=>{
        if(err){
          console.log('连接出错')
        }else{
          res.send({'list':data})
        }
    }
  
    dbCongif.sqlConnect(sql, sqlArr, callBack)
    
}
// 获取指定分类的文章列表
getPostCate=(req,res)=>{

    let {id} = req.body;
    var sql = "select * from post where cate_id=?"
    var sqlArr = [id]
    var callBack = (err,data)=>{
        if(err){
          console.log('连接出错')
        }else{
          res.send({'list':data})
        }
    }
  
    dbCongif.sqlConnect(sql, sqlArr, callBack)
}

// 每日一句接口
getsentenceday=(req,res)=>{
  var sql = "select * from sentenceday";
  var sqlArr = [];
  var callBack = (err,data)=>{
    if(err){
      console.log(err)
    }else{
      res.send({'list':data})
    }
  }

dbCongif.sqlConnect(sql, sqlArr, callBack)
}
// 每日一句分页接口
getsentencefy=(req,res)=>{
  // 接受客户端传递过来的当前页参数
  let page = req.query.page
  // 每一页显示的数据条数
  let pagesize = 8;
  var sql ='select * from sentenceday limit ?,? ';
  var sqlArr = [(page-1)*pagesize,pagesize];
  var callBack = (err,data)=>{
    if(err){
      console.log(err)
    }else{
       res.send({'list':data})
    }
  }

dbCongif.sqlConnect(sql, sqlArr, callBack)
}
// 每日一句增加接口
postaddto=(req,res)=>{
   var data = new Date()
   let title = req.body.title
   let create_time = data.toLocaleDateString()
   let sql= "INSERT INTO sentenceday (title,create_time) VALUES (?,?)"
   var sqlArr = [title,create_time]
   var callBack = (err,data)=>{
    if(err){
      console.log(err)
    }else{
       res.send({'list':'添加成功'})
    }
  }
  dbCongif.sqlConnect(sql, sqlArr, callBack)
}
// 每日一句编辑接口
postedit=(req,res)=>{
  let title = req.body.title
  var data = new Date()
  let create_time = data.toLocaleDateString()
  let {id} = req.body
  var sql = 'UPDATE sentenceday SET title = ?,create_time = ? WHERE id = ?'
  var sqlArr = [title,create_time,id]
  var callBack = (err,data)=>{
    if(err){
      console.log(err)
    }else{
       res.send({'list':'修改成功'})
    }
  }
  dbCongif.sqlConnect(sql, sqlArr, callBack)
}
// 每日一句删除接口
postdelete=(req,res)=>{
  let {id} = req.body
  let sql = "DELETE FROM sentenceday where id=?";
  var sqlArr = [id]
  var callBack = (err,data)=>{
    if(err){
      console.log(err)
    }else{
       res.send({'list':'删除成功'})
    }
  }
  dbCongif.sqlConnect(sql, sqlArr, callBack)
}



// 管理标签接口
getlable=(req,res)=>{
  var sql = "select * from lable";
  var sqlArr = [];
  var callBack = (err,data)=>{
    if(err){
      console.log(err)
    }else{
      res.send({'list':data})
    }
  }
  dbCongif.sqlConnect(sql, sqlArr, callBack)
}
// 管理标签分页接口
getlablefy=(req,res)=>{
    // 接受客户端传递过来的当前页参数
    let page = req.query.page
    // 每一页显示的数据条数
    let pagesize = 8;
    var sql ='select * from lable limit ?,? ';
    var sqlArr = [(page-1)*pagesize,pagesize];
    var callBack = (err,data)=>{
      if(err){
        console.log(err)
      }else{
        res.send({'list':data})
      }
    }

    dbCongif.sqlConnect(sql, sqlArr, callBack)
}
// 管理标签增加接口
getlableadd=(req,res)=>{
    var data = new Date()
    let lablename = req.body.lablename
    let create_time = data.toLocaleDateString()
    let sql= "INSERT INTO lable (lablename,create_time) VALUES (?,?)"
    var sqlArr = [lablename,create_time]
    var callBack = (err,data)=>{
    if(err){
      console.log(err)
    }else{
        res.send({'list':'添加成功'})
    }
  }
  dbCongif.sqlConnect(sql, sqlArr, callBack)
}
// 管理标签编辑接口
getlabedit=(req,res)=>{
  let lablename = req.body.lablename
  var data = new Date()
  let create_time = data.toLocaleDateString()
  let {id} = req.body
  var sql = 'UPDATE lable SET lablename = ?,create_time = ? WHERE id = ?'
  var sqlArr = [lablename,create_time,id]
  var callBack = (err,data)=>{
    if(err){
      console.log(err)
    }else{
       res.send({'list':'修改成功'})
    }
  }
  dbCongif.sqlConnect(sql, sqlArr, callBack)
}
// 管理标签删除接口
getlabledelect=(req,res)=>{
  let {id} = req.body
  let sql = "DELETE FROM lable where id=?";
  var sqlArr = [id]
  var callBack = (err,data)=>{
    if(err){
      
      console.log(err)
    }else{
       res.send({'list':'删除成功'})
    }
  }
  dbCongif.sqlConnect(sql, sqlArr, callBack)
}





// 管理分类接口
getclassification=(req,res)=>{
  var sql = "select * from classification";
  var sqlArr = [];
  var callBack = (err,data)=>{
    if(err){
      console.log(err)
    }else{
      res.send({'list':data})
    }
  }
  dbCongif.sqlConnect(sql, sqlArr, callBack)
}
// 管理分类分页接口
getclassificationfy=(req,res)=>{
  // 接受客户端传递过来的当前页参数
  let page = req.query.page
  // 每一页显示的数据条数
  let pagesize = 8;
  var sql ='select * from classification limit ?,? ';
  var sqlArr = [(page-1)*pagesize,pagesize];
  var callBack = (err,data)=>{
    if(err){
      console.log(err)
    }else{
      res.send({'list':data})
    }
  }

  dbCongif.sqlConnect(sql, sqlArr, callBack)
}
// 管理分类增加接口
getclassificationadd=(req,res)=>{
  var data = new Date()
  let classname= req.body.classname
  let create_time = data.toLocaleDateString()
  let sql= "INSERT INTO classification (classname,create_time) VALUES (?,?)"
  var sqlArr = [classname,create_time]
  var callBack = (err,data)=>{
  if(err){
    console.log(err)
  }else{
      res.send({'list':'添加成功'})
  }
}
dbCongif.sqlConnect(sql, sqlArr, callBack)
}
// 管理分类编辑接口
getclassificationedit=(req,res)=>{
  let classname = req.body.classname 
  var data = new Date()
  let create_time = data.toLocaleDateString()
  let {id} = req.body
  var sql = 'UPDATE classification SET classname  = ?,create_time = ? WHERE id = ?'
  var sqlArr = [classname,create_time,id]
  var callBack = (err,data)=>{
    if(err){
      console.log(err)
    }else{
       res.send({'list':'修改成功'})
    }
  }
  dbCongif.sqlConnect(sql, sqlArr, callBack)
}
// 管理分类删除接口
getclassificationdelect=(req,res)=>{
  let {id} = req.body
  let sql = "DELETE FROM classification where id=?";
  var sqlArr = [id]
  var callBack = (err,data)=>{
    if(err){
      console.log(err)
    }else{
       res.send({'list':'删除成功'})
    }
  }
  dbCongif.sqlConnect(sql, sqlArr, callBack)
}



// 管理文章接口
getcontent=(req,res)=>{
  var sql = "select * from content";
  var sqlArr = [];
  var callBack = (err,data)=>{
    if(err){
      console.log(err)
    }else{
      res.send({'list':data})
    }
  }
  dbCongif.sqlConnect(sql, sqlArr, callBack)
}
// 管理文章分页接口
getcontentfy=(req,res)=>{
  // 接受客户端传递过来的当前页参数
  let page = req.query.page
  // 每一页显示的数据条数
  let pagesize = 8;
  var sql ='select * from content limit ?,? ';
  var sqlArr = [(page-1)*pagesize,pagesize];
  var callBack = (err,data)=>{
    if(err){
      console.log(err)
    }else{
      res.send({'list':data})
    }
  }

  dbCongif.sqlConnect(sql, sqlArr, callBack)
}
// 管理文章增加接口
getcontentadd=(req,res)=>{

  // 获取时间
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
  var nowDate = year + "年" + month + "月" + day + '日';


  // 标题
  let title= req.body.title
  // 作者
  let author= req.body.author
  // 分类
  let classification = req.body.classification
  // 标签
  let label = req.body.label
  // 置顶
  let zd = req.body.zd
  // 时间
  let crea = nowDate
  // data.toLocaleDateString()
  // 内容
  let contentnr = req.body.contentnr
  // 封面
  let imgsrc = req.body.imgsrc
  // 评论
  let pl = req.body.pl
  // 浏览次数
  let views = 0
  
  let sql= "INSERT INTO content (title,author,classification,label,zd,crea,contentnr,imgsrc,pl,views) VALUES (?,?,?,?,?,?,?,?,?,?)"
  var sqlArr = [title,author,classification,label,zd,crea,contentnr,imgsrc,pl,views]
  var callBack = (err,data)=>{
  if(err){
    console.log(err)
  }else{
      res.send({'list':'添加成功'})
  }
}
dbCongif.sqlConnect(sql, sqlArr, callBack)
}
// 管理文章编辑接口
getcontentedit=(req,res)=>{

    // 获取时间
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
    var nowDate = year + "年" + month + "月" + day + '日';

  // 标题
  let title= req.body.title
  // 作者
  let author= req.body.author
  // 分类
  let classification = req.body.classification
  // 标签
  let label = req.body.label
  // 置顶
  let zd = req.body.zd
  // 内容
  let contentnr = req.body.contentnr
  // 封面
  let imgsrc = req.body.imgsrc
  // 评论
  let pl = req.body.pl
  // 时间
  let crea =  nowDate
  let {id} = req.body
  var sql = 'UPDATE content  SET title = ?,author = ?,classification = ?, label = ? , zd = ?, contentnr = ? , imgsrc = ? , pl = ? , crea = ? WHERE id = ?'
  var sqlArr = [title,author,classification,label,zd,contentnr,imgsrc,pl,crea,id]
  var callBack = (err,data)=>{
    if(err){
      console.log(err)
    }else{
       res.send({'list':'修改成功'})
    }
  }
  dbCongif.sqlConnect(sql, sqlArr, callBack)
}
// 管理文章判断是否有置顶字段接口
getcontentzd=(req,res)=>{
    let zd = req.body.zd;
    var sql = "select * from content where zd=?"
    var sqlArr = [zd]
    var callBack = (err,data)=>{
        if(err){
          console.log(err)
        }else{
          res.send({'list':data})
        }
    }
    dbCongif.sqlConnect(sql, sqlArr, callBack)
}
// 管理文章根据id值获取接口
getcontentid=(req,res)=>{
  let id = req.body.id
  var sql = "select title from content where id=?"
  var sqlArr = [id]
  var callBack = (err,data)=>{
      if(err){
        console.log(err)
      }else{
        res.send(data)
      }
  }

  dbCongif.sqlConnect(sql, sqlArr, callBack)
}
// 管理文章进入文章增加浏览次数接口
getcontentview=(req,res)=>{
  let views = req.body.views
  var sql = 'UPDATE content  SET views = ? WHERE id = ?'
  let {id} = req.body
  var sqlArr = [views,id]
  var callBack = (err,data)=>{
    if(err){
      console.log(err)
    }else{
       res.send({'list':'修改成功'})
    }
  }
  dbCongif.sqlConnect(sql, sqlArr, callBack)
}
// 管理文章删除接口
getcontentdelect=(req,res)=>{
  let {id} = req.body
  let sql = "DELETE FROM  content  where id=?";
  var sqlArr = [id]
  var callBack = (err,data)=>{
    if(err){
      console.log(err)
    }else{
       res.send({'list':'删除成功'})
    }
  }
  dbCongif.sqlConnect(sql, sqlArr, callBack)
}
// 管理文章取浏览量最大的前5条数据接口
getcommentfivevies=(req,res)=>{
  var sql = "select * from content order by views desc limit 5"
  var sqlArr = [];
  var callBack = (err,data)=>{
    if(err){
      console.log(err)
    }else{
      res.send({'list':data})
    }
  }
  dbCongif.sqlConnect(sql, sqlArr, callBack)
}
// 管理文章根据对应的标签获取数据接口
getcommentfl=(req,res)=>{
  let label = req.body.label;
  var sql = "select * from content where label=?"
  var sqlArr = [label]
  var callBack = (err,data)=>{
      if(err){
        console.log(err)
      }else{
        res.send({'list':data})
      }
  }

  dbCongif.sqlConnect(sql, sqlArr, callBack)
}
// 管理文章根据对应的分类获取数据接口
gtecommentflsa=(req,res)=>{
  let classification = req.body.classification;
  var sql = "select * from content where classification=?"
  var sqlArr = [classification]
  var callBack = (err,data)=>{
      if(err){
        console.log(err)
      }else{
        res.send({'list':data})
      }
  }

  dbCongif.sqlConnect(sql, sqlArr, callBack)
}




// 管理评论接口
getcomment=(req,res)=>{
  var sql = "select * from comment";
  var sqlArr = [];
  var callBack = (err,data)=>{
    if(err){
      console.log(err)
    }else{
      res.send({'list':data})
    }
  }
  dbCongif.sqlConnect(sql, sqlArr, callBack)
}
// 管理评论分页接口
getcommentfy=(req,res)=>{
  // 接受客户端传递过来的当前页参数
  let page = req.query.page
  // 每一页显示的数据条数
  let pagesize = 8;
  var sql ='select * from comment limit ?,? ';
  var sqlArr = [(page-1)*pagesize,pagesize];
  var callBack = (err,data)=>{
    if(err){
      console.log(err)
    }else{
      res.send({'list':data})
    }
  }

  dbCongif.sqlConnect(sql, sqlArr, callBack)
}
// 管理评论增加数据接口
getcommentadd=(req,res)=>{
  var data = new Date()
  let name = req.body.name
  let emial = req.body.emial
  let created = data.toLocaleDateString()
  let contentid = req.body.contentid
  let inside = req.body.inside
  let img = req.body.img
  // let ascription = req.body.ascription
  let sql= "INSERT INTO comment (name,emial,created,contentid,inside,img) VALUES (?,?,?,?,?,?)"
  var sqlArr = [name, emial,created,contentid,inside,img]
  var callBack = (err,data)=>{
    if(err){
      console.log(err)
    }else{
        res.send({'list':'添加成功'})
    }
  }
  dbCongif.sqlConnect(sql, sqlArr, callBack)
}
// 管理评论根据对应文章id值获取评论
getcommentid=(req,res)=>{
  let contentid = req.body.contentid;
  var sql = "select * from comment where contentid=?"
  var sqlArr = [contentid]
  var callBack = (err,data)=>{
      if(err){
        console.log(err)
      }else{
        res.send({'list':data})
      }
  }

  dbCongif.sqlConnect(sql, sqlArr, callBack)
}
// 管理评论对应的用户头像接口
gtecommentbaby=(req,res)=>{
  var sql = "select * from brary";
  var sqlArr = [];
  var callBack = (err,data)=>{
    if(err){
      console.log(err)
    }else{
      res.send(data)
    }
  }
  dbCongif.sqlConnect(sql, sqlArr, callBack)
}
//管理评论删除数据接口
getcommentdelect=(req,res)=>{
  let contentid = req.body.contentid
  let sql = "DELETE FROM comment  where contentid=?";
  var sqlArr = [ contentid]
  var callBack = (err,data)=>{
    if(err){
      console.log(err)
    }else{
       res.send({'list':'删除成功'})
    }
  }
  dbCongif.sqlConnect(sql, sqlArr, callBack)
}
// 管理评论截取最近的四条数据接口
getcommentfor=(req,res)=>{
  var sql = "select * from comment order by id desc limit 4;";
  var sqlArr = [];
  var callBack = (err,data)=>{
    if(err){
      console.log(err)
    }else{
      res.send({'list':data})
    }
  }
  dbCongif.sqlConnect(sql, sqlArr, callBack)
}



// 管理回复根据对应的id值渲染回复
getreplayid=(req,res)=>{
  let contentid = req.body.contentid;
  var sql = "select * from  replay where contentid=?"
  var sqlArr = [contentid]
  var callBack = (err,data)=>{
      if(err){
        console.log(err)
      }else{
        res.send({'list':data})
      }
  }

  dbCongif.sqlConnect(sql, sqlArr, callBack)
}
// 管理回复增加数据接口
getreplayadd=(req,res)=>{
  var data = new Date()
  let name = req.body.name
  let replaynr = req.body.replaynr
  let created = data.toLocaleDateString()
  let contentid = req.body.contentid
  let emial = req.body.emial
  let img = req.body.img
  let sql= "INSERT INTO replay (name,replaynr, created,contentid,emial,img) VALUES (?,?,?,?,?,?)"
  var sqlArr = [name, replaynr,created,contentid,emial,img]
  var callBack = (err,data)=>{
    if(err){
      console.log(err)
    }else{
        res.send({name, created,replaynr})
    }
  }
  dbCongif.sqlConnect(sql, sqlArr, callBack)
}
// 管理回复删除数据接口
getreplaydelect=(req,res)=>{
  let contentid = req.body.contentid
  let sql = "DELETE FROM replay  where contentid=?";
  var sqlArr = [ contentid]
  var callBack = (err,data)=>{
    if(err){
      console.log(err)
    }else{
       res.send({'list':'删除成功'})
    }
  }
  dbCongif.sqlConnect(sql, sqlArr, callBack)
}


// 管理独立页面接口
getindependent=(req,res)=>{
  var sql = "select * from independent";
  var sqlArr = [];
  var callBack = (err,data)=>{
    if(err){
      console.log(err)
    }else{
      res.send({'list':data})
    }
  }
  dbCongif.sqlConnect(sql, sqlArr, callBack)
}
// 管理独立页面分页接口
getindependentfy=(req,res)=>{
  // 接受客户端传递过来的当前页参数
  let page = req.query.page
  // 每一页显示的数据条数
  let pagesize = 8;
  var sql ='select * from independent limit ?,? ';
  var sqlArr = [(page-1)*pagesize,pagesize];
  var callBack = (err,data)=>{
    if(err){
      console.log(err)
    }else{
      res.send({'list':data})
    }
  }

  dbCongif.sqlConnect(sql, sqlArr, callBack)
}
// 管理独立页面新增数据接口
gettindependentadd=(req,res)=>{
  // 获取时间
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
  var nowDate = year + "年" + month + "月" + day + '日';

  // 标题
  let title= req.body.title
  // 作者
  let author= req.body.author
  // 分类
  let classification = req.body.classification
  // 标签
  let label = req.body.label
  // 置顶
  let zd = req.body.zd
  // 时间
  let crea = nowDate
  // data.toLocaleDateString()
  // 内容
  let contentnr = req.body.contentnr
  // 封面
  let imgsrc = req.body.imgsrc
  // 评论
  let pl = req.body.pl
  // 浏览次数
  let views = 0

  let sql= "INSERT INTO independent (title,author,classification,label,zd,crea,contentnr,imgsrc,pl,views) VALUES (?,?,?,?,?,?,?,?,?,?)"
  var sqlArr = [title,author,classification,label,zd,crea,contentnr,imgsrc,pl,views]
  var callBack = (err,data)=>{
  if(err){
    console.log(err)
  }else{
      res.send({'list':'添加成功'})
  }
}
dbCongif.sqlConnect(sql, sqlArr, callBack)
}
// 管理独立页面编辑数据接口
gettindependentdelect=(req,res)=>{
  // 获取时间
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
  var nowDate = year + "年" + month + "月" + day + '日';

// 标题
let title= req.body.title
// 作者
let author= req.body.author
// 分类
let classification = req.body.classification
// 标签
let label = req.body.label
// 置顶
let zd = req.body.zd
// 内容
let contentnr = req.body.contentnr
// 封面
let imgsrc = req.body.imgsrc
// 评论
let pl = req.body.pl
// 时间
let crea =  nowDate
let {id} = req.body
var sql = 'UPDATE independent SET title = ?,author = ?,classification = ?, label = ? , zd = ?, contentnr = ? , imgsrc = ? , pl = ? , crea = ? WHERE id = ?'
var sqlArr = [title,author,classification,label,zd,contentnr,imgsrc,pl,crea,id]
var callBack = (err,data)=>{
  if(err){
    console.log(err)
  }else{
     res.send({'list':'修改成功'})
  }
}
dbCongif.sqlConnect(sql, sqlArr, callBack)
}
// 管理独立页面数据删除接口
gettindependentsc=(req,res)=>{
  let id = req.body.id
  let sql = "DELETE FROM independent where id=?";
  var sqlArr = [id]
  var callBack = (err,data)=>{
    if(err){
      console.log(err)
    }else{
       res.send({'list':'删除成功'})
    }
  }
  dbCongif.sqlConnect(sql, sqlArr, callBack)
}


// 管理设置数据接口
getup=(req,res)=>{
  var sql = "select * from setup";
  var sqlArr = [];
  var callBack = (err,data)=>{
    if(err){
      console.log(err)
    }else{
      res.send({'list':data})
    }
  }
  dbCongif.sqlConnect(sql, sqlArr, callBack)
}
// 管理设置数据编辑接口
gteupbj=(req,res)=>{
  let sitename = req.body.sitename
  let websitelogo = req.body.websitelogo
  let sitefw = req.body.sitefw
  let siteba = req.body.siteba
  let {id} = req.body
  var sql = 'UPDATE setup SET  sitename = ?,websitelogo = ?,sitefw = ?,siteba = ? WHERE id = ?'
  var sqlArr = [sitename,websitelogo,sitefw,siteba,id]
  var callBack = (err,data)=>{
    if(err){
      console.log(err)
    }else{
       res.send({'list':'修改成功'})
    }
  }
  dbCongif.sqlConnect(sql, sqlArr, callBack)
}


// 管理个人信息设置
getuser=(req,res)=>{
  var sql = "select * from user";
  var sqlArr = [];
  var callBack = (err,data)=>{
    if(err){
      console.log(err)
    }else{
      res.send({'list':data})
    }
  }
  dbCongif.sqlConnect(sql, sqlArr, callBack)
}
// 管理个人信息编辑数据接口
getuserbj=(req,res)=>{
  let nickname = req.body.nickname
  let name =req.body.name
  let imgsrc = req.body.imgsrc
  let giturl = req.body.giturl
  let email = req.body.email
  let {id} = req.body
  var sql = 'UPDATE user SET  nickname = ?, name = ?,imgsrc = ?, giturl = ?,email = ? WHERE id = ?'
  var sqlArr = [nickname,name,imgsrc,giturl,email,id]
  var callBack = (err,data)=>{
    if(err){
      console.log(err)
    }else{
       res.send({'list':'修改成功'})
    }
  }
  dbCongif.sqlConnect(sql, sqlArr, callBack)
}
// 管理个人信息密码修改接口
getuserpas=(req,res)=>{
  let password = req.body.password
  let {id} = req.body
  var sql = 'UPDATE user SET  password = ? WHERE id = ?'
  var sqlArr = [password,id]
  var callBack = (err,data)=>{
    if(err){
      console.log(err)
    }else{
       res.send({'list':'修改成功'})
    }
  }
  dbCongif.sqlConnect(sql, sqlArr, callBack)
}







module.exports = {
    getCate,
    getPostCate,


    // 每日一句全部数据接口
    getsentenceday,
    // 每日一句分页数据接口
    getsentencefy,
    // 每日一句增加数据接口
    postaddto,
    // 每日一句编辑数据接口
    postedit,
    // 每日一句删除数据接口
    postdelete,


    // 管理标签全部数据接口
    getlable,
    // 管理标签分页数据接口
    getlablefy,
    // 管理标签增加数据接口
    getlableadd,
    // 管理标签编辑数据接口
    getlabedit,
    // 管理标签删除数据接口
    getlabledelect,
    
    
    // 管理分类全部数据接口
    getclassification,
    // 管理分类分页数据接口
    getclassificationfy,
    // 管理分类增加数据接口
    getclassificationadd,
    // 管理分类编辑数据接口
    getclassificationedit,
    // 管理分类删除数据接口
    getclassificationdelect,


    // 管理文章全部数据接口
    getcontent,
    // 管理文章分类分页数据接口
    getcontentfy,
    // 管理文章增加数据接口
    getcontentadd,
    // 管理文章编辑数据接口
    getcontentedit,
    // 管理文章判断是否有置顶字段接口
    getcontentzd,
    // 管理文章根据id值获取
    getcontentid,
    // 管理文章删除数据接口
    getcontentdelect,
    // 管理文章增加浏览次数接口
    getcontentview,
    // 管理文章取浏览量最大的前5条数据接口
    getcommentfivevies,
    // 管理文章根据对应的标签数据接口
    getcommentfl,
    // 管理文章根据对应的分类获取数据
    gtecommentflsa,





    // 管理评论全部数据接口
    getcomment,
    // 管理评论分页接口
    getcommentfy,
    // 管理评论增加接口
    getcommentadd,
    // 管理评论根据对应文章id获取接口
    getcommentid,
    // 管理评论对应的用户头像
    gtecommentbaby,
    // 管理评论删除接口
    getcommentdelect,
    // 管理评论截取最近的四条数据接口
    getcommentfor,


    // 管理回复增加接口
    getreplayadd,
    // 管理回复根据id值渲染对应的回复
    getreplayid,
    // 管理回复删除数据接口
    getreplaydelect,


    // 管理独立页面全部数据接口
    getindependent,
    // 管理独立页面数据分页接口
    getindependentfy,
    // 管理独立页面新增数据接口
    gettindependentadd,
    // 管理独立页面数据编辑接口
    gettindependentdelect,
    // 管理独立页面数据删除接口
    gettindependentsc,



    // 管理设置数据接口
    getup,
    // 管理设置编辑数据接口
    gteupbj,


    // 管理个人信息设置
    getuser,
    // 管理个人信息编辑数据接口
    getuserbj,
    // 管理个人信息密码修改接口
    getuserpas

}