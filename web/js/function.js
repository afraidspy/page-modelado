/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var info = null;

$(document).ready(function(){
  //
  //   $.ajax({
  //       url: "http://127.0.0.1:5984/paginas/182a3634ce7886abcd136ea84c00202f?rev=2-9628d0ea6418582fae9ff33ec0a2d756",
  ////        url: "http://127.0.0.1:5984/paginas/182a3634ce7886abcd136ea84c00202f",
  //       type: "GET",
  //       contentType: "application/json",
  ////       charset: "UTF-8",
  //       //contentType: "application/x-www-form-urlencoded;charset=UTF-8",
  //       async: true,
  //       success: function (data){
  ////        console.log   (data);
  //       }
  //   });
  //
  //

  //  $.ajax({
  //    url: "http://127.0.0.1:5984/paginas/182a3634ce7886abcd136ea84c00202f?rev=3-b6702d5eac7b34ac5203680048b12375",
  //    //        url: "http://127.0.0.1:5984/paginas/182a3634ce7886abcd136ea84c00202f",
  //    type: "GET",
  //    //    dataType: "jsonp",
  //    dataType: "application/json",
  //    //       charset: "UTF-8",
  //    //contentType: "application/x-www-form-urlencoded;charset=UTF-8",
  //    async: true,
  //    success: function (data){
  //      console.log("Contenido");
  //      console.log(JSON.stringify(data));
  //    }
  //  })


  //  console.log("Antes de basde de datos");
  //
  //    var db = $.couch.db('paginas');
  //
  //    console.log("La base de datos es: " + db);

  info = {
    "info":[{
      title: "Introducción",
      contenido: "El presente sitio contiene el material necesario para la realización del conjuto de prácticas las cuáles se desarrollaron como material"+
    " complementario para el curso de Modelado y Programación que se imparte en el tercer semestre de la"+
    " licenciatura de Ciencias de la Computación en la Facultad de Ciencias, aunque también puede ser de"+
    " gran utilidad para personas que tengan conocimientos básicos en programación y que deseen mejorar sus"+
    " técnicas y habilidades en ese ámbito.<br><br>"+
    " La característica principal de este trabajo es proporcionar al alumno material con el que pueda"+
    " reforzar y practicar los conocimientos adquiridos en las clases teóricas del curso, así como aquellos"+
    " adquiridos en los primeros semestres de la carrera utilizando como lenguaje de programación Java.<br><br>"+
    " Por otro lado es importante destacar que una de las características de un profesional en ciencias de"+
    " la computación es la capacidad para resolver problemas usando software existente o creando aplicaciones"+
    " novedosas. Para ello este conjunto de prácticas permiten al alumno adquirir conocimientos sólidos y"+
    " avanzados en programación que le ayudarán a desarrollar esta aptitud.<br><br>"+
    " Además se pretende que el alumno adquiera experiencia y habilidad en el desarrollo de programas"+
    " robustos de mediana complejidad, aprovechado las ventajas de la programación orientada a objetos,"+
    " así como la adquisición de práctica específicamente en las etapas de diseño, manufactura, pruebas y"+
    " mantenimiento del sistema, siguiendo un proceso de diseño de software y usando patrones de diseño, con el"+
    " propósito de que se apliquen buenas prácticas de programación en las soluciones a problemas específicos."
    },
    {
      title: "Recursividad",
      contenido: "Este primer capítulo tiene la intención de que el lector repase uno de los conceptos que ha conocido"+
      " en cursos anteriores, pues la importancia del mismo es servir como herramienta para que él pueda dar"+
      " soluciones simples a problemas específicos. Además se da a conocer una de las técnicas más completas de"+
      " recursión llamada vuelta atrás o backtracking.",
      material: [
      {
        practicas: [{
          title: "Práctica 1: El triángulo de Sierpnski",
          archivos:[{
            name : "Estado.java",
            path : "../Material/Cap1/Laberinto/Material/Estado.java",
            description: "Contiene los estados para el Laberinto"
          },
          {
            name : "EventosBotones.java",
            path : "../Material/Cap1/Laberinto/Material/EventosBotones.java",
            description: "Contiene los eventos de los botones"
          },
          {
            name : "Laberinto.java",
            path : "../Material/Cap1/Laberinto/Material/Laberinto.java",
            description: "Contiene la clase del laberinto."
          }
          ]
        },
        {
          title: "Práctica 2",
          archivos:[{

            name : "Estado.java",
            path : "../Material/Cap1/Laberinto/Material/Estado.java",
            description: "Contiene los estados para el Laberinto"
          },
          {
            name : "EventosBotones.java",
            path : "../Material/Cap1/Laberinto/Material/EventosBotones.java",
            description: "Contiene los eventos de los botones"
          },
          {
            name : "Laberinto.java",
            path : "../Material/Cap1/Laberinto/Material/Laberinto.java",
            description: "Contiene la clase del laberinto."
          }
          ]
        }

        ]
      }]
    },
    {
      title: "Árboles en memoria secundaria",
      contenido: "En este capítulo el lector practicará la implementación de estructuras de datos que funcionan en "+
      " memoria secundaria, sus características y operaciones principales. Los tipos de estructuras que se presentan "+
      " en este capítulo son: árboles B y árboles rojinegros. <br><br>La importancia de conocer estas estructuras, es la "+
      " necesidad de realizar sistemas que empleen estructuras de datos, cuyo acceso a estos datos sea eficiente en "+
      " tiempo.",
      material: [
      {
        practicas: [{
          title: "Práctica 1: El triángulo de Sierpnski",
          archivos:[{
            name : "Estado.java",
            path : "../Material/Cap1/Laberinto/Material/Estado.java",
            description: "Contiene los estados para el Laberinto"
          },
          {
            name : "EventosBotones.java",
            path : "../Material/Cap1/Laberinto/Material/EventosBotones.java",
            description: "Contiene los eventos de los botones"
          },
          {
            name : "Laberinto.java",
            path : "../Material/Cap1/Laberinto/Material/Laberinto.java",
            description: "Contiene la clase del laberinto."
          }
          ]
        },
        {
          title: "Práctica 2",
          archivos:[{

            name : "Estado.java",
            path : "../Material/Cap1/Laberinto/Material/Estado.java",
            description: "Contiene los estados para el Laberinto"
          },
          {
            name : "EventosBotones.java",
            path : "../Material/Cap1/Laberinto/Material/EventosBotones.java",
            description: "Contiene los eventos de los botones"
          },
          {
            name : "Laberinto.java",
            path : "../Material/Cap1/Laberinto/Material/Laberinto.java",
            description: "Contiene la clase del laberinto."
          }
          ]
        }

        ]
      }]
    },
    {
      title: "UML",
      contenido: "Se da a conocer un lenguaje unificado de modelado que permite especificar, visualizar, construir "+
      " y documentar elementos de un sistema de software. Es importante presentar este tema porque es una "+
      " herramienta para construir un conjunto de diagramas del sistema antes de que éste sea codificado. <br><br>Entre los "+
      " principales diagramas que el lector practicará, se tienen los siguientes: diagrama general de casos de uso; "+
      " diagrama detallado de casos de uso; diagrama de clases; y diagrama de estados. Para cada diagrama se explican los elementos que lo conforman, la estructura general del mismo y un ejemplo en el que se aplica, para "+
      " que después el lector pueda fácilmente poner en práctica sus conocimientos en el problema que se le plantea. ",
      material: [
      {
        practicas: [{
          title: "Práctica 1: El triángulo de Sierpnski",
          archivos:[{
            name : "Estado.java",
            path : "../Material/Cap1/Laberinto/Material/Estado.java",
            description: "Contiene los estados para el Laberinto"
          },
          {
            name : "EventosBotones.java",
            path : "../Material/Cap1/Laberinto/Material/EventosBotones.java",
            description: "Contiene los eventos de los botones"
          },
          {
            name : "Laberinto.java",
            path : "../Material/Cap1/Laberinto/Material/Laberinto.java",
            description: "Contiene la clase del laberinto."
          }
          ]
        },
        {
          title: "Práctica 2",
          archivos:[{

            name : "Estado.java",
            path : "../Material/Cap1/Laberinto/Material/Estado.java",
            description: "Contiene los estados para el Laberinto"
          },
          {
            name : "EventosBotones.java",
            path : "../Material/Cap1/Laberinto/Material/EventosBotones.java",
            description: "Contiene los eventos de los botones"
          },
          {
            name : "Laberinto.java",
            path : "../Material/Cap1/Laberinto/Material/Laberinto.java",
            description: "Contiene la clase del laberinto."
          }
          ]
        }

        ]
      }]
    },
    {
      title: "Cohesión y acoplamiento",
      contenido: "Se incluyen prácticas que le permitirán al lector analizar dos criterios cualitativos del software: "+
      " cohesión y acoplamiento, los cuáles permiten medir el grado de relación entre los componentes de un "+
      " sistema. <br><br>El objetivo es que el programador aprenda a realizar módulos dentro del sistema que sean "+
      " independientes, fáciles de probar y de reutilizar. Como consecuencia se debe de cumplir con el siguiente "+
      " criterio: un sistema debe poseer una alta cohesión y un bajo acoplamiento. Se dan a conocer diferentes tipos "+
      " de cohesión y de acoplamiento, incluyendo sus características generales.",
      material: [
      {
        practicas: [{
          title: "Práctica 1: El triángulo de Sierpnski",
          archivos:[{
            name : "Estado.java",
            path : "../Material/Cap1/Laberinto/Material/Estado.java",
            description: "Contiene los estados para el Laberinto"
          },
          {
            name : "EventosBotones.java",
            path : "../Material/Cap1/Laberinto/Material/EventosBotones.java",
            description: "Contiene los eventos de los botones"
          },
          {
            name : "Laberinto.java",
            path : "../Material/Cap1/Laberinto/Material/Laberinto.java",
            description: "Contiene la clase del laberinto."
          }
          ]
        },
        {
          title: "Práctica 2",
          archivos:[{

            name : "Estado.java",
            path : "../Material/Cap1/Laberinto/Material/Estado.java",
            description: "Contiene los estados para el Laberinto"
          },
          {
            name : "EventosBotones.java",
            path : "../Material/Cap1/Laberinto/Material/EventosBotones.java",
            description: "Contiene los eventos de los botones"
          },
          {
            name : "Laberinto.java",
            path : "../Material/Cap1/Laberinto/Material/Laberinto.java",
            description: "Contiene la clase del laberinto."
          }
          ]
        }

        ]
      }]
    },
    {
      title: "Patrones de diseño",
      contenido: "Este capítulo incluye prácticas en donde el lector aplicará diferentes tipos de patrones en el diseño "+
      " de software, así contará con más herramientas que le permitirán dar soluciones generales a problemas en "+
      " común, aumentando la calidad de sus productos de software. <br><br>Aquí se presentan los patrones clasificados "+
      " de acuerdo a su propósito: creacionales, estructurales y de comportamiento. De cada patrón se describe "+
      " el problema en el que se puede aplicar y se ejemplifica con un diagrama su estructura general para su "+
      " mejor comprensión; además por cada clasificación se plantean dos prácticas al lector en donde hará uso de "+
      " diferentes patrones de diseño.",
      material: [
      {
        practicas: [{
          title: "Práctica 1: El triángulo de Sierpnski",
          archivos:[{
            name : "Estado.java",
            path : "../Material/Cap1/Laberinto/Material/Estado.java",
            description: "Contiene los estados para el Laberinto"
          },
          {
            name : "EventosBotones.java",
            path : "../Material/Cap1/Laberinto/Material/EventosBotones.java",
            description: "Contiene los eventos de los botones"
          },
          {
            name : "Laberinto.java",
            path : "../Material/Cap1/Laberinto/Material/Laberinto.java",
            description: "Contiene la clase del laberinto."
          }
          ]
        },
        {
          title: "Práctica 2",
          archivos:[{

            name : "Estado.java",
            path : "../Material/Cap1/Laberinto/Material/Estado.java",
            description: "Contiene los estados para el Laberinto"
          },
          {
            name : "EventosBotones.java",
            path : "../Material/Cap1/Laberinto/Material/EventosBotones.java",
            description: "Contiene los eventos de los botones"
          },
          {
            name : "Laberinto.java",
            path : "../Material/Cap1/Laberinto/Material/Laberinto.java",
            description: "Contiene la clase del laberinto."
          }
          ]
        }

        ]
      }]
    },
    {
      title: "Construcción de interfaces gráficas",
      contenido: "Los capítulos anteriores piden la elaboración de prácticas sin importar la interfaz que se le presente "+
      " al usuario. En este capítulo el lector entenderá la importancia de mostrar una interfaz gráfica que permita "+
      " facilitar el uso de la aplicación. <br><br>Para cumplir con el objetivo, se ilustra la construcción de una interfaz "+
      " gráfica de usuario (GUI), haciendo uso de bibliotecas especiales del lenguaje de programación Java. Se "+
      " muestran los componentes y clases principales que permiten la construcción de una interfaz. Así, después "+
      " de que el lector se familiarice con tales bibliotecas y elementos, se le presenta la forma en que puede agregar "+
      " funcionalidad a la interfaz, para ello se le muestra cómo manejar los eventos del usuario, a través de clases "+
      " específicas.",
      material: [
      {
        practicas: [{
          title: "Práctica 1: El triángulo de Sierpnski",
          archivos:[{
            name : "Estado.java",
            path : "../Material/Cap1/Laberinto/Material/Estado.java",
            description: "Contiene los estados para el Laberinto"
          },
          {
            name : "EventosBotones.java",
            path : "../Material/Cap1/Laberinto/Material/EventosBotones.java",
            description: "Contiene los eventos de los botones"
          },
          {
            name : "Laberinto.java",
            path : "../Material/Cap1/Laberinto/Material/Laberinto.java",
            description: "Contiene la clase del laberinto."
          }
          ]
        },
        {
          title: "Práctica 2",
          archivos:[{

            name : "Estado.java",
            path : "../Material/Cap1/Laberinto/Material/Estado.java",
            description: "Contiene los estados para el Laberinto"
          },
          {
            name : "EventosBotones.java",
            path : "../Material/Cap1/Laberinto/Material/EventosBotones.java",
            description: "Contiene los eventos de los botones"
          },
          {
            name : "Laberinto.java",
            path : "../Material/Cap1/Laberinto/Material/Laberinto.java",
            description: "Contiene la clase del laberinto."
          }
          ]
        }

        ]
      }]
    },
    {
      title: "Modelo Vista Controlador",
      contenido: "Hoy en día, el diseño y desarrollo de programas cuyo mantenimiento y reutilización sea fácil de "+
      " aplicar es indispensable, por ello este capítulo presenta uno de los patrones de diseño más usado en el "+
      " desarrollo de software. Aplicar este patrón para realizar una aplicación permite una organización de la "+
      " misma en tres capas, separando así la lógica del sistema, de su representación visual y del manejo de los "+
      " eventos de ésta.<br><br> Aquí el lector implementará el patrón en las prácticas que se le presentan y al mismo "+
      " tiempo podrá darse cuenta de las ventajas de estructurar un sistema bajo este esquema.",
      material: [
      {
        practicas: [{
          title: "Práctica 1: El triángulo de Sierpnski",
          archivos:[{
            name : "Estado.java",
            path : "../Material/Cap1/Laberinto/Material/Estado.java",
            description: "Contiene los estados para el Laberinto"
          },
          {
            name : "EventosBotones.java",
            path : "../Material/Cap1/Laberinto/Material/EventosBotones.java",
            description: "Contiene los eventos de los botones"
          },
          {
            name : "Laberinto.java",
            path : "../Material/Cap1/Laberinto/Material/Laberinto.java",
            description: "Contiene la clase del laberinto."
          }
          ]
        },
        {
          title: "Práctica 2",
          archivos:[{

            name : "Estado.java",
            path : "../Material/Cap1/Laberinto/Material/Estado.java",
            description: "Contiene los estados para el Laberinto"
          },
          {
            name : "EventosBotones.java",
            path : "../Material/Cap1/Laberinto/Material/EventosBotones.java",
            description: "Contiene los eventos de los botones"
          },
          {
            name : "Laberinto.java",
            path : "../Material/Cap1/Laberinto/Material/Laberinto.java",
            description: "Contiene la clase del laberinto."
          }
          ]
        }

        ]
      }]
    },
    {
      title: "Programación concurrente",
      contenido: "En este capítulo se presentan prácticas que permitirán al lector conocer los conceptos básicos para "+
      " crear aplicaciones en las que existan diferentes procesos ejecutándose al mismo tiempo, ya que hoy en día "+
      " los sistemas reales requieren de un tiempo de ejecución pequeño. Lo anterior se logra aplicando técnicas "+
      " de tiempo compartido para ejecutar programas concurrentes. <br><br>Aquí se describen de forma general algunas "+
      " técnicas como: monitores, el problema del productor-consumidor y semáforos, al mismo tiempo que se "+
      " describe su implementación en Java. Además el capítulo incluye una sección que presenta una breve "+
      " introducción al tema de simulación por computadora como herramienta para imitar la realidad. Esta técnica "+
      " es útil para el lector, ya que en diversas ocasiones es necesario comprender el comportamiento de un sistema "+
      " aprovechando todas las potencialidades de una computadora.",
      material: [
      {
        practicas: [{
          title: "Práctica 1: El triángulo de Sierpnski",
          archivos:[{
            name : "Estado.java",
            path : "../Material/Cap1/Laberinto/Material/Estado.java",
            description: "Contiene los estados para el Laberinto"
          },
          {
            name : "EventosBotones.java",
            path : "../Material/Cap1/Laberinto/Material/EventosBotones.java",
            description: "Contiene los eventos de los botones"
          },
          {
            name : "Laberinto.java",
            path : "../Material/Cap1/Laberinto/Material/Laberinto.java",
            description: "Contiene la clase del laberinto."
          }
          ]
        },
        {
          title: "Práctica 2",
          archivos:[{

            name : "Estado.java",
            path : "../Material/Cap1/Laberinto/Material/Estado.java",
            description: "Contiene los estados para el Laberinto"
          },
          {
            name : "EventosBotones.java",
            path : "../Material/Cap1/Laberinto/Material/EventosBotones.java",
            description: "Contiene los eventos de los botones"
          },
          {
            name : "Laberinto.java",
            path : "../Material/Cap1/Laberinto/Material/Laberinto.java",
            description: "Contiene la clase del laberinto."
          }
          ]
        }

        ]
      }]
    },
    {
      title: "Pruebas de software",
      contenido: "Para finalizar este manual, se presenta un capítulo en el que el lector conocerá algunas técnicas que "+
      " le permitirán verificar que el software que realice satisface las necesidades de su cliente.<br><br> Las pruebas le "+
      " ayudarán a encontrar defectos y errores que servirán para evaluar las características del mismo. Aunque se "+
      " dan a conocer los diferentes tipos de pruebas que son clasificadas de acuerdo al nivel en que se aplican, en "+
      " las prácticas se usan las pruebas de caja blanca, caja negra y pruebas unitarias. En éstas últimas se hace uso "+
      " del marco de trabajo JUnit para Java y se presentan las clases esenciales para la creación de una prueba "+
      " unitaria.",
      material: [
      {
        practicas: [{
          title: "Práctica 1: El triángulo de Sierpnski",
          archivos:[{
            name : "Estado.java",
            path : "../Material/Cap1/Laberinto/Material/Estado.java",
            description: "Contiene los estados para el Laberinto"
          },
          {
            name : "EventosBotones.java",
            path : "../Material/Cap1/Laberinto/Material/EventosBotones.java",
            description: "Contiene los eventos de los botones"
          },
          {
            name : "Laberinto.java",
            path : "../Material/Cap1/Laberinto/Material/Laberinto.java",
            description: "Contiene la clase del laberinto."
          }
          ]
        },
        {
          title: "Práctica 2",
          archivos:[{

            name : "Estado.java",
            path : "../Material/Cap1/Laberinto/Material/Estado.java",
            description: "Contiene los estados para el Laberinto"
          },
          {
            name : "EventosBotones.java",
            path : "../Material/Cap1/Laberinto/Material/EventosBotones.java",
            description: "Contiene los eventos de los botones"
          },
          {
            name : "Laberinto.java",
            path : "../Material/Cap1/Laberinto/Material/Laberinto.java",
            description: "Contiene la clase del laberinto."
          }
          ]
        }

        ]
      }]

    }
    ]
  };

  put_information(info.info[0].title, info.info[0].contenido);

  
  $("li").click(function(){
    var chapter = $(this).attr("id").split("-")[1];

    console.log("Viendo el capítulo " + chapter);  
  

    if (chapter == 0){
      $("#material").css("display", "none");
      put_information(info.info[0].title, info.info[0].contenido);
    }else{
      var material = info.info[chapter].material[0].practicas;
      console.log("Material");
      console.log(material);
      $("#material").css("display", "block");
      put_information(info.info[chapter].title, info.info[chapter].contenido, material);
    }

  
  });

});


