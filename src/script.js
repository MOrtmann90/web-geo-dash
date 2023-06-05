$(document).ready(function () {
  $(".sliders").slick({
    dots: true, // Muestra los indicadores de navegación
    infinite: true, // Permite la navegación continua
    speed: 500, // Velocidad de transición en milisegundos
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 3, // Número de imágenes que se muestran a la vez
    slidesToScroll: 1, // Número de imágenes que se desplazan al avanzar o retroceder
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
