/**
 * Created by Administrator on 2016/12/9.
 */
$(function(){
    var arrLi=$(".ul1>li");
    arrLi.hover(function(){
        $(".ul1 li ul").stop(true,true).slideUp(0);
        $(this).find("ul").stop(true,true).slideDown(500,"easeBoth").addClass("now1");
        arrLi.removeClass("now");
        $(this).addClass("now");
    },
       function(){
               $(this).removeClass("now");
               $(".ul1 li ul").stop(true,true).slideUp(0);
       }
    );
    var arrLi1=$(".ul2 li");
    arrLi1.hover(function(){
        arrLi1.removeClass("now2");
        $(this).addClass("now2")
    },
        function(){
            $(this).removeClass("now2");
        }
    );
    var arrDiv=$(".tu .div1");
    var arrdown=$(".tu .down");
    var arrP=$(".tu .down p");
    arrDiv.click(function(){
        arrDiv.find(".down").css({"color":"grey"});
        $(this).find(".down").css({"color":"#ff7702"});
        arrDiv.find("p").css({"color":"black"});
        $(this).find("p").css({"color":"#ff7702"});
        arrDiv.find(".img1").css({"display":"none"});
        arrDiv.find(".img2").css({"display":"block"});
        $(this).find(".img2").css({"display":"none"});
        $(this).find(".img1").css({"display":"block"});
    })
});