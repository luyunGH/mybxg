define(['jquery','template','util','uploadify'],function($,template,util){
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
            //处理头像上传
            $('#upfile').uploadify({
                width : 120,
                height : 120,
                buttonText : '',
                swf : '/public/assets/uploadify/uploadify.swf',
                uploader : '/api/uploader/avatar',
                fileObjName : 'tc_avatar',
                onUploadSuccess : function(f,data){
                    var data = JSON.parse(data);
                    console.log(data);
                    $('.preview img').attr('src',data.result.path);
                }
            });
        }
    })
});