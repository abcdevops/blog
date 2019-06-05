jQuery(document).ready(function($) {
        //header fix
        function minheader() {
            var wd = $(window).scrollTop();
    
            if (wd >= 100) {
                $("main  header").addClass("min-header");
                $(".min-header .logo").attr("src", "/images/logo-abc-home.png");
            }
            else {
                $(".min-header .logo").attr("src", "/images/logo-abc-home.png");
                $("main header").removeClass("min-header");
            }
        }
        minheader();
        $(document).scroll(function () {
            minheader();
        });
    
        
    // share js
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 200) {
            $(".share").addClass("ss_top");
        }
        else {
            $(".share").removeClass("ss_top");
        }
    }); 
    
            


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
