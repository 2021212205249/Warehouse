$(function () {
   $(".img").click(function () {
      $("#big-img").attr("src", $(this).attr("src"));//设置#big-img元素的src属性
      $("#enlarge").fadeIn("fast");//显示弹出层
      $("#enlarge").click(function () {//关闭弹出层
         $(this).fadeOut("fast");
      });
   });
});

