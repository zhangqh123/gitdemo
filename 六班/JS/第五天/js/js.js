/**
 * Created by Administrator on 2016/11/11.
 */
window.onload = function () {
    var oBanner = document.getElementById('banner');
    var arrImg = oBanner.getElementsByTagName('img');
    var arrP = oBanner.getElementsByTagName('p');
    var i = 0;
    for (i = 0; i < arrP.length; i++) {
        arrP[i].index = i;
        arrP[i].onmouseover = function () {
            var j = 0;
            for (j = 0; j < arrImg.length; j++) {
                arrImg[j].style.display = "none";
            }
            var k = 0;
            for (k = 0; k < arrP.length; k++) {
                arrP[k].style.backgroundColor = "#8b8079"
            }
            arrImg[this.index].style.display = "block";
            this.style.backgroundColor="#f85622"
        }
    }
    var oImg1=document.getElementById('img1');
    var oDiv1=document.getElementById('div1');
    var oUl1=document.getElementById('ul1');
         oImg1.onmouseover=function(){
             oDiv1.style.display="block";
             oUl1.style.display="block"
             };
         oDiv1.onmouseover=function(){
             oDiv1.style.display="block";
             oUl1.style.display="block"
         };


                 var yanshi=function(){
             oDiv1.style.display="none";
             oUl1.style.display="none"
         };
          oImg1.onmouseout=yanshi;
          setInterval(yanshi,1000);
    var oImg4=document.getElementById('img4');
    var oDiv4=document.getElementById('div4');
    var oUl4=document.getElementById('ul4');
    oImg4.onmouseover=function(){
        oDiv4.style.display="block";
        oUl4.style.display="block"
    };
    oImg4.onmouseout=function(){
        oDiv4.style.display="none";
        oUl4.style.display="none"
    };
    var oImg2=document.getElementById('img2');
    var oDiv2=document.getElementById('div2');
    var oUl2=document.getElementById('ul2');
    oImg2.onmouseover=function(){
        oDiv2.style.display="block";
        oUl2.style.display="block"
    };
    oImg2.onmouseout=function(){
        oDiv2.style.display="none";
        oUl2.style.display="none"
    };
    var oImg3=document.getElementById('img3');
    var oDiv3=document.getElementById('div3');
    var oUl3=document.getElementById('ul3');
    oImg3.onmouseover=function(){
        oDiv3.style.display="block";
        oUl3.style.display="block"
    };
    oImg3.onmouseout=function(){
        oDiv3.style.display="none";
        oUl3.style.display="none"
    };
    var oClose=document.getElementById('close1');
    var oXs=document.getElementById('xs');
    var oHuan=document.getElementById('huan');
    var oHuan1=document.getElementById('huan1');
    var oWeixin=document.getElementById('weixin');
    oClose.onclick=function(){
        oXs.style.display="none"
    };
    oHuan.onmouseover=function(){
        oHuan1.style.display="block";
        oWeixin.style.display="block"
    };
    oHuan1.onmouseout=function(){
        oHuan1.style.display="none";
        oWeixin.style.display="none"
    };
    var oShangh1=document.getElementById('shangh1');
    var oShangh2=document.getElementById('shangh2');
    var oShangh3=document.getElementById('shangh3');
    var oShangh4=document.getElementById('shangh4');
    var oShangh5=document.getElementById('shangh5');
    var oShangh6=document.getElementById('shangh6');
    var oShangh7=document.getElementById('shangh7');
    var oShangh8=document.getElementById('shangh8');
    var oShangh9=document.getElementById('shangh9');
    oShangh1.onmouseover=function(){
        oShangh7.style.display="block"
    };
    oShangh1.onmouseout=function(){
        oShangh7.style.display="none"
    };
    oShangh2.onmouseover=function(){
        oShangh8.style.display="block"
    };
    oShangh2.onmouseout=function(){
        oShangh8.style.display="none"
    };
    oShangh3.onmouseover=function(){
        oShangh9.style.display="block"
    };
    oShangh3.onmouseout=function(){
        oShangh9.style.display="none"
    };
}

