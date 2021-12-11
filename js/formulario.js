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