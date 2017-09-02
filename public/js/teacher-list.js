/**
 * Created by luyun on 2017/9/1.
 */
//bootstrap的js插件需要依赖于jQuery，bootstrap的js文件不是标准的require.js模块,则需要做兼容处理
define(['jquery','template','bootstrap'],function($,template){
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



            $('.preview').click(function(){
                //console.log(1234);
                //获取当前ID
                var td = $(this).closest('td');//closest()选中当前标签最近的父元素
                var tcId = td.attr('data-tcId');
                //根据ID掉接口
                $.ajax({
                    type : 'get',
                    url : '/api/teacher/view',
                    data : {tc_id : tcId},
                    dataType : 'json',
                    success : function(data){
                        console.log(data);
                        //解析数据渲染模板
                        var html = template('modalTpl',data.result);
                        $('#modalInfo').html(html);
                        //显示弹框
                        $('#teacherModal').modal();
                    }
                })
            })



        }
    });
});