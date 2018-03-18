$(document).ready(function () {
    $("#inputs").change(function () {
        var fil = this.files;
        for (var i = 0; i < fil.length; i++) {
            reads(fil[i]);
        }
        $('#file').css('display','none');
    });
    // 点击显示不同验证码
    var arr=['234s','D45g','4Js8','KD90','kj5l'];
    var i=-1;
    $('#btn').on('click',function(){
            fabs();
            if(i==arr.length-1){
                i=0;
            }
            if(i==-1){
                i=arr.length;
            }
    });
    function fabs(){
        i++;
      $('#btn').text(arr[i]);
    }
    
    
});
function reads(fil){
    var reader = new FileReader();
    reader.readAsDataURL(fil);
    reader.onload = function(){
            document.getElementById("Picture").innerHTML = "<img src='"+reader.result+"'>";

    
};
}

// 判断上传头像的类型
$('#Sub').on('click',function(){
     return checkFile();
});

function checkFile()
{


var typeValue = form3.file1.value;
var type = typeValue.substring(typeValue.lastIndexOf("\\")+1,typeValue.length);
                  type = type.substring(type.lastIndexOf(".")+1,type.length)
                  if (type.toUpperCase()=="GIF" || type.toUpperCase()=="JPG" || type.toUpperCase()=="PNG")

{

return true;
}
else
{
alert("请检查头像上传的文件类型是否正确!");
return false;
}

}

// 整个表单验证

function toVaild(){
        var val = document.getElementById("InB").value;
         var val1 = document.getElementById("Inpu").value;
         var pass1 = document.getElementById("Pass1").value;
         var pass2 = document.getElementById("Pass2").value;
        var Btn=document.getElementById("btn");
                if(val==Btn.innerHTML){
                   // alert("验证码一致"); 
               }
               else{
                   alert("验证码不一致，不进行提交");
                   return false;
               }
               if(pass1==pass2){
                   
               }
               else{
                alert("密码不一致，不进行提交");
                return false;
               }

                if(isNaN(val1)){
                   alert("输入不是数字，不进行提交");
                   return false;
               }
                
               else{
                   alert("提交成功");
                   return true;
               }
               

}

    

