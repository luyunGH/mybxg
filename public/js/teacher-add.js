/**
 * Created by luyun on 2017/9/2.
 */
define(['jquery','template','util','datepicker','language','validate','form'],
    function($,template,util){
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
    //方法二：（有验证 表单验证插件）
    function submitForm(url){
        $('#teacherForm').validate({////validate()表单验证的方法
            sendForm : false,//阻止默认提交
            valid : function(){//所有的都验证通过调用此方法
                // console.log('ok');
                //这里应该提交表单
                 /*表单提交操作 插件*/
                    $(this).ajaxSubmit({
                        type : 'post',
                        url : url,
                        dataType : 'json',
                        success : function(data){
                            if(data.code == 200){
                                location.href = '/teacher/list';
                            }
                        }
                    });
            },
            description : {//提示信息
                tc_name : {
                    required : '请输入用户名',
                    valid : '用户名可以使用'
                },
                tc_pass : {
                     required : '请输入密码',
                     pattern : '密码必须是6位数字',
                     valid : '密码有效'
                },
                tc_join_date : {
                     required : '请输入日期',
                     valid : '日期有效',
                },
            }
        })
    }
   

    //方法一表单提交方法（无验证）
   /* function submitForm(url){
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
    }*/
});