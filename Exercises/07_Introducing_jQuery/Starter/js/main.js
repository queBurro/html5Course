$(function () { //this is the shortcut to "ready"... don't load until all of page is there
    $('aside div').slideUp();

    $('aside').on('click', function () {
        $(this).children('div').slideToggle(2000);
    });

    $('#mytabs').tabs();
});

