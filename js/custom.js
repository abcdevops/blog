jQuery(document).ready(function($) {
        //header fix
        function minheader() {
            if (window.matchMedia('(min-width: 990px)').matches) {     
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
});
