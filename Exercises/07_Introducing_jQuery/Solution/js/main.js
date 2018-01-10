$(function () {
   
    $('aside div').slideUp();
    $('aside').on('click', function () {
        $(this).children('div').slideToggle(2000);
    });

    $('#mytabs').tabs();
});
