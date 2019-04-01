$(document).ready(function() {
  // sticky navigation
  $(".js--section-spec").waypoint(
    function(direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "70px"
    }
  );

  // scroll on btns
  $(".js--scroll-to-start").click(function() {
    $("html, body").animate(
      { scrollTop: $(".js--section-spec").offset().top },
      1000
    );
  });

  // nav scroll
  $(function() {
    // Select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function() {
        // On-page links
        if (
          location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          let target = $(this.hash);
          target = target.length
            ? target
            : $("[name=" + this.hash.slice(1) + "]");
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            // event.preventDefault();
            $("html, body").animate(
              {
                scrollTop: target.offset().top
              },
              1000,
              function() {
                // Callback after animation
                // Must change focus!
                let $target = $(target);
                $target.focus();
                if ($target.is(":focus")) {
                  // Checking if the target was focused
                  return false;
                } else {
                  $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                  $target.focus(); // Set focus again
                }
              }
            );
          }
        }
      });
  });

  // animation on scroll
  $(".js--wp-1").waypoint(
    function(direction) {
      $(".js--wp-1").addClass("animated fadeIn");
    },
    {
      offset: "60%"
    }
  );

  $(".js--wp-2").waypoint(
    function(direction) {
      $(".js--wp-2").addClass("animated fadeIn");
    },
    {
      offset: "60%"
    }
  );

  $(".js--wp-3").waypoint(
    function(direction) {
      $(".js--wp-3").addClass("animated fadeIn");
    },
    {
      offset: "60%"
    }
  );

  // mobile navigation
  $(".js--nav-icon").click(function(e) {
    let nav = $(".js--main-nav");
    let icon = $(".js--nav-icon i");

    nav.slideToggle(200);

    if (icon.hasClass("ion-navicon-round")) {
      icon.addClass("ion-close-round");
      icon.removeClass("ion-navicon-round");
    } else {
      icon.addClass("ion-navicon-round");
      icon.removeClass("ion-close-round");
    }

    e.preventDefault();
  });
});

$(window).resize(function() {
  var winwidth = $(window).innerWidth();
  if (winwidth > 767) {
    $("[style]").removeAttr("style");
  }
});
