
$(".jf ul li").mouseover(function(){
    $(this).addClass("hover").siblings().removeClass("hover");
    var index=$(this).index();
    $(".jf div").eq(index).css("display","block").siblings("div").css("display","none");
});
$(".sheshou ul li").mouseover(function(){
    $(this).addClass("hover").siblings().removeClass("hover");
    var index=$(this).index();
    $(".sheshou div").eq(index).css("display","block").siblings("div").css("display","none");
});

$(".project .rim li").mouseover(function(){
    $(this).addClass("hover").siblings().removeClass("hover");

});
window.onscroll = function(){
        var scrollTop = document.body.scrollTop;
        if(scrollTop >= 2500){
        $(".integral div:first").addClass("jifen_f");

        }
    if(scrollTop <= 2500){
        $(".integral div:first").removeClass("jifen_f");

    }
};
