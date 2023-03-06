
  $(document).ready(function () {
    // Save Button operator
    $('.saveBtn').on('click', function () {
      // Setting Values
      let utility = $(this).siblings('.description').val();
      let clock = $(this).parent().attr('id');

  // Save in local storage.
  localStorage.setItem(utility, clock);
  
  // notification to present what is saved in local storage by notifying user with, 'show me!'
  $('.notification').addClass('show me!');

  // Timer to remove show me! as class after six seconds.
  setTime(function () {
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
