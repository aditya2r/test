document.addEventListener('DOMContentLoaded', function() {
    var datepickers = document.querySelectorAll('.hasDatepicker');
    datepickers.forEach(function(datepicker) {
        datepicker.addEventListener('change', function(event) {
            console.log('hey');
            var dateText = event.target.value;
            // Split the date into parts
            var parts = dateText.split('/');
            // Rearrange the parts to dd/mm/yyyy format
            var formattedDate = parts[1] + '/' + parts[0] + '/' + parts[2];
            // Set the input value to the formatted date
            event.target.value = formattedDate;
        });
    });
});
