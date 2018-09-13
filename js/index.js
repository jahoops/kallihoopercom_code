$(function () {

  $('#pagepiling').pagepiling({
    menu: '#menu',
    anchors: ['home', 'leadership', 'cad', 'drum', 'desert', 'blurred','excel', 'gallery', 'contact'],
    sectionsColor: ['rgb(235, 230, 221)', 'rgb(235, 230, 221)', 'rgb(235, 230, 221)', 'rgb(235, 230, 221)',
    'rgb(235, 230, 221)', 'rgb(235, 230, 221)', 'rgb(235, 230, 221)', 'rgb(235, 230, 221)','rgb(235, 230, 221)'],
    direction: 'horizontal',
    navigation: {
      'position': 'right',
      'tooltips': ['Home', 'Leadership', 'CAD', 'Sound', 'Clock','Blur', 'Excel', 'Gallery', 'Contact']
    },
    afterRender: function () {   
    }
  });

  function pagesize() {
    var iw = $('#home').innerWidth();
    var w = iw/1400; 
    console.log(iw,w);
    var top =  400*w + 'px';
    var fontsize = 14 * w + 'px';
    var t = $('#typewriter');
    $(t).css({
      'top': top,
      'font-size': fontsize
    });
  }

  $(window).on('resize', function () {
    pagesize();
  });

  pagesize();

  $('.clockprojecticon').on('mouseenter', function () {
    if ($('#clock').css('top') !== '3vh') {
      $('#clock').css('top', '3vh');
    }
  });
  $('.clockprojecticon').on('mouseleave', function () {
    $('#clock').css('top', '250vh');
  });

  //gallery
  var elem = document.querySelector('#photos');
  var msnry = new Masonry( elem, {
  });

  //clock
  var secondHand = document.querySelector('.second-hand');
  var minuteHand = document.querySelector('.min-hand');
  var hoursHand = document.querySelector('.hour-hand');
  var now = new Date();
  var lastsecond = now.getSeconds();

  function clock() {
    var now = new Date();
    var seconds = now.getSeconds();
    if(seconds !== lastsecond){
      lastsecond = seconds;  
      var secondsDegrees = ((seconds / 60) * 360) + 90;
      secondHand.style.transform = 'rotate(' + secondsDegrees +'deg)';
      var mins = now.getMinutes();
      var minutesDegrees = ((mins / 60) * 360) + 90;
      minuteHand.style.transform = 'rotate(' + minutesDegrees +'deg)';
      var hours = now.getHours();
      var hoursDegrees = ((hours / 12) * 360) + 90;
      hoursHand.style.transform = 'rotate(' + hoursDegrees +'deg)';
    }
  
    requestAnimationFrame(clock);
  }

  requestAnimationFrame(clock);
  
});