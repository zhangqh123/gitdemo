/**
 * Created by Administrator on 2016/12/2.
 */
function ajax(method, url, date,funSuc,funFail) {//  方式  路径   请求数据

    var xhr;
    if(window.XMLHttpRequest){
        xhr= new XMLHttpRequest();
    }
    else {
        xhr=ActiveXObject("Microsoft.XMLHTTP");
    }
    if (method.toLowerCase() == "get") {

        xhr.open("get", url + "?" + date, true);
        xhr.send();

    } else if (method.toLowerCase() == "post") {
        xhr.open("post", url, true);

        xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
        xhr.send(date);
    }
    xhr.onreadystatechange = function () {
        if(xhr.readyState==4) {
            if(xhr.status==200) {
                if(funSuc){
                    funSuc(xhr.responseText)
                }
            }
            else{
                if(funFail){
                    funFail(xhr.status);
                }
            }
        }
    }
}