$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
    $('[data-toggle="popover"]').on('click', function(e) {
      e.preventDefault();
    });

    var collapseAndShowNext = function(current, next, state) {
      $(current).attr('data-state', state);
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

    $('a').on('click', function() {
      toggleActive($(this));
    });

    var checkIfCompleted = function() {
      var numberCompleted = $('[data-state="complete"]').length;
      var numberIncomplete = $('[data-state="incomplete"]').length;
      var numberAdded = $('[data-state="added"]').length;

      if (numberIncomplete > 0) {
        $('.no-changes-text').hide();
        $('.callback-text').show();
        $('#checklist-complete').attr('action', 'callback.html')
      } else {
        $('.no-changes-text').show();
        $('.callback-text').hide();
        $('#checklist-complete').attr('action', 'success.html')
      }

      if (numberCompleted + numberIncomplete + numberAdded === 6) {
        $('.button-checkout').prop('disabled', false);
      }
    };

    $('#party-panel button').on('click', function(event) {
      var action = event.currentTarget.dataset.action;

      if (action === 'complete') {
        collapseAndShowNext($('a[href="#collapse1"]'), $('a[href="#collapse2"]'), 'complete');
      } else if (action === 'change') {
        collapseAndShowNext($('a[href="#collapse1"]'), $('a[href="#collapse2"]'), 'incomplete');
      }
    });

    $('#travel-panel input[type="radio"]').on('change', function(event) {
      var action = event.currentTarget.id;

      if (action === 'insurance-none') {
        collapseAndShowNext($('a[href="#collapse2"]'), $('a[href="#collapse3"]'), 'complete');
      } else {
        collapseAndShowNext($('a[href="#collapse2"]'), $('a[href="#collapse3"]'), 'added');
      }
    });

    $('#parking-panel input[type="radio"]').on('change', function(event) {
      var action = event.currentTarget.id;

      if (action === 'parking-none') {
        collapseAndShowNext($('a[href="#collapse3"]'), $('a[href="#collapse4"]'), 'complete');
      } else {
        collapseAndShowNext($('a[href="#collapse3"]'), $('a[href="#collapse4"]'), 'added');
      }
    });

    $('#flight-panel button').on('click', function(event) {
      var action = event.currentTarget.dataset.action;

      if (action === 'complete') {
        collapseAndShowNext($('a[href="#collapse4"]'), $('a[href="#collapse5"]'), 'complete');
      } else if (action === 'change') {
        collapseAndShowNext($('a[href="#collapse4"]'), $('a[href="#collapse5"]'), 'incomplete');
      }
    });

    $('#hotel-panel button').on('click', function(event) {
      var action = event.currentTarget.dataset.action;

      if (action === 'complete') {
        collapseAndShowNext($('a[href="#collapse5"]'), $('a[href="#collapse6"]'), 'complete');
      } else if (action === 'change') {
        collapseAndShowNext($('a[href="#collapse5"]'), $('a[href="#collapse6"]'), 'incomplete');
      }
    });

    $('#transfer-panel input[type="radio"]').on('change', function(event) {
      var action = event.currentTarget.id;

      if (action === 'transfer-none') {
        collapseAndShowNext($('a[href="#collapse6"]'), null, 'complete');
      } else {
        collapseAndShowNext($('a[href="#collapse6"]'), null, 'added');
      }
      $('a[href="#collapse6"]').click();
    });
});
