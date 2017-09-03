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
        common: '../js/common',
        login: '../js/login',
        index : '../js/index',
        teacherlist : '../js/teacher-list',
        util : '../js/util',
        teacheradd : '../js/teacher-add'
    },
    shim : {//不是标准模块时，需做兼容处理用
        bootstrap : {
            deps : ['jquery']//deps 依赖
        },
        language : {
            deps : ['jquery','datepicker']
        }
    }
});