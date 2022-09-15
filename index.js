 // $("h1").css("color","red");

// $("h1").addClass("big-title margin-50");
//
// //quita la clase "big-title"
// $("h1").removeClass("big-title");
//
// //te dice si "h1" tiene la clase "margin-50"
// $("h1").hasClass("margin-50");
//
// //selecciona automaticamente todos los elementos de "button"
// $("button");
//
// //Texto al button
// $("button").text("Dont Click");
//
// //Adiferencia del .txt aqui puedes agregar codigo html igual a innerHtml en DOM
// $("button").html("<em>Hey</em>");

// console.log($("img").attr("src"));

//$("img").attr("href","https://espanol.yahoo.com/?p=us");

// for (var i=0; i<5; i++)
//   {
//   document.querySelectorAll("button")[i].addEventListener("click",
//   function() {
//
//       document.querySelector("h1").style.color="green";
//   });
// }

//Sustituye al codigo addEventListener de DOM
// $("button").click(function(){
//   $("h1").css("color","purple");
// });

// //Detecta cuando se presiona una tecla en "input" y la imprime
// $("input").keypress(function(event){
//   console.log("Presionaste la tecla "+event.key);
// }
// );
//
// //detecta cuando se presiona una tecla en el el sito y lo imprime
// $(document).keypress(function(event){
//   //console.log("Presionaste la tecla "+event.key);
//   $("h1").text(event.key);
// }
// );
// //mouse cambio color cuando se mueve
// $(document).mouseover(function(event){
//   //console.log("Presionaste la tecla "+event.key);
//   $("h1").css("color", "pink");
// }
// );

//ocupa "on" y el "dbclick" lo pone como parametro
// $(document).on("dblclick",function(event){
//   //console.log("Presionaste la tecla "+event.key);
//   $("h1").css("color", "green");
// }
// );

// //agrega boton antes de la etiqueta "h1"
// $("h1").before("<button>Antes</button> ");
// $("h1").after("<button>Despues</button>");
//
// //aggrega boton en la misma linea de h1
// $("h1").prepend("<button>antes H1 </button>");
// $("h1").append("<button>despues de h1</button>");

// $("button").click(function (){
//   $("h1").hide();  //apear
//   $("h1").show(); //dessapear
//   $("h1").toggle(); //apear and dissapear
// })

//
// $("button").click(function (){
//   // $("h1").fadeOut(); //efecto de desaparecer lentamente
//   // $("h1").fadeIn(); //efecto de aparecer lentamente
//   $("h1").fadeToggle();
// })

// $("button").click(function() {
//   // $("h1").slideUp(); //desaparece "h1" lentamente hacia arriba
//   // $("h1").slideDown(); //aparece "h1" lentamente hacia abajo
// //   $("h1").slideToggle();
//
// })

$("button").on("click",function (){

  $("h1").animate({opacity: .5, margin: "20%", color:00D7FF}); //tener en cuenta que despues de la propiedad siempre sera
                                                      //un numero despues (despues de opacity va siempre un numero)

$("h1").slideUp().slideDown().animate({opacity: .5}); //primero se ejecuta slideUp, despues slideDown y por ultimo animate
});
