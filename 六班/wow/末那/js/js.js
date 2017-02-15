/**
 * Created by Administrator on 2017/2/10.
 */
$(function(){
    $(".next9").click(function(){
        $(".content_big").stop().animate({"left":"-380px"})
    });
    $(".prev9").click(function(){
        $(".content_big").stop().animate({"left":"0"})
    });
    var reg=/MSIE [6789]/;
    if(reg.test(navigator.userAgent)){
        new WOW().init()
    }
});