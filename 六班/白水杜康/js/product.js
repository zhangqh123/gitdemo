/**
 * Created by Administrator on 2016/12/23.
 */
var GLOBAL=GLOBAL||{};
$(function () {
    $("#header").load("header.html");
    $("#footer").load("footer.html");
    $("#toTOP").load("toTop.html");
    $("#box").load("3Dnav.html");
    (function () {
        var arrLi = $(".main_left_bottom li");
        var arrMain = $(".main_right_bottom_box");
        var oIndex;
        arrLi.click(function () {
            oIndex=$(this).index();
            arrLi.css({"background": "url(images/list.gif)no-repeat", "color": "white"});
            $(this).css({"background": "url(images/list_hover.gif)no-repeat", "color": "black"});
            arrMain.hide().eq(arrLi.index($(this))).show();
        });
        var aImg=$(".main_right .main_product");
        aImg.click(function(){
            index=$(this).index();
        });
        var oHash=window.location.hash.substring(1);
        arrLi.css({"background": "url(images/list.gif)no-repeat", "color": "white"});
        arrLi.eq(oHash).css({"background": "url(images/list_hover.gif)no-repeat", "color": "black"});
        arrMain.hide().eq(oHash).show();
        $(".main_right").delegate("img", "click", function (){
            if(oIndex){
                window.open("productShow.html?type=products&articleid="+(index+1)+"#"+oIndex , "_self");
            }
            else{
                window.open("productShow.html?type=products&articleid="+(index+1)+"#0", "_self");
            }
        });
    })();
    (function () {
        var oFirst = $("#main_right_product_first");
        var oLast = $("#main_right_product_last");
        var oPrev = $("#main_right_product_prev");
        var oNext = $("#main_right_product_next");
        var arrMain = $(".main_right_bottom");
        var arrLi = $(".main_right_product_next_box ul li");
        var index = 0;
        oFirst.click(function () {
            arrMain.hide().eq(0).show();
            arrLi.css({"background": ""}).eq(0).css({"background": "#115b4a"});
            oNext.css({"background":"#bbb"});
            oPrev.css({"background":"#eee"});
            index = 0;
        });
        oLast.click(function () {
            arrMain.hide().eq(arrMain.length-1).show();
            arrLi.css({"background": ""}).eq(arrLi.length - 1).css({"background": "#115b4a"});
            oNext.css({"background":"#eee"});
            oPrev.css({"background":"#bbb"});
            index = arrLi.length - 1;
        });
        oNext.click(function () {
            index++;
            if (index >= arrLi.length - 1) {
                oNext.css({"background":"#eee"});
                index=arrLi.length-1;
            }
            if (index > 0) {
                oPrev.css({"background":"#bbb"});
            }
            arrLi.css({"background": ""}).eq(index).css({"background": "#115b4a"});
            arrMain.hide().eq(index).show();
        });
        oPrev.click(function () {
            index--;
            if (index < arrLi.length - 1) {
                oNext.css({"background":"#bbb"});
            }
            if (index <= 0) {
                oPrev.css({"background":"#eee"});
                index=0;
            }
            arrLi.css({"background": ""}).eq(index).css({"background": "#115b4a"});
            arrMain.hide().eq(index).show();
        });
        arrLi.click(function () {
            var oIndex = $(this).index();
            arrLi.css({"background": ""}).eq(oIndex).css({"background": "#115b4a"});
            arrMain.hide().eq(oIndex).show();
            if (oIndex == 0) {
                oPrev.css({"background":"#eee"});
                oNext.css({"background":"#bbb"});
            }
            else if (oIndex == arrLi.length - 1) {
                oNext.css({"background":"#eee"});
                oPrev.css({"background":"#bbb"});
            }
            else {
                oNext.css({"background":"#bbb"});
                oPrev.css({"background":"#bbb"});
            }
            index = oIndex;
        })
    })();
    (function () {
        var oFirst = $("#main_right_product_first_one");
        var oLast = $("#main_right_product_last_one");
        var oPrev = $("#main_right_product_prev_one");
        var oNext = $("#main_right_product_next_one");
        var arrMain = $(".main_right_bottom_one");
        var arrLi = $(".main_right_product_next_box_one ul li");
        var index = 0;
        oFirst.click(function () {
            arrMain.hide().eq(0).show();
            arrLi.css({"background": ""}).eq(0).css({"background": "#115b4a"});
            oNext.css({"background":"#bbb"});
            oPrev.css({"background":"#eee"});
            index = 0;
        });
        oLast.click(function () {
            arrMain.hide().eq(arrMain.length-1).show();
            arrLi.css({"background": ""}).eq(arrLi.length - 1).css({"background": "#115b4a"});
            oNext.css({"background":"#eee"});
            oPrev.css({"background":"#bbb"});
            index = arrLi.length - 1;
        });
        oNext.click(function () {
            index++;
            if (index >= arrLi.length - 1) {
                oNext.css({"background":"#eee"});
                index=arrLi.length-1;
            }
            if (index > 0) {
                oPrev.css({"background":"#bbb"});
            }
            arrLi.css({"background": ""}).eq(index).css({"background": "#115b4a"});
            arrMain.hide().eq(index).show();
        });
        oPrev.click(function () {
            index--;
            if (index < arrLi.length - 1) {
                oNext.css({"background":"#bbb"});
            }
            if (index == 0) {
                oPrev.css({"background":"#eee"});
                index=0;
            }
            arrLi.css({"background": ""}).eq(index).css({"background": "#115b4a"});
            arrMain.hide().eq(index).show();
        });
        arrLi.click(function () {
            var oIndex = $(this).index();
            arrLi.css({"background": ""}).eq(oIndex).css({"background": "#115b4a"});
            arrMain.hide().eq(oIndex).show();
            if (oIndex == 0) {
                oPrev.css({"background":"#eee"});
                oNext.css({"background":"#bbb"});
            }
            else if (oIndex == arrLi.length - 1) {
                oNext.css({"background":"#eee"});
                oPrev.css({"background":"#bbb"});
            }
            else {
                oNext.css({"background":"#bbb"});
                oPrev.css({"background":"#bbb"});
            }
            index = oIndex;
        })
    })();
    (function(){
        var arrLunbo=$(".banner_box .banner_box_lunbo");
        var arrLunbobox=$(".banner_box");
        var page=0;
        function next(){
            arrLunbobox.eq(page).find(".banner_box_lunbo").each(function(i){
                var _this=$(this);
                setTimeout(function(){
                    _this.hide();
                },200*(i+1))
            });
            page++;
            if(page>arrLunbobox.length-1){
                page=0;
            }
            arrLunbobox.eq(page).find(".banner_box_lunbo").show();
        }
        setInterval(next,5000);
    })();
    (function(){
        var arrLi=$(".box li");
        var oBtnl=$("#btnl");
        var oBtnr=$("#btnr");
        var page = 0;
        var timer=0;
        var isRunning=false;
        arrLi.each(function (i) {
            var _this = $(this);
            _this.css({"transitionDelay":0.1*i+"s"})
        });
        oBtnr.click(next);
        function next(){
            if(isRunning){
                return;
            }
            isRunning=true;
            setTimeout(function(){
                isRunning=false;
            },2000);
            page++;
            arrLi.css({"transform":"rotateX("+(page*90)+"deg)"})
        };
        oBtnl.click(function(){
            if(isRunning){
                return;
            }
            isRunning=true;
            setTimeout(function(){
                isRunning=false;
            },2000);
            page--;
            arrLi.css({"transform":"rotateX("+(page*90)+"deg)"})
        });
        if(!timer){
            timer=setInterval(next,5000);
        }
        $(".box").mouseover(function(){
            clearInterval(timer);
            timer=0;
            oBtnr.show();
            oBtnl.show();
        });
        $(".box").mouseout(function(){
            timer=setInterval(next,5000);
            oBtnr.hide();
            oBtnl.hide();
        });
        arrLi.css({"transform":"rotateX("+(page*90)+"deg)"})
    })();

});