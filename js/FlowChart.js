$(window).on("scroll", function () {
    var pag = (document.body.scrollTop || document.documentElement.scrollTop);
    console.log(window.pageYOffset);
    if (pag > 380) {
        $(".box3").addClass("move3")
        $(".box4").addClass("move4")
    }
    if (pag > 800) {
        $(".box5").addClass("move5")
        $(".box6").addClass("move6")
        $(".box7").addClass("move7")
        $(".box8").addClass("move7")
        $(".box9").addClass("move7")
    }
    if (pag > 1500) {
        $(".box10").addClass("move8")
        $(".box12").addClass("move9")
        $(".box11").addClass("move10")
        $(".box14").addClass("move11")
        $(".box13").addClass("move12")
    }
    if (pag > 2200) {
        $(".box15").addClass("move13")
        $(".box16").addClass("move14")
        $(".box17").addClass("move15")
        $(".box18").addClass("move16")
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
});  