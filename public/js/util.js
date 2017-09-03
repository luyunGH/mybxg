/**
 * Created by luyun on 2017/9/2.
 */
define(['jquery'],function($){
    //工具函数
    return {
        setMenu : function(path){//设置导航菜单选中
            $('.navs a[href="'+path+'"]').addClass('active');
        },
        //获取URL地址栏参数 查询字符串 地址栏？号后面的字符串
        //location对象中方法介绍 location.pathname 获取URL路径
        //location.search获取URL路径中问号后面的路径
        //substring()截取字符 js方法
        qs : function(key){//获取指定的url参数值
            var param = location.search.substring(1);
            // uname=list&flag=123
            var result = null;
            if(param){
                var kvs = param.split('&'); //按&符号分割 分出来后是数组
                //console.log(kvs);
                $.each(kvs,function(i,item){
                   var kv = item.split('=');
                    if(key == kv[0]){
                        result = kv[1];
                        return false;//终止循环
                    }
                });
            }
            return result;
        }
    }
})