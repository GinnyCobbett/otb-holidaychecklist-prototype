$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
    $('[data-toggle="popover"]').on('click', function(e) {
      e.preventDefault();
    });

    var collapseAndShowNext = function(current, next) {
      $(current).removeClass('incomplete');
      $(current).addClass('completed');
      $(next).click();
      toggleActive(next);
      checkIfCompleted();
    };

    var toggleActive = function(element) {
      $('.active').each(function() {
        $(this).toggleClass('active');
      });
      $(element).toggleClass('active');
    };

    var checkIfCompleted = function() {
      var numberCompleted = $('.accordion-panel.completed').length;
      var numberIncomplete = $('.accordion-panel.incomplete').length;

      if (numberIncomplete > 0) {
        $('.no-changes-text').hide();
        $('.callback-text').show();
        $('#checklist-complete').attr('action', 'callback.html')
      } else {
        $('.no-changes-text').show();
        $('.callback-text').hide();
        $('#checklist-complete').attr('action', 'success.html')
      }

      if (numberCompleted + numberIncomplete === 6) {
        $('.button-checkout').prop('disabled', false);
      }
    };

    $('button[data-target="#customer-details-true"]').on('click', function() {
      collapseAndShowNext($('a[href="#collapse1"]'), $('a[href="#collapse2"]'));
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
    });

    $('button[data-target="#customer-flights-true"]').on('click', function() {
      collapseAndShowNext($('a[href="#collapse4"]'), $('a[href="#collapse5"]'));
    });

    $('button[data-target="#customer-hotel-true"]').on('click', function() {
      collapseAndShowNext($('a[href="#collapse5"]'), $('a[href="#collapse6"]'));
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
    });

    $('a').on('click', function() {
      toggleActive($(this));
    });

    $('.button-checkout').on('click', function() {
      if ($('.accordion-panel.completed').length === 6) {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        $('.holiday-checklist__intro').hide();
        $('.checklist-completed').show();
      } else {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        $('.holiday-checklist__intro').hide();
        $('.checklist-incomplete').show();
      }
    });

    $('.button-change-details').on('click', function() {
      var options = ['#collapse1', '#collapse2', '#collapse3', '#collapse4', '#collapse5', '#collapse6'];
      var activePanel = $(this).closest('.panel-collapse').prev('.accordion-panel');
      var href = $(activePanel).attr('href');
      var position = options.indexOf(href) + 1;
      var currentPanel = 'a[href="' + href + '"]';
      var nextPanel = 'a[href="' + options[position] + '"]';

      if (currentPanel === 'a[href="#collapse6"]') {
        $(currentPanel).click();
        $(currentPanel).removeClass('active');
      } else {
        $(nextPanel).click();
      }
      $('.button-checkout').prop('disabled', true);
      $('.additional-info').show();
      $(activePanel).removeClass('completed');
      $(activePanel).addClass('incomplete');

      checkIfCompleted();
    });
});
