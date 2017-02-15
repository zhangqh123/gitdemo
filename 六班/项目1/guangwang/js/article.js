/**
 * Created by Administrator on 2016/12/15.
 */
var GLOBAL=GLOBAL||{};
$(function(){
    $("#header").load("header.html");
    $("#footer").load("footer.html");
    $("#fixed").load("fixed.html");
    (function(){
    var oPen = $(".works-pen");
    var oLine = $(".company-pen");
    oPen.click(function () {
        oLine.css({"width": "300px"});
        $(".company-pen-line").css({"margin-left":"-480px"});
        oLine.stop().animate({"width": "780px"}, 2000);
        $(".company-pen-line").stop().animate({"margin-left":"0"},2000)
    });
    })();
    (function(){


        var arr=["V587","谢谢打赏","有本事再点","双击有奖"];
        var isLike=false;
        $(".article_iflike").click(function(){
            if(!isLike){
                isLike=true;
          var content=arr[Math.floor(Math.random()*arr.length)];
            $(".article-move").text(content);
             $(".article-move").css({"opacity":"1","left":"340px","top":"10px"})
                 .animate({"top":"230px"} ,100)
                 .delay(300)
                 .animate({"left":"-160px","opacity":0}, 1000,function(){
                     $(".article_iflike").animate({"backgroundPositionY":"-73px"})
                 });
            }
            else{
                isLike=false;
                $(".article_iflike").animate({"backgroundPositionY":"0px"})
            }
        })
    })();
    (function(){
            GLOBAL.articleType=getUrlParans("type");
            GLOBAL.articleid=getUrlParans("articleid");
            loadArticleData();
         function loadArticleData(){
             var aData=articleData[GLOBAL.articleType+GLOBAL.articleid];
             $(".company-wz-1").text(aData.data.typeTitle);
             $(".company-wz-2").text(aData.data.typeEntitle);
             $(".works-xiaoniaozhangxue").text(aData.data.title);
             $(".article-date").text(aData.data.updateAt);
             $(".article-person").text(aData.data.updateByFullName);
             $(".article-picture").attr("src",aData.data.coverImg);
             $(".article-content").html(aData.data.content);
         }
            function getUrlParans(name){
                var reg=new RegExp("(^|&)"+name+"=([^&]*)(&|$)");
                var r=window.location.search.substr(1).match(reg);
                if(r!=null){
                    return r[2];
                }
                else{
                    return "";
                }
            }
    })();
});