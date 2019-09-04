$(function(){
    // 设置a标签公共href="javacript:void(0)"避免影响
    $("a").attr("href","javacript:void(0)")
    // 用户选项点击效果
    $(".normal-user div a,.artisan div a").click(function(){ 
        $(this).css('color','#ffffff').parent().css({
                'background': 'linear-gradient(0deg, #684323 0, #936237 100%)',
        })
        $(this).parent().siblings().css('background','').children().css('color','');
        $(this).parent().parent().siblings().children().css('background','').children().css('color','');
    })
    // 普通用户
      // 修改按钮（个人资料）
      $('body').on('click','.btn-revise',function(){
        $('.forshowDisplay').hide();
        $('.forDisplay').show();
        resetLayui();
      })//
      // 完成按钮（个人资料）
      $('body').on('click','.confirm',function(){
        $('.forshowDisplay').show();
        $('.forDisplay').hide();
        resetLayui();
      })//
      // 提交按钮（手艺人认证）
      $('body').on('click','.ident_but',function(){
        $('.ident_work').show();
        $('.ident_ifor').hide();
        $('.process2 .pro_radius ').addClass('real_bg');
        $('.process1 .line_').addClass('real_bg2')
    });//
    // 局部刷新模块
    // 动态创建标签
    $('.user-msg a').click(function(){
      $('.userChosen-more').html(user_msg);
      resetLayui();
    })//个人资料
    $('.user-order a').click(function(){
      $('.userChosen-more').html(user_order);
      resetLayui();
    })//我的订单
    $('.user-works a').click(function(){
      $('.userChosen-more').html(user_works);
      resetLayui();
    })//我的作品
    $('.artisan-check a').click(function(){
      $('.userChosen-more').html(artisan_check);
      resetLayui();
    })//手艺人认证
    $('.get-order a').click(function(){
      $('.userChosen-more').html(get_order);
      resetLayui();
    })//定制消息
    // 省市联动 

    // 个人资料
    let user_msg=`
    <div class="forshowDisplay">
     <div class="showuserMsg-title">个人资料</div>
     <div class="showuserContent">
         <div class="contentTitle-username">
             <div class="usernameLeft">用户名:</div>
             <div class="usernameRight">XXX</div>
         </div>
         <div class="contentTitle-born">
             <div class="usernameLeft">出生年月：</div>
             <div class="usernameRight">XXX</div>
         </div>
         <div class="contentTitle-sex">
             <div class="usernameLeft">性别：</div>
             <div class="usernameRight">XXX</div>
         </div>
         <div class="contentTitle-consignee">
             <div class="usernameLeft">收货人：</div>
             <div class="usernameRight">XXX</div>
         </div>
         <div class="contentTitle-contactway">
             <div class="usernameLeft">联系方式：</div>
             <div class="usernameRight">XXX</div>
         </div>
         <div class="contentTitle-address">
             <div class="usernameLeft">收货地址：</div>
             <div class="usernameRight">XXX</div>
         </div>
         <div class="contentTitle-profile">
             <div class="usernameLeft">个人简介：</div>
             <div class="usernameRight">XXX</div>
         </div>
         <div class="contentTitle-revise">
             <input type="button" name="" class="btn-revise" value="修改">
         </div>
     </div>
     </div>
 <div class="forDisplay">        
     <form class="layui-form" action="">
     <div class="chosenTitle">修改资料</div>
     <div class="chosenContent">
         <div class="content-title_input">
             <div class="headPic">
                 <div class="title">修改头像：</div>
                 <div class="layui-upload-list">
                     <img src="../imgs/个人中心/图层8.png" class="layui-upload-img" id="headImg" width="116px" height="115px">
                     <p id="demoText"></p>
                 </div>
                 <button type="button" class="layui-btn" id="picUp">上传图片</button>
             </div>
             <div class="userName">用户名：
                 <input type="text" class="nameInput" name="" id="" style="width: 302px;height: 29px;background: transparent;border: solid 1px #d2d2d2">
             </div>
             <div class="bornYear">出生年月：
                     <div class="layui-input-inline">
             <input type="text" class="layui-input timeChoser"  placeholder="YY--MM--DD" style="background: transparent;border: solid 1px #d2d2d2">
                     </div>
             </div>
             <div class="sex">性别：
             <input type="radio" name="sex" value="男" title="男">
             <input type="radio" name="sex" value="女" title="女">
             </div>
             <div class="consignee">收货人：
                 <input type="text" name="" id="" style="width: 160px;height: 29px;background: transparent;border: solid 1px #d2d2d2">
             </div>
             <div class="contactWay">联系方式：
                 <input type="text" name="" id="" style="width: 160px;height: 29px;background: transparent;border: solid 1px #d2d2d2">
             </div>
             <div class="address">收货地址：
             <div class="addressMove">
                     <div class="layui-input-inline">
                             <select name="quiz1">
                               <option value="">请选择省</option>
                               <option value="浙江" selected="">浙江省</option>
                               <option value="你的工号">江西省</option>
                               <option value="你最喜欢的老师">福建省</option>
                             </select>
                           </div>
                           <div class="layui-input-inline">
                             <select name="quiz2">
                               <option value="">请选择市</option>
                               <option value="杭州">杭州</option>
                               <option value="宁波" disabled="">宁波</option>
                               <option value="温州">温州</option>
                               <option value="温州">台州</option>
                               <option value="温州">绍兴</option>
                             </select>
                           </div>
                           <div class="layui-input-inline">
                             <select name="quiz3">
                               <option value="">请选择县/区</option>
                               <option value="西湖区">西湖区</option>
                               <option value="余杭区">余杭区</option>
                               <option value="拱墅区">临安市</option>
                             </select>
                           </div>
                     </div>      
             </div>
             <div class="profile">
             <div>个人简介：</div>
                <textarea name="" id=""  style="width:630px; height:70px; background: transparent;border: solid 1px #d2d2d2"></textarea>
             </div>
         </div>
         <div class="confirm_cancel">
             <input type="button"  class="confirm" value="完成">
             <input type="button"  class="cancel"  value="取消">
         </div>
     </div>
 </form>
</div>`
// 我的订单
    let user_order=` <div class="myOrder-title">我的订单</div>
    <div class="orderList">
     <div class="orderList-title">
         <div class="orderList-title1">
             <span>定制列表</span>
         </div>
         <div>
                 <span>手艺人</span>
             </div>
             <div>
                     <span>预算（元）</span>
                 </div>
                 <div>
                         <span>数量</span>
                     </div>
                     <div>
                             <span>状态</span>
                         </div>       
     </div>
     <div class="orderList-content">
         <div class="orderList-content_child">
       <div class="child_worksPic">
           <img src="../imgs/个人中心/图层19.png" width="80px" height="80px">
       </div>
       <div class="child_worksTitle">
         <p>定制工艺品</p>
         <p>"汉绣图案主题,波状之云纹，翱翔之凤鸟"</p>
       </div>
      <div class="child_worksLast4">
          <div>林毅</div>
         <div>2800</div>
         <div>1</div>
         <div>已接单</div>
      </div>       
     </div>    
     </div> 
    </div>`
    // 我的作品
    let user_works=` <div class="myWorks">我的作品
    <div class="load-newWorks"><a>发布新作品</a></div>
</div>
<div class="myWorks-content">
<div class="worksBox">
    <a href="">
        <img src="../imgs/个人中心/图层13.png" alt="" width="227px" height="227px">
    </a>
</div>                          
</div>`
  let artisan_check=`<div class="ident">
  <div class="ident_width">
      <div class="showuserMsg-title">手艺人认证</div>
      <div class="process">
          <div class="process1">
              <div class="pro_radius real_bg"><span>1</span></div>
              <div class="real_name rel_color ">实名认证</div>
              <div class="line_ "></div>
          </div>
          <div class="process2">
              <div class="pro_radius "><span>2</span></div>
              <div class="real_name">实名认证</div>
              <div class="line_"></div>
          </div>
          <div class="process3">
              <div class="pro_radius"><span>3</span></div>
              <div class="real_name ">实名认证</div>
              <div class="line_"></div>
          </div>
          <div class="process4">
              <div class="pro_radius"><span>4</span></div>
              <div class="real_name">实名认证</div>
          </div>
      </div>
      <div class="ident_sub">
          <div class="ident_ifor">
              <form class="layui-form" action="" lay-filter="example">
                  <div class="layui-form-item">
                      <label class="layui-form-label">手机号：</label>
                      <div class="layui-input-block">
                          <input type="text" name="username" lay-verify="title" autocomplete="off"
                              placeholder="请输入正确手机号" class="layui-input">
                      </div>
                  </div>
                  <div class="layui-form-item">
                      <label class="layui-form-label">姓名：</label>
                      <div class="layui-input-block">
                          <input type="password" name="password" placeholder="请输入真实姓名" autocomplete="off"
                              class="layui-input">
                      </div>
                  </div>
                  <div class="layui-form-item">
                      <label class="layui-form-label">证件类型：</label>
                      <div class="layui-input-block">
                          <select name="interest" lay-filter="aihao">
                              <option value=""></option>
                              <option value="0" selected>身份证件</option>
                              <option value="1">护照</option>
                              <option value="2">驾照</option>
                          </select>
                      </div>
                  </div>
                  <div class="layui-form-item">
                      <label class="layui-form-label">证件号</label>
                      <div class="layui-input-block">
                          <input type="password" name="password" placeholder="请填写正确" autocomplete="off"
                              class="layui-input">
                      </div>
                  </div>
                  <div class="layui-form-item">
                      <label class="layui-form-label">手艺分类：</label>
                      <div class="layui-input-block">
                          <select name="interest" lay-filter="aihao">
                              <option value=""></option>
                              <option value="0">陶瓷</option>
                              <option value="1">木雕</option>
                              <option value="2">刺绣</option>
                          </select>
                      </div>
                  </div>
                  <div class="layui-upload">
                      <button type="button" class="layui-btn" id="test2">证件照上传</button>
                      <blockquote class="layui-elem-quote layui-quote-nm" style="margin-top: 10px;">
                          预览图：
                          <div class="layui-upload-list" id="demo2"></div>
                      </blockquote>
                  </div>

                  <div class="ident_but">提交</div>
              </form>
          </div>
          <div class="ident_work">
              <form class="layui-form" action="" lay-filter="example">
                      <div class="layui-form-item">
                              <label class="layui-form-label">单行选择框:</label>
                              <div class="layui-input-block">
                                <select name="interest" lay-filter="aihao">
                                  <option value=""></option>
                                  <option value="0">写作</option>
                                  <option value="1" selected="">阅读</option>
                                  <option value="2">游戏</option>
                                  <option value="3">音乐</option>
                                  <option value="4">旅行</option>
                                </select>
                                <select name="interest" lay-filter="aihao">
                                  <option value=""></option>
                                  <option value="0">写作</option>
                                  <option value="1" selected="">阅读</option>
                                  <option value="2">游戏</option>
                                  <option value="3">音乐</option>
                                  <option value="4">旅行</option>
                                </select>
                              </div>
                            
                      </div>
                  <div class="layui-form-item">
                      <label class="layui-form-label">作品名称：</label>
                      <div class="layui-input-block">
                          <input type="text" name="username" lay-verify="title" autocomplete="off"
                              placeholder="请输入正确手机号" class="layui-input">
                      </div>
                  </div>
                  <div class="layui-form-item">
                      <label class="layui-form-label">规格：</label>
                      <div class="layui-input-block">
                          <input type="password" name="password" placeholder="请填写正确" autocomplete="off"
                              class="layui-input">
                      </div>
                  </div>
                  <div class="layui-form-item">
                      <label class="layui-form-label">价格：</label>
                      <div class="layui-input-block">
                          <input type="password" name="password" placeholder="请填写正确" autocomplete="off"
                              class="layui-input">
                      </div>
                  </div>
                  <div class="layui-form-item">
                      <label class="layui-form-label">作品简介：</label>
                      <div class="layui-input-block">
                          <input type="password" name="password" placeholder="请填写正确" autocomplete="off"
                              class="layui-input">
                      </div>
                  </div>
                  <div class="layui-upload">
                      <button type="button" class="layui-btn" id="test3">作品上传</button>
                      <blockquote class="layui-elem-quote layui-quote-nm" style="margin-top: 10px;">
                          预览图：
                          <div class="layui-upload-list" id="demo2"></div>
                      </blockquote>
                  </div>
                  <div class="ident_but2">提交</div>
              </form>
          </div>
      </div>
  </div>
</div>`
    // 定制消息
    let get_order=`<div class="myOrder-title">定制消息</div>
    <div class="orderList">
     <div class="getOrder-title">
         <div class="getOrder-title1">
             <span>需求</span>
         </div>
             <div>
                     <span>数量</span>
                 </div>
                 <div>
                         <span>预算（元）</span>
                     </div>
                     <div>
                             <span>状态</span>
                         </div>       
     </div>
     <div class="orderList-content">
         <div class="orderList-content_child">
       <div class="child_worksPic">
           <img src="../imgs/个人中心/图层19.png" width="80px" height="80px">
       </div>
       <div class="getOrder-need">
         <p>曾先生</p>
         <p>需要定制一个如图所示的木质手工艺品，材质要求：乌木
             15912345678</p>
       </div>
      <div class="getOrder_last3">
         <div>1</div>
         <div>2800</div>
         <div><a>立即接单</a></div>
      </div>       
     </div>    
     </div> 
    </div>`
      // layui
    function resetLayui(){
      layui.use(['form', 'upload', 'laydate'], function(){
        var $ = layui.jquery
            form = layui.form
            upload = layui.upload
            laydate = layui.laydate;     
        //常规用法
        form.render();
        laydate.render({
          elem:'.timeChoser'
        });
       //普通图片上传
  var uploadInst = upload.render({
    elem: '#test2,#test3'
    ,url: '/upload/'
    ,before: function(obj){
      //预读本地文件示例，不支持ie8
      obj.preview(function(index, file, result){
        $('#demo2').attr('src', result); //图片链接（base64）
      });
    }
    ,done: function(res){
      //如果上传失败
      if(res.code > 0){
        return layer.msg('上传失败');
      }
      //上传成功
    }
    ,error: function(){
      //演示失败状态，并实现重传
      var demoText = $('#demoText');
      demoText.html('<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-xs demo-reload">重试</a>');
      demoText.find('.demo-reload').on('click', function(){
        uploadInst.upload();
      });
    }
  });
      });//

    };
})

