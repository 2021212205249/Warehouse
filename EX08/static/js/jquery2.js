$(function(){
    $(".list button").click(function(){
        $(this).addClass("selected").siblings().removeClass("selected");
        var index=$(this).index();
        $(".show span").eq(index).show().siblings().hide();
    })
})