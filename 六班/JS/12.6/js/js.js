/**
 * Created by Administrator on 2016/12/6.
 */
window.onload=function(){
    var oBanner=document.getElementById('banner');
    var arrImg=oBanner.getElementsByTagName('img');
    var arrSpan=oBanner.getElementsByTagName('span');
    var timer=0;
    var page=0;
    for(var i=0;i<arrSpan.length;i++) {
        arrSpan[i].index = i;
        arrSpan[i].onclick = function () {
            for (var j = 0; j < arrImg.length; j++) {
                arrImg[j].style.display = "none";

            }
            arrImg[this.index].style.display = "block";
            page = this.index;
            for(var k=0;k<arrSpan.length;k++){
                            arrSpan[k].classList="new";
                        }
                        this.className="now";
        };

    }


    function next1(){
        page++;
        if(page==arrImg.length){
            page=0;
        }
        for(var i=0;i<arrImg.length;i++){
            arrImg[i].style.display="none";

        }
        arrImg[page].style.display="block";
        for(var k=0;k<arrSpan.length;k++){
            arrSpan[k].classList="new";
        }
        arrSpan[page].className="now";

    }
     timer= setInterval(next1,3000);


    oBanner.onmouseover=function(){
        clearInterval(timer);
        timer=0;
    };
    oBanner.onmouseout=function(){
        if(timer==0){
            timer=setInterval(next1,3000);
        }
    };

    var oLeft=document.getElementById('left');
    var arrLi=oLeft.getElementsByTagName('li');
    var oRight=document.getElementById('right');
    var arrImg1=oRight.getElementsByTagName('img');

    for(var i=0;i<arrLi.length;i++){
        arrLi[i].indenx=i;
        arrLi[i].onmouseover=function(){
            for(var j=0;j<arrImg1.length;j++){
                arrImg1[j].style.display="none";
            }

            arrImg1[this.indenx].style.display="block";



        }
    }










};





