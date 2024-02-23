$(document).ready(function() {
    $('.hasDatepicker').datepicker({
        onSelect: function(dateText, inst) {
            // Split the date into parts
            var parts = dateText.split('/');
            // Rearrange the parts to dd/mm/yyyy format
            var formattedDate = parts[1] + '/' + parts[0] + '/' + parts[2];
            // Set the input value to the formatted date
            $(this).val(formattedDate);
        }
    });
});


console.log('hey');
