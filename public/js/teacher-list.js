/**
 * Created by luyun on 2017/9/1.
 */
define(['jquery','template'],function($,template){
    //console.log('12345');
    //调用后台接口获取列表数据
    $.ajax({
        url : '/api/teacher',
        type : 'get',
        dataType : 'json',
        success : function(data){
            //console.log(data);
            //解析数据渲染页面
            var html = template('teacherTpl',{list : data.result});
            $('#teacherInfo').html(html);
        }
    });
});