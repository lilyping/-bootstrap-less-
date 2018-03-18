/**
 * Created by Administrator on 2017/2/25.
 */
(function($,win){

    function Me(){
        this.init();
    };
    Me.prototype = {
        init:function(){
            this._onClick();
            this._onchange();
        },

        _onchange:function(){
            systemParam.mediator.subscribe("refreshImgHeadCallBack",function(){

                if(systemParam.pictureUrl !="" ){
                    $("#uploadImage").attr("src",systemParam.pictureUrl);
                }else{
                    $("#uploadImage").attr("src","img/index2/user.png");
                }
                if(systemParam.userName != ""){
                    $("#username").text("用户名： "+systemParam.userName);
                    $("#loginPage").text("注销");
                }else{
                    $("#username").text("用户名： 未登录");
                    $("#loginPage").text("登录");
                }
            })
        },

        _onClick:function(){


            $("#pictureFile1").change(function () {

                var files = this.files;
                var reader = new FileReader();
                var data = new FormData();//创建FormData对象并为FormData对象添加数据

                $.each($('#pictureFile1')[0].files, function(i, file) {
                    data.append('files', file);
                });
                systemParam.uploadImgData = data;
                for (var i = 0; i < files.length; i++) {
                    reader.readAsDataURL(files[i]);
                    reader.onload = function(){
                        if(systemParam.telephone != ""){
                            $("#uploadImage").attr("src",reader.result);
                            systemParam.uploadFunction();
                            $('#pictureFile1').css('display','none');
                        }else{
                            alert("sorry,请您先登陆");
                        }
                    };
                }
            });


            //$("#loginPage").off("click").on("click",function(){

            //    if(!systemParam.loginStatus){
            //        $.get("/bbb/view/login.html",function(data){

            //            $("#topAndNav").hide();
            //            $("#bottom1").hide();
            //            $("#mainContent").empty();
            //            $("#mainContent").html(data);
            //            $("#mainContent").show();
            //            systemParam.loginStatus = true;
            //        });
            //    }else{
            //        systemParam.pictureUrl = "";
            //        systemParam.userName = "";
            //        systemParam.loginStatus = false;
            //        systemParam.mediator.publish("refreshImgHeadCallBack");
            //    }
            //});

            //$("#registerPage").off("click").on("click",function(){

            //    $.get("/bbb/view/register.html",function(data){
            //        $("#topAndNav").hide();
            //        $("#bottom1").hide();
            //        $("#mainContent").empty();
            //        $("#mainContent").html(data);
            //        $("#mainContent").show();
            //
            //    });
            //});
        },
    };
    win.me =  new Me();
    $('#myCarousel,.navbar-fixed-top').hide();
})(jQuery,window)