const bikes =[
    {
      id:1,
      modelo:"Bicicleta BW Street",
      precio: "$138.500",
      descripcion: "Suficientemente ligera como para llevarla en el tren. Y con potencia de sobra para llevarte a la oficina. Equipada para pedalear por la ciudad. Muévete de una forma más rápida y sostenible con la Bicicleta BW Street",
      img: "/images/street.jpg" 
    },
    {
      id:2,
      modelo: "Bicicleta BW Mountain",
      precio: "$142.770",
      descripcion: "Esta bicicleta de montaña es perfecta para aquellos que buscan una bicicleta versátil que pueda manejar una variedad de terrenos. Tiene una suspensión delantera que absorbe los impactos de los senderos accidentados, y los neumáticos anchos brindan una buena tracción en superficies resbaladizas. La bicicleta también tiene una transmisión de 21 velocidades, lo que le permite cambiar de marcha fácilmente para adaptarse a diferentes condiciones de conducción.",
      img: "/images/Product1-bike.jpg"
    },
    {
      id:3,
      modelo: "Bicicleta BW Race",
      precio: "$193.250",
      descripcion: "Perfiles de tubo optimizados en el túnel de viento, ruedas prémium de carbono aerodinámicas e integración de todos los cables para reducir la resistencia al aire. Esta bicicleta es nuestra interpretación de lo que debe ser una bicicleta de carreras aerodinámica.",
      img: "/images/race.jpg"
    },
    {
      id:4,
      modelo: "Bicicleta BW BMX",
      precio: "$141.370",
      descripcion:"Excelente modelo de BMX profesional. La BW BMX es una excelente alternativa que combina una estructura principal fuerte, de cuadro , horquilla y manubrio, con un equipamiento restante que acompaña a la perfección para lograr una opción completa para salir a andar y disfrutar de saltos y trucos. En su construcción se utiliza tuberia de Cromo de calidad , lo que le da resistencia. Y posee terminaciones de alta gama, con una estética atractiva que se culmina con cubiertas anchas de buena agarre y prestaciones. Sin dudas, un excelente modelo que recomendamos para el rider que quiere arrancar con todo o bien, progresar en el deporte llevando su nivel más allá del iniciante, pasando por un intermedio y un poco avanzado también.",
      img: "/images/bmx.jpg"
    }
  ]
const accesorios = [
  {
    id:1,
    modelo: "Casco BW Raptor",
    precio: "$32.270",
    descripcion: "Casco de ciclismo liviano, con cobertura inyectada y almohadillas, refulador de ajuste. Fresco, fuerte para uso en bicicleta. Este casco viene en varios colores y combinaciones. Cuando salgas a andar en bici acordate llevá siempre puesto tu casco.",
    img: "/images/cascobici.png"
  },
  {
    id:2,
    modelo: "Grip BW Giant",
    precio: "$15.350",
    descripcion:"Los Grips & Bar End BW son enteramente diseñados por BW para tener una perfecta ergonomía, confort y durabilidad. El diseño ergonómico ofrece una superficie suave y adaptable a la forma natural de la mano manteniendo siempre un diseño aerodinámico con grip de agarre antideslizante. Hechos con fibra, goma de alta densidad (Kraton) y conexiones de aluminio resistentes a altos impactos.",
    img:"/images/grip.jpg"
  },
  {
    id:3,
    modelo:"Kit herramientas BW",
    precio:"$27.780",
    descripcion: "Este kit de herramientas de reparación de bicicletas 10 en 1 está hecha de acero al carbono que le proporciona gran dureza y resistencia. Adicionalmente, viene con una bolsa aerodinámica adaptada para bicicletas. Las 10 funciones son: Llaves Allen de 2.5, 3, 4, 5, 6 y 8 mm. También 2 destornilladores, un separador de cadena de bicicleta, un gancho de cadena adicional, un dedal de repuesto y llave de 5 mm.",
    img:"/images/kit-herramientas.jpg"
  },
  {
    id:4,
    modelo:"Inflador de mano BW",
    precio:"$8.000",
    descripcion:"Inflador de mano BW con pico reversible para pico Schader (válvula de auto) o Presta (fina para carrera o de válvula con gomín). Posee sistema de anclaje para dejarlo agarrado al pico de la bici. Color negro.",
    img:"/images/inflador-de-mano.jpg"
  }
]
const clothes = [
  {
    id:1,
    modelo:"Casaca + calza BW",
    precio:"$13.800",
    descripcion:"BW 2023 Pro Team, conjunto de Jersey de Ciclismo amarillo, Jersey corto de verano para bicicleta MTB, Ropa de Ciclismo, Ropa de Ciclismo de secado rápido Material: 100% Polyester",
    img:"/images/remera-calza.jpg"
  },
  {
    id:2,
    modelo:"Campera BW con Leds",
    precio:"$78.550",
    descripcion:"Campera de ciclismo con luces led incorporadas por delante y por detrás y lavable. En cada antebrazo delantero la campera tiene 3 luces led blancas y en la parte inferior trasera 5 luces led rojas. Estas luces son alimentadas por una pequeña batería recargable via USB alojada en uno de los bolsillos. Esta batería es operable desde afuera, mediante un botón que ofrece tres opciones: flash, flash rápido y constante. La campera está hecha en polyester, es respirable y resistente al agua. Por dentro tiene una red de suave tacto que suma confort y múltiples bolsillos, zippers en los antebrazos y ventilaciónes.",
    img:"/images/campera.jpg"
  },
  {
    id:3,
    modelo:"Guantes BW",
    precio:"$9.870",
    descripcion:"Guantes de medio dedo para Ciclismo, a prueba de golpes, transpirables, para Ciclismo. Material:Tejido poliamida y licra",
    img:"/images/guantes.jpg"
  }

]

module.exports = bikes, clothes, accesorios;