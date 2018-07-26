
//* t7rbi9at dyal date menu *//


var transparent = true;

var transparentDemo = true;
var fixedTop = false;

var navbar_initialized,
    backgroundOrange = false,
    toggle_initialized = false;

$(document).ready(function(){
   $('.date-picker').each(function(){
        $(this).datepicker({
            templates:{
                leftArrow: '<i class="now-ui-icons fa fa-arrow-left"></i>',
                rightArrow: '<i class="now-ui-icons fa fa-arrow-right"></i>'
            }
        }).on('show', function() {
                $('.datepicker').addClass('open');

                datepicker_color = $(this).data('datepicker-color');
                if( datepicker_color.length != 0){
                    $('.datepicker').addClass('datepicker-'+ datepicker_color +'');
                }
            }).on('hide', function() {
                $('.datepicker').removeClass('open');
            });
    });


});

