

$(document).ready(function(){
    $('#collapseOne').collapse({
        parent:"#accordion",
        toggle:true,
    });
});


// 滚动条
    $(window).scroll(function() {
            // 当滚动到最底部以上100像素时， 加载新内容
        if ($(this).scrollTop() >= 200) {
                $("#right").css("display","block");
            }else{
                $("#right").css("display","none");
           }
        });
