<?php
error_reporting(E_ALL);
ini_set("display_errors",1);    //显示报错信息

$counter_dir = "counter_page/";//统计数据存放目录
$id = trim(strip_tags($_GET['id']));//获取文章文件名称
$id = basename(str_replace('/','_',$id),".md");    //id处理

$filename = "{$counter_dir}{$id}.txt";//文章统计实际文件路径
echo "console.log('filename {$filename}');";
if(!is_dir($counter_dir)){
    try{
        mkdir($counter_dir,0777,true);//检查统计器目录，不存在则创建
    }catch(Exception $e){
        echo $e->getMessage();
    }
    //echo "document.write('file is null');";
}
if(!file_exists($filename)){
    //如果统计文件不存在，那么说明这个文档第一次被访问
    $counter = 0;
}else{
    $counter = intval(file_get_contents($filename));//读取访问次数
}

$counter += 1;//访问数据+1

echo "console.log({$counter});";
file_put_contents($filename,$counter);//写入统计数据
echo "var counter = {$counter};";  //复制到html文件中
?>
