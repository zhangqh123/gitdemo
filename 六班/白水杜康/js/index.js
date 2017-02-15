/**
 * Created by Administrator on 2016/12/21.
 */
$(function () {
    $("#header").load("header.html");
    $("#footer").load("footer.html");
    $("#toTOP").load("toTop.html");
    (function () {
        var oPrev = $(".prev_1");
        var oNext = $(".next_1");
        var arrPicture = $(".banner_picture");
        var index = 0;
        var timer = 0;
        var height = arrPicture.height();
        $(".banner_box").height(height);
        oPrev.click(function () {
            index--;
            if (index < 0) {
                index = arrPicture.length - 1;
            }
            arrPicture.fadeOut(100).eq(index).fadeIn(600);
        });
        oNext.click(next);
        function next() {
            index++;
            if (index > arrPicture.length - 1) {
                index = 0;
            }
            arrPicture.fadeOut(100).eq(index).fadeIn(600);
        }

        if (timer == 0) {
            timer = setInterval(next, 3000)
        }
        $(".banner_box").mouseover(function () {
            clearInterval(timer);
        });
        $(".banner_box").mouseout(function () {

            timer = setInterval(next, 3000)
        })
    })();
    (function () {
        var oPrev = $(".banner_search_lt");
        var oNext = $(".banner_search_center");
        var arrLi = $(".banner_search_content li");
        var index = 0;
        oPrev.click(function () {
            index--;
            if (index < 0) {
                index = arrLi.length - 1;
            }
            arrLi.hide().eq(index).show();
        });
        oNext.click(next);
        function next() {
            index++;
            if (index > arrLi.length - 1) {
                index = 0;
            }
            arrLi.hide().eq(index).show();
        }
        setInterval(next, 5000)
    })();
    (function () {
        $(window).scroll(function () {
            var top = $(document).scrollTop();
            if (top > 300) {
                $(".main_content_one").each(function (i) {
                    var _this = $(this);
                    setTimeout(function () {
                        _this.show().addClass("animated rollIn")
                    }, 200 * (i + 1))
                });
            }
            if (top > 2500) {
                $(".gaoduan_picture").each(function(i){
                    var _this=$(this);
                    setTimeout(function(){
                        _this.show().addClass("animated bounceInRight")
                    },200*(i+1))
                });

            }
        });
    })();
    (function () {
        var oNext=$(".lunbo_rt");
        var oPrev=$(".lunbo_lt");
        var oBig = $(".lunbo_big_box");
        var arrImg = $(".lunbo_big_box img");
        var oBox=$(".lunbo_box");
        var speed=0;
        var timer=0;
        var timer1=0;
        var num;
        arrImg.clone().appendTo(oBig);
        var arrImg1=oBig.find("img");
            timer=setInterval(next,10);
        oBox.mouseover(function(){
            clearInterval(timer);
            timer=0;
            num=1;
        });
        oNext.click(function(){
            clearInterval(timer);
            timer=0;
            if(!timer){
                timer= setInterval(next,10);
            }
            oBox.mouseover(function(){
                clearInterval(timer);
                timer=0;
                num=1
            });
        });
        function next() {
                speed++;
                if (speed > (arrImg.length*2-5) * 207) {
                    speed = (arrImg.length-5)*207;
                }
                oBig.css({"left": -speed + "px"});
            }
        function prev(){
            speed--;
            if (speed <0) {
                speed =arrImg.length*207;
            }
            oBig.css({"left": -speed + "px"});
        }
        oPrev.click(function(){
            clearInterval(timer);
            timer=0;
            if(!timer){
                timer=setInterval(prev,10)
            }
            oBox.mouseover(function(){
                clearInterval(timer);
                timer=0;
                num=2;
            });
        });
         oBox.mouseout(function(){
             if(num==1){
                 timer=setInterval(next,10)
             }
             else if(num==2){
                 timer=setInterval(prev,10)
             }
         });
        arrImg1.mouseover(function(){
            $(this).css({"transform":"scale(1.3)"})
        });
        arrImg1.mouseout(function(){
            arrImg1.css({"transform":""})
        })
    })();
    (function(){
        var arrPicture=$(".mian_company_picture");
        arrPicture.hover(function(){
            arrPicture.css({"background":"url(images/io_06.png)no-repeat"}).removeClass("animated bounceInDown");
            $(this).css({"background":"url(images/io_03.png)no-repeat"}).addClass("animated bounceInDown");
        }, function(){
           $(this).css({"background":"url(images/io_06.png)no-repeat"});
        });
    })();
    (function(){
       var oMusic=document.getElementById("music");
        var oBtn=document.getElementById("btn");
       oBtn.onclick=function(){
           if(oMusic.paused){
               oMusic.play();
               oBtn.className="fa fa-pause"
           }
           else{
               oMusic.pause();
               oBtn.className="fa fa fa-play"
           }
       }
    })();
    (function(){
        var oBtn=$(".active_box_btn");
        var arrActive=$(".active_one");
        var timer=0;
        var speed=100;
        var timer1=0;
        var isChoujiang=false;
        oBtn.click(function(){
            if(isChoujiang==false){
            var num=Math.floor(Math.random()*12+50);
            var page=0;
            var num1=0;
            if(!timer){
                timer=setInterval(function(){
                        arrActive.css({"background":"white"});
                        arrActive.eq(page).css({"background":"red"}) ;
                        num1++;
                        if(num==num1){
                            clearInterval(timer);
                            timer=0;
                            isChoujiang=true;
                            if(page==1||page==3||page==8||page==11){
                                $(".weizhongjiang").show();
                            }
                            else{
                                $(".xinxi").show();
                                switch (page){
                                    case 0:case 7:$(".xinxi h2").append("耳机");break;
                                    case 2: case 4:case 9:$(".xinxi h2").append("运动鞋");break;
                                    case 5:case 10:$(".xinxi h2").append("布娃娃");break;
                                    case 6:$(".xinxi h2").append("ipad");break;
                                }
                            }
                        }
                        page++;
                        if(page>11){
                            page=0;
                        }
                },speed)
            }
            }
            else{
            $(".active_over").show();
            }
        });
        $(".weizhongjiang span").click(function(){
            $(".weizhongjiang").hide();
        });
        $(".xinxi span").click(function(){
            $(".xinxi").hide();
        });
        $(".active_over span").click(function(){
            $(".active_over").hide();
        });
    })();

    //(function(){
    //    $(".i_one").click(function(){
    //        window.open("product.html")
    //    })
    //})()
});