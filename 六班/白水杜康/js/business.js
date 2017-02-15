/**
 * Created by Administrator on 2016/12/25.
 */
$(function(){
    $("#header").load("header.html");
    $("#footer").load("footer.html");
    $("#toTOP").load("toTop.html");

    (function(){
        var arrLi=$(".main_left_bottom li");
        var  arrMain=$(".main_right");
        arrLi.click(function(){
            arrLi.css({"background":"url(images/list.gif)no-repeat","color":"white"});
            $(this).css({"background":"url(images/list_hover.gif)no-repeat","color":"black"});
            arrMain.hide().eq(arrLi.index($(this))).show();
        });
        var oHash=window.location.hash.substring(1);
        arrLi.css({"background": "url(images/list.gif)no-repeat", "color": "white"});
        arrLi.eq(oHash).css({"background": "url(images/list_hover.gif)no-repeat", "color": "black"});
        arrMain.hide().eq(oHash).show();
    })();




});