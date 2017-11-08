$(document).ready(function () {
    $(".button-collapse").sideNav();
    $('.modal').modal();
    /*$('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15, // Creates a dropdown of 15 years to control year,
        today: 'Vandaag',
        clear: 'Reset',
        close: 'Ok',
        closeOnSelect: false // Close upon selecting a date,
    });*/

    $("input#filled-in-box").change(function () {
        if (this.checked) {
            $("#infoverantwoordelijke").css({ display: "block" });
            $("#selectVerantw").css({ display: "none" });

        } else {
            $("#infoverantwoordelijke").css({ display: "none" });
            $("#selectVerantw").css({ display: "block" });
        }
    });
    $("#close").click(function () {
        $('.button-collapse').sideNav('hide');
    })
});