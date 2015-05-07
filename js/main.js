(function ($) {

    // initialize Slick Carousel
    $('.video-carousel').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        variableWidth: true
    });

    $("a.youtube").YouTubePopup({autoplay: 1, draggable: true, hideTitleBar: true});

    $('#datetimepicker12').datetimepicker({
        inline: true,
        sideBySide: true
    });

})(jQuery);
