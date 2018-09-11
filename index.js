(function () {
  function pagesize() {
    var w = window.innerWidth;
    var top = w / 5 + 'px';
    var fontsize = 14 * w/1400 + 'px';
    var t = $('#Typewriter');
    $(t).css({
      'top': top,
      'font-size': fontsize
    });
  }

  $(window).on('resize', function(){
    pagesize();
  });

  pagesize();

})();