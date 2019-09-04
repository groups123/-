$(function(){
    // 点击大分类字体变色
    $('.goods_kinds ul li').click(function(){
        $(this).css('color','#000');
        $(this).siblings().css('color','rgb(255,255,255)')
    });
    // 点击最新/精选/排序出现下划线;
    $('.goods_popor ul li').click(function(){
        $(this).addClass('line_').siblings().removeClass('line_')
    });



// 拼接数据............................数据库。。。。。
    /*
    var json1;
    if(window.XMLHttpRequest){
        json1=new XMLHttpRequest;
        // 从数据库获取信息..........................数据库
        json1.open("GET","。。。。。。。。。",true);
        json1.send();
        json1.onreadystatechange=function(){
            if(json1.readyState==4 && json1.status==200){
                var text=JSON.parse(json1.responseText);
                 console.log(text)
                var n=20;//每一页有几个内容
                for(var i=0;i<Math.ceil((text.details.length)/n);i++){//有多少个分页符(分多少几页)
                    document.getElementById("num_").innerHTML+='<div class="num">第<span>'+parseInt(i+1)+'</span>页</div>'
                }
              for(var i=0;i<n;i++){
                    document.getElementsByClassName("goods_detail")[0].innerHTML+='     <div class="shop_detail">
                    <div class="img"><img src="../imgs/goods/f22690f44744de228019fe4ecdc10f45.png" alt=""></div>
                    <div>福禄寿</div>
                    <div>&yen;2000.00</div>
                    <div class="line_"></div>
                    <div class="shop_text">
                      <img src="../imgs/goods/p2517483192.png" alt="">
                      <span>翟秋白</span>
                      <span>发布时间</span>
                    </div>
                  </div>        ';
                }
                var num1=document.getElementsByClassName("num");//获取分页符class名
               for(var s=0;s<num1.length;s++){//遍历每一个分页符
                   num1[s].onclick=function(){
                       document.getElementById("imgs").innerHTML='';
                       console.log(n*(parseInt(this.children[0].innerHTML)-1));
                       console.log(n*parseInt(this.children[0].innerHTML));
                       for(var p=n*(parseInt(this.children[0].innerHTML)-1);p<n*parseInt(this.children[0].innerHTML);p++){
                           //console.log(text.details[p].picname)
                           document.getElementById("imgs").innerHTML+= <div class="shop_detail">
                           <div class="img"><img src="../imgs/goods/f22690f44744de228019fe4ecdc10f45.png" alt=""></div>
                           <div>福禄寿</div>
                           <div>&yen;2000.00</div>
                           <div class="line_"></div>
                           <div class="shop_text">
                             <img src="../imgs/goods/p2517483192.png" alt="">
                             <span>翟秋白</span>
                             <span>发布时间</span>
                           </div>
                         </div>';

                       }
                   }
               }
            }
        }
    }else{
        json1=new ActiveXObject("Microsoft.XMLHTTP");
    }*/




})