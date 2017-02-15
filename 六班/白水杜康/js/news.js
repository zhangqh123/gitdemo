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
    })();
    (function(){
        var oFirst = $("#main_right_product_first");
        var oLast = $("#main_right_product_last");
        var oPrev = $("#main_right_product_prev");
        var oNext = $("#main_right_product_next");
        var arrMain = $(".main_news_box");
        var arrLi = $(".main_right_product_next_box ul li");
        var index = 0;
        oFirst.click(function () {
            arrMain.hide().eq(0).show();
            arrLi.css({"background": ""}).eq(0).css({"background": "#115b4a"});
            oNext.show();
            oPrev.hide();
            index = 0;
        });
        oLast.click(function () {
            arrMain.hide().eq(arrMain.length-1).show();
            arrLi.css({"background": ""}).eq(arrLi.length - 1).css({"background": "#115b4a"});
            oNext.hide();
            oPrev.show();
            index = arrLi.length - 1;
        });
        oNext.click(function () {
            index++;
            if (index >= arrLi.length - 1) {
                oNext.hide();
            }
            if (index > 0) {
                oPrev.show();
            }
            arrLi.css({"background": ""}).eq(index).css({"background": "#115b4a"});
            arrMain.hide().eq(index).show();
        });
        oPrev.click(function () {
            index--;
            if (index < arrLi.length - 1) {
                oNext.show();
            }
            if (index == 0) {
                oPrev.hide();
            }
            arrLi.css({"background": ""}).eq(index).css({"background": "#115b4a"});
            arrMain.hide().eq(index).show();
        });
        arrLi.click(function () {
            var oIndex = $(this).index();
            arrLi.css({"background": ""}).eq(oIndex).css({"background": "#115b4a"});
            arrMain.hide().eq(oIndex).show();
            if (oIndex == 0) {
                oPrev.hide();
                oNext.show();
            }
            else if (oIndex == arrLi.length - 1) {
                oNext.hide();
                oPrev.show();
            }
            else {
                oNext.show();
                oPrev.show();
            }
            index = oIndex;
        })
    })();

    (function(){
        var oFirst = $("#main_right_product_first_one");
        var oLast = $("#main_right_product_last_one");
        var oPrev = $("#main_right_product_prev_one");
        var oNext = $("#main_right_product_next_one");
        var arrMain = $(".main_news_box_one");
        var arrLi = $(".main_right_product_next_box_one ul li");
        var index = 0;
        oFirst.click(function () {
            arrMain.hide().eq(0).show();
            arrLi.css({"background": ""}).eq(0).css({"background": "#115b4a"});
            oNext.show();
            oPrev.hide();
            index = 0;
        });
        oLast.click(function () {
            arrMain.hide().eq(arrMain.length-1).show();
            arrLi.css({"background": ""}).eq(arrLi.length - 1).css({"background": "#115b4a"});
            oNext.hide();
            oPrev.show();
            index = arrLi.length - 1;
        });
        oNext.click(function () {
            index++;
            if (index >= arrLi.length - 1) {
                oNext.hide();
            }
            if (index > 0) {
                oPrev.show();
            }
            arrLi.css({"background": ""}).eq(index).css({"background": "#115b4a"});
            arrMain.hide().eq(index).show();
        });
        oPrev.click(function () {
            index--;
            if (index < arrLi.length - 1) {
                oNext.show();
            }
            if (index == 0) {
                oPrev.hide();
            }
            arrLi.css({"background": ""}).eq(index).css({"background": "#115b4a"});
            arrMain.hide().eq(index).show();
        });
        arrLi.click(function () {
            var oIndex = $(this).index();
            arrLi.css({"background": ""}).eq(oIndex).css({"background": "#115b4a"});
            arrMain.hide().eq(oIndex).show();
            if (oIndex == 0) {
                oPrev.hide();
                oNext.show();
            }
            else if (oIndex == arrLi.length - 1) {
                oNext.hide();
                oPrev.show();
            }
            else {
                oNext.show();
                oPrev.show();
            }
            index = oIndex;
        })
    })();



    (function(){
        var oFirst = $("#main_right_product_first_two");
        var oLast = $("#main_right_product_last_two");
        var oPrev = $("#main_right_product_prev_two");
        var oNext = $("#main_right_product_next_two");
        var arrMain = $(".main_news_box_two");
        var arrLi = $(".main_right_product_next_box_two ul li");
        var index = 0;
        oFirst.click(function () {
            arrMain.hide().eq(0).show();
            arrLi.css({"background": ""}).eq(0).css({"background": "#115b4a"});
            oNext.show();
            oPrev.hide();
            index = 0;
        });
        oLast.click(function () {
            arrMain.hide().eq(arrMain.length-1).show();
            arrLi.css({"background": ""}).eq(arrLi.length - 1).css({"background": "#115b4a"});
            oNext.hide();
            oPrev.show();
            index = arrLi.length - 1;
        });
        oNext.click(function () {
            index++;
            if (index >= arrLi.length - 1) {
                oNext.hide();
            }
            if (index > 0) {
                oPrev.show();
            }
            arrLi.css({"background": ""}).eq(index).css({"background": "#115b4a"});
            arrMain.hide().eq(index).show();
        });
        oPrev.click(function () {
            index--;
            if (index < arrLi.length - 1) {
                oNext.show();
            }
            if (index == 0) {
                oPrev.hide();
            }
            arrLi.css({"background": ""}).eq(index).css({"background": "#115b4a"});
            arrMain.hide().eq(index).show();
        });
        arrLi.click(function () {
            var oIndex = $(this).index();
            arrLi.css({"background": ""}).eq(oIndex).css({"background": "#115b4a"});
            arrMain.hide().eq(oIndex).show();
            if (oIndex == 0) {
                oPrev.hide();
                oNext.show();
            }
            else if (oIndex == arrLi.length - 1) {
                oNext.hide();
                oPrev.show();
            }
            else {
                oNext.show();
                oPrev.show();
            }
            index = oIndex;
        })
    })();


    (function(){
        var oFirst = $("#main_right_product_first_three");
        var oLast = $("#main_right_product_last_three");
        var oPrev = $("#main_right_product_prev_three");
        var oNext = $("#main_right_product_next_three");
        var arrMain = $(".main_news_box_three");
        var arrLi = $(".main_right_product_next_box_three ul li");
        var index = 0;
        oFirst.click(function () {
            arrMain.hide().eq(0).show();
            arrLi.css({"background": ""}).eq(0).css({"background": "#115b4a"});
            oNext.show();
            oPrev.hide();
            index = 0;
        });
        oLast.click(function () {
            arrMain.hide().eq(arrMain.length-1).show();
            arrLi.css({"background": ""}).eq(arrLi.length - 1).css({"background": "#115b4a"});
            oNext.hide();
            oPrev.show();
            index = arrLi.length - 1;
        });
        oNext.click(function () {
            index++;
            if (index >= arrLi.length - 1) {
                oNext.hide();
            }
            if (index > 0) {
                oPrev.show();
            }
            arrLi.css({"background": ""}).eq(index).css({"background": "#115b4a"});
            arrMain.hide().eq(index).show();
        });
        oPrev.click(function () {
            index--;
            if (index < arrLi.length - 1) {
                oNext.show();
            }
            if (index == 0) {
                oPrev.hide();
            }
            arrLi.css({"background": ""}).eq(index).css({"background": "#115b4a"});
            arrMain.hide().eq(index).show();
        });
        arrLi.click(function () {
            var oIndex = $(this).index();
            arrLi.css({"background": ""}).eq(oIndex).css({"background": "#115b4a"});
            arrMain.hide().eq(oIndex).show();
            if (oIndex == 0) {
                oPrev.hide();
                oNext.show();
            }
            else if (oIndex == arrLi.length - 1) {
                oNext.hide();
                oPrev.show();
            }
            else {
                oNext.show();
                oPrev.show();
            }
            index = oIndex;
        })
    })()
});