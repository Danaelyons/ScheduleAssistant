
  $(document).ready(function () {
    // Save Button operator
    $('.saveBtn').on('click', function () {
      // Setting Values
      let utility = $(this).siblings('.description').val();
      let clock = $(this).parent().attr('id');
  
