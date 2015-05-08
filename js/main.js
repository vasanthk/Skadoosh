(function ($) {

    // initialize Slick Carousel
    $('.video-carousel').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        variableWidth: true
    });

    // Youtube popup play
    $("a.youtube").YouTubePopup({autoplay: 1, draggable: true, hideTitleBar: true});

    // Date time picker for appointment scheduling
    $('#datetimepicker12').datetimepicker({
        inline: true,
        sideBySide: true
    });

    // Site Tour
    var tour = new Shepherd.Tour({
        defaults: {
            classes: 'shepherd-theme-dark',
            //scrollTo: true
        }
    });

    tour.addStep('Live Webcast', {
        text: 'Live Streaming... <br/><br/> <div style="color:yellow">Powered by GoToWebinar</div><br/><br/><br/><br/>',
        attachTo: '#video-stream left',
        buttons: [
            {
                text: 'Next',
                action: tour.next
            }
        ]
    });

    tour.addStep('Chat box', {
        text: 'Chat live with other viewers! <br/><br/><br/><br/>',
        attachTo: '#firechat-wrapper right',
        buttons: [
            {
                text: 'Next',
                action: tour.next
            }
        ]
    });

    tour.addStep('Subscribe', {
        text: '<div style="color:orange">Subscribe to the channel</div><br/><br/><div style="color:orange">Upvote/Downvote</div><br/><br/><div style="color:orange">Share channel in social media</div><br/><br/>',
        attachTo: '.stream-info left',
        buttons: [
            {
                text: 'Next',
                action: tour.next
            }
        ]
    });

    tour.addStep('Recordings', {
        text: '<div>Webcast recordings and other videos</div><br/><br/>',
        attachTo: '.video-carousel left',
        buttons: [
            {
                text: 'Next',
                action: tour.next
            }
        ]
    });

    tour.addStep('Upcoming event timeline', {
        text: '<div>Interactive timeline of upcoming webcasts</div><br/><br/>',
        attachTo: '.events-timeline left',
        buttons: [
            {
                text: 'Next',
                action: tour.next
            }
        ]
    });

    tour.addStep('More Details', {
        text: '<div>More details... Pin your favorite events</div><br/><br/>',
        attachTo: '.scale-up-hover-list left',
        buttons: [
            {
                text: 'Next',
                action: tour.next
            }
        ]
    });

    tour.addStep('One on One', {
        text: '<div>Schedule appointments for one on ones/office hours</div><br/><br/><div style="color:orange">Powered by GoToMeeting</div>',
        attachTo: '.pick-slot left',
        buttons: [
            {
                text: 'Next',
                action: tour.next
            }
        ]
    });

    tour.addStep('Discussion Forum', {
        text: '<div>Share and discuss concepts learnt</div><br/><br/><div style="color:orange">Powered by Podio</div>',
        attachTo: '.discussion-forum-embed left',
        buttons: [
            {
                text: 'Next',
                action: tour.next
            }
        ]
    });

    tour.addStep('Materials shared by Channel', {
        text: '<div>Files and materials shared by Channel</div><br/><br/><div style="color:orange">Powered by Sharefile</div>',
        attachTo: '.materials-embed left',
        buttons: [
            {
                text: 'Finish',
                action: tour.next
            }
        ]
    });

    tour.start();

})(jQuery);
