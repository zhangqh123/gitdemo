/** Created by Administrator on 2016/12/15.*/
var GLOBLE = GLOBLE || {};
$(function () {
    (function () {
        var arrGaishu = $(".bird_gaishu");
        var page = 0;
        $(".gaishu-goleft").click(function () {
            page--;
            if (page < 0) {
                page = 2;
            }
            arrGaishu.hide().eq(page).show();
            arrGaishu.eq(page).addClass("animated bounceInRight")
        });
        $(".gaishu-goright").click(function () {
            page++;
            if (page > 2) {
                page = 0;
            }
            arrGaishu.hide().eq(page).show();
            arrGaishu.eq(page).addClass("animated bounceInRight")
        })
    })();
    (function () {
        var arrZhangyun = $(".bird-zhangyun-box");
        //var page=0;
        $(".bird-zhangyun-btn1").click(function () {
            //page--;
            //if(page<0){
            //    page=1;
            //}
            //arrZhangyun.hide().eq(page).show();
            arrZhangyun.animate({"left": "0px"});
            $(".bird-zhangyun-btn2").css({"backgroundPositionY": "-8px"});
            $(this).css({"backgroundPositionY": "0px"})
        });
        $(".bird-zhangyun-btn2").click(function () {
            //page++;
            //if(page>1){
            //    page=0;
            //}
            //arrZhangyun.hide().eq(page).show();
            arrZhangyun.animate({"left": "-870px"});
            $(this).css({"backgroundPositionY": "0px"});
            $(".bird-zhangyun-btn1").css({"backgroundPositionY": "-8px"})
        })
    })();
    (function () {
        //var height=$(document).height();
        //var width=$(document).width();
        //var arrBird=$(".bird");
        //arrBird.height(height+"px");
        //arrBird.width(width+"px");
        addEvent(window, "mousewheel", mousewheel);
        addEvent(window, "DOMMouseScroll", mousewheel);
        var oScreenBanner = document.getElementsByClassName("box")[0];
        var oAllScreen = document.getElementsByClassName("box-1")[0];
        var arrScreen = document.getElementsByClassName("bird");
        var oBird = document.getElementById("bird-welcome-box");
        var oLi1 = document.getElementById("li11");
        var oLi2 = document.getElementById("li12");
        var oLi3 = document.getElementById("li13");
        var oLi4 = document.getElementById("li14");
        var oLi5 = document.getElementById("li15");

        var screenW, screenH;
        var page = 0;
        screenW = document.documentElement.clientWidth;
        screenH = document.documentElement.clientHeight;
        oBird.style.width = screenW + "px";
        oBird.style.height = screenH + "px";
        oAllScreen.style.width = oScreenBanner.style.width = screenW + "px";
        oScreenBanner.style.height = screenH + "px";
        oAllScreen.style.height = screenH * arrScreen.length + "px";
        for (var i = 0; i < arrScreen.length; i++) {
            arrScreen[i].style.width = screenW + "px";
            arrScreen[i].style.height = screenH + "px";
        }
        var isRunning = false;

        function scrollUp() {
            if (!isRunning) {
                isRunning = true;
                setTimeout(function () {
                    isRunning = false;
                }, 100);
                if (page > 0) {
                    page--;
                    oAllScreen.style.top = -page * screenH + "px";
                }
            }
        }

        function scrollDown() {
            if (!isRunning) {
                isRunning = true;
                setTimeout(function () {
                    isRunning = false
                }, 100);
                if (page < arrScreen.length - 1) {
                    page++;
                    oAllScreen.style.top = -page * screenH + "px";
                }
            }

        }

        function mousewheel(ev) {
            var oEvent = window.event || ev;
            if (oEvent.detail) {
                if (oEvent.detail > 0) {
                    if (GLOBLE.welcomeOver) {
                        scrollDown();
                    }

                }
                else {
                    scrollUp();
                }
            }
            else if (oEvent.wheelDelta) {
                if (oEvent.wheelDelta < 0) {
                    if (GLOBLE.welcomeOver) {
                        scrollDown();
                    }
                }
                else {
                    scrollUp();
                }
            }
        }

        function addEvent(ele, type, listener) {   //click
            if (ele.addEventListener) {
                ele.addEventListener(type, listener)
            }
            else {                                      //onclick
                ele.attachEvent("on" + type, listener)
            }
        }

        oLi1.onclick = function () {
            oAllScreen.style.top = -1 * screenH + "px";
            page = 1;
        };
        oLi2.onclick = function () {
            oAllScreen.style.top = -2 * screenH + "px";
            page = 2;
        };
        oLi3.onclick = function () {
            oAllScreen.style.top = -3 * screenH + "px";
            page = 3;
        };
        oLi4.onclick = function () {
            oAllScreen.style.top = -4 * screenH + "px";
            page = 4;
        };
        oLi5.onclick = function () {
            oAllScreen.style.top = -4 * screenH + "px";
            page = 4;
        };
        var welcomeTimer = 0;
        GLOBLE.welcomeOver = false;
        doWelcomeAnimate();
        var welcomeover = false;

        function doWelcomeAnimate() {

                setTimeout(function () {
                    $(".bird-welcome-content").stop().animate({"top": "0"}, 600, function () {
                        $(".welcome_animate").each(function (i) {
                            var _this = $(this);
                            setTimeout(function () {
                                _this.show().addClass("animated fadeInUp")
                            }, 200 * (i + 1))
                        });
                        setTimeout(function () {

                            $("#bird-welcome-box").stop().animate({"top": -$(window).height()}, 300, function () {
                                GLOBLE.welcomeOver = true;
                            });
                            clearTimeout(welcomeTimer);
                            welcomeTimer = 0;
                        }, 3000);

                    })
                }, 4000)


        }

        $("#bird-welcome-box").dblclick(function () {

            $(this).stop().animate({"top": -$(window).height()}, 300, function () {
                GLOBLE.welcomeOver = true;
            });

        });
        $(".nav-lt").click(function () {
            doWelcomeAnimate();
            $(".bird-welcome_1").find("img").attr("src", "images/aboutxiaoniao/xiaoniao_welcome_icon2.gif");
            $("#bird-welcome-box").stop().animate({"top": 0}, 300, function () {
                GLOBLE.welcomeOver = true;
            });
            $(".bird-welcome-content").stop().animate({"top": "20%"});
            $(".welcome_animate").hide();

        })
    })();
    (function () {
        var arrImg = $(".nav-rt img");
        var arrLi = $(".nav-rt li");
        arrLi.click(function () {
            arrImg.hide().eq(arrLi.index(this)).show();
        });

    })();

});