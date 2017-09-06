define(['jquery','template','util','ckeditor','uploadify','datepicker','language','region','validate','form','state'],
    function($,template,util,CKEDITOR){
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
            //处理文本域的富文本操作
            CKEDITOR.replace('editor'/*,{
                toolbarGroups : [
                    { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
                    { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
                    { name: 'links', groups: [ 'links' ] },
                    { name: 'insert', groups: [ 'insert' ] },
                    { name: 'forms', groups: [ 'forms' ] },
                    { name: 'tools', groups: [ 'tools' ] }
                ]
            }*/);
          // 处理表单提交
      $('#settingsForm').validate({
        sendForm : false,
        valid : function(){
          // 把富文本的数据同步到表单域中
          //CKEDITOR.instances[instance]取出来其中一个实例，
          //updateElement()是实例对象内部提供的一个方法，用来更新数据 
           for(var instance in CKEDITOR.instances){
            CKEDITOR.instances[instance].updateElement();
          }
          // 获取家乡数据
          var p = $('#p option:selected').text();
          var c = $('#c option:selected').text();
          var d = $('#d option:selected').text();
          var hometown = p + '|' + c + '|' + d;
          // 所有验证都通过，提交表单
          $(this).ajaxSubmit({
            type : 'post',
            url : '/api/teacher/modify',
            data : {tc_hometown:hometown},
            dataType : 'json',
            success : function(data){
              if(data.code == 200){
                console.log(data);
                // 刷新页面
                location.reload();
              }
            }
          });
        }
      });
        }
    })
});