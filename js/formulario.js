function cargarP1() {
    // let campoP1 = document.getElementById("p1");
    // // campoP1.value = "vmhernann";
    // // campoP1.style.color="red";
    // fetch("../contenidos/texto.txt", {
    //     method: "get"                             /* también puede ser post*/
    //     /* Existen otras opciones aplicables aquí*/
    //     }).then(
            
    //         async response => { campoP1.value = await response.text(); }

    //     ).catch(function(err) {
    //         /* gestión del error, ¿que hacemos si falla la invocación? */
    //         console.log(err);
    //         document.getElementById("alertas").innerHTML = "Inténtelo mas tarde";
    //     });

        $.ajax({
            type: "GET",
            url: "../contenidos/texto.txt",
            success: function(result) {
            $("#p1").val(result);
            }
            });

}

intContador=0;
function Disponibilidad() {
        //// OJO Aqui le estoy colocando la funcionalidad al label Disponibilidad
        //// Aquí Pruebo que funciona con el label alertas:.. 
        // $("#alertas").text("¡El campo de tus apellidos esta vacio, colócalo por favor!");
        // Si funciona entonces lo deshabilito
        // Si cambia al lblDisponibilidad!!
        //Creo un contador para marcar en consola numero de intentos
        intContador = intContador +1;
        // $("#lblDisponibilidad").text("NO DISPONIBLE..");
        // Obten el valor cambiado del combobox y haz un if para decidir
        valor = document.getElementById("p6").value

        if (valor =="Pequeña") {
            $("#lblDisponibilidad").text("NO DISPONIBLE.");
            console.log("Prueba con consola, " + intContador + ", NO DISPONIBLE");
        }
        else
        {
            $("#lblDisponibilidad").text("DISPONIBLE.");
            console.log("Prueba con consola, " + intContador + ", DISPONIBLE");
        }
}

// function showAlert(mensaje) {
//     document.getElementById("alertas").innerHTML = mensaje
// }

// function showAlertNombre() {
//     document.getElementById("p1").focus();
//     document.getElementById("lblp1").style.color = 'red';
//     document.getElementById("lblp2").style.color = 'black';
// }

// function showAlertApellido() {
//     document.getElementById("p2").focus();
//     document.getElementById("lblp2").style.color = 'red';
//     document.getElementById("lblp1").style.color = 'black';
// }


// document.getElementById("checaCampos").addEventListener("submit",
//     function(event){
//         if(document.getElementById("p1").value == "") {
//             showAlert("¡Falta tu nombre!");
//             showAlertNombre();
//             event.preventDefault();
//         }
//         else if(document.getElementById("p2").value == "") {
//             showAlert("¡Falta tu apellido!");
//             showAlertApellido();
//             event.preventDefault();
//         }

//     }
// );