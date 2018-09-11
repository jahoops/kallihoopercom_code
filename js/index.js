(function () {
  function pagesize() {
    var w = window.innerWidth;
    var top = w / 5 + 'px';
    var fontsize = 14 * w / 1400 + 'px';
    var t = $('#Typewriter');
    $(t).css({
      'top': top,
      'font-size': fontsize
    });
  }

  $(window).on('resize', function () {
    pagesize();
  });

  pagesize();

  $('#pagepiling').pagepiling({
    menu: '#menu',
    anchors: ['Typewriter', 'leadership', 'cad', 'javascript', 'drum', 'desert', 'blurred','excel', 'gallery', 'contact'],
    sectionsColor: ['#bfda00', '#2ebe21', '#2C3E50', '#51bec4','#bfda00', '#2ebe21', '#2C3E50', '#51bec4','#bfda00', '#2ebe21'],
    direction: 'horizontal',
    navigation: {
      'position': 'right',
      'tooltips': ['Home', 'Leadership', 'CAD', 'JavaScript','Sound', 'Clock','Blur', 'Excel', 'Gallery', 'Contact']
    },
    afterRender: function () {
      //playing the video
      console.log('callback after render');
    }
  });

  $('.clockprojecticon').on('mouseenter', function () {
    if ($('#clock').css('top') !== '3vh') {
      $('#clock').css('top', '3vh');
    }
  });
  $('.clockprojecticon').on('mouseleave', function () {
    $('#clock').css('top', '250vh');
  });

})();