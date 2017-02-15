/**
 * Created by Administrator on 2016/11/15.
 */
window.onload=function(){
    var oNav=document.getElementById('nav');
    var arrLi=oNav.getElementsByTagName('li');
    var oNav1=oNav.getElementsByClassName('nav')[0];
    var oDiv=oNav.getElementsByClassName('div1')[0];
    var oLi1=document.getElementById('li1');
    var oLi2=document.getElementById('li2');
    var oDiv1=document.getElementById('div1');
    var oDiv2=document.getElementById('div2');
    oDiv.style.left = oNav1.offsetLeft+"px";
    oDiv.style.width = oNav1.offsetWidth+"px";
    for(i=0;i<arrLi.length;i++){
        arrLi[i].index=i;
        /*arrLi[i].onclick=function(){
            oDiv.style.left = this.offsetLeft+"px";
            oDiv.style.width = this.offsetWidth+"px";
            for(var j=0;j<arrLi.length;j++){
                arrLi[j].classList.remove("nav")
            }*/
         /*   this.classList.add("nav");
        };*/
            arrLi[i].onmouseover=function(){
            oDiv.style.transition="all 0.3s";
            oDiv.style.left=this.offsetLeft+"px";
            oDiv.style.width=this.offsetWidth+"px";
        };
        arrLi[i].onmouseout=function(){
            oDiv.style.left = oNav1.offsetLeft+"px";
            oDiv.style.width = oNav1.offsetWidth+"px";
        };
    }
    oLi1.onmouseover=function(){
        oDiv1.style.display="block";
        oDiv.style.transition="all 0.3s";
        oDiv.style.left=this.offsetLeft+"px";
        oDiv.style.width=this.offsetWidth+"px";
    };
    oLi1.onmouseout=function(){
        oDiv.style.left = oNav1.offsetLeft+"px";
        oDiv.style.width = oNav1.offsetWidth+"px";
        oDiv1.style.display="none"
    };
    oLi2.onmouseover=function(){
        oDiv2.style.display="block";
        oDiv.style.transition="all 0.3s";
        oDiv.style.left=this.offsetLeft+"px";
        oDiv.style.width=this.offsetWidth+"px";
    };
    oLi2.onmouseout=function(){
        oDiv.style.left = oNav1.offsetLeft+"px";
        oDiv.style.width = oNav1.offsetWidth+"px";
        oDiv2.style.display="none"
    };
}