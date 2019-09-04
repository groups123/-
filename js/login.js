import { getajax } from "./ajax.js";
$(function () {
    // 失去焦点时改变placeholder颜色;
    $('.true_').blur(function () {
        $(this).addClass('change');
    });
    // 失去获得焦点时改变placeholder文字颜色,
    $('.true_phone').on({
        focus: function () {
            $(this).removeClass('change');
            $(this).attr('placeholder', '手机号')
        },
        blur: function () {
            $(this).attr('placeholder', '请输入正确手机号');
        }
    })
    $('.true_pass').on({
        blur: function () {
            $(this).attr('placeholder', '请输入正确密码')
        },
        focus: function () {
            $(this).removeClass('change');
            $(this).attr('placeholder', '密码')
        }
    });
    $('.true_yanzheng').on({
        blur: function () {
            $(this).attr('placeholder', '请输入短信验证码')
        },
        focus: function () {
            $(this).removeClass('change');
            $(this).attr('placeholder', '验证码')
        }
    })
    // 点击睁眼时图标变为闭眼，反之......。。。。。。。。。。。..有问题
    $('.icon-biyan').click(function () {
        $(this).hide();
        $('.icon-zhengyan').show();
        $('.true_pass').attr('type', 'text')
    });
    $('.icon-zhengyan').click(function () {
        $(this).hide();
        $('.icon-biyan').show();
        $('.true_pass').attr('type', 'password')
    });
    // 注册登录事件-背景颜色。。。;
    $(".normal_submit").on({
        mouseenter: function () { $(this).css("background-color", "#754D2A"); },
        mouseout: function () { $(this).css("background-color", "#3E281B"); },
    });
    //   。如果手机号，验证码正确并且通过手机号/验证码/密码能识别到是注册用户则跳转首页。。。。。。。。。。。数据库。。。。。。。。。。。
    $(".normal_submit").mouseenter(function () {
        
        var mobile = $(".phone2").val();
        var password=$('.pass ').val();
        var reg = /[1][3-9][0-9]{9}/;
        if (reg.test(mobile)) {     
            console.log(mobile)  
            getajax("post", "user_systems/login/", { mobile: mobile,password:password},'').then(
                resolve => {
                    console.log(resolve)
                    if (resolve[0].code == 200) {
                        console.log(resolve)
                        sessionStorage.setItem('access',resolve[0].data.access)
                        sessionStorage.setItem('refresh',resolve[0].data.refresh)   
                        sessionStorage.setItem('mobile',mobile)
                        sessionStorage.setItem('password',password)
                     
                        alert('登陆成功');
                        location.href="../index.html"
                    }else if(resolve[0].code==422){
                        alert('登陆失败');
                        console.log(resolve)
                    }
                },
                reject => {
                    alert('手机号有误')
                })
         }
    });

    //  。如果手机号，验证码正确并且通过手机号/验证码/密码能识别不是注册用户则跳转注册。。。。。。。。。。。数据库。。。。。。。。。。。
    //   $(".normal_submit").click(function(){
    //     var val = $(".phone1").val();
    //     var reg = /[1][3-9][0-9]{9}/;
    //     if (reg.test(val)) {
    //         location.href = "reg.html"
    //     } else {
    //         alert('输入有误，请正确输入');
    //     };
    //   });
    // 注册登录事件-背景颜色。。。;
    $(".simple_submit").on({
        mouseenter: function () { $(this).css("background-color", "#754D2A"); },
        mouseout: function () { $(this).css("background-color", "#3E281B"); },
        //  此处未完善。。。。。。。。。。。。。。。。。。。。。。。
        click: function () {
            var val = $(".phone1").val();
            var reg = /[1][3-9][0-9]{9}/;
            if (reg.test(val)) {
                location.href = "../index.html"
            } else {
                alert('输入有误，请正确输入');
            }
            ;
        }
    });
    //   点击获取验证码
    $('.getyanzheng').click(function () {
        var reg = /[1][3-9][0-9]{9}/;
        var val = $(".phone1").val();
        //    如果未输入手机号就提示请输入手机号
        if (val == '') {
            $('.true_phone').addClass('change');
            $(".true_phone").attr('placeholder', '请输入正确手机号');
        }
        else {
            // 如果输入手机号错误也提示输入正确手机号;
            if (!reg.test(val)) {
                $('.true_hide').show();
            }
            // 如果手机号输入正确就通过数据库进行发验证。。。。。数据库。。。
            else {
                alert('进行发验证码')
            };
        }

    });
    // 用户名注册，点击提交时正则验证，并交数据库
    // $('.user_submit').click(function(){
    //    var user_val=  $('.user_reg').val();
    //    var pass_val=$('.pass_reg').val();
    //    var repass_val=$('repass_val').val();
    //     var user_reg=//;
    //     var pass_reg=//;
    //    var repass_reg=//;
    // //    如果密码和再次输入密码不同，密码不一致；
    //    if(pass_val===repass_val){
    //        alert('密码不一致')
    //    }else{
    //    密码一致情况下，判断输入是否符合正则二，符合跳转首页
    // if(user_reg.test(user_val)&&pass_reg.test(pass_val)){
    //     location.href='../index.html'
    // }
    // 否则重新输入
    // else{
    // 不符合规范请重新输入
    //     }
    //    }
})









