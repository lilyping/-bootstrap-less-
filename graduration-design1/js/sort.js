

$(document).ready(function(){
    // 图书音像
        $("#All1").on('click',function(){
            $("#Bir").css('display','block');
            $("#Music").css('display','block');
            $("#cinema").css('display','block');
            $("#Bir1").css('color','#337ab7');
            $("#Music1").css('color','#337ab7');
            $("#cinema1").css('color','#337ab7');
            $(this).css('color','red');

        });
        $("#Bir1").on('click',function(){
            $("#Bir").css('display','block');
            $("#Music").css('display','none');
            $("#cinema").css('display','none');
            $("#All1").css('color','#337ab7');
            $("#Music1").css('color','#337ab7');
            $("#cinema1").css('color','#337ab7');
            $(this).css('color','red');
        });
        $("#Music1").on('click',function(){
            $("#Bir").css('display','none');
            $("#Music").css('display','block');
            $("#cinema").css('display','none');
            $("#All1").css('color','#337ab7');
            $("#Bir1").css('color','#337ab7');
            $("#cinema1").css('color','#337ab7');
            $(this).css('color','red');
        });
        $("#cinema1").on('click',function(){
            $("#Bir").css('display','none');
            $("#Music").css('display','none');
            $("#cinema").css('display','block');
            $("#All1").css('color','#337ab7');
            $("#Bir1").css('color','#337ab7');
            $("#Music1").css('color','#337ab7');
            $(this).css('color','red');
        });
    
    // 分类 #eeeeee
    $("#More").on('click',function(){
            $("#Sort").css('display','block');
            $("#girl").css('display','block');
            $("#man").css('display','block');
            $("#beauty").css('display','block');
            $("#Elect").css('display','block');
            $("#computer").css('display','block');
            $("#phone").css('display','block');
            $("#Mother").css('display','block');
            $("#Book").css('display','block');
            $("#Eat").css('display','block');
            $("#Drink").css('display','block');
            $("#Sort1").css('color','#000');
            $("#girl1").css('color','#000');
            $("#man1").css('color','#000');
            $("#beauty1").css('color','#000');
            $("#Elect1").css('color','#000');
            $("#computer1").css('color','#000');
            $("#phone1").css('color','#000');
            $("#Mother1").css('color','#000');
            $("#Book1").css('color','#000');
            $("#Eat1").css('color','#000');
            $("#Drink1").css('color','#000');
            $(this).css('color','red');
                
        });
    $("#Sort1").on('click',function(){
            $("#Sort").css('display','block');
            $("#girl").css('display','none');
            $("#man").css('display','none');
            $("#beauty").css('display','none');
            $("#Elect").css('display','none');
            $("#computer").css('display','none');
            $("#phone").css('display','none');
            $("#Mother").css('display','none');
            $("#Book").css('display','none');
            $("#Eat").css('display','none');
            $("#Drink").css('display','none');
            $("#More").css('color','#000');
            $("#girl1").css('color','#000');
            $("#man1").css('color','#000');
            $("#beauty1").css('color','#000');
            $("#Elect1").css('color','#000');
            $("#computer1").css('color','#000');
            $("#phone1").css('color','#000');
            $("#Mother1").css('color','#000');
            $("#Book1").css('color','#000');
            $("#Eat1").css('color','#000');
            $("#Drink1").css('color','#000');
            $(this).css('color','red');
        });
    $("#girl1").on('click',function(){
            $("#Sort").css('display','none');
            $("#girl").css('display','block');
            $("#man").css('display','none');
            $("#beauty").css('display','none');
            $("#Elect").css('display','none');
            $("#computer").css('display','none');
            $("#phone").css('display','none');
            $("#Mother").css('display','none');
            $("#Book").css('display','none');
            $("#Eat").css('display','none');
            $("#Drink").css('display','none');
            $("#More").css('color','#000');
            $("#Sort1").css('color','#000');
            $("#man1").css('color','#000');
            $("#beauty1").css('color','#000');
            $("#Elect1").css('color','#000');
            $("#computer1").css('color','#000');
            $("#phone1").css('color','#000');
            $("#Mother1").css('color','#000');
            $("#Book1").css('color','#000');
            $("#Eat1").css('color','#000');
            $("#Drink1").css('color','#000');
            $(this).css('color','red');
        });
     $("#man1").on('click',function(){
            $("#Sort").css('display','none');
            $("#girl").css('display','none');
            $("#man").css('display','block');
            $("#beauty").css('display','none');
            $("#Elect").css('display','none');
            $("#computer").css('display','none');
            $("#phone").css('display','none');
            $("#Mother").css('display','none');
            $("#Book").css('display','none');
            $("#Eat").css('display','none');
            $("#Drink").css('display','none');
            $("#Sort1").css('color','#000');
            $("#girl1").css('color','#000');
            $("#More").css('color','#000');
            $("#beauty1").css('color','#000');
            $("#Elect1").css('color','#000');
            $("#computer1").css('color','#000');
            $("#phone1").css('color','#000');
            $("#Mother1").css('color','#000');
            $("#Book1").css('color','#000');
            $("#Eat1").css('color','#000');
            $("#Drink1").css('color','#000');
            $(this).css('color','red');
        });
       $("#beauty1").on('click',function(){
            $("#Sort").css('display','none');
            $("#girl").css('display','none');
            $("#man").css('display','none');
            $("#beauty").css('display','block');
            $("#Elect").css('display','none');
            $("#computer").css('display','none');
            $("#phone").css('display','none');
            $("#Mother").css('display','none');
            $("#Book").css('display','none');
            $("#Eat").css('display','none');
            $("#Drink").css('display','none');
            $("#Sort1").css('color','#000');
            $("#girl1").css('color','#000');
            $("#man1").css('color','#000');
            $("#More").css('color','#000');
            $("#Elect1").css('color','#000');
            $("#computer1").css('color','#000');
            $("#phone1").css('color','#000');
            $("#Mother1").css('color','#000');
            $("#Book1").css('color','#000');
            $("#Eat1").css('color','#000');
            $("#Drink1").css('color','#000');
            $(this).css('color','red');
        });
       $("#Elect1").on('click',function(){
            $("#Sort").css('display','none');
            $("#girl").css('display','none');
            $("#man").css('display','none');
            $("#beauty").css('display','none');
            $("#Elect").css('display','block');
            $("#computer").css('display','none');
            $("#phone").css('display','none');
            $("#Mother").css('display','none');
            $("#Book").css('display','none');
            $("#Eat").css('display','none');
            $("#Drink").css('display','none');
            $("#Sort1").css('color','#000');
            $("#girl1").css('color','#000');
            $("#man1").css('color','#000');
            $("#beauty1").css('color','#000');
            $("#More").css('color','#000');
            $("#computer1").css('color','#000');
            $("#phone1").css('color','#000');
            $("#Mother1").css('color','#000');
            $("#Book1").css('color','#000');
            $("#Eat1").css('color','#000');
            $("#Drink1").css('color','#000');
            $(this).css('color','red');
        });
       $("#computer1").on('click',function(){
            $("#Sort").css('display','none');
            $("#girl").css('display','none');
            $("#man").css('display','none');
            $("#beauty").css('display','none');
            $("#Elect").css('display','none');
            $("#computer").css('display','block');
            $("#phone").css('display','none');
            $("#Mother").css('display','none');
            $("#Book").css('display','none');
            $("#Eat").css('display','none');
            $("#Drink").css('display','none');
            $("#Sort1").css('color','#000');
            $("#girl1").css('color','#000');
            $("#man1").css('color','#000');
            $("#beauty1").css('color','#000');
            $("#Elect1").css('color','#000');
            $("#More").css('color','#000');
            $("#phone1").css('color','#000');
            $("#Mother1").css('color','#000');
            $("#Book1").css('color','#000');
            $("#Eat1").css('color','#000');
            $("#Drink1").css('color','#000');
            $(this).css('color','red');
        });
       $("#phone1").on('click',function(){
            $("#Sort").css('display','none');
            $("#girl").css('display','none');
            $("#man").css('display','none');
            $("#beauty").css('display','none');
            $("#Elect").css('display','none');
            $("#computer").css('display','none');
            $("#phone").css('display','block');
            $("#Mother").css('display','none');
            $("#Book").css('display','none');
            $("#Eat").css('display','none');
            $("#Drink").css('display','none');
            $("#Sort1").css('color','#000');
            $("#girl1").css('color','#000');
            $("#man1").css('color','#000');
            $("#beauty1").css('color','#000');
            $("#Elect1").css('color','#000');
            $("#computer1").css('color','#000');
            $("#More").css('color','#000');
            $("#Mother1").css('color','#000');
            $("#Book1").css('color','#000');
            $("#Eat1").css('color','#000');
            $("#Drink1").css('color','#000');
            $(this).css('color','red');
        });
       $("#Mother1").on('click',function(){
            $("#Sort").css('display','none');
            $("#girl").css('display','none');
            $("#man").css('display','none');
            $("#beauty").css('display','none');
            $("#Elect").css('display','none');
            $("#computer").css('display','none');
            $("#phone").css('display','none');
            $("#Mother").css('display','block');
            $("#Book").css('display','none');
            $("#Eat").css('display','none');
            $("#Drink").css('display','none');
            $("#Sort1").css('color','#000');
            $("#girl1").css('color','#000');
            $("#man1").css('color','#000');
            $("#beauty1").css('color','#000');
            $("#Elect1").css('color','#000');
            $("#computer1").css('color','#000');
            $("#phone1").css('color','#000');
            $("#More").css('color','#000');
            $("#Book1").css('color','#000');
            $("#Eat1").css('color','#000');
            $("#Drink1").css('color','#000');
            $(this).css('color','red');
        });
       $("#Book1").on('click',function(){
            $("#Sort").css('display','none');
            $("#girl").css('display','none');
            $("#man").css('display','none');
            $("#beauty").css('display','none');
            $("#Elect").css('display','none');
            $("#computer").css('display','none');
            $("#phone").css('display','none');
            $("#Mother").css('display','none');
            $("#Book").css('display','block');
            $("#Eat").css('display','none');
            $("#Drink").css('display','none');
            $("#Sort1").css('color','#000');
            $("#girl1").css( 'color','#000');
            $("#man1").css('color','#000');
            $("#beauty1").css('color','#000');
            $("#Elect1").css('color','#000');
            $("#computer1").css('color','#000');
            $("#phone1").css('color','#000');
            $("#Mother1").css('color','#000');
            $("#More").css('color','#000');
            $("#Eat1").css('color','#000');
            $("#Drink1").css('color','#000');
            $(this).css('color','red');
        });
       $("#Eat1").on('click',function(){
            $("#Sort").css('display','none');
            $("#girl").css('display','none');
            $("#man").css('display','none');
            $("#beauty").css('display','none');
            $("#Elect").css('display','none');
            $("#computer").css('display','none');
            $("#phone").css('display','none');
            $("#Mother").css('display','none');
            $("#Book").css('display','none');
            $("#Eat").css('display','block');
            $("#Drink").css('display','none');
            $("#Sort1").css('color','#000');
            $("#girl1").css('color','#000');
            $("#man1").css('color','#000');
            $("#beauty1").css('color','#000');
            $("#Elect1").css('color','#000');
            $("#computer1").css('color','#000');
            $("#phone1").css('color','#000');
            $("#Mother1").css('color','#000');
            $("#Book1").css('color','#000');
            $("#More").css('color','#000');
            $("#Drink1").css('color','#000');
            $(this).css('color','red');
        });
       $("#Drink1").on('click',function(){
            $("#Sort").css('display','none');
            $("#girl").css('display','none');
            $("#man").css('display','none');
            $("#beauty").css('display','none');
            $("#Elect").css('display','none');
            $("#computer").css('display','none');
            $("#phone").css('display','none');
            $("#Mother").css('display','none');
            $("#Book").css('display','none');
            $("#Eat").css('display','none');
            $("#Drink").css('display','block');
            $("#Sort1").css('color','#000');
            $("#girl1").css('color','#000');
            $("#man1").css('color','#000');
            $("#beauty1").css('color','#000');
            $("#Elect1").css('color','#000');
            $("#computer1").css('color','#000');
            $("#phone1").css('color','#000');
            $("#Mother1").css('color','#000');
            $("#Book1").css('color','#000');
            $("#Eat1").css('color','#000');
            $("#More").css('color','#000');
            $(this).css('color','red');
        });

 
});

// function refreshSort(){
//     $('body').document('refresh');
// }


 // 滚动条
    $(window).scroll(function() {
            // 当滚动到最底部以上100像素时， 加载新内容
        if ($(this).scrollTop() >= 200) {
                $("#right").css("display","block");
            }else{
                $("#right").css("display","none");
           }
        });