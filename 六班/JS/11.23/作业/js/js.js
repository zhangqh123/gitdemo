/**
 * Created by Administrator on 2016/11/23.
 */
window.onload = function () {
    function $(id) {
        return document.getElementById(id)
    }
    var oBtn = $("btn");
    var oIn1 = $("in1");
    var oIn2 = $("in2");
    var oIn3 = $("in3");
    var oIn4 = $("in4");
    var oSp1 = $("sp1");
    var oSp2 = $("sp2");
    var oSp3 = $("sp3");
    var oSp4 = $("sp4");
    var oSp5 = $("sp5");
    var oSp6 = $("sp6");
    var oSp8 = $("sp8");
    var oSe3 = $("se3");
    var oSe4 = $("se4");
    var RegIn1 = /^(.{1,24}|[\u4e00-\u9fa5]{1,12})$/;
    var RegIn2 = /^\S{6,16}$/;
    var RegIn4 = /^1[34578]\d{9}$/;
    oIn1.onchange = function () {
        if (!RegIn1.test(oIn1.value)) {
            oSp1.style.display ="block";
            oSp5.style.display ="";
        }
        else {
            oSp5.style.display ="block";
            oSp1.style.display =""
        }
    };
    oIn2.onchange = function () {
        if (!RegIn2.test(oIn2.value)) {
            oSp2.style.display = "block";
            oSp6.style.display = "";

        }
        else {
            oSp6.style.display = "block";
            oSp2.style.display = "";
        }
    };
    oIn3.onchange = function () {
        if (oIn3.value != oIn2.value) {
            oSp3.style.display = "block";
        }
        else {
            oSp3.style.display = "";
        }
    };
    oIn4.onchange = function () {
        if (!RegIn4.test(oIn4.value)) {
            oSp4.style.display = "block";
            oSp8.style.display = "";
        }
        else {
            oSp8.style.display = "block";
            oSp4.style.display = "";
        }
    };
     oBtn.onclick=function(){

         if(RegIn1.test(oIn1.value)&&RegIn2.test(oIn2.value)&&oIn2.value == oIn3.value&&RegIn4.test(oIn4.value)){
             alert("注册成功")
         }
     };

        var arr = [];
        arr[0] = ["昌平", "朝阳", "海淀"];
        arr[1] = ["西安", "渭南", "延安"];
        arr[2] = ["郑州", "开封", "洛阳"];
        oSe3.onchange = function () {
            oSe4.options.length = 0;
            for (var i = 0; i < arr[oSe3.value].length; i++) {
                oSe4.add(new Option(arr[oSe3.value][i]));
            }
        }
    }
