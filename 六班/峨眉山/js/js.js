/**
 * Created by Administrator on 2017/2/6.
 */
$(function(){
    $(".nav li").click(function(){
        var index=$(this).index();
        $(".array").animate({"left":index*177+48+"px"})
    });
    $(".zixun_lt li").click(function(){
        var oIndex=$(this).index();
        $(".zixun_lt img").hide().eq(oIndex).show();
        $(".zixun_lt li").css({"background":"black","color":"white"});
        $(this).css({"background":"grey","color":"orange"})
    });
    var page=0;
    $(".meitu_content .rt").click(function(){
        if(page>=2){
            page=-1;
        }
        page++;
        $(".lunbo_big").stop().animate({"left":-874*page+"px"});
    });
    $(".meitu_content .lt").click(function(){
        if(page<=0){
            page=3;
        }
        page--;
        $(".lunbo_big").stop().animate({"left":-874*page+"px"});

    })
});