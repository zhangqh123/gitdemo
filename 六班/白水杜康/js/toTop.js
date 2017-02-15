/**
 * Created by Administrator on 2016/12/27.
 */
$(function () {
    var oToTop = $(".toTop");
    var timer = 0;
    $(window).scroll(function () {
        var scrollTop = $(document).scrollTop();
        if (scrollTop > 200) {
            oToTop.fadeIn(800);
        }
        else{
            oToTop.fadeOut(400)
        }
        if(scrollTop==0){
            clearInterval(timer);
            timer=0;
            oToTop.fadeOut(400);
        }
    });
    oToTop.click(function () {
        if (!timer) {
           timer=setInterval(function () {
                var scrollTop = $(document).scrollTop();
                scrollTop -= 10;
                $(document).scrollTop(scrollTop);
            }, 10)
        }
    })

});