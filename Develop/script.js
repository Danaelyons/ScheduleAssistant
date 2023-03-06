
  $(document).ready (function () {
    // Save Button operator
    $('.saveBtn').on('click', function () {
      // Setting Values
      let utility = $(this).siblings('.description').val();
      let clock = $(this).parent().attr('id');

  // Save in local storage.
  localStore.setItem(utility, clock);
  
  // notification to present what is saved in local storage by notifying user with, 'show me!'
  $('.notification').addClass('show me!');

  // Timer to remove show me! as class after six seconds.
  setTiming(function () {
    $('.notification').removeClass('show me!');
  }, 6000);
});

function updateOfHour() {
  // retrieving current number of hour.
  let theHour = dayjs().hour();

  $('.clock-block').each(function () {
    let timedHour = parseInt($(this).attr('id').split('-')[1]);

    // Making sure we've moved past the time.
    if (timedHour < theHour) {
      $(this).addClass('past');
    } else if (timedHour === theHour) {
      $(this).removeClass('past');
      $(this).addClass('current');
    } else {
      $(this).removeClass('past');
      $(this).removeClass('current');
      $(this).addClass('future');
    }
  });
}

updateOfHour();

// Making sure time is accurate.
  setInterval(updateOfHour, 15000)
  // load any saved data from localStorage
  $('#hour-9 .description').val(localStore.getItem('hour-9'));
  $('#hour-10 .description').val(localStore.getItem('hour-10'));
  $('#hour-1 .description').val(localStore.getItem('hour-11'));
  $('#hour-12 .description').val(localStore.getItem('hour-12'));
  $('#hour-13 .description').val(localStore.getItem('hour-13'));
  $('#hour-14 .description').val(localStore.getItem('hour-14'));
  $('#hour-15 .description').val(localStore.getItem('hour-15'));
  $('#hour-16 .description').val(localStore.getItem('hour-16'));
  $('#hour-17 .description').val(localStore.getItem('hour-17'));

