$(document).ready(function() {
    $("button.btn-show").click(function() {
        $(this).hide();
        $(this).next().show();
        $(this).parent().next("div.bio").slideDown("slow");
    });
    $("button.btn-hide").click(function() {
        $(this).hide();
        $(this).prev().show();
        $(this).parent().next("div.bio").slideUp("slow");
    });
});
