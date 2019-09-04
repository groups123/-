import { getajax } from "./ajax.js";
$(function(){
    // 用户名验证
$('.user_reg').on({
    blur:function(){
        // 用户名设置4-16位
        var reg = /^[a-zA-Z0-9_-]{4,16}$/;
        if(reg.test($(this).val())){
            $(this).next().text('输入正确');
            $(this).next().css('color','#777')
        }
        else{
            $(this).next().text('输入有误')
        } 
    },
    // 获得焦点时value为空
    focus:function(){
        $(this).text(''); 
     }
});
$('.pass_reg').on({
    blur:function(){
        // 密码验证密码必须由6-16个英文字母和数字的字符串组成
        var reg=/^[A-Za-z]+[0-9]+[A-Za-z0-9]*|[0-9]+[A-Za-z]+[A-Za-z0-9]*$/g;
        if(reg.test($(this).val())){
            $(this).next().text('输入正确');
            $(this).next().css('color','#777')
        }
        else{
            $(this).next().text('输入有误')
        } 
    },
    // 获得焦点时value为空
    focus:function(){
        $(this).text(''); 
     }
});
$('.repass_val').on({
    blur:function(){
        if($('.pass_reg').val()==$(this).val()){
            $(this).next().text('密码一致')
        }else{
            $(this).next().text('密码不一致')
        }
    }
});
$('#users').click(function(){
    var mobile=$('.user_reg').val();
    var password=$('.pass_reg').val();
    if(($('.user_reg').next().text()=="输入正确")&&($('.pass_reg').next().text()=='输入正确')&&($('.repass_val').next().text()=="密码一致")){
        getajax("post","user_systems/register/",{mobile:mobile,password:password},'').then(
            resolve=>{
               if(resolve[0].code==200){
                   alert('注册成功');
                   location.href="../pages/login.html"
               }
               if(resolve[0].code==422){
                   alert('用户已存在')
               }
            },
            reject=>{
       console.log(reject)
            })

    }
})
});

  
   
