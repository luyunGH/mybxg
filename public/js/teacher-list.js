/**
 * Created by luyun on 2017/9/1.
 */
//bootstrap��js�����Ҫ������jQuery��bootstrap��js�ļ����Ǳ�׼��require.jsģ��,����Ҫ�����ݴ���
define(['jquery','template','bootstrap'],function($,template){
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



            $('.preview').click(function(){
                //console.log(1234);
                //��ȡ��ǰID
                var td = $(this).closest('td');//closest()ѡ�е�ǰ��ǩ����ĸ�Ԫ��
                var tcId = td.attr('data-tcId');
                //����ID���ӿ�
                $.ajax({
                    type : 'get',
                    url : '/api/teacher/view',
                    data : {tc_id : tcId},
                    dataType : 'json',
                    success : function(data){
                        console.log(data);
                        //����������Ⱦģ��
                        var html = template('modalTpl',data.result);
                        $('#modalInfo').html(html);
                        //��ʾ����
                        $('#teacherModal').modal();
                    }
                })
            })



        }
    });
});