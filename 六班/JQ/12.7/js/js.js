/**
 * Created by Administrator on 2016/12/7.
 */
window.onload=function(){
   /* var oLeft=document.getElementById('left');
    var oRight=document.getElementById('right');
    var oBanner=document.getElementById('banner');
    var arrImg=oBanner.getElementsByTagName('img');


    oLeft.onclick=function(){
        page--;
        if(page<0)
        {
            page=arrImg.length-1;
        }
        for(var j=0;j<arrImg.length;j++){
            arrImg[j].style.display="none";
        }
        arrImg[page].style.display="block";

    };
    oRight.onclick=function(){
        page++;
        if(page>=arrImg.length)
        {
            page=0
        }
        for(var j=0;j<arrImg.length;j++){
            arrImg[j].style.display="none";
        }
        arrImg[page].style.display="block";

    };*/
   /* var timer=0;
   // var page2=0;
   var oBig=document.getElementById('big');
    var oCir=document.getElementById('cir');
    var arrSpan=oCir.getElementsByTagName('span');
    for(var i=0;i<arrSpan.length;i++){
        arrSpan[i].index=i;
        arrSpan[i].onclick=function(){
            for(var j=0;j<arrSpan.length;j++){
                arrSpan[j].style.backgroundColor="black"
            }
            oBig.style.left=this.index*-1200+"px";
            arrSpan[this.index].style.backgroundColor="red";
           // page2=this.index;
        }
    }*/
   /* function next(){
       page++;
        if(page==4){
            page=0;
        }
        for(var j=0;j<arrSpan.length;j++){
            arrSpan[j].style.backgroundColor="black"
        }
        oBig.style.left=page*-1200+"px";
        arrSpan[page].style.backgroundColor="red";
    }
    timer=setInterval(next,3000);*/
    //oBig.onmouseover=function(){
    //    clearInterval(timer)
    //};
    //oBig.onmouseout=function(){
    //    timer=setInterval(next,3000);
    //};
    var oMain=document.getElementById('main');
    var aLi=oMain.getElementsByTagName("li");
    var aRight=oMain.getElementsByClassName('right');
    for(var i=0;i<aLi.length;i++){
        aLi[i].index=i;
        aLi[i].onmouseover=function(){
          for(var j=0;j<aRight.length;j++){
              aRight[j].style.display="none"
          }

            aRight[this.index].style.display="block";

        }
    }
};