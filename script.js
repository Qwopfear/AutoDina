$('.menu_btn').on('click', function(e){
    e.preventDefault();
    $('.burger_line').toggleClass('menu_btn_active');
    $('.burger_nav').toggleClass('burger_nav_active')
})

$('.burger_line').on('click', function(e){
    $('.burger_line').toggleClass('menu_btn_active');
    $('.burger_nav').toggleClass('burger_nav_active')
})

