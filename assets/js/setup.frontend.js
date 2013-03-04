$(document).ready(function(){
    $('ul.nav li.dropdown').hover(
        function() { 
            $(this).closest('.dropdown-menu').stop(true, true).show(); 
            $(this).addClass('open'); 
        }, 
        function() { 
            $(this).closest('.dropdown-menu').stop(true, true).hide();
            $(this).removeClass('open'); 
        }
    );
    $('.carousel').carousel();
});