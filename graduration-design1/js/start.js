/* 
* @Author: anchen
* @Date:   2017-01-17 10:13:19
* @Last Modified by:   anchen
* @Last Modified time: 2017-02-15 15:21:48
*/

$(document).ready(function(){
   $('#myCarousel').carousel({
    interval:2000,
    pause:'hover'
   });
    $('#myCarouse2').carousel({
    interval:1000,
    pause:'hover'
   });
    // 滚动条
    $(window).scroll(function() {
            // 当滚动到最底部以上100像素时， 加载新内容
            if ($(this).scrollTop() >= 100) {
                $("nav .container-fluid").css("background","#000").css("opacity","0.6");
            }else{
                $("nav .container-fluid").css("background","none").css("opacity","1");
           }
           if ($(this).scrollTop() >= 400) {
                $("nav #adverImg").css("display","block").css('background','#0f2d7a').css('opacity','0.9');
            }else{
                $("nav #adverImg").css("display","none");
           }

            if ($(this).scrollTop() >= 200) {
                $("#right").css("display","block");
            }else{
                $("#right").css("display","none");
           }
        });

    $(window).scroll(function() {
            // 当滚动到最底部以上100像素时， 加载新内容
            
            if ($(this).scrollTop() >= 10) {
                $("#bottom1 .container-fluid").css("background","#ccc").css("opacity","0.8");
                $('.startP').css('color','#f65bba');
            }else{
                $("#bottom1 .container-fluid").css("background","#f45454").css("opacity","1");
                $('.startP').css('color','#fff');
           }
           
        });
        
// 秒杀
function RedAndGreen(p){
    this.node = typeof p.node == "string" ? document.getElementById(p.node) : p.node;
    this.num = p.num;
    this.tpl = '<s class="dot dot1"></s><s class="dot dot2"></s><s class="dot dot3"></s><s class="dot dot4"></s><s class="dot dot5"></s><s class="dot dot6"></s><s class="dot dot7"></s><s class="dot dot8"></s><s class="dot dot9"></s><s class="dot dot10"></s><s class="dot dot11"></s><s class="dot dot12"></s><s class="dot dot13"></s><s class="dot dot14"></s><s class="dot dot15"></s><s class="dot dot16"></s><s class="dot dot17"></s><s class="dot dot18"></s><s class="dot dot19"></s><s class="dot dot20"></s>';
    this.rect = {
        0:[0,1,2,3,4,5,6,7,8,11,12,13,14,15,16,17,18,19],
        1:[3,5,7,11,13,15,19],
        2:[0,1,2,3,5,7,8,9,10,11,12,14,16,17,18,19],
        3:[0,1,2,3,5,7,8,9,10,11,13,15,16,17,18,19],
        4:[0,3,4,5,6,7,8,9,10,11,13,15,19],
        5:[0,1,2,3,4,6,8,9,10,11,13,15,16,17,18,19],
        6:[0,1,2,3,4,6,8,9,10,11,12,13,14,15,16,17,18,19],
        7:[0,1,2,3,5,7,11,13,15,19],
        8:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
        9:[0,1,2,3,4,5,6,7,8,9,10,11,13,15,16,17,18,19]
    };
    this.init();
}
RedAndGreen.prototype = {
    _zs:[],
    _t:null,
    addClass:function(node,cls){
        var reg = new RegExp("(^|\\s+)" + cls + "(\\s+|$)","g");
        if(reg.test(node.className)){
            reg.lastIndex = 0;
        }else{
            node.className += " " + cls;
            reg.lastIndex = 0;
        }
    },
    removeClass:function(node,cls){
        var reg = new RegExp("(^|\\s+)" + cls + "(\\s+|$)","g");
        var ncls = node.className;
        if(reg.test(ncls)){
            node.className = ncls.replace(cls,"").replace(/\s+/g," ").replace(/(^\s*)|(\s*$)/g,"");
            reg.lastIndex = 0;
        }else{
            reg.lastIndex = 0;
        }
    },
    getByClass:function(cls,p){
        var _this = this,arr = [],reg = new RegExp("(^|\\s+)" + cls + "(\\s+|$)","g");
        var nodes = p.getElementsByTagName("*"),len = nodes.length;
        for(var i = 0; i < len; i++){
            if(reg.test(nodes[i].className)){
                arr.push(nodes[i]);
                reg.lastIndex = 0;
            }
        }
        return arr;
    },
    each:function(arr,func){
        var len = arr.length;
        for(var i = 0; i < len; i++){
            func(arr[i]);
        }
    },
    createNumber:function(){
        var _this = this,dots = [];
        for(var i = 0; i < 3; i++){
            var newNode = document.createElement("div");
            newNode.className = "zero";
            newNode.innerHTML = _this.tpl;
            _this.node.appendChild(newNode);
        }
        _this._zs = _this.getByClass("zero",_this.node);
        _this.each(_this._zs,function(a){
            //a.style.width = (1 / 3 * 100).toFixed(2) + "%";//可根据实际情况改成动态计算的
            //a.style.marginLeft = "3%";
            //a.style.width = "30%";
            a.style.height = _this.node.clientHeight + "px";
        });
        dots = _this.getByClass("dot",_this.node);
        _this.each(dots,function(a){
            var _h = Math.floor(a.parentNode.offsetHeight / 8);
            var _bdrz = a.offsetWidth / 2;
            var _reg = /dot(\d{1,2})/g;
            var _f = _reg.test(a.className);
            var _one = RegExp.$1;
            a.style.height = _h + "px";
            a.style.borderRadius = _bdrz + "px";
            if(_f && _one < 5){
                a.style.left = (parseInt(_one) - 1) * a.offsetWidth + "px";
                a.style.top = 0;
                _reg.lastIndex = 0;
            }else if(_f && _one == 5){
                a.style.left = 0;
                a.style.top = _h + "px";
                _reg.lastIndex = 0;
            }else if(_f && _one == 6){
                a.style.left = "75%";
                a.style.top = _h + "px";
                _reg.lastIndex = 0;
            }else if(_f && _one == 7){
                a.style.left = 0;
                a.style.top = 2 * _h + "px";
                _reg.lastIndex = 0;
            }else if(_f && _one == 8){
                a.style.left = "75%";
                a.style.top = 2 * _h + "px";
                _reg.lastIndex = 0;
            }else if(_f && _one > 8 && _one < 13){
                a.style.left = (parseInt(_one) - 9) * a.offsetWidth + "px";
                a.style.top = 3 * _h + "px";
                _reg.lastIndex = 0;
            }else if(_f && _one == 13){
                a.style.left = 0;
                a.style.top = 4 * _h + "px";
                _reg.lastIndex = 0;
            }else if(_f && _one == 14){
                a.style.left = "75%";
                a.style.top = 4 * _h + "px";
                _reg.lastIndex = 0;
            }else if(_f && _one == 15){
                a.style.left = 0;
                a.style.top = 5 * _h + "px";
                _reg.lastIndex = 0;
            }else if(_f && _one == 16){
                a.style.left = "75%";
                a.style.top = 5 * _h + "px";
                _reg.lastIndex = 0;
            }else if(_f && _one > 16 && _one < 21){
                a.style.left = (parseInt(_one) - 17) * a.offsetWidth + "px";
                a.style.top = 6 * _h + "px";
                _reg.lastIndex = 0;
            }
        });
    },
    lightNumber:function(index,n){
        var _this = this,dots = _this.getByClass("dot",_this._zs[index]),dl = dots.length,len = _this.rect[n].length;
        for(var i = 0; i < dl; i++){
            _this.removeClass(dots[i],"sel");
        }
        for(var i = 0; i < len; i++){
            _this.addClass(dots[_this.rect[n][i]],"sel");
        }
    },
    showNumber:function(mynum){
        var _this = this,ns = [];
        var number = mynum.toString();
        for(; number.length < 3;){
            number = "0" + number;
        }
        ns = number.split("");
        for(var i = 0; i < ns.length; i++){
            _this.lightNumber(i,ns[i]);
        }
    },
    init:function(){
        var _this = this,num = _this.num;
        _this.createNumber();
        _this.showNumber(num);
        _this._t = setInterval(function(){
            if(num > 0){
                _this.showNumber(--num);
            }else{
                clearInterval(_this._t);
            }
        },1000);
    }
};
new RedAndGreen({"node":"redandgreen","num":59});


});

// 轮播触屏
var myElement= document.getElementById('myCarousel')
var hm=new Hammer(myElement);
hm.on("swipeleft",function(){
    $('#myCarousel').carousel('next')});
hm.on("swiperight",function(){
    $('#myCarousel').carousel('prev')});

