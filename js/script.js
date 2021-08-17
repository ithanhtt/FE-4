//Nav Responsive
$(document).ready(function () {
    $('.navbar-menu-res').hide();
    $('.navbar-icon').click(function (e) { 
        e.preventDefault();
        $('.navbar-menu-res').toggle('');
    });
});
//About Us
$('.about-us').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
});