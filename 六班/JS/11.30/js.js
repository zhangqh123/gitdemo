/**
 * Created by Administrator on 2016/11/30.
 */
function getCookByKey(key){
    var arrCookie=document.cookie.split("; ");
    for(var i=0;i<arrCookie.length;i++){
        var cookieValue= arrCookie[i].split("=");
        if(cookieValue[0]==key){
            return cookieValue[1];
        }
    }
}
function setCookie(key,value,expiresDays){
    var oDate= new Date();
    oDate.setDate(oDate.getDate()+expiresDays);
    document.cookie=key+"="+value+";expires="+oDate;
}
function removeCookie(key){
    setCookie(key,"",-1);
}