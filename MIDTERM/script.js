$(document).ready(function () {
    //we write everything here

    $('#myCarousel').carousel({
        interval: 2000
    });

    $("form.needs-validation").submit(function (event) {
        event.preventDefault();

        if ($("input#exampleInputEmail1").val() === "") {
            $("form.needs-validation").removeClass('needs-validation').addClass('was-validated');
        }
    });

    $('#modalLauncher').click(function(){
        $('#exampleModal').modal({
            backdrop: false
        });
    });

});