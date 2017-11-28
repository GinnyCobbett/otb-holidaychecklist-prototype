$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
    $('[data-toggle="popover"]').on('click', function(e) {
      e.preventDefault();
    });

    var collapseAndShowNext = function(current, next) {
      $(current).addClass('completed');
      $(next).click();
      toggleActive(next);
    };

    var toggleActive = function(element) {
      $('.active').each(function() {
        $(this).toggleClass('active');
      });
      $(element).toggleClass('active');
    };

    $('button[data-target="#customer-details-true"]').on('click', function() {
      collapseAndShowNext($('a[href="#collapse1"]'), $('a[href="#collapse2"]'));
      $('a[href="#collapse1"] .panel-title').html('Details OK');
    });

    $('#collapse2 input[name="optradio"]').on('click', function(event) {
      collapseAndShowNext($('a[href="#collapse2"]'), $('a[href="#collapse3"]'));
      if(event.target.dataset.target === '#insurance-details-true') {
        $('a[href="#collapse2"] .panel-title').html('Insurance OK');
      } else {
        $('a[href="#collapse2"] .panel-title').html('Insurance added to basket');
      }
    });

    $('#collapse2 button[data-target="#insurance-details-true"]').on('click', function(event) {
      collapseAndShowNext($('a[href="#collapse2"]'), $('a[href="#collapse3"]'));
      $('a[href="#collapse2"] .panel-title').html('Insurance OK');
    });

    $('#collapse3 input[name="optradio"]').on('click', function() {
      collapseAndShowNext($('a[href="#collapse3"]'), $('a[href="#collapse4"]'));
      if(event.target.dataset.target === '#parking-details-true') {
        $('a[href="#collapse3"] .panel-title').html('Parking OK');
      } else {
        $('a[href="#collapse3"] .panel-title').html('Airport parking added to basket');
      }
    });

    $('#collapse3 button[data-target="#parking-details-true"]').on('click', function(event) {
      collapseAndShowNext($('a[href="#collapse3"]'), $('a[href="#collapse4"]'));
      $('a[href="#collapse3"] .panel-title').html('Parking OK');
    });

    $('button[data-target="#customer-flights-true"]').on('click', function() {
      collapseAndShowNext($('a[href="#collapse4"]'), $('a[href="#collapse5"]'));
      $('a[href="#collapse4"] .panel-title').html('Flights OK');
    });

    $('button[data-target="#customer-hotel-true"]').on('click', function() {
      collapseAndShowNext($('a[href="#collapse5"]'), $('a[href="#collapse6"]'));
      $('a[href="#collapse5"] .panel-title').html('Hotel OK');
    });

    $('#collapse6 input[name="optradio"]').on('click', function() {
      collapseAndShowNext($('a[href="#collapse6"]'), $('a[href="#collapse6"]'));
      if(event.target.dataset.target === '#customer-transfers-true') {
        $('a[href="#collapse6"] .panel-title').html('Transfer OK');
      } else {
        $('a[href="#collapse6"] .panel-title').html('Transfer added to basket');
      }
    });

    $('button[data-target="#customer-transfers-true"]').on('click', function() {
      collapseAndShowNext($('a[href="#collapse6"]'), $('a[href="#collapse6"]'));
      $('a[href="#collapse6"] .panel-title').html('Transfer OK');
      $("html, body").animate({ scrollTop: 0 }, "slow");
      $('.holiday-checklist__intro').hide();
      $('.checklist-completed').show();
    });

    $('a').on('click', function() {
      toggleActive($(this));
    });
});
