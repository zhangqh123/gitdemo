/**
 * Created by Administrator on 2016/12/10.
 */
$(function () {
    var arrCe1=$(".center .up .wz-1");
    var arrCe2=$(".center .down");
    arrCe1.click(function(){
        arrCe1.css({"background": "#000"});
        $(this).css({"background": "#283897"});
        arrCe2.css({"display": "none"});
        arrCe2.eq(arrCe1.index(this)).css({"display": "block"});
    });
    var arrLi = $(".daohang>ul>li");
    arrLi.hover(function () {
        arrLi.find("ul").stop().slideUp(100);
        $(this).find("ul").stop().slideDown(800);
        arrLi.css({"background": "", "color": ""});
        $(this).css({"background": "#1c3295", "color": "white"});
    },
    function (){
        $(this).css({"background": "", "color": ""});
        $(this).find("ul").stop().slideUp(100);
    });
    var arrImg1=$(".banner .up img");
    var arrImg2=$(".banner .down .left");
    arrImg2.click(function(){
        arrImg1.hide();
        arrImg1.eq(arrImg2.index(this)).show();
        arrImg2.css({"border":""});
        $(this).css({"border":"2px solid red"})

    })
})