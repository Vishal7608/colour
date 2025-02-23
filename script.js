$(document).ready(function(){
    $(".cms_text").click(function(){
        $(".cms_text").removeClass("active");
        $(this).toggleClass("active");
        $(this).next(".toggle_box").toggleClass("toggle_box_open"); // Toggle only related .toggle_box
    });
});
