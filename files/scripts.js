
/*

    // Smooth Scroll To Anchor Script
    $('.btn-scroll').on('click', function () {
        var $anchor = $(this);
        function scrollToAnchor() {
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - offsetVar
            }, 1000, 'easeInOutExpo');
            event.preventDefault();
        }
        if ($(window).width() > 992) {
            var offsetVar = '59';
            scrollToAnchor();
        } else {
            var offsetVar = '0';
            scrollToAnchor();
        }
    });
	
	
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
*/

$('a').click(function smoothScrool(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});


function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
}