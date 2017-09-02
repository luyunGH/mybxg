require.config({//配置别名
    baseUrl: '/public/assets',
    paths: {
        jquery: 'jquery/jquery.min',
        cookie: 'jquery-cookie/jquery.cookie',
        template: 'artTemplate/template-web',
        bootstrap : 'bootstrap/js/bootstrap.min',
        common: '../js/common',
        login: '../js/login',
        index : '../js/index',
        teacherlist : '../js/teacher-list',
        util : '../js/util'
    },
    shim : {//做兼容处理用
        bootstrap : {
            deps : ['jquery']//deps 依赖
        }
    }
});