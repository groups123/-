$(function () {
    $('.true_').blur(function () {
        val = $(this).val();
           
            $(this).attr('class', ' change');
    });
    $(".true_phone").blur(function(){
        $(this).attr('placeholder', '请输入正确手机号');
    });
    $('.true_pass').blur(function(){
        $(this).attr('placeholder', '请输入正确密码')
    })
    $('.true_yanzheng').blur(function(){
        $(this).attr('placeholder', '请输入短信验证码')
    });
    $('.icon-biyan').click(function(){
        $(this).hide();
        $('.icon-zhengyan').show();
        $('.true_pass').attr('type','text')
    });
    $('.icon-zhengyan').click(function(){
        $(this).hide();
        $('.icon-biyan').show();
        $('.true_pass').attr('type','password')
    })
})