"use strict";

let dist = 300;

function slider(cycle, direction) {
    if (direction === 'left') {
        let position = dist * (-2);
        $('.single-slider').animate({
            left: position,
        });
        if (cycle === 1) {
            $('.single-slider').promise().done(function () {
                $('.single-slider:last').after($('.single-slider[data-id="5"]'));
                position += dist;
                $('.single-slider').css('left', position + 'px');
            })
        } else {
            $('.single-slider').promise().done(function () {
                $('.single-slider:last').after($('.single-slider[data-id="' + (cycle - 2) + '"]'));
                position += dist;
                $('.single-slider').css('left', position + 'px');
            })
        }

    } else if (direction === 'right') {
        let position = 0;
        $('.single-slider').animate({
            left: position,
        });
        if (cycle === 10) {
            $('.single-slider').promise().done(function () {
                $('.single-slider:first').before($('.single-slider[data-id="1"]'));
                position -= dist;
                $('.single-slider').css('left', position + 'px');
            })
        } else {
            $('.single-slider').promise().done(function () {
                $('.single-slider:first').before($('.single-slider[data-id="' + (cycle - 1) + '"]'));
                position -= dist;
                $('.single-slider').css('left', position + 'px');
            })
        }
    }
}

(function ($) {
    $(function () {

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
            if (cycle === 6) {
                cycle = 1;
            } else {
                cycle += 1;
            }
            $('#cycle').text(cycle);
            slider(cycle, 'left');
        });

        $('#buttons-wrapper').on('click', '.right-click', function (event) {
            event.preventDefault();
            if (cycle === 1) {
                cycle = 6;
            } else {
                cycle -= 1;
            }
            $('#cycle').text(cycle);
            slider(cycle, 'right');
        });

    })
})(jQuery);