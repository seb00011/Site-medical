/*SLICK*/
$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows:false,
   
  });


  /*HOVER ARTICLES ACTUS*/
  $(function(){
    $('#bouton_actu1').mouseenter(function(){
        $('#titre_actu1').css("color","rgb(47, 172, 177");
    });

});

$("#bouton_actu1").mouseleave(function(){
  
  $('#titre_actu1').css("color", "black");
});

/*ARTICLE2*/
$(function(){
  $('#bouton_actu2').mouseenter(function(){
      $('#titre_actu2').css("color","rgb(47, 172, 177");
  });

});

$("#bouton_actu2").mouseleave(function(){

$('#titre_actu2').css("color", "black");
});

/*ARTICLE3*/
$(function(){
  $('#bouton_actu3').mouseenter(function(){
      $('#titre_actu3').css("color","rgb(47, 172, 177");
  });

});

$("#bouton_actu3").mouseleave(function(){

$('#titre_actu3').css("color", "black");
});

/*hoverslick*/

$(function(){
  $('#slick1').mouseenter(function(){
      $(this).attr("src","images/hoverslick.png");
  });

});

$("#slick1").mouseleave(function(){

$(this).attr("src", "images/slick1.jpg");
});

/*slick2*/
$(function(){
  $('#slick2').mouseenter(function(){
      $(this).attr("src","images/hoverslick.png");
  });

});

$("#slick2").mouseleave(function(){

$(this).attr("src", "images/slick2.jpg");
});


/*slick3*/
$(function(){
  $('#slick3').mouseenter(function(){
      $(this).attr("src","images/hoverslick.png");
  });

});

$("#slick3").mouseleave(function(){

$(this).attr("src", "images/slick3.jpg");
});


/*slick4*/
$(function(){
  $('#slick4').mouseenter(function(){
      $(this).attr("src","images/hoverslick.png");
  });

});

$("#slick4").mouseleave(function(){

$(this).attr("src", "images/slick4.jpg");
});

/*slick5*/
$(function(){
  $('#slick5').mouseenter(function(){
      $(this).attr("src","images/hoverslick.png");
  });

});

$("#slick5").mouseleave(function(){

$(this).attr("src", "images/slick5.jpg");
});

/*slick6*/

$(function(){
  $('#slick6').mouseenter(function(){
      $(this).attr("src","images/hoverslick.png");
  });

});

$("#slick6").mouseleave(function(){

$(this).attr("src", "images/slick6.jpg");
});

/*slick7*/

$(function(){
  $('#slick7').mouseenter(function(){
      $(this).attr("src","images/hoverslick.png");
  });

});

$("#slick7").mouseleave(function(){

$(this).attr("src", "images/slick7.jpg");
});


/*HOVER PRES*/
$(function(){
  $('#P').mouseenter(function(){
      $('.sous_presentation').css("display","block");
      $('.sous_presentation').css("display","flex");
      
  });

});

$("#P").mouseleave(function(){

$('.sous_presentation').css("display", "none");
});


/*HOVER OFFRES DE SOINS*/
$(function(){
  $('#O').mouseenter(function(){
      $('.sous_presentation').css("display","block");
      $('.sous_presentation').css("display","flex");
  });

});

$("#O").mouseleave(function(){

$('.sous_presentation').css("display", "none");
});


/*HOVER SOUS MENU*/
$(function(){
  $('.sous_presentation').mouseenter(function(){
      $('.sous_presentation').css("display","block");
      $('.sous_presentation').css("display","flex");
  });

});

$(".sous_presentation").mouseleave(function(){

$('.sous_presentation').css("display", "none");
});