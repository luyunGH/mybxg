require.config({//配置别名
    baseUrl: '/public/assets',
    paths: {
        jquery: 'jquery/jquery.min',
        cookie: 'jquery-cookie/jquery.cookie',
        template: 'artTemplate/template-web',
        bootstrap : 'bootstrap/js/bootstrap.min',
        datepicker : 'bootstrap-datepicker/js/bootstrap-datepicker.min',//引入日期选择插件 datepicker 实际上是jQuery插件 是标准的模块
        language : 'bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',//日期选择插件支持的语言种类插件  language 也是jQuery插件
        // 此模块依赖jQuery插件 还依赖datepicker 不是标准的模块
        validate : 'validate/jquery-validate.min',//表单验证插件
        form : 'jquery-form/jquery.form',//表单提交插件
        uploadify : 'uploadify/jquery.uploadify.min', //文件上传插件
        common: '../js/common',
        login: '../js/login',
        index : '../js/index',
        teacherlist : '../js/teacher-list',
        util : '../js/util',
        teacheradd : '../js/teacher-add',
        settings : '../js/settings'
    },
    //判断是不是标准模块看插件中是否定义define模块
    shim : {//不是标准模块时，需做兼容处理用
        bootstrap : {
            deps : ['jquery']//deps为数组 表示依赖的库，exports表示输出的对象名
        },
        language : {
            deps : ['jquery','datepicker']
        },
        validate : {
            deps : ['jquery']
        },
        uploadify : {
            deps : ['jquery']
        }
    }
});