function put_information(subtitle, text, practices){
  console.log("2Practrices es "  + practices);
  console.log("Subtitle " + subtitle);
  console.log("Texto: " + text);

    
  $("#chapter-resumen").html(
    "<div class='subtitles'>"+subtitle+"</div><br><br>"+
    text+
    "</div>"
    );  

  //Código para mostrar los archivos de cada capítulo en forma de tabla.
  if (practices != null)    {

    console.log("Practices");

    console.log(practices);

    var material = "";
    var files = null;


    for ( i = 0; i < practices.length; i++) {// Se recorre cada práctica
      if (i == 0) {
        material+= "<div class='subtitles'>Material</div><br><br> ";
      }

      files = practices[i].archivos;
      material += "<div class='subtitles-practice'><img class='icons-practice' src='img/more.png'/>"+practices[i].title+"</div>";

      for (j = 0; j < files.length; j++){ // Se recorre cada archivo de la práctica
        if (j ==0) {
          material += "<table class='table table-striped'>";
        //      "<tr><th>Nombre</th>"+
        //      "<th>Descripción</th>"+
        //      "<th>Descargar</th>"+
        //      "</tr>";
        }
        material += "<tr><td>"+files[i].name+"<td>"+
        "<td>"+files[i].description+"<td>"+
        "<td><a href='"+files[i].path+"' class='btn btn-info btn-lg'>"+
        "<span class='glyphicon glyphicon-download'></span> Descargar"+
        "</a></td>"
        +"</tr>";
      }
      material += "</table>";
    }
  }
  $("#practices-content").html(material);
}

