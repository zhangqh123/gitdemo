/**
 * Created by Administrator on 2016/11/18.
 */
window.onload=function() {
    var oBanner = document.getElementById('banner');
    var aImg = oBanner.getElementsByClassName('kl1');
    var aSpan = oBanner.getElementsByTagName('span');
    var oOl1 = oBanner.getElementsByClassName('ol1')[0];
    var oOl2 = oBanner.getElementsByClassName('ol2')[0];
    var oOl3 = oBanner.getElementsByClassName('ol3')[0];
    var oOl4 = oBanner.getElementsByClassName('ol4')[0];
    for (var i = 0; i < aSpan.length; i++) {
        aSpan[i].index = i;
        aSpan[i].onclick = function () {
            for (var j = 0; j < aImg.length; j++) {
                aImg[j].style.display = "none";
            }
            for (var j = 0; j < aSpan.length; j++){
                aSpan[j].className = "";
            }
            this.className = "span1";
            aImg[this.index].style.display = "block";
            page = this.index
        }
    }
    var page = 0;

    var next = function () {
        page++;
        if (page >= aImg.length) {
            page = 0;
        }
        for (var j = 0; j < aImg.length; j++) {
            aImg[j].style.display = "none";
        }
        for (var j = 0; j < aSpan.length; j++){
            aSpan[j].className = "";
        }
        aSpan[page].className = "span1";
        aImg[page].style.display = "block";
    };
    oOl2.onclick = next;
    var timer = setInterval(next, 3000);
    oOl4.onclick = function () {
        page--;
        if (page < 0) {
            page = aImg.length - 1;
        }
        for (var j = 0; j < aImg.length; j++) {
            aImg[j].style.display = "none";
        }
        for (var j = 0; j < aSpan.length; j++){
            aSpan[j].className = "";
        }
        aImg[page].style.display = "block";
        aSpan[page].className = "span1"
    };
    oOl1.onmouseover = function () {
        oOl2.style.display = "block"
    };
    oOl2.onmouseout=function(){
        oOl2.style.display="none"
    };
    oOl4.onmouseout=function(){
        oOl4.style.display="none"
    };

    oOl3.onmouseover = function () {
        oOl4.style.display = "block"
    };
    oBanner.onmouseover = function () {
        clearInterval(timer);
        timer=0;
    };
    oBanner.onmouseout = function () {
        if(timer==0){
            timer=setInterval(next,3000);
        }
    };
    var oSel1=document.getElementById('sel1');
    var aOption1=oSel1.getElementsByTagName('option');
    var oSel2=document.getElementById('sel2');
    var arr=[];
    arr[0]=["白金色","传奇黑","花剑银"];
    arr[1]=["朱鹭白","米索斯黑","斯科巴蓝"];
    arr[2]=["萨摩亚橙","西拉红","花剑银"];
    oSel1.onchange=function(){
        oSel2.options.length=0;
        for(var i=0;i<arr[oSel1.value].length;i++){
            oSel2.add(new Option(arr[oSel1.value][i]));
        }
    };
    var oRt=document.getElementById('rt');
    var arrImg=[["../img/a3cabrio.size.h74.png","../img/a1sb.size.h74.png","../img/a3sbetron.size.h74.png"]
        ["../img/a5cabrio.size.h74.png","../img/a5coupe.size.h74.png","../img/aaq.size.h74.png"]
        ["../img/s5cabrio.size.h74.png","../img/a4aq.size.h74.png","../img/a3sbetron.size.h74.png"]]
      var carType=0;
      var carColor=0;
     for(var i=0;i<aOption1.length;i++){
         aOption1[i].index=i;
         aOption1.onclick=function(){
             oSel1.innerHTML=this.innerHTML;
             carType=this.index;
             oRt.style.display=arrImg[carType][carColor]
         }
     }



}