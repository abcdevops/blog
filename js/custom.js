jQuery(document).ready(function($) {


    
    //header fix
    function minheader() {
        var wd = $(window).scrollTop();

        if (wd >= 80) {
            $("main > header").addClass("min-header");
            $(".min-header .logo").attr("src", "/images/min-logo.png");
        }
        else {
            $(".min-header .logo").attr("src", "/images/logo-ginvoicing.png");
            $("main > header").removeClass("min-header");
        }
    }

    minheader();

    $(document).scroll(function () {
        minheader();
        social_sroll();
    });

   


    function imgse() {

        var acs = $(".ac1 img").attr("src");
        $("#popimg").attr("src", acs);

        var img_tit = $(".ac1 img").attr("data-title");
        $(".dashboard-title").html("<h1>" +img_tit+ "</h1>");
    }

    $(".img-preview-set").children(".pitem").each(function () {
        $(this).each(function () {
            var ja = $(this).index();
            $(this).addClass("ja" + ja);

        });
    });

    $("#dashboard").click(function (e) {        
        $(".ac1").removeClass("ac1");
        $(".ja0").addClass("ac1");
        $(".ja0 img").attr("src", "images/dashboard.jpg");
        imgse();
        e.preventDefault();
 
    });
    $("#parties").click(function (e) {
        $(".ac1").removeClass("ac1");
        $(".ja1").addClass("ac1");
      $(".ja1 img").attr("src", "images/parties-img.jpg");
        imgse();
        e.preventDefault();
    });
    $("#itemsimg").click(function (e) {
        $(".ac1").removeClass("ac1");
        $(".ja2").addClass("ac1");
            $(".ja2 img").attr("src", "images/item-img.jpg");
        imgse();
        e.preventDefault();
    });
 
    $("#marketing").click(function () {
        $(".ac1").removeClass("ac1");
        $(".ja3").addClass("ac1");
        $(".ja3 img").attr("src", "images/maketing-img.jpg");
        imgse();
    });
 
    $("#sales").click(function (e) {
        $(".ac1").removeClass("ac1");
        $(".ja4").addClass("ac1");
      $(".ja4 img").attr("src", "images/sales.jpg");
        imgse();
        e.preventDefault();
    });
    $("#purchases").click(function () {
        $(".ac1").removeClass("ac1");
        $(".ja5").addClass("ac1");
        $(".ja5 img").attr("src", "images/purchases.jpg");
        imgse();
    });
    $("#reports").click(function (e) {
        $(".ac1").removeClass("ac1");
        $(".ja6").addClass("ac1");
        $(".ja6 img").attr("src", "images/reports-img.jpg");
        imgse();
        e.preventDefault();
    });

    $("#accounting").click(function () {
        $(".ac1").removeClass("ac1");
        $(".ja7").addClass("ac1");
        $(".ja7 img").attr("src", "images/accounting.jpg");
        imgse();
    });

    $("#loan").click(function () {
        $(".ac1").removeClass("ac1");
        $(".ja8").addClass("ac1");
        $(".ja8 img").attr("src", "images/loan.jpg");
        imgse();
    });


    $("#prev-zoom").click(function (e) {
        $(".popup-custom").addClass("act");
        $("body").addClass("bg-black");

        var img_tit = $(".ac1 img").attr("data-title");
        $(".dashboard-title").html("<h1>" +img_tit+ "</h1>");
        description_change();
        e.preventDefault();
    });

    $("#popimg").click(function(e){
        $(".popup-custom").removeClass("act");
        $("body").removeClass("bg-black");
e.preventDefault();

    });

    $("#popclose").click(function (e) {
        $(".popup-custom").removeClass("act");
        $("body").removeClass("bg-black");
        e.preventDefault();
    });


    $(".top-move").click(function (e) {
        $("html, body").animate({scrollTop: 0}, "slow");
        e.preventDefault();
    });
    

    $(".tb-style tr").each(function(){

        var table_rows = $(this).index();
        $(this).children("td:first-child").append('<span>' + table_rows + '</span>');
    });


    $(".mobile-menu").click(function(e){
        $(this).prev(".menu-responsive").toggleClass("m-show");
        e.preventDefault();
    });

    function button_status_active(){
        $(".focus_active").removeClass("focus_active");
        var imgalt = $(".ac1 img").attr("data");
        $("#" +imgalt).addClass("focus_active");
    }


    $("#next-img").click(function(e){

        $(".ac1").next(".pitem").addClass("ac1");
        $(".ac1").prev(".ac1").removeClass("ac1");
        imgse();
        button_status_active();
        description_change();
        e.preventDefault();
    });

    $("#prev-img").click(function(e){
        $(".ac1").prev(".pitem").addClass("ac1");
        $(".ac1").next(".ac1").removeClass("ac1");
        imgse();
        button_status_active();
        description_change();
        e.preventDefault();
    });
    $(".i-prev").click(function(e){
        button_status_active();
        description_change();
        e.preventDefault();
    });



    $("body").keydown(function (e){
        if(e.keyCode === 37) // left arrow
        {
            // your action here, for example
            $("#prev-img").click();
            find_img_blank();
        }
        else if(e.keyCode === 39)    // right arrow
        {
            // your action here, for example
            $("#next-img").click();
            find_img_blank();
        }

        else if (e.keyCode === 27){
            $("#popimg").click();
            $(".inner-child-features").removeClass("inner-icf-active");
        }

    });

    function description_change(){
        var desc_data = $(".ac1 img").attr("alt");
        $(".description-popup p").html(desc_data);
    

    }

    $('.inner-canvas aside a').click(function(event){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top - 250
        }, 500);
        event.preventDefault();
    });

    function banner_inner_load(){
        var bbimg  =$(".bb-img").text();
        if (bbimg  != 0){
            $(".blog-banner").attr("style", "background:url("+bbimg+") no-repeat; background-size:cover;" );
        }

    }

    $(".inner-child-features").click(function(e){
        var  ainn = $(".inner-child-features.inner-icf-active").hasClass("inner-icf-active");
        if(ainn === false){
            $(this).addClass("inner-icf-active");
        }
        else
        {
            $(".inner-child-features").removeClass("inner-icf-active");
        }
e.preventDefault();
    });

    $(".inner-child-features").mouseenter(function(){
        $(".inner-child-features").removeClass("inner-icf-active");
    });


    banner_inner_load();

    $('.ui.accordion').accordion();

    $(document).mousedown(function(e){
        var cc= $(".popup-custom.act");
        var cc1=$(".inner-child-features.inner-icf-active");
        var cc2= $(".pup");
        if( cc.has(e.target).length===0){
                        $("#popimg").click();
        }

        if(cc1.has(e.target).length===0){
            $(".inner-child-features").removeClass("inner-icf-active");
        }

        if(cc2.has(e.target).length===0){
            $(".pup-set").remove();
            $(".closeb").remove();
            $("body").removeClass("bg-black");
        }




    });

    function social_sroll(){
        var ss = $(window).scrollTop();
        if (ss >= 171){
            $(".share").addClass("ss_top");

        }
        else{
            $(".share").removeClass("ss_top");
        }
    }

    $('.share').each(function () {

        var se = $(this).children('a').click(function (e) {
            var $this = $(this);
            window.open($this.attr('href'), $this.attr('title'), 'width=640,height=300'
            );
            e.preventDefault();
        });

    });



    $("a[href]").click(function(e){

        $('html, body').animate({
            scrollTop: $(this.hash).offset().top - 150
        }, 300);
e.preventDefault();
    });

