$(document).ready(function () {
    $.ajax({
        url: '/Contacts/BuildContactTable',
        success: function (result) {
            $('#contactTableDiv').html(result);
        }
    });
});