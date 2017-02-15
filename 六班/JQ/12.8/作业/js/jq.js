/**
 * Created by Administrator on 2016/12/8.
 */
$(function(){
    var oBig =   $(".big-banner");
    var page=1;
    var timer=0;
    var oCir=$("#cir");
      var next= function(){
        page++;
        if(page<oBig.find("img").size()-1){
            oBig.stop(true,true).animate({
                "left":page*-1280+"px"
            });
        }else{
            page=1;
            oBig.stop(true,true).animate({
                "left":(oBig.find("img").size()-1)*-1280+"px"
            },function(){
                oBig.css({"left":"-1280px"})
            })
        }
        oCir.find("span").siblings().css({"backgroundColor":"grey"});
        oCir.find("span").eq(page-1).css({"backgroundColor":"red"});
    };
    $(".next").click(next);
    timer=setInterval(next,3000);
    $(".banner").mouseover(function(){
        clearInterval(timer);
    });
    $(".banner").mouseout(function(){
        timer=setInterval(next,3000);
    });
    $(".prev").click(function(){
        page--;
        if(page>=1){
            oBig.stop(true,true).animate({
                "left":page*-1280+"px"
            });
        }else{
            page=oBig.find("img").size()-2;
            oBig.stop(true,true).animate({
                "left":"0px"
            },function(){
                oBig.css({"left":(oBig.find("img").size()-2)*-1280+"px"})
            });
        }
        oCir.find("span").siblings().css({"backgroundColor":"grey"});
        oCir.find("span").eq(page-1).css({"backgroundColor":"red"});
    });

    $("#cir span").click(function(){

        var index=$(this).index();
        $(this).siblings().css({"backgroundColor":"grey"});
        $(this).css({"backgroundColor":"red"});
        oBig.css({"left":(index+1)*-1280+"px"});
        page=index+1;

    })




    $("#ul1 li").click(function(){
        $(".divp").hide();
        $(".divp").eq($("#ul1 li").index(this)).show();
        $("#ul1 li").css({"backgroundColor":"#bdd6f2"});
        $(this).css("backgroundColor","#eef7ff");
    });
    var firstwidth=$("#ull1 li:first").width();
    $("#ull1 .div2").css("width",firstwidth);
   $("#ull1 li").hover(function(){
       var width=$(this).width();
       var position=$(this).position().left;
       $(".move").stop().animate({"left":position+10+"px","width":width+"px"},"fast");
   },
       function (){
           var cwid=$(".click").width();
           var cleft=$(".click").position().left;
           $(".move").stop().animate({"left":cleft+10+"px","width":cwid+"px"},"fast");
       }
    );
    $("#ull1 li").click(function(){
        var width = $(this).width();
        var left = $(this).position().left;
        $(".click").css({"left":left+10+"px","width":width})
    });


    var oImg1=$("#img1");
    var oImg2=$("#img2");
    var arrImg1=$(".big-lb img");
    var oBiglb=$(".big-lb");
    var page4=0;
    oImg2.click(function(){
        if(page4<arrImg1.size()-1){
            page4++
        }
        move();
    });
    oImg1.click(function(){
        if(page4>0){
            page4--
        }
        move();
    });

    arrImg1.click(function(){
        page4=$(this).index();
        move();
    });
   /* function move(){
         if(page4==arrImg1.length-1||page==arrImg1.length-2||page==arrImg1.length-3||page==arrImg1.length-4){
            var left=(arrImg1.length-4)*-60;
            oBiglb.stop(true).animate({"left":left});
        }
        else{
            var left=(page4)*-60;
            oBiglb.stop(true).animate({"left":left});
        }

    }*/



    function move(){
        arrImg1.removeClass("active").eq(page4).addClass("active");

        if(page4==0){
            oBiglb.stop(true).animate({"left":"0px"});
        }
        else if(page4==arrImg1.length-1||page==arrImg1.length-2){
            var left=(arrImg1.length-4)*-60;
            oBiglb.stop(true).animate({"left":left});
        }
        else{
            var left=(page4-1)*-60;
           oBiglb.stop(true).animate({"left":left});
        }

    }




});
