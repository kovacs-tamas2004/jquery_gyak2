$(document).ready(function() {
    $('#showHorizontalBtn').click(function() {
      $('.boxH').slideDown();
    });
  
    $('#hideHorizontalBtn').click(function() {
      $('.boxH').slideUp();
    });
  
    $('#toggleHorizontalBtn').click(function() {
      $('.boxH').slideToggle();
    });

    $('#showVerticalBtn').click(function() {
      $('.boxV').slideDown(function() {
        if ($('#boxH1').is(':visible')) {
          $('.boxH').insertAfter($('.boxV:last'));
        }
      });
    });
  
    $('#hideVerticalBtn').click(function() {
      $('.boxV').slideUp();
    });
  
    $('#toggleVerticalBtn').click(function() {
      $('.boxV').slideToggle();
    });
  });