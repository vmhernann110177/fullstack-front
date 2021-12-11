$(function() {

    // En la clase habla tambien del evento submit que es el que no interesa
    // pero no da ejemplo de su uso. Buscando encontre lo siguente:
    $( "#checaCampos" ).submit(
        function( event ) {
         if(document.getElementById("p1").value == "") {
                
                $("#alertas").text("¡El campo de tu nombre esta vacio, colócalo por favor!");
                // Pon en color rojo la etiqueta Nombre
                $("#lblp1").css("color", "red");
                // Haz mas grande la fuente de la etiqueta nombre
                $("#lblp1").css("font-size", "25px");

                // Pon en color negro la etiqueta Nombre
                $("#lblp2").css("color", "black");
                // Regresa a au tamaño la fuente de la etiqueta nombre
                $("#lblp2").css("font-size", "20px");

                document.getElementById("p1").focus();
                alert( "¡El campo de tu nombre esta vacio, colócalo por favor!" );
                event.preventDefault();
         } 
         else {

         if(document.getElementById("p2").value == "") {
                
            $("#alertas").text("¡El campo de tus apellidos esta vacio, colócalo por favor!");
            // Pon en color rojo la etiqueta Nombre
            $("#lblp2").css("color", "red");
            // Haz mas grande la fuente de la etiqueta nombre
            $("#lblp2").css("font-size", "25px");

            // Pon en color negro la etiqueta Nombre
            $("#lblp1").css("color", "black");
            // Regresa a au tamaño la fuente de la etiqueta nombre
            $("#lblp1").css("font-size", "20px");

            document.getElementById("p2").focus();
            alert( "¡El campo de tus apellidos esta vacio, colócalos por favor!" );
            event.preventDefault();
            }
        }

      });

});
