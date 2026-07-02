const fs = require("fs");
fs.readdir("page",{withFileTypes:true},(err,files) => {
    if(err){
        console.log(err);
        return;
    }
    files.map((file)=>{
        console.log(file,file.name);
        console.log(file.isFile()) // 判断是否为文件
        console.log(file.isDirectory()) // 判断是否为目录
        console.log(file.isSymbolicLink()) // 判断是否为符号链接
        console.log(file.isBlockDevice()) // 判断是否为块设备
        console.log(file.isCharacterDevice()) // 判断是否为字符设备
        console.log(file.isFIFO()) // 判断是否为 FIFO/管道
        console.log(file.isSocket()) // 判断是否为 Socket
    })
    
});