/**
 * Created by luyun on 2017/9/1.
 */
define(['jquery','template'],function($,template){
    //console.log('12345');
    //���ú�̨�ӿڻ�ȡ�б�����
    $.ajax({
        url : '/api/teacher',
        type : 'get',
        dataType : 'json',
        success : function(data){
            //console.log(data);
            //����������Ⱦҳ��
            var html = template('teacherTpl',{list : data.result});
            $('#teacherInfo').html(html);
        }
    });
});