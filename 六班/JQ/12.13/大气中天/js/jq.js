/**
 * Created by Administrator on 2016/12/13.
 */
$(function () {
    var page = 0;
    var arrImg1 = $(".div11");
    var arrImg2 = $(".banner-1 img");
    arrImg1.click(function () {
        var index = $(this).index();
        arrImg2.hide();
        arrImg2.eq(arrImg1.index(this)).show();
        arrImg1.css({"margin-top": ""});
        $(this).css({"margin-top": "-25px"});
        page = index;
    });
    $(".m2").click(function () {
        page++;
        if (page > arrImg1.length - 1) {
            page = 0;
        }
        arrImg2.hide();
        arrImg2.eq(page).show();
        arrImg1.css({"margin-top": ""});
        arrImg1.eq(page).css({"margin-top": "-25px"});
    });
    $(".m1").click(function () {
        page--;
        if (page < 0) {
            page = arrImg1.length - 1
        }
        arrImg2.hide();
        arrImg2.eq(page).show();
        arrImg1.css({"margin-top": ""});
        arrImg1.eq(page).css({"margin-top": "-25px"});
    });

    $(".system .bottom").click(function () {
        $(".system .bottom").css({"background": ""});
        $(this).css({"background": "-webkit-linear-gradient( top,#f16767,#c30705)"})
    });


    $(".ul1 li").click(function(){

        $(".ul1 li").css({"background":""})
        $(this).css({"background":"-webkit-radial-gradient(50% 50% ,#e97b08 20% ,#bc0c0f 60%)"})


    })
});