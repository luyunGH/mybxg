/**
 * Created by luyun on 2017/9/2.
 */
define(['jquery','template','util'],function($,template,util){
    //设置菜单选中
    //设置添加讲师页面和编辑页面共用菜单选中
    util.setMenu('/teacher/list');
    //获取编辑的讲师ID
    var tcId = util.qs('tc_id');
    if(tcId){
        //编辑操作 （根据ID调用后台接口获取数据）
        $.ajax({
            type : 'get',
            url : '/api/teacher/edit',
            data : {
                tc_id : tcId
            },
            dataType : 'json',
            success : function(data){
                data.result.operate = '编辑讲师';//给后台返回来的数据添加一个属性
                var html = template('teacherTpl',data.result);
                $('#teacherInfo').html(html);
                submitForm('/api/teacher/update');
            }
        });
    }else{
        //添加操作
        var html = template('teacherTpl',{operate : '添加讲师',tc_gender : 1});
        $('#teacherInfo').html(html);
        //提交添加讲师表单
        submitForm('/api/teacher/add');
    }
    //提交表单共用方法
    function submitForm(url){
        $('#teacherBtn').click(function(){
            $.ajax({
                type : 'post',
                url : url,
                data : $('#teacherForm').serialize(),
                dataType : 'json',
                success : function(data){
                    console.log(data);
                    if(data.code == 200){
                        location.href = '/teacher/list';
                    }
                }
            })
        })
    }
});