//Animations on Scroll


$('.feature1').waypoint(function(direction) {
    $('.feature1').addClass('animated fadeIn');
}, {
    offset: '50%' //make the animation happen a little earlier
});