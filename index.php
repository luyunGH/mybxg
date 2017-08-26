<?php 
    //$_SERVER  全局变量,这是一个数组
    //PATH_INFO 表示路径
    // var_dump($_SERVER)
    //判断数组中是否包含指定的属性
    if(array_key_exists('PATH_INFO', $_SERVER)){
        $path = $_SERVER['PATH_INFO'];
        echo $path;
    }
    //在当前页码嵌入一个子页面
    include('views/'.$path.'.html');
?>