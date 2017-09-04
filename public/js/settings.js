define(['jquery','template','util'],function($,template,util){
    // console.log(1235);
    util.setMenu('/main/index');
    //调用后台接口填充表单
    $.ajax({
        url : '/api/teacher/profile',
        type : 'get',
        dataType : 'json',
        success : function(data){
            var html = template('settingsTpl',data.result);
            $('#settingsInfo').html(html);
        }
    })
});