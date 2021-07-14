/*
 * @Author: chiLi
 * @Date: 2021-06-08 14:44:41
 * @LastEditors: Small electric motor
 * @Description: For reference only
 * @FilePath:: 当乌云散去，自会有繁星出现
 */
const mysql =  require('mysql')
module.exports = {
    // 数据库配置
    config:{
        host:'localhost',
        prot:'3306',
        user:"root",
        password:"123456",
        database:"blogend",
    },

    // 连接数据库,使用mysql的连接池方式
    // 连接池对象
    // sqlConnect:function(sql,sqlArr,callBack){
    //     var pool = mysql.createPool(this.config)
    //     pool.getConnection((err,conn) => {
    //         console.log('连接成功')
    //         if(err){
    //             console.log(err)
    //             console.log('连接失败')
    //             return;
    //         }

    //         // 事件驱动回调
    //         conn.query(sql,sqlArr,callBack);
    //         // 释放连接
    //         conn.release();
    //     })
    // }
    connection:'',
    start(){
        this.connection = mysql.createConnection(this.config)
        this.connection.connect((err,conn) => {
            if(err){
                console.log(err)
                console.log('连接失败')
                return;
            }
            console.log('连接成功')
        })
    },
    // // 连接数据库,使用mysql的连接池方式
    // 连接池对象
    sqlConnect:function(sql,sqlArr,callBack){
        this.connection.query(sql,sqlArr,callBack);
    }

}
