$(function(){
    // 设置a标签公共href="javacript:void(0)"避免跳转影响
    $("a").attr("href","javacript:void(0)")
    // 用户选项点击效果
    // 普通用户
    $(".normal-user li a").click(function(){ 
        $(".normal-user li:eq(1)").css({
            'background': 'linear-gradient(0deg, #684323 0, #936237 100%)',
        }).siblings().css({ "background": "",})
        $(this).css('color','#ffffff')
        $('.artisan li').css('background','').children().css('color','')
    })
    // 个人资料
    $('.changeMsg li a').click(function(){
        $('.changeMsg li:eq(0)').css({
            'background': 'linear-gradient(0deg, #684323 0, #936237 100%)'
        }).children().css('color','#ffffff')
    })
    // 手艺人
    $('.artisan li a').click(function(){
        $(".normal-user li:eq(1)").css('background','').children().css('color','')
        $(this).css('color','#ffffff').parent().css({
            'background': 'linear-gradient(0deg, #684323 0, #936237 100%)'
        }).siblings().css('background','').children().css('color','')
    })
})