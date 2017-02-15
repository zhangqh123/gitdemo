/**
 * Created by Administrator on 2016/12/21.
 */
$(function(){
    (function(){
        var timer=0;
        $("#i1").mouseover(function(){
            $(".fenxiang").show();
        });
        $("#i1").mouseout(function(){
            timer=setTimeout(function(){
                $(".fenxiang").hide();
            },500)
        });
        $(".fenxiang").mouseover(function(){
            clearTimeout(timer);
            $(this).show();
        });
        $(".fenxiang").mouseout(function(){
            $(this).hide();
        });
        var oBtn=$(".fenxiang_bottom p");
        oBtn.click(function(){
            $("#fixed").show();
        });
        var oClose=$(".fixed_fenxiang img");
        oClose.click(function(){
            $("#fixed").hide();
        });
        var oWeixin1=$(".fixed_weixin");
        var oClose1=$(".fixed_weixin span");
        var oWeixin=$("#weixin");
        oWeixin.click(function(){
            oWeixin1.show();
        });
        oClose1.click(function(){
            oWeixin1.hide();
        })
    })();

});