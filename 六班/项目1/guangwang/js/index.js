/**
 * Created by Administrator on 2016/12/15.
 */
/*
 window.onload=function(){
 var oHeader = document.getElementById('header');
 var xhr=null;
 if(window.XMLHttpRequest){
 xhr = new XMLHttpRequest();
 }else{
 xhr = ActiveXObject("Microsoft.XMLHTTP")
 }
 xhr.open("get","header.html",true);
 xhr.send();
 xhr.onreadystatechange=function(){
 if(xhr.readyState==4){
 if(xhr.status==200){
 oHeader.innerHTML=xhr.responseText;
 }
 }
 };
 }
 */
$(function () {
    $("#header").load("header.html");
    $("#footer").load("footer.html");
    $("#fixed_box").load("fixed.html");
    //banner 开始
    (function(){
    var arrImg = $(".banner-pic");
    var arrImg1=$(".banner-center-2 span");
    var page = 0;
    $(".banner-prev").click(function () {
        page--;
        if(page<0){
            page=arrImg.length-1;
        }
        imgMove()
    });
    $(".banner-next").click(function () {
        page++;
        if(page>arrImg.length-1){
            page=0;
        }
        imgMove()
    });
   arrImg1.click(function(){
       page=$(this).index();
       imgMove()
   });
        function imgMove(){
            arrImg.fadeOut(200);
            arrImg.eq(page).fadeIn(200);
            arrImg1.css({"background":"url(images/next&prev_others.png)"});
            arrImg1.eq(page).css({"background":"url(images/next&prev_now.png)"})
        }

    })();
    //主要产品
    (function(){
        var page1=0;
        var arrWorks=$(".works-left li");
        var oMain=$(".works .works-content");
        var page=0;
        $(".works-lunbo-right").click(function(){
            page1++;
            if(page1>$(".works-center").length-1){
                page1=0;
            }
            oMain.removeClass("animated bounceInRight").eq(page1).addClass("animated bounceInRight");
            worksMove();

        });
        $(".works-lunbo-left").click(function(){
            page1--;
            if(page1<0){
                page1=$(".works-center").length-1;
            }
            worksMove();
            oMain.removeClass("animated bounceInLeft").eq(page1).addClass("animated bounceInLeft");
        });
        arrWorks.click(function(){
            page1=$(this).index();
            if(page<page1){
                oMain.removeClass("animated bounceInRight").eq(page1).addClass("animated bounceInRight");
                animate();
            }
            else{
                oMain.removeClass("animated bounceInLeft").eq(page1).addClass("animated bounceInLeft");
                animate();
            }
            page=page1;
            worksMove()
        });
        function worksMove(){
            oMain.hide();
            oMain.eq(page1).fadeOut(10).fadeIn(200);
            arrWorks.removeClass("works-li").eq(page1).addClass("works-li");
            animate();
        }
        function animate(){
            oMain.find(".works-gaishu-wz").addClass("animated bounceInRight");
            oMain.find(".works-cont").addClass("animated bounceInLeft");
            oMain.find(".works-center").addClass("animated flipInX");
        }





    })();
    //业务范围
    (function(){
        var arrZhankai=$(".business-right-1");
        var arrHide=$(".business-yincang");
        arrZhankai.click(function(){
            if(arrHide.eq(arrZhankai.index(this)).css("display")=="none"){
                arrHide.hide().eq(arrZhankai.index(this)).show();
                arrZhankai.css({"background":"url(images/business_zhankaishouqi.png)"});
                $(this).css({"background":"url(images/business_zhankaishouqi.png) 0 -67px"});
            }
            else{
                arrHide.eq(arrZhankai.index(this)).hide();
                $(this).css({"background":"url(images/business_zhankaishouqi.png)"})
            }
        })
    })();


    //团队介绍
    (function(){
        var arrSpan2=$(".team-center-2 span");
        var arrTeam=$(".team-lunbo-box");
        var oBig=$(".team-lunbo-big");
        var oPrev=$(".team-prev");
        var oNext=$(".team-next");
        var oIndex=1;
        var timer=0;
        oPrev.click(function () {
            oIndex--;
            if (oIndex >=1) {
                oBig.stop(true,true).animate({"left":(oIndex)*-1100+"px"},2000,"backBoth");
            }
            else{
                oIndex=arrTeam.length-2;
                oBig.stop(true,true).animate({"left":"0px"},2000,"backBoth",
                    function(){
                        oBig.css({"left":(arrTeam.length-2)*-1100+"px"})
                    }
                )
            }
            teamMove();
        });

    oNext.click(next);
        function next() {
            oIndex++;
            if (oIndex< arrTeam.length - 1) {
                oBig.stop(true,true).animate({"left":(oIndex)*-1100+"px"},2000,"backBoth");

            }else{
                oIndex=1;
                oBig.stop(true,true).animate({"left":(arrTeam.length-1)*-1100+"px"},2000,"backBoth",
                function(){
                    oBig.css({"left":"-1100px"})
                }
                )
            }
       teamMove();

        }
        if(!timer){
            timer=setInterval(next,4000);
        }
        arrTeam.mouseover(function(){
            clearInterval(timer);
            timer=0;
        });
        arrTeam.mouseout(function(){
            timer=setInterval(next,4000);
        });
    arrSpan2.click(function(){
       var index=$(this).index();
        oBig.stop(true,true).animate({"left":(oIndex)*-1100+"px"},2000,"backBoth");
        arrSpan2.css({"background":"url(images/next&prev_others.png)"});
        arrSpan2.eq(index).css({"background":"url(images/next&prev_now.png)"});
        oIndex=index+1;
    });
        function teamMove(){

            arrSpan2.css({"background":"url(images/next&prev_others.png)"});
            arrSpan2.eq(oIndex-1).css({"background":"url(images/next&prev_now.png)"})
        }
    })();
});