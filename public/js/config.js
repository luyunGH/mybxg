require.config({//配置别名
    baseUrl: '/public/assets',
    paths: {
        jquery: 'jquery/jquery.min',
        cookie: 'jquery-cookie/jquery.cookie',
        template: 'artTemplate/template-web',
        bootstrap : 'bootstrap/js/bootstrap.min',
        common: '../js/common',
        login: '../js/login',
        teacherlist : '../js/teacher-list'
    },
    shim : {//做兼容处理用
        bootstrap : {
            deps : ['jquery']//deps 依赖
        }
    }
});