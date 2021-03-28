$(function () {
    $(".toggleLan").click(function () {
        $(".menu-area").toggle();
    })

    $(".about").click(function () {
        $('html, body').animate({scrollTop: $('#footer').offset().top}, 1000)
    })
})
