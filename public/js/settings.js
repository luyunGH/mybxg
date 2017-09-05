define(['jquery','template','util','uploadify','datepicker','language','region'],function($,template,util){
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
                uploader : '/api/uploader/avatar',//后台提供的地址
                fileObjName : 'tc_avatar',//图片文件的name
                onUploadSuccess : function(f,data){
                    var data = JSON.parse(data);
                    console.log(data);
                    $('.preview img').attr('src',data.result.path);
                }
            });
            //处理省市县三级联动
            $('#pcd').region({
                url : '/public/assets/jquery-region/region.json'
            })
        }
    })
});