// window.onscroll = function(){
//     var box1 =document.querySelectorAll(".box1")[0];
//     var pag = document.body.scrollTop || document.documentElement.scrollTop;
//     console.log(window.pageYOffset);
//     if (pag > 450){
//      box1.classList.add("move")
//     }
// }

$(window).on("scroll",function(){
    var pag = (document.body.scrollTop || document.documentElement.scrollTop);
    console.log(window.pageYOffset);
    // if (pag> 420){
    // box1.addClass("move")
    // box2.addClass("move1")
    // box3.addClass("move2")
    // }
    if(pag>860){
        $(".box5").addClass("move")
        $(".box6").addClass("move1")
        $(".box7").addClass("move2")
    }
    if(pag>1300){
        $(".box9").addClass("move")
        $(".box10").addClass("move3")
        $(".box11").addClass("move4")
    }
});

$('nav li').on({
    mouseenter: function () {
        $(this).addClass('scale').siblings().removeClass('scale');
        $(this).addClass('line_').siblings().removeClass('line_');
    }
});
$('.icon-sousuo').click(function () {
    $('.header_width .sousuo').toggle();
    $('.header_width .nav nav').toggle();
})  