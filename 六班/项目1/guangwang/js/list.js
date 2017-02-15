/**
 * Created by Administrator on 2016/12/15.
 */
$(function () {
    $("#header").load("header.html");
    $("#footer").load("footer.html");
    $("#fixed").load("fixed.html");
    var oPen = $(".works-pen");
    var oLine = $(".company-pen");

    oPen.click(function () {
        oLine.css({"width": "130px"});
        $(".company-pen-line").css({"margin-left":"-970px"});
        oLine.stop().animate({"width": "1100px"}, 2000);
        $(".company-pen-line").stop().animate({"margin-left":"0"},2000)
    });
    $(".list_content").delegate(".company-1", "click", function (){
    //$(".company-1").click(function(){
        window.open("article.html?type=xiaoniaoNews&articleid=" + $(this).attr("articleid"))
    });
    var pageTimes = 0;
    $(".company-1-box").html("");
    loadlistData();
    $(".list-btn").click(function () {
        pageTimes++;
        loadlistData();
    });
    function loadlistData() {
        var list = listData["listData0" + pageTimes];
        if(!list||!list.data.list.length){
            return;
        }
        if (list.success == "成功") {
            var data = list.data;
            var arrList=data.list;
            for(var i = 0; i<arrList.length;i++){
                //arrList[i]   json
                var itemHtml = $("#itemHtml").html();
                itemHtml = itemHtml.replace("$articleId$",arrList[i].sysId)
                    .replace("$articleCover$",arrList[i].coverImg)
                    .replace("$articleTitle$",arrList[i].title)
                    .replace("$updateTime$",arrList[i].creatAt)
                    .replace("$describe$",arrList[i].describe);

                $(".list_content").append(itemHtml);
            }
            var count = data.count;
            var pageSize = data.pageSize;
            var pageStart = data.pageStart;
            //所有数据都加载了
            if (Math.floor(count / pageSize) == pageStart) {
               $(".list-btn").css({"opacity":"0.3"});
              $(".company-goon").css({"background":"url('images/list_gomore_bg_nomore.jpg')"})
            }
        }
    }


})