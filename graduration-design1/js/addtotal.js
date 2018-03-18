

window.onload=function(){
    var oBtn1_1=document.getElementById('btn1_1');
    var oBtn1_2=document.getElementById('btn1_2');
    var oNum1_1=document.getElementById('number1_1');
    var oNum1_3=document.getElementById('number1_3'); 
    var oProductnum1=document.getElementById('productnum1');
    var oProductnum2=document.getElementById('productnum2');
    var oTotal=document.getElementById('total1');
    var oNum1_2=document.getElementById('number1_2');
    var num1=0; 
    var temp='';
    var index;
    var  oSure=document.getElementById('modal_sure');
    var  oShop=document.getElementById('shoppingD');
    var  oShopS=document.getElementById('shoppingS');
    var oInfo=document.getElementById('infoDeal');
    oNum1_2=188;
    

    
    function fn6(){
        oProductnum1.innerHTML=num1;
    oProductnum2.innerHTML=188*num1;
    }
   function fn1(){
    oNum1_3.innerHTML=188*num1;
    oNum1_1.value=num1;
    fn6();
   }
   fn1();
   
    oBtn1_2.onclick=function(){
           num1++;
           if(num1==100){
            num1=99;
           }
            fn1();
            if(temp<oNum1_2)
            {
                index=temp;
                temp=oNum1_2;
                oNum1_2=index;
            }
    };
    
    oBtn1_1.onclick=function(){
        num1--;
         if(num1==-1){
            num1=0;
         }
         fn1();
         if(temp<oNum1_2)
            {
                index=temp;
                temp=oNum1_2;
                oNum1_2=index;
            }

    };
    oNum1_1.onclick=function(){
        num1=Number(oNum1_1.value);
        if(num1==100){
            num1=99;
            alert('不能超过99');
        }
        oNum1_3.innerHTML=num1*188;
        fn6();
        if(temp<oNum1_2)
            {
                index=temp;
                temp=oNum1_2;
                oNum1_2=index;
            }

    };

    oSure.onclick=function(){
        alert('购买成功');
        oShop.style.display='none';
        oShopS.style.display='block';
        oInfo.style.display='block';
    };

    
    
};

