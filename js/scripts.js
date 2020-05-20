$(document).ready(function(){
    $('#mycarousel').carousel({interval:800});
    $('#carouselButton').click(function(){
        if($('#carouselButton').children('span').hasClass('fa-pause')){
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }  
        else  if($('#carouselButton').children('span').hasClass('fa-play')){
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }        
    });
});

$(document).ready(function(){

    $('#login').click(function(){
        $('#loginModal').modal('show');
    });

    $('.clos').click(function(){
        $('#loginModal').modal('hide');
    });

    $('#reserve').click(function(){
        $('#reserveModal').modal('show');
    });

    $('.closee').click(function(){
        $('#reserveModal').modal('hide');
    });

    });