(function($) {
    "use strict";
    
    /* Configure and customize values below this line */
    
    // Window resize end detection delay
    var windowResizeEndDelay        = 100;
    
    // Target date for coming soon
    var comingSoonTargetDate        = new Date("March 13, 2014 11:13:12");
    
    // Duration of skill circle rotation animation
    var skillCircleRotationDuration = 2500;
    
    // Duration of skill bar
    var skillBarDuration            = 2500;
    
    /* Stop configure and customize values, do not edit below this line */
    
    // Bind window resize end event
    $(window).resize(function() {
        var $this   = $(this);
        clearTimeout($this.data('resize-timeout'));
        $this.data('resize-timeout', setTimeout(function() {
            $this.triggerHandler('resize-end');
        }, windowResizeEndDelay));
    });
    
    // Responsive navigation
    $('.navbar-toggle').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('collapsed');
        $($(this).attr('data-target')).toggle();
    });
    $('.navbar-nav .submenu a, .navbar-nav .megamenu > a').click(function(e) {
        var $next = $(this).next();
        if(0 === $next.length || $(window).width() >= 768) {
            return;
        }
        e.preventDefault();
        $next.toggle();
    });
    $('.navbar-nav .submenu, .navbar-nav .megamenu').hover(function() {
        var $this = $(this);
        setTimeout(function() {
            $this.addClass('show');
        }, 1);
    }, function() {
        var $this = $(this);
        setTimeout(function() {
            $this.removeClass('show');
        }, 1);
    });
    
    // Back to top link
    $('.top').bind('click', function(e) {
        e.preventDefault();
        $.scrollTo({left: 0, top: 0}, 1000);
    });
    $(window).scroll(function() {
        if($(window).scrollTop() > 50) {
            $('.top').show();
        } else {
            $('.top').hide();
        }
    });
    
    // Alert boxes
    $('.alert .close').bind('click', function(e) {
        e.preventDefault();
        $(this).parents('.alert').first().remove();
    });
    
    // Images sliders
    $('.flexslider.images').each(function() {
        var $this = $(this);
        $this.flexslider({
            animation: 'fade',
            animationLoop: true,
            slideshow: false,
            controlNav: false,
            directionNav: false,
            prevText: '',
            nextText: ''
        });
        $this.find('.left-arrow').bind('click', function(e) {
            e.preventDefault();
            $this.flexslider('prev');
        });
        $this.find('.right-arrow').bind('click', function(e) {
            e.preventDefault();
            $this.flexslider('next');
        });
    });
    
    // Text sliders
    $('.flexslider.text').each(function() {
        var $this = $(this);
        $this.flexslider({
            animation: 'fade',
            animationLoop: true,
            slideshow: false,
            controlNav: false,
            directionNav: false,
            prevText: '',
            nextText: ''
        });
        $this.find('.left-arrow').bind('click', function(e) {
            e.preventDefault();
            $this.flexslider('prev');
        });
        $this.find('.right-arrow').bind('click', function(e) {
            e.preventDefault();
            $this.flexslider('next');
        });
    });
    
    // Slide sliders
    $('.flexslider.slide').each(function() {
        var $this = $(this);
        $this.flexslider({
            animation: 'slide',
            animationLoop: true,
            slideshow: false,
            controlNav: false,
            directionNav: false,
            prevText: '',
            nextText: ''
        });
        $this.find('.left-arrow').bind('click', function(e) {
            e.preventDefault();
            $this.flexslider('prev');
        });
        $this.find('.right-arrow').bind('click', function(e) {
            e.preventDefault();
            $this.flexslider('next');
        });
    });
    
    // Testimonial sliders
    $('.flexslider.testimonials').each(function() {
        var $this = $(this);
        $this.flexslider({
            animation: 'fade',
            animationLoop: true,
            slideshow: false,
            controlNav: false,
            directionNav: false,
            prevText: '',
            nextText: ''
        });
        $this.find('.left-arrow').bind('click', function(e) {
            e.preventDefault();
            $this.flexslider('prev');
        });
        $this.find('.right-arrow').bind('click', function(e) {
            e.preventDefault();
            $this.flexslider('next');
        });
    });
    
    // Carousel sliders
    $('.flexslider.carousel').each(function() {
        var $this = $(this);
        $this.flexslider({
            animation: 'slide',
            animationLoop: true,
            slideshow: false,
            controlNav: false,
            directionNav: false,
            itemWidth: $this.is('.small') ? 140 : 213,
            itemMargin: $this.is('.small') ? 20 : 30,
            prevText: '',
            nextText: ''
        });
        $this.find('.left-arrow').bind('click', function(e) {
            e.preventDefault();
            $this.flexslider('prev');
        });
        $this.find('.right-arrow').bind('click', function(e) {
            e.preventDefault();
            $this.flexslider('next');
        });
    });
    
    // Logo sliders
    $('.flexslider.logo-slider').each(function() {
        var $this = $(this);
        $this.flexslider({
            animation: 'slide',
            animationLoop: true,
            slideshow: false,
            controlNav: false,
            directionNav: false,
            itemWidth: 215,
            prevText: '',
            nextText: ''
        });
        $this.find('.left-arrow').bind('click', function(e) {
            e.preventDefault();
            $this.flexslider('prev');
        });
        $this.find('.right-arrow').bind('click', function(e) {
            e.preventDefault();
            $this.flexslider('next');
        });
    });
    
    // Horizontal tabs slider
    $('.horizontal-tabs').each(function() {
        var $tabs   = $(this);
        var width   = 0;
        $tabs.find('li').each(function() {
            width   += $(this).width();
        });
        if(width > $tabs.width()) {
            $tabs.width($tabs.width() + 2);
            var tar = $tabs.width() - 30;
            $tabs.find('.slide').css({display:'block'}).bind('click', function(e) {
                e.preventDefault();
                var $ul = $tabs.find('ul');
                var cur = parseInt($ul.css('margin-left'));
                $ul.stop().animate({marginLeft: Math.abs(cur - tar) > width ? 1 : cur - tar}, 1000);
            });
        }
    });
    
    // Lightboxes
    $('.lightbox').nivoLightbox();
    
    // Isotope portfolio
    $('.portfolio-filter a').bind('click', function(e) {
        e.preventDefault();
        $('.portfolio').isotope({filter: $(this).attr('href')});
        $(this).parents('.portfolio-filter').eq(0).find('li.active').removeClass('active');
        $(this).parents('li').eq(0).addClass('active');
    });
    $('.portfolio-masonry').isotope({
        itemSelector: '.item',
        layoutMode: 'masonry'
    });
    
    // Coming soon countdown
    var comingSoonDays      = $('#count-days');
    var comingSoonHours     = $('#count-hours');
    var comingSoonMinutes   = $('#count-minutes');
    var comingSoonSeconds   = $('#count-seconds');
    if(0 < comingSoonDays.length && 0 < comingSoonHours.length && 0 < comingSoonMinutes.length && 0 < comingSoonSeconds.length) {
        var countdown       = function() {
            var now         = new Date();
            var remain      = Math.round((comingSoonTargetDate.getTime() - now.getTime()) / 1000);
            if(0 < remain) {
                var days    = Math.floor(remain / 86400);
                var hours   = Math.floor((remain - days * 86400) / 3600);
                var minutes = Math.floor((remain - days * 86400 - hours * 3600) / 60);
                var seconds = remain - days * 86400 - hours * 3600 - minutes * 60;
                comingSoonDays.find('.count').eq(0).attr('class', 'count v' + (Math.floor(days / 10)));
                comingSoonDays.find('.count').eq(1).attr('class', 'count v' + (days % 10));
                comingSoonHours.find('.count').eq(0).attr('class', 'count v' + (Math.floor(hours / 10)));
                comingSoonHours.find('.count').eq(1).attr('class', 'count v' + (hours % 10));
                comingSoonMinutes.find('.count').eq(0).attr('class', 'count v' + (Math.floor(minutes / 10)));
                comingSoonMinutes.find('.count').eq(1).attr('class', 'count v' + (minutes % 10));
                comingSoonSeconds.find('.count').eq(0).attr('class', 'count v' + (Math.floor(seconds / 10)));
                comingSoonSeconds.find('.count').eq(1).attr('class', 'count v' + (seconds % 10));
                setTimeout(countdown, 200);
            }
        };
        countdown();
    }
    
    // Skill sliders
    $(window).scroll(function() {
        $('.skills').each(function() {
            var $skills = $(this);
            if($skills.data('started')) {
                return true;
            }
            if($(window).scrollTop() + $(window).height() * 2 / 3 >= $skills.offset().top) {
                $skills.data('started', true);
                $skills.find('.skill-circle').each(function(index) {
                    var $counter = $(this);
                    setTimeout(function() {
                        $counter.animate({dummy: 1}, {
                            duration: skillCircleRotationDuration,
                            easing:   $.bez([0.13, 0.71, 0.30, 0.94]),
                            step:     function(now) {
                                var $this  = $(this);
                                var $val   = $this.find('.percent');
                                var $left  = $this.find('.left .wrap');
                                var $right = $this.find('.right .wrap');
                                var value  = parseInt($this.data('value'));
                                var right  = Math.min(0, -180 + 3.60 * now * value);
                                var left   = Math.max(-180, -360 + 3.60 * now * value);
                                $val.html(Math.round(now * value) + '%');
                                $left.css({
                                    '-webkit-transform': 'rotate(' + left + 'deg)',
                                    '-ms-transform':     'rotate(' + left + 'deg)',
                                    'transform':         'rotate(' + left + 'deg)'
                                });
                                $right.css({
                                    '-webkit-transform': 'rotate(' + right + 'deg)',
                                    '-ms-transform':     'rotate(' + right + 'deg)',
                                    'transform':         'rotate(' + right + 'deg)'
                                });
                            }
                        });
                    }, index * 250 + 500);
                });
                $skills.find('.skill .value').each(function(index) {
                    var $value  = $(this);
                    var value   = parseInt($value.text());
                    setTimeout(function() {
                        $value.animate({width: value + '%'}, {
                            duration: skillBarDuration,
                            easing:   $.bez([0.13, 0.71, 0.30, 0.94]),
                            step:     function(now) {
                                $value.html(Math.round(now * value / 100) + '%');
                            },
                            complete: function() {
                                $value.html(value + '%');
                            }
                        });
                    }, index * 250 + 500);
                });
            }
        });
    });
    
    /* Sample like gating (implement your own) */
    $('.like').each(function() {
        var $this = $(this);
        $this.bind('click', function(e) {
            e.preventDefault();
            $.post('./like.php', {action: 'vote', id: $this.attr('data-id')}, function(res) {
                if("string" === typeof res.error) {
                    alert(res.error);
                } else if("string" === typeof res.message) {
                    $this.find('.value').html(res.count);
                    alert(res.message);
                } else {
                    alert('Unknown error, please try again later.');
                }
            }, 'json');
        });
        $.post('./like.php', {action: 'count', id: $this.attr('data-id')}, function(res) {
            $this.find('.value').html(res.count);
        }, 'json');
    });
})(jQuery);