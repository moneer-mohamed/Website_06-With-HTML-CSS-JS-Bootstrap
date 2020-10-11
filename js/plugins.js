$(document).ready(function(){

    //loading page
    $(window).on('load',function(){

        $('.loading').fadeOut(2000,function(){

            $('body').css('overflow', 'auto')
        })
    })

    //click on navbar toggler
    $('.navbar-toggler').on('click',function(){
        $('.navbar-toggler .one').toggleClass('top');
        $('.navbar-toggler .two').toggleClass('hidden');
        $('.navbar-toggler .three').toggleClass('bottom');
    })

    //carousel
    $('.carousel').carousel({
        interval: 4000
    })

    //nav color
    $(window).scroll(function(){

        if($(window).scrollTop() >= 200){
            $('nav').css({
                'background-color' : 'rgba(0,0,0,.8)',
                'padding' : '0.5rem 1rem'
            })
        }
        else{
            $('nav').css({
                'background-color' : 'rgba(0,0,0,.5)',
                'padding' : '1rem'
            })
        }

    })
    if($(window).scrollTop() >= 200){
        $('nav').css({
            'background-color' : 'rgba(0,0,0,.8)',
            'padding' : '0.5rem 1rem'
        })
    }
    else{
        $('nav').css({
            'background-color' : 'rgba(0,0,0,.5)',
            'padding' : '1rem'
        })
    }

    //smooth scroll
    $('nav li a').on('click',function(){

        $('html, body').animate({

            scrollTop: $('#' + $(this).data('scroll')).offset().top - 74
        })
    })

    //add class active when scroll
    $(window).scroll(function(){

        $('section').each(function(){

            if($(window).scrollTop() + 65 >= $(this).offset().top){

                $('nav li a[data-scroll="'+ $(this).attr('id') +'"]').addClass('active').parent().siblings().find('a').removeClass('active')
            }
        })
        
    })

    //isotope
    $('.gallary').isotope({
        itemSelector : '.item'
    });

    $('.portfolio ul li').click(function () {

        $(this).addClass('active').siblings().removeClass('active')

        var selector = $(this).attr('data-filter');

        $('.gallary').isotope({
            filter : selector
        });
    });

    //button up
    $(window).scroll(function(){
        if($(window).scrollTop() >= 1000 ){

            $('.up').fadeIn()
        }
        else{

            $('.up').fadeOut()
        }
    })

    $('.up').on('click',function(){

        $('html, body').animate({
            scrollTop: 0
        })
    })

    //venobox
    $(document).ready(function(){
        $('.venobox').venobox({
            bgcolor: '',
            overlayColor: 'rgba(6, 12, 34, 0.85)',
            closeBackground: '',
            closeColor: '#fff',
            infinigall : true
        }); 
    });


})