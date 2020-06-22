$(document).ready(function () {
    $(".sembunyi1").click(function () {
        $("#foto1").hide("slow");
        $(".tampil1").click(function () {
            $("#foto1").show("slow");
        });
    });
});

$(document).ready(function () {
    $(".sembunyi2").click(function () {
        $("#foto2").hide("slow");
        $(".tampil2").click(function () {
            $("#foto2").show("slow");
        });
    });
});

$(document).ready(function () {
    $("#satu").dblclick(function () {
        $("#satu")
            .css("background-color", "red")
            .css("border", "2px solid green");
    });

    $("#dua").dblclick(function () {
        $("#dua")
            .css("background-color", "red")
            .css("border", "2px solid red");
    });

    $("#tiga").dblclick(function () {
        $("#tiga")
            .css("background-color", "red")
            .css("border", "2px solid green");
    });

    $("#empat").dblclick(function () {
        $("#empat")
            .css("background-color", "red")
            .css("border", "2px solid red");
    });
});


$(document).ready(function () {
    $(".hide").click(function () {
        $("#lima").fadeOut();
    });

    $(".show").click(function () {
        $("#lima").fadeIn();
    });

    $(".hideinto").click(function () {
        $("#lima").fadeTo("slow", 0.3);
    });
});