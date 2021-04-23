 
// Tab Heading //
$(".indi-box").hover(function(){
    $('.indi-head h1').text('Individual Insurance');
    $('.showindi').css({'display' : 'block'});
    $('.showgroup, .showcommer').css({'display' : 'none'});
});

$(".group-box").hover(function(){
    $('.indi-head h1').text('Group Insurance');
    $('.showgroup').css({'display' : 'block'});
    $('.showindi, .showcommer').css({'display' : 'none'});
});

$(".comm-box").hover(function(){
    $('.indi-head h1').text('Commercial Insurance');
    $('.showcommer').css({'display' : 'block'});
    $('.showindi, .showgroup').css({'display' : 'none'});
});

// End  Tab Heading //


//policy Insurance tab Carousel  //

$('.policy1').owlCarousel({
        loop:true,
  		  margin:10,
    	autoplay:false,
   		 navText:true,
  		  dots:false,
     nav:true,
    responsiveClass:true,
    responsive:{  
              0:{
            items:2,
            navText : ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],    
            },
            360:{
                items:3,
                navText : ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            },
            380:{
                items:3,
                navText : ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            },
        600:{
            items:3,
            navText : ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        },
       
        1000:{
            items:4,
            nav:true,
            loop:false,
            dots:false,
            navText : ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        }
    }
});
//End Individual Insurance tab  //


//client1//
$('.client1').owlCarousel({
    loop:true,
margin:10,
autoHeight:false,
autoplay:true,
navText:false,
dots:true,
responsiveClass:true,
responsive:{        0:{
        items:1,
        navText:false,
        nav:false
    },
    991:{
        items:1,
        nav:false
    },
    1000:{
        items:1,
        nav:true,
        loop:true,
        dots:true,
        navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
    }
}
});

//End client1//

//client Speak//
$('.Clientspeak').owlCarousel({
    loop:true,
margin:10,
autoHeight:true,
autoplay:true,
navText:false,
dots:true,
responsiveClass:true,
responsive:{        0:{
        items:1,
        navText:false,
        nav:false
    },
    991:{
        items:1,
        nav:false
    },
    1000:{
        items:1,
        nav:true,
        loop:true,
        dots:true,
        navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
    }
}
});
// End client Speak//

//ourpartner//
$('.ourpartner').owlCarousel({
    loop:true,
margin:10,
autoplay:true,
navText:false,
dots:true,
nav:true,
responsiveClass:true,
responsive:{
     0:{
        items:2,
        navText:true,

    },
    600:{
        items:3,

    },
    1000:{
        items:5,
        loop:false,
        dots:true,
        navText : ["<i class='fa fa-angle-double-left'></i>","<i class='fa fa-angle-double-right'></i>"]
    }
}
});


//Recognition Insurers//
$('.recognitioninsurers').owlCarousel({
    loop:true,
margin:10,
autoplay:true,
navText:true,
dots:true,
nav:true,
responsiveClass:true,
responsive:{        0:{
        items:1,
        navText:true,
    },
    600:{
        items:2,

    },
    1000:{
        items:6,
        nav:true,
        loop:false,
        dots:true,
        navText : ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    }
}
});




//commen Js call in inner pages//


//login tab in header top bar//
            $(document).ready(function(){
                $(".dropdown").click(
                    function() {
                        if($('.dropdown-menu', this).is(":hidden")) {

                        $('.dropdown-menu', this).stop( true, true ).slideDown("fast");
                        } else {
                            $('.dropdown-menu', this).stop( true, true ).slideUp("fast");
                        }
                        $(this).toggleClass('open');

                        /*
                        $('.dropdown-menu', this).stop( true, true ).slideUp("fast");
                        $(this).toggleClass('open');
                        */
                    }
                );
            });



//Knowledge Series//
$('.knowledge').owlCarousel({
    loop:true,
margin:10,
autoplay:true,
navText:true,
dots:true,
nav:true,
responsiveClass:true,
responsive:{        0:{
        items:1,
        navText:true,
    },
    600:{
        items:2,

    },
    1000:{
        items:2,
        nav:true,
        loop:false,
        dots:true,
        navText : ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    }
}
});

//Blog//

$('.blogcar').owlCarousel({
    loop:true,
margin:10,
autoplay:true,
navText:false,
dots:true,
responsiveClass:true,
responsive:{        0:{
        items:1,
        navText:false,
        nav:false
    },
    600:{
        items:2,
        nav:false
    },
    1000:{
        items:3,
        nav:false,
        loop:false,
        dots:true,
    }
}
});

