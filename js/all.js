/*globals $:false, window:false, document:false */
if (typeof($) != 'undefined') {
  $(function() {
    'use strict';
    function number(num) {
      if (num > 1000) {
        return (num / 1000).toFixed(1) + 'k';
      }
      return num;
    }
    if ($('.buttons').css('display') !== 'none') {
      $('.button').click(
        function (event) {
          event.preventDefault();
          var $this = $(this);
          window.open(
            $this.attr('href'),
            $this.attr('title'),
            'width=640,height=300'
          );
        }
      );
      var url = document.location.href.split('?')[0].split('#')[0],
        eurl = encodeURIComponent(url),
        border = '1px solid #ffa094',
        timeout = 5000;
        $.ajax({
            dataType: 'json',
            async: true,
            timeout: timeout,
            url: 'https://free.sharedcount.com/?apikey=a92cf89a88dc0f8736df1a93c50286b4a62ac731&url=' + eurl,
            success: function (data) {
                if (data.Twitter > 0){
                    $('.count-twitter').html(number(data.Twitter)).fadeIn();
                }
                if (data.LinkedIn > 0) {
                  $('.count-linkedin').html(number(data.LinkedIn)).fadeIn();
                }
                if (data.Facebook.total_count > 0 ){
                  $('.count-facebook').html(number(data.Facebook.total_count)).fadeIn();
                }
                if (data.Pinterest > 0) {
                  $('.count-pinterest').html(number(data.Pinterest)).fadeIn();
                }
                if (data.StumbleUpon > 0) {
                  $('.count-stumbleupon').html(number(data.StumbleUpon)).fadeIn();
                }
            },
            error: function() {
                $('.share .google').css('border', border);
                $('.share .twitter').css('border', border);
            }
        });
      
    }
    $('h2').each(
      function (idx, element) {
        var $element = $(element), id = $element.attr('id');
        if (id) {
          $element.attr('name', id).append(
            $('<a/>').addClass('link')
              .attr('href', '#' + id)
              .append('<i class="icon icon-link notranslate"></i>')
          );
        }
      }
    );
    $('.main p a, .main ul a, .main ol a').each(
      function (idx, a) {
        if (a.hostname && a.hostname !== window.location.hostname) {
          $(this).append('<i class="icon icon-exit foreign"></i>');
        }
      }
    );
  });
}
