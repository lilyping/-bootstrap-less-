

$(document).ready(function(){
   // var arrUrl=['img/index3/Y01.png','img/index3/Y01_2.jpg','img/index3/Y01_3.jpg','img/index3/Y01_4.jpg'];
   // var num=0;
   // function fabs(){
   //  $('.ImgProduct').src=arrUrl[num];
   // }

    $('.RedColor').on('click',function(){
        // $('.ImgProduct').src=arrUrl[num];
        $(this).css({
            'background':'red',
            'color':'#fff'
        });
        $('.ImgProduct').css('display','block');
        $('.ImgProduct2,.ImgProduct3,.ImgProduct4').css('display','none');
        $('.BlackColor,.BlueColor,.RedColor2').css({
            'background':'initial',
            'color':'initial'
        });
        $('#myModalLabel').css({
            'position':'absolute',
             'top':'60px',
             'left':'100px'
        });
    });

    $('.BlackColor').on('click',function(){
        // $('.ImgProduct').src=arrUrl[num+1];
        $(this).css({
            'background':'red',
            'color':'#fff'
        });
        $('.RedColor,.BlueColor,.RedColor2').css({
            'background':'initial',
            'color':'initial'
        });
        $('.ImgProduct2').css('display','block');
        $('.ImgProduct,.ImgProduct3,.ImgProduct4').css('display','none');
        $('#myModalLabel').css({
            'position':'absolute',
             'top':'60px',
             'left':'100px'
        });
    });

    $('.BlueColor').on('click',function(){
       // $('.ImgProduct').src=arrUrl[num+2];
        $(this).css({
            'background':'red',
            'color':'#fff'
        });
        $('.RedColor,.BlackColor,.RedColor2').css({
            'background':'initial',
            'color':'initial'
        });
        $('.ImgProduct3').css('display','block');
        $('.ImgProduct2,.ImgProduct,.ImgProduct4').css('display','none');
        $('#myModalLabel').css({
            'position':'absolute',
             'top':'60px',
             'left':'100px'
        });
    });

    $('.RedColor2').on('click',function(){
        // $('.ImgProduct').src=arrUrl[num+3];
        $(this).css({
            'background':'red',
            'color':'#fff'
        });
        $('.RedColor,.BlackColor,.BlueColor').css({
            'background':'initial',
            'color':'initial'
        });
        $('.ImgProduct4').css('display','block');
        $('.ImgProduct2,.ImgProduct3,.ImgProduct').css('display','none');
        $('#myModalLabel').css({
            'position':'absolute',
             'top':'60px',
             'left':'100px'
        });
    });
    $('.sizeS').on('click',function(){
        $(this).css({
            'background':'red',
            'color':'#fff'
        });
        $('.sizeM,.sizeL,.sizeXL').css({
            'background':'initial',
            'color':'initial'
        });
    });
      $('.sizeM').on('click',function(){
        $(this).css({
            'background':'red',
            'color':'#fff'
        });
        $('.sizeS,.sizeL,.sizeXL').css({
            'background':'initial',
            'color':'initial'
        });
    });
      $('.sizeL').on('click',function(){
        $(this).css({
            'background':'red',
            'color':'#fff'
        });
        $('.sizeM,.sizeS,.sizeXL').css({
            'background':'initial',
            'color':'initial'
        });
    });
      $('.sizeXL').on('click',function(){
        $(this).css({
            'background':'red',
            'color':'#fff'
        });
        $('.sizeM,.sizeL,.sizeS').css({
            'background':'initial',
            'color':'initial'
        });
    });

});