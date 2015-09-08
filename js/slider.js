(function($) {
    "use strict";
    
    $(document).ready(function() {
        $('.slider').revolution({
            delay:150000,
            startwidth:940,
            startheight:450,
            autoHeight:"off",
            fullScreenAlignForce:"off",

            onHoverStop:"on",

            thumbWidth:100,
            thumbHeight:50,
            thumbAmount:3,

            hideThumbsOnMobile:"off",
            hideBulletsOnMobile:"off",
            hideArrowsOnMobile:"off",
            hideThumbsUnderResoluition:0,

            hideThumbs:0,

            navigationType:"bullet",
            navigationArrows:"solo",
            navigationStyle:"round",

            navigationHAlign:"center",
            navigationVAlign:"bottom",
            navigationHOffset:30,
            navigationVOffset:30,

            soloArrowLeftHalign:"left",
            soloArrowLeftValign:"center",
            soloArrowLeftHOffset:20,
            soloArrowLeftVOffset:0,

            soloArrowRightHalign:"right",
            soloArrowRightValign:"center",
            soloArrowRightHOffset:20,
            soloArrowRightVOffset:0,


            touchenabled:"off",

            stopAtSlide:-1,
            stopAfterLoops:-1,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            hideSliderAtLimit:0,

            dottedOverlay:"none",

            fullWidth:"off",
            forceFullWidth:"off",
            fullScreen:"off",
            fullScreenOffsetContainer:"#topheader-to-offset",

            shadow:0
        });
    });
})(jQuery);