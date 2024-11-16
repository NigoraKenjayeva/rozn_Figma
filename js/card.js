document.addEventListener('DOMContentLoaded', function () {
    new Splide('.splide', {
        type        : 'fade',        // Use a fade transition for the slides
        heightRatio : 0.5,           // Adjust the height ratio of the slider
        pagination : true,           // Enable pagination (dots)
        arrows     : true,           // Show arrows for navigation
        autoplay   : true,           // Enable auto-play for the slider
        interval   : 5000,           // Set the interval time for auto play (5 seconds)
    }).mount();
});