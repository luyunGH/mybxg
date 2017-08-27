<?php 
    $dir = 'main';
    $filename = 'index';
    //$_SERVER  全局变量,这是一个数组
    //PATH_INFO 表示路径
    // var_dump($_SERVER)
    //判断数组中是否包含指定的属性
    if(array_key_exists('PATH_INFO', $_SERVER)){
        $path = $_SERVER['PATH_INFO'];//获取URL中的路径 /main/index
        $str = substr($path,1);// main/index
        $arr = explode('/',$str);//分割路径和文件名称
        //统计数据
        if(count($arr) == 2){
            $dir = $arr[0];//覆盖目录名称
            $filename = $arr[1];//覆盖文件名称
        }else{
            $filename = 'login';
        }
        // echo $path;
    }
    //在当前页码嵌入一个子页面
    include('./views/'.$dir.'/'.$filename.'.html');
?>