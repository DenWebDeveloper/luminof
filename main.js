$(document).ready(function() {
    $('#fullpage').fullpage({
        verticalCentered:false
    });
});

$(document).ready(function() {

    $(".home__btn-animation").click(()=>{
        $( ".nav-blur" ).animate({
            height: '0vh',
        }, 5000, ()=>{
            $(".home__btn-animation").text("Купить")
        });
    });
});