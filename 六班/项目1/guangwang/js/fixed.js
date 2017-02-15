/**
 * Created by Administrator on 2016/12/19.
 */
$(function(){
    var oFixed=$(".fixed-box");
    var oTop=$(".scrollTop-box");
    var timer=0;
   $(window).scroll(function(){
       var scrollTop=$(document).scrollTop();
        if(scrollTop>200){
            oFixed.show();
        }
       if(scrollTop==0){
           clearInterval(timer);
           timer=0;
           oFixed.hide();
       }
   });
   oTop.click(function(){
       if(!timer){
           timer=setInterval(function(){
               var scrollTop1=$(document).scrollTop();
               scrollTop1-=20;
               $(document).scrollTop(scrollTop1)
           },10);
       }
   })
});