//Animations on Scroll


$('.js--wp-1').waypoint(function(direction) {
    $('.js--wp-1').addClass('animated fadeIn');
}, {
    offset: '50%' //make the animation happen a little earlier
});