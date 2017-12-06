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

    $("input#checkboxverantw").click(function () {
        if (this.checked) {
            $("#infoverantwoordelijke").css({ display: "block" });
            $("#selectVerantw").css({ display: "none" });

        } else {
            $("#infoverantwoordelijke").css({ display: "none" });
            $("#selectVerantw").css({ display: "block" });
        }
    });

    $("input#checkboxdokter").click(function () {
        if (this.checked) {
            $("#infoDokter").css({ display: "block" });
            $("#selectDokter").css({ display: "none" });

        } else {
            $("#infoDokter").css({ display: "none" });
            $("#selectDokter").css({ display: "block" });
        }
    });

    $("#close").click(function () {
        $('.button-collapse').sideNav('hide');
    });

    $(".side-nav li").click(function() {
        $('.button-collapse').sideNav('hide');
    });

    //$('#content').scrollTop(999999);
    var objDiv = document.getElementById("content");
    if(objDiv != null)
        objDiv.scrollTop = objDiv.scrollHeight;
});