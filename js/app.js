$(function () {
    'use strict'

    $(window).on('scroll',function(){
        var scrollTop = $(this).scrollTop();

        if(scrollTop > 600){
            $('#backToTop').fadeIn(500)
        }else{
            $('#backToTop').fadeOut(500)
        }
    })

    $('#backToTop').on('click',function(){
        $('html, body').animate({
            scrollTop:0
        },700)
    })

    $(window).on('load', function(){
        $("#pre-loader").fadeOut(500)
    })

})