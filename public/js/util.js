/**
 * Created by luyun on 2017/9/2.
 */
define(['jquery'],function($){
    //���ߺ���
    return {
        setMenu : function(path){
            $('.navs a[href="'+path+'"]').addClass('active');
        }
    }
})