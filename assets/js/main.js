jQuery(document).ready(function($) {
    var bannerheight = $(window).height() - $('.main-menu').height();
    $('.banner').height(bannerheight);


    var gaugewidth = (( ($(window).width()-(($(window).width()*10)/100))) / 4)-60;
    $('.GaugeMeter').attr('data-size',gaugewidth);


    var offset = $('.main-menu').offset().top
    $(window).scroll(function() {
        if ($(window).scrollTop() >= offset) {
            $('.main-menu').addClass('sticky');
        }else{
            $('.main-menu').removeClass('sticky');
        }
    });




    $('#item-timeline-1').on("click",function(){
        $('.item-timeline').removeClass('active');
        $(this).addClass('active');
        $('.body-formations').addClass('hidden');
        $('#body-formations-1').removeClass('hidden');
    });
    $('#item-timeline-2').on("click",function(){
        $('.item-timeline').removeClass('active');
        $(this).addClass('active');
        $('.body-formations').addClass('hidden');
        $('#body-formations-2').removeClass('hidden');
    });
    $('#item-timeline-3').on("click",function(){
        $('.item-timeline').removeClass('active');
        $(this).addClass('active');
        $('.body-formations').addClass('hidden');
        $('#body-formations-3').removeClass('hidden');
    });
    $('#item-timeline-4').on("click",function(){
        $('.item-timeline').removeClass('active');
        $(this).addClass('active');
        $('.body-formations').addClass('hidden');
        $('#body-formations-4').removeClass('hidden');
    });
    $(".GaugeMeter").gaugeMeter();
});