/**
 * Created by luyun on 2017/9/2.
 */
define(['jquery'],function($){
    //���ߺ���
    return {
        setMenu : function(path){//���õ����˵�ѡ��
            $('.navs a[href="'+path+'"]').addClass('active');
        },
        //��ȡURL��ַ������ ��ѯ�ַ��� ��ַ�����ź�����ַ���
        //location�����з������� location.pathname ��ȡURL·��
        //location.search��ȡURL·�����ʺź����·��
        //substring()��ȡ�ַ� js����
        qs : function(key){//��ȡָ����url����ֵ
            var param = location.search.substring(1);
            // uname=list&flag=123
            var result = null;
            if(param){
                var kvs = param.split('&'); //��&���ŷָ� �ֳ�����������
                //console.log(kvs);
                $.each(kvs,function(i,item){
                   var kv = item.split('=');
                    if(key == kv[0]){
                        result = kv[1];
                        return false;//��ֹѭ��
                    }
                });
            }
            return result;
        }
    }
})