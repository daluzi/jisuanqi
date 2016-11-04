function test(){
     var txt1 = document.getElementById("txt1"),
         txt2 = document.getElementById("txt2"),
         txt3 = document.getElementById("txt3"),
         opt  = document.getElementById("sel");
     txt3.value =  eval(txt1.value + opt.value + txt2.value);//eval函数可计算某个字符串，并执行其中的的js代码
}	