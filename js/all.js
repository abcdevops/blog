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
            url: 'https://free.sharedcount.com/?apikey=33fe42ed0045fb028ccd18be4770761de59927fd&url=' + eurl,
            success: function (data) {
                if (data.GooglePlusOne > 0) {
                    $('.count-googleplus').html(number(data.GooglePlusOne)).fadeIn();
                }
                if (data.Twitter > 0){
                    $('.count-twitter').html(number(data.Twitter)).fadeIn();
                }
            },
            error: function() {
                $('.share .google').css('border', border);
                $('.share .twitter').css('border', border);
            }
        });
      $.ajax({
        dataType: 'jsonp',
        async: true,
        timeout: timeout,
        url: 'https://graph.facebook.com/?callback=?&ids=' + eurl,
        success: function(json) {
          var count = json[url].share.share_count;
          if (count > 0) {
            $('.count-facebook').html(number(count)).fadeIn();
          }
        },
        error: function() {
          $('.share .icon-facebook').css('border', border);
        }
      });
      $.ajax({
        dataType: 'json',
        async: true,
        timeout: timeout,
        url: 'https://www.linkedin.com/countserv/count/share?format=jsonp&callback=?&url=' + eurl,
        success: function(json) {
          var count = json.count;
          if (count > 0) {
            $('.count-linkedin').html(number(count)).fadeIn();
          }
        },
        error: function() {
          $('.share .icon-linkedin').css('border', border);
        }
      });
    }
    /*$('h2').each(
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
    );*/
  });
}
