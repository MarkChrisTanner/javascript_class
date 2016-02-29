/**
 * Created by marktanner on 2/27/16.
 */
/* http://www.tutorialspoint.com/jqueryui/jqueryui_menu.htm
got some of the code and notes from this site
 */
var menuV=false

function menuHide() {
    $('#menuBox').fadeOut();
}

function menuShow() {
    $('#menuBox').fadeIn();
}

function allTheThings() {
    /*
    $('#menu1').hover(
        function () { $(this).addClass('hidden'); },
        function () { $(this).delay(1000).removeClass('hidden'); }
    );
    */
    $('#menu1').menu();
    $('header').text('Not the Beer you were looking for page you were looking for')

    $('#button').on('click', function(e) {
        e.preventDefault();
        if (menuV == false) {
            menuShow();
            menuV=true;
        } else {
            menuV=false;
            menuHide();
        }

    });

    $(".right").on({
        mouseenter: function () {
            $('.right').text('something something darkside');
        },
        mouseleave: function () {
            $('.right').text('This is the end of something');
        }
    });

}

$(allTheThings)