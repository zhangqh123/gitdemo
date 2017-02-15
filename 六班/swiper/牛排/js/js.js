/**
 * Created by Administrator on 2017/2/13.
 */
$(function(){
    $(".nav li").click(function(){
        $(".nav li").removeClass("now");
        $(this).addClass("now")
    });
    $(".ingredients_box li").click(function(){
        $(".ingredients_box li").removeClass("now1");
        $(this).addClass("now1")
    })
});