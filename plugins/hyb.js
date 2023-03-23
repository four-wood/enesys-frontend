$(function(){
    //News
    $('.qa-content').on('click', function(){
        $(this).children('.answer').slideToggle();
        $(this).children('.qa-title').children('i').toggleClass('fa-minus-circle').toggleClass('fa-plus-circle').toggleClass('rotate');
    });
});