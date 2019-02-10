"use strict";

//moving distance
let dist = 300;



function slider(cycle, direction) {
    if (direction === 'left') {
        let position = dist * (-2);
        $('.single-slider').animate({
            left: position,
        }, 500);
        $('.single-slider').promise().done(function () {
            $('.single-slider:last').after($('.single-slider[data-id="' + (cycle - 1) + '"]'));
            position += dist;
            $('.single-slider').css('left', position + 'px');

            $('#left-click').addClass('left-click');
        })
    } else if (direction === 'right') {
        let position = 0;
        $('.single-slider').animate({
            left: position,
        }, 500);
        $('.single-slider').promise().done(function () {
            $('.single-slider:first').before($('.single-slider[data-id="' + (cycle - 1) + '"]'));
            position -= dist;
            $('.single-slider').css('left', position + 'px');

            $('#right-click').addClass('right-click');
        })
    }
}

(function ($) {
    $(function () {
        //number of slides

        let slidesNumber = $('.single-slider').length;

        let cycle = 1;
        $('#cycle').text(cycle);
        $('.single-slider').each(function (index) {
            $(this).attr('data-id', index);
        });

        $('.single-slider').each(function (index) {
            $(this).css('float', 'left');
            $(this).css('left', '-' + dist + 'px');
        });

        $('#buttons-wrapper').on('click', '.left-click', function (event) {
            event.preventDefault();
            $('#left-click').removeClass('left-click');
            slider(cycle, 'left');
            if (cycle === slidesNumber) {
                cycle = 1;
            } else {
                cycle += 1;
            }
            $('#cycle').text(cycle);
        });

        $('#buttons-wrapper').on('click', '.right-click', function (event) {
            event.preventDefault();
            if (cycle === 1) {
                cycle = slidesNumber;
            } else {
                cycle -= 1;
            }
            $('#cycle').text(cycle);
            $('#right-click').removeClass('right-click');
            slider(cycle, 'right');
        });

    })
})(jQuery);