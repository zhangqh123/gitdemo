/**
 * Created by Administrator on 2016/11/25.
 */
window.onload=function(){
    var oIn1=document.getElementById('input1');
    var oSs=document.getElementById('ss');
    oIn1.onclick=function(){
        oSs.style.display="block";
    };
    oIn1.onblur=function(){
        oSs.style.display="none";
    };
    var oDaohang=document.getElementById('daohang');
    var arrLi=oDaohang.getElementsByTagName('li');
    var oP1=document.getElementById('p1');
    var arrSpan=oP1.getElementsByTagName('span');
    var oPicture1=document.getElementById('picture1');
    var oPicture2=document.getElementById('picture2');
    var oPicture3=document.getElementById('picture3');
    var oPicture4=document.getElementById('picture4');
    var oPicture5=document.getElementById('picture5');
    var arrLbt1=oPicture1.getElementsByClassName('lbt1');
    var oLunbotu=document.getElementById('lunbotu');
    var arrPicture=oLunbotu.getElementsByClassName('picture');
    var oUl=document.getElementById('ul');
    var aLi=oUl.getElementsByTagName('li');


    var i = 0;
    for (i = 0; i < arrSpan.length; i++) {
        arrSpan[i].index = i;
        arrSpan[i].onclick = function () {
            for(var j=0;j<arrSpan.length;j++){
                arrSpan[j].style.borderColor="#8e8e8e"
            }
            oPicture5.style.left =this.index*-1200+"px";
            this.style.backgroundColor="transparent";
            this.style.borderColor="white";
            page = this.index
        }
    }





    var oBanner=document.getElementById('banner');
    var oLt=document.getElementById('lt');
    var oRt=document.getElementById('rt');

       oBanner.onmouseover=function(){
           oLt.style.display="block";
           oRt.style.display="block";
       };
    oBanner.onmouseout=function(){
        oLt.style.display="none";
        oRt.style.display="none";
    };
     oLt.onmouseover=function(){
        oLt.style.backgroundColor="#31c27c"
    };
    oLt.onmouseout=function(){
        oLt.style.backgroundColor="#515151"
    };
    oRt.onmouseover=function(){
        oRt.style.backgroundColor="#31c27c"
    };
    oRt.onmouseout=function(){
        oRt.style.backgroundColor="#515151"
    };
    var page=0;
    oRt.onclick=function (){
        page++;
        if (page >= arrSpan.length) {
            page = 0;
        }
        for(var j=0;j<arrSpan.length;j++){
            arrSpan[j].style.borderColor="#8e8e8e"
        }
        oPicture5.style.left =page*-1200+"px";
        arrSpan[page].style.backgroundColor="transparent";
        arrSpan[page].style.borderColor="white";
    };
    oLt.onclick=function (){
        page--;
        if (page <0) {
            page = arrSpan.length-1;
        }
        for(var j=0;j<arrSpan.length;j++){
            arrSpan[j].style.borderColor="#8e8e8e"
        }
        oPicture5.style.left =page*-1200+"px";
        arrSpan[page].style.backgroundColor="transparent";
        arrSpan[page].style.borderColor="white";
    };
    var i=0;
    for(i=0;i<aLi.length;i++){
        aLi[i].index=i;
        aLi[i].onclick=function(){
            for(var j=0;j<arrPicture.length;j++){
                arrPicture[j].style.display="none"
            }
            for(var j=0;j<aLi.length;j++){
                aLi[j].style.color="#8e8e8e"
            }
          arrPicture[this.index].style.display="block";
           this.style.color="white";
          change(arrPicture[this.index])
        }
    }
  function change(oPic){
    var i = 0;
    for (i = 0; i < arrSpan.length; i++) {
        arrSpan[i].index = i;
        arrSpan[i].onclick = function () {
            for(var j=0;j<arrSpan.length;j++){
                arrSpan[j].style.borderColor="#8e8e8e"
            }
            oPic.style.left =this.index*-1200+"px";
            this.style.backgroundColor="transparent";
            this.style.borderColor="white";
            page = this.index
        }
    }
    var page=0;
    oRt.onclick=function (){
        page++;
        if (page >= arrSpan.length) {
            page = 0;
        }
        for(var j=0;j<arrSpan.length;j++){
            arrSpan[j].style.borderColor="#8e8e8e"
        }
        oPic.style.left =page*-1200+"px";
        arrSpan[page].style.backgroundColor="transparent";
        arrSpan[page].style.borderColor="white";
    };
    oLt.onclick=function (){
        page--;
        if (page <0) {
            page = arrSpan.length-1;
        }
        for(var j=0;j<arrSpan.length;j++){
            arrSpan[j].style.borderColor="#8e8e8e"
        }
        oPic.style.left =page*-1200+"px";
        arrSpan[page].style.backgroundColor="transparent";
        arrSpan[page].style.borderColor="white";
    };
  }


    var oP2=document.getElementById('p2');
    var oLt1=document.getElementById('lt1');
    var oRt1=document.getElementById('rt1');
    var oPicture6=document.getElementById('picture6');
    var arrSpan1=oP2.getElementsByTagName('span');
    var oRmgd=document.getElementById('rmgd');



var i = 0;
for (i = 0; i < arrSpan1.length; i++) {
    arrSpan1[i].index = i;
    arrSpan1[i].onclick = function () {
        for(var j=0;j<arrSpan1.length;j++){
            arrSpan1[j].style.borderColor="#8e8e8e"
        }
        oPicture6.style.left =this.index*-1200+"px";
        this.style.backgroundColor="transparent";
        this.style.borderColor="white";
        page = this.index
    }
}
var page=0;
oRt1.onclick=function (){
    page++;
    if (page >= arrSpan1.length) {
        page = 0;
    }
    for(var j=0;j<arrSpan1.length;j++){
        arrSpan1[j].style.borderColor="#8e8e8e"
    }
    oPicture6.style.left =page*-1200+"px";
    arrSpan1[page].style.backgroundColor="transparent";
    arrSpan1[page].style.borderColor="white";
};
oLt1.onclick=function (){
    page--;
    if (page <0) {
        page = arrSpan1.length-1;
    }
    for(var j=0;j<arrSpan1.length;j++){
        arrSpan1[j].style.borderColor="#8e8e8e"
    }
    oPicture6.style.left =page*-1200+"px";
    arrSpan1[page].style.backgroundColor="transparent";
    arrSpan1[page].style.borderColor="white";
}
    oRmgd.onmouseover=function(){
        oLt1.style.display="block";
        oRt1.style.display="block";
    };
    oRmgd.onmouseout=function(){
        oLt1.style.display="none";
        oRt1.style.display="none";
    };
    oLt1.onmouseover=function(){
        oLt1.style.backgroundColor="#31c27c"
    };
    oLt1.onmouseout=function(){
        oLt1.style.backgroundColor="#515151"
    };
    oRt1.onmouseover=function(){
        oRt1.style.backgroundColor="#31c27c"
    };
    oRt1.onmouseout=function(){
        oRt1.style.backgroundColor="#515151"
    };
}
