(function($) {
    "use strict";
    
    // Show, hide effects easing
    var plEasing    = $.bez([0.13, 0.71, 0.30, 0.94]);
    
    // Force show after this number of milliseconds even if not loaded
    var plForce     = 5000;
    
    // Duration of preloader hide effect
    var plHide      = 500;
    
    // Duration of preloader content show effect
    var plShow      = 1500;
    
    // Total images left to load count + current images count
    var plTCount    = $('img').length + 1;
    var plCCount    = 0;
    
    // Define a step callback to be triggered each time an image loads
    function plStep() {
        var percent = Math.ceil((plCCount + 1) * 100 / plTCount) + '%';
        var ready   = $('.preload-content').data('ready');
        if(true !== ready) {
            $('.preload-value').css('width', percent);
            $('.preload-loader').html(percent);
            if(plCCount === plTCount - 1) {
                $('.preload-content').data('ready', true);
                $('.preload-bar, .preload-loader').animate({opacity: 0}, {duration: plHide, easing: plEasing, complete: function() {
                    $(this).hide();
                    $('.preload-content').animate({opacity: 1}, {duration: plShow, easing: plEasing});
                }});
            }
        }
    }
    
    // Walk all available images in the dom & attach listeners
    $('img').one('load', function() {
        plCCount++;
        plStep();
    }).each(function() {
        if(this.complete) {
            $(this).load();
        }
    });
    
    // Loading shouldn't really take too much, so just force show after plForce milliseconds
    setTimeout(function() {
        if(plCCount < plTCount - 1) {
            plCCount = plTCount - 1;
            plStep();
        }
    }, plForce);
    
    // Trigger the pl step once to setup the scene + to cover the case if there are no images
    $(document).ready(function() {
        plStep();
    });
})(jQuery);