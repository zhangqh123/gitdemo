/**
 * Created by Administrator on 2016/12/21.
 */
$(function(){
    var oBox=$(".content_left");
    oBox.stop().animate({"width":"490px"},1000);
    setInterval(function(){
        oBox.css({"width":"0px"});
        oBox.stop().animate({"width":"490px"},1000)
    },5000);

});