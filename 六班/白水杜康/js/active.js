/**
 * Created by Administrator on 2016/12/28.
 */
$(function(){
    (function(){
        var oBtn=$(".active_box_btn");
        var arrActive=$(".active_one");
        var timer=0;
        oBtn.click(function(){
            var num=Math.floor(Math.random()*5+50);
            var page=0;
            var num1=0;
            if(!timer){
             timer=setInterval(function(){
                    arrActive.css({"background":"white"});
                    arrActive.eq(page).css({"background":"red"}) ;
                    page++;
                    num1++;
                    if(page>11){
                        page=0;
                    }
                 if(num==num1){
                     clearInterval(timer);
                     timer=0;
                 }
                },50)
            }
        })
    })();
});