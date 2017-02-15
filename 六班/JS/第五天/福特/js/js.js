/**
 * Created by Administrator on 2016/11/12.
 */
window.onload = function () {
    var oBanner = document.getElementById('banner');
    var arrSpan = oBanner.getElementsByTagName('span');
    var arrImg = oBanner.getElementsByTagName('img');
    var oOl1 = oBanner.getElementsByClassName('ol1')[0];
    var oOl2 = oBanner.getElementsByClassName('ol2')[0];
    var oOl3 = oBanner.getElementsByClassName('ol3')[0];
    var oOl4 = oBanner.getElementsByClassName('ol4')[0];
    var i = 0;
    for (i = 0; i < arrSpan.length; i++) {
        arrSpan[i].index = i
        arrSpan[i].onclick = function () {
            var j = 0;
            for (j = 0; j < arrImg.length; j++) {
                arrImg[j].style.display = "none";
            }
            var k = 0;
            for (k = 0; k < arrSpan.length; k++) {
                arrSpan[k].className = "";
            }
            arrImg[this.index].style.display = "block";
            this.className = "span1";
            page = this.index
        }
    }
    var page = 0;

         var next=function (){
             page++;
             if (page >= arrImg.length) {
                 page = 0;
             }
        var j = 0;
        for (j = 0; j < arrImg.length; j++) {
            arrImg[j].style.display = "none";
        }
        var k = 0;
        for (k = 0; k < arrSpan.length; k++) {
            arrSpan[k].className = "";
        }
        arrImg[page].style.display = "block";
        arrSpan[page].className = "span1";
    };
    oOl3.onclick =next;
    var timer=setInterval(next,3000);
    oOl4.onclick = function () {
        page--;
        if (page < 0) {
            page = arrImg.length - 1;
        }
        var j = 0;
        for (j = 0; j < arrImg.length; j++) {
            arrImg[j].style.display = "none";
        }
        var k = 0;
        for (k = 0; k < arrSpan.length; k++) {
            arrSpan[k].className = "";
        }
        arrImg[page].style.display = "block";
        arrSpan[page].className = "span1"
    };
    oOl1.onmouseover = function () {
        oOl3.style.display = "block"
    };
    oOl3.onmouseout = function () {
        oOl3.style.display = "none"
    };
    oOl2.onmouseover = function () {
        oOl4.style.display = "block"
    };
    oOl4.onmouseout = function () {
        oOl4.style.display = "none"
    };
    oBanner.onmouseover = function () {
        oOl1.style.display = "block";
        oOl2.style.display = "block";
        clearInterval(timer);
        timer=0;
    };
    oBanner.onmouseout = function () {
        oOl1.style.display = "none";
        oOl2.style.display = "none";
        if(timer==0){
            timer=setInterval(next,3000);
        }
    };
    var arrDaoh=document.getElementById('daoh');
    var arrLi=arrDaoh.getElementsByTagName('li');
    var arrDd=document.getElementsByTagName('dd');

    var i=0;
    for(i=0;i<arrLi.length;i++){
        arrLi[i].index= i;
       /* arrLi[i].onmouseover=function(){
            this.style.color="black"
        };
        arrLi[i].onmouseout=function(){
            this.style.color="#008cba"
        }*/
        arrLi[i].onclick=function(){
            var uDisplay=arrDd[this.index].style.display;
            var j=0;
            for(j=0;j<arrLi.length;j++){
                arrLi[j].style.color="#008cba"
            }
            var j=0;
            for(j=0;j<arrDd.length;j++){
                arrDd[j].style.display="none"
            }
            if(uDisplay=="block"){
                arrDd[this.index].style.display="none"
            }
            else{
                arrDd[this.index].style.display="block";
            }
            this.style.color="black";

        }

    }










}
