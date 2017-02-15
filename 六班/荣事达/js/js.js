/**
 * Created by Administrator on 2017/1/9.
 */
$(function () {
    var arrLi=$(".header_ct li");
    arrLi.click(function(){
        arrLi.removeClass("now").eq($(this).index()).addClass("now")
    });
    $(".main_goon").click(function(){
        $(".main_weixiu_content1").slideDown(600);
        $(this).hide();
        $(".main_close").show();
    });
    $(".main_close").click(function(){
        $(".main_weixiu_content1").slideUp(600);
        $(this).hide();
        $(".main_goon").show();
    });
    var oBanner = $(".banner_box");
    var oBigBox = $(".banner_box .banner-box");
    var arrBox = $(".banner_box  .banner");
    var page = 1;
    var timer=0;
    oBigBox.append(arrBox.first().clone());
    oBigBox.prepend(arrBox.last().clone());
    arrBox = $(".banner_box  .banner");
    var width = oBanner.width();
    oBigBox.width(width * arrBox.size() + "px");
    arrBox.width(width + "px");
    oBigBox.css("left", -width + "px");
    $(".rt").click(next);
        function next() {
        page++;
        if (page < arrBox.size() - 1) {
            oBigBox.stop(true, true).animate({ "left": page * -width + "px" })
        } else {
            page = 1;
            oBigBox.stop(true, true).animate({ "left": (arrBox.size() - 1) * -width + "px" }, function () {
                oBigBox.css("left", -width + "px")
            })
        }
    };
    timer=setInterval(next,5000);
    oBanner.mouseover(function(){
        clearInterval(timer);
    });
    oBanner.mouseout(function(){
        timer=setInterval(next,5000);
    });
    $(".btn").mouseover(function(){
        clearInterval(timer);
    });
    $(".lt").click(function () {
        page--;
        if (page >= 1) {
            oBigBox.stop(true, true).animate({ "left": page * -width + "px" })
        } else {
            page = arrBox.size() - 2;
            oBigBox.stop(true, true).animate({ "left": "0px" }, function () {
                oBigBox.css("left", (arrBox.size() - 2) * -width + "px")
            })
        }
    })
});