jQuery(document).ready(function($) {
    $('.mobile-menu').click(function() {
        $('.menu-responsive').toggleClass('m-show');
      });

      function banner_inner_load(){
        var bbimg  =$(".bb-img").text();
        if (bbimg  != 0){
            $(".blog-banner").attr("style", "background:url("+bbimg+") no-repeat; background-size:cover;" );
        }

    }
    banner_inner_load();

    // for career page
    jQuery("a[href^='#career-form']").click(function(e) {
        e.preventDefault();
        var position = jQuery(jQuery(this).attr("href")).offset().top;
        jQuery("body, html").animate({
            scrollTop: position
        } /* speed */ );
    });
});
