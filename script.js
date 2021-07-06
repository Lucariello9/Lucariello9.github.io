// iniziano i tipi assoluti
$(document).ready(function() {
    $('.nav-tab-custom .heading').on('click', function() {
        let selectedTab = $(this);
        let allTabs = $('.nav-tab-custom .heading');
        let tabImage = $('.nav-tab-img img');

        tabImage.attr('src', selectedTab.data('img'));
        allTabs.removeClass('active');
        selectedTab.addClass('active');
    });
});
// tipi assoluti fine

// inizio area video
$(document).ready(function() {

    $(document).on('click', '.movie', function(e) {
        var video = $(this).get(0);
        if (video.paused === false) {
            video.pause();
        } else {
            video.play();
        }
        return false;
    });
});

// interruttore della barra di navigazione reattivo
$(document).ready(function() {
    $('#bars').on('click', function() {
        if ($('#bars').hasClass('fa-bars')) {
            $('#bars').removeClass('fa-bars');
            $('#bars').addClass('fa-times');
        } else {
            $('#bars').removeClass('fa-times');
            $('#bars').addClass('fa-bars');
        }
    })
});

$(document).ready(function() {

    $('.collapse').on('shown.bs.collapse', function() {
        console.log('Show');
        $('.navbar').addClass('navbar-black');
    });

    $('.collapse').on('hidden.bs.collapse', function() {
        $('.navbar').removeClass('navbar-black');
    });

});

// 
$(document).ready(function() {
    $('.Packaging_slider_area').slick({
        dots: true,
        autoplay: true,
        prevArrow: false,
        nextArrow: false,
        slidesToShow: 1,
        responsive: [{
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.concept_slider_area').slick({
        dots: true,
        autoplay: true,
        prevArrow: false,
        nextArrow: false,
    });
    $('.concept_slider_area_1').slick({
        dots: true,
        autoplay: true,
        prevArrow: false,
        nextArrow: false,
        variableWidth: true,
        slidesToShow: 4

    });
});