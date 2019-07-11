jQuery(document).ready(function($) {
        //header fix
        function minheader() {
            if (window.matchMedia('(min-width: 990px)').matches) {     
                var wd = $(window).scrollTop();
        
                if (wd >= 100) {
                    $("main  header").addClass("min-header");
                    $('.min-header .appicon').show();
                    $("main  header .logo").hide();
                }
                else {
                    $('.appicon').hide();
                    $("main  header .logo").show();
                    $("main header").removeClass("min-header");
                }
            }    
        }
        minheader();
        $(document).scroll(function () {
            minheader();
        });

     
    
        
    // share js
    $(window).scroll(function() {
        if (window.matchMedia('(min-width: 990px)').matches) {     
            var scroll = $(window).scrollTop();
            if (scroll >= 200) {
                $(".share").addClass("ss_top");
            }
            else {
                $(".share").removeClass("ss_top");
            }
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

     // career page js
     jQuery("a[href^='#how-form']").click(function(e) {
        e.preventDefault();
        var position = jQuery(jQuery(this).attr("href")).offset().top;
        jQuery("body, html").animate({
            scrollTop: position
        } /* speed */ );
    });

    // career page js
    jQuery("a[href^='#career-form']").click(function(e) {
        e.preventDefault();
        var position = jQuery(jQuery(this).attr("href")).offset().top;
        jQuery("body, html").animate({
            scrollTop: position
        } /* speed */ );
    });

});
