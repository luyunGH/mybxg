/**
 * Created by luyun on 2017/9/2.
 */
define(['jquery'],function($){
    //¹¤¾ßº¯Êý
    return {
        setMenu : function(path){
            $('.navs a[href="'+path+'"]').addClass('active');
        }
    }
})