function abc(){
$(".closeb").on("click", function(e){
     $(".pup-set").remove();
     $("body").removeClass("bg-black");
     e.preventDefault();
             });
       
}
  var wdm = $(window).width();
  if (wdm > 990){
      
  
    $(".inner-canvas img").click(function (e){    
        
         var closeb = $(".closeb").length;
         if(closeb === 1){
             $(".closeb").remove();
             $("body").removeClass("bg-black");


         }
         else{
         var img_path= $(this).attr("src");
         var img_alt=$(this).attr('alt');
           console.log("img_path", img_path);
           $(this).after("<div class='pup pup-set'><img src="+ img_path +" alt="+ img_alt +"> <span class='closeb'>x</span></div>");
         
 
             $("body").addClass("bg-black");
         }
    e.preventDefault();
    abc();
     });

  }

    $("#prev-zoom").click(function(e){
        find_img_blank();
        e.preventDefault();
    });

    function find_img_blank(){
        console.log("working");
        $(".img-preview-set img").each(function(){
            var imgsrc= $(this).attr("src");
            if(imgsrc === ""){
                all_set_src();
            }
        });
    }

    function all_set_src(){

        $(".ja1 img").attr("src", "images/parties-img.jpg");
        $(".ja2 img").attr("src", "images/item-img.jpg");
        $(".ja3 img").attr("src", "images/maketing-img.jpg");
        $(".ja4 img").attr("src", "images/sales.jpg");
        $(".ja5 img").attr("src", "images/purchases.jpg");
        $(".ja6 img").attr("src", "images/reports-img.jpg");
        $(".ja7 img").attr("src", "images/accounting.jpg");
        $(".ja8 img").attr("src", "images/loan.jpg");

    }


});
