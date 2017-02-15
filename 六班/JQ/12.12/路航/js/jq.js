/**
 * Created by Administrator on 2016/12/12.
 */
$(function(){
    var page=0;
    var arrLi=$(".ul1 li");
    var oUl=$(".ul1 ul");
    $(".m2").click(function(){
        if(page<arrLi.size()-1){
            page++
        }
        move();
    });
    $(".m1").click(function(){
        if(page>0){
            page--
        }
        move();
    });
    arrLi.click(function(){
        page=$(this).index();
        move();
    });
    function move(){
        arrLi.css("background","").eq(page).css("background","green");
        if(page<=2){
            oUl.stop(true).animate({"left":"0px"});
        }
        else if(page>=arrLi.length-4){
            var left=(arrLi.length-7)*-131;
            oUl.stop(true,true).animate({"left":left});
        }
        else{
            var left1=(page-3)*-131;
            oUl.stop(true,true).animate({"left":left1});
        }
        if(page>0){
         $(".m1").css("background","#1f6c04")
         }else{
            $(".m1").css("background","#215107");
         }
         if(page>=arrLi.length-1){
             $(".m2").css("background","#215107");
         }else{
             $(".m2").css("background","#1f6c04");
         }
}
    $(".dingwei span").click(function(){
        $(".dingwei").css("display","none")

    })


})