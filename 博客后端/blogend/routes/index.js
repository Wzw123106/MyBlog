/*
 * @Author: chiLi
 * @Date: 2021-06-08 14:07:44
 * @LastEditors: Small electric motor
 * @Description: For reference only
 * @FilePath:: 当乌云散去，自会有繁星出现
 */
var express = require('express');
var router = express.Router();
var cate = require('../controllers/cateController')


/* GET home page. */

// 接口1
router.get('/',cate.getCate);

// 接口2
router.post('/getPostCate',cate.getPostCate)

// 获取每日一句
router.get('/getsentenceday',cate.getsentenceday)
// 获取每日一句分页数据
router.get('/getsentencefy',cate.getsentencefy)
// 获取每一句增加数据接口
router.post('/postaddto',cate.postaddto)
// 获取每日一句编辑数据接口
router.post('/postedit',cate.postedit)
// 获取每日一句删除数据接口
router.post('/postdelete',cate.postdelete)



// 获取管理标签
router.get('/getlable',cate.getlable)
// 获取管理标签分页数据
router.get('/getlablefy',cate.getlablefy)
// 获取管理标签增加数据接口
router.post('/getlableadd',cate.getlableadd)
// 获取管理标签编辑数据接口
router.post('/getlabedit',cate.getlabedit)
// 获取管理标签删除数据接口
router.post('/getlabledelect',cate.getlabledelect)



// 获取管理分类
router.get('/getclassification',cate.getclassification)
// 获取管理分类分页数据接口
router.get('/getclassificationfy',cate.getclassificationfy)
// 获取管理分类增加数据接口
router.post('/getclassificationadd',cate.getclassificationadd)
// 获取管理分类编辑数据接口
router.post('/getclassificationedit',cate.getclassificationedit)
// 获取管理分类删除数据接口
router.post('/getclassificationdelect',cate.getclassificationdelect)


// 获取管理文章数据接口
router.get('/getcontent',cate.getcontent)
// 获取管理文章分页数据接口
router.get('/getcontentfy',cate.getcontentfy)
// 获取管理文章增加数据接口
router.post('/getcontentadd',cate.getcontentadd)
// 获取管理文章编辑数据接口
router.post('/getcontentedit',cate.getcontentedit)
// 获取管理文章判断是否有置顶字段接口
router.post('/getcontentzd',cate.getcontentzd)
// 获取管理文章根据id值获取
router.post('/getcontentid',cate.getcontentid)
// 获取管理文章删除接口
router.post('/getcontentdelect',cate.getcontentdelect)
// 获取管理文章增加浏览次数接口
router.post('/getcontentview',cate.getcontentview)
// 获取管理文章前五条最大浏览量数据
router.get('/getcommentfivevies',cate.getcommentfivevies)
// 管理文章根据对应的标签数据接口
router.post('/getcommentfl',cate.getcommentfl)
// 管理文章根据对应的分类获取数据接口
router.post('/gtecommentflsa',cate.gtecommentflsa)





// 获取管理评论数据接口
router.get('/getcomment',cate.getcomment)
// 获取管理评论数据分页接口
router.get('/getcommentfy',cate.getcommentfy)
// 获取管理评论增加接口
router.post('/getcommentadd',cate.getcommentadd)
// 获取管理评论根据对应id值获取评论
router.post('/getcommentid',cate.getcommentid)
// 管理评论对应的用户头像
router.get('/gtecommentbaby',cate.gtecommentbaby)
// 管理评论删除数据接口
router.post('/getcommentdelect',cate.getcommentdelect)
// 管理评论截取最近的四条数据接口
router.get('/getcommentfor',cate.getcommentfor)




// 获取管理回复增加接口
router.post('/getreplayadd',cate.getreplayadd)
// 获取管理回复根据对应的id值获取对应的回复
router.post('/getreplayid',cate.getreplayid)
// 管理回复删除数据接口
router.post('/getreplaydelect',cate.getreplaydelect)



// 管理独立页面数据接口
router.get('/getindependent',cate.getindependent)
// 管理独立页数据分页接口
router.get('/getindependentfy',cate.getindependentfy)
// 管理独立页面新增数据接口
router.post('/gettindependentadd',cate.gettindependentadd)
// 管理独立页面数据编辑接口
router.post('/gettindependentdelect',cate.gettindependentdelect)
// 管理独立页面数据删除接口
router.post('/gettindependentsc',cate.gettindependentsc)



// 管理设置数据接口
router.get('/getup',cate.getup)
// 管理设置编辑数据接口
router.post('/gteupbj',cate.gteupbj)


// 管理个人信息设置接口
router.get('/getuser',cate.getuser)
// 管理个信息编辑接口
router.post('/getuserbj',cate.getuserbj)
// 管理个人信息密码修改接口
router.post('/getuserpas',cate.getuserpas)







module.exports = router;
