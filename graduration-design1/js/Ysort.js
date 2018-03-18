
$(function(){
    // 滚动条
 $(window).scroll(function() {
            // 当滚动到最底部以上100像素时， 加载新内容
        if ($(this).scrollTop() >= 200) {
                $("#right").css("display","block");
            }else{
                $("#right").css("display","none");
           }
        });
 // 综合
 var off=true;
     $('#btnContentB').on('click',function(){
        
        if(off){
            $('#contentB').show();
            $(this).css('color','red').css('z-index','94');
             $('#btnContentB .caret').css('-webkit-transform','rotateX(-180deg)');
            off=false;
        }
        else{
            $('#contentB').hide();
             $(this).css('color','#000');
              $('#btnContentB .caret').css('-webkit-transform','rotateX(0deg)');
            off=true;
        }
        
     });
// 筛选
   var off1=true;
     $('#btnContentC').on('click',function(){
        
        if(off1){
            $('#contentC').show();
            $(this).css('color','red').css('z-index','95');
             $('#btnContentC .btnContentSG').css('color','red');
            off1=false;
        }
        else{
            $('#contentC').hide();
             $(this).css('color','#000');
              $('#btnContentC .btnContentSG').css('color','#000');
            off1=true;
        }
        
     });
// 品牌
 var off2=true;
 $('#btnContentB2').on('click',function(){
    if(off2){
        $('#contentC2').show();
        $(this).css('color','red').css('z-index','96');
        $('#btnContentB2 .caret').css('-webkit-transform','rotateX(-180deg)');
        off2=false;
    }
    else{
         $('#contentC2').hide();
         $(this).css('color','#000');
          $('#btnContentB2 .caret').css('-webkit-transform','rotateX(0deg)');
          off2=true;
    }
 });
 // 衣长
 var off3=true;
 $('#btnContentB2_1').on('click',function(){
    if(off3){
        $('#contentC3').show();
        $(this).css('color','red').css('z-index','97');
        $('#btnContentB2_1 .caret').css('-webkit-transform','rotateX(-180deg)');
        off3=false;
    }
    else{
         $('#contentC3').hide();
         $(this).css('color','#000');
          $('#btnContentB2_1 .caret').css('-webkit-transform','rotateX(0deg)');
          off3=true;
    }
 });
 // 厚度
 var off4=true;
 $('#btnContentB2_2').on('click',function(){
    if(off4){
        $('#contentC4').show();
        $(this).css('color','red').css('z-index','98');
        $('#btnContentB2_2 .caret').css('-webkit-transform','rotateX(-180deg)');
        off4=false;
    }
    else{
         $('#contentC4').hide();
         $(this).css('color','#000');
          $('#btnContentB2_2 .caret').css('-webkit-transform','rotateX(0deg)');
          off4=true;
    }
 });
 // 含绒量
 var off5=true;
 $('#btnContentB2_3').on('click',function(){
    if(off5){
        $('#contentC5').show();
        $(this).css('color','red').css('z-index','99');
        $('#btnContentB2_3 .caret').css('-webkit-transform','rotateX(-180deg)');
        off5=false;
    }
    else{
         $('#contentC5').hide();
         $(this).css('color','#000');
          $('#btnContentB2_3 .caret').css('-webkit-transform','rotateX(0deg)');
          off5=true;
    }
 });
    // 筛选衣服厚度
       // $('#LongClothes').on('click',function(){
       //      $('.HouClothes').css('display','block');
       //      $('.ThinClothes').css('display','none');
       // });

});


   