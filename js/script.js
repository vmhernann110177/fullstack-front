function objetoUsuario(nombrEntrada, apellidoEntrada)
{
    let usuario = {
        Nombre: nombrEntrada,
        apellido: apellidoEntrada
    };
    
    console.log("Nombre: "  + usuario.Nombre)
    console.log("Apellido: "  + usuario.apellido)
    
    delete usuario.Nombre;
    
    console.log("Nombre: "  + usuario.Nombre)
    console.log("Apellido: "  + usuario.apellido)
}

function Suma(a,b) {
let resultado = a+b;
console.log("Entró a sumar");
return resultado;
}


function manejaDOM() {
    console.log(document.getElementById("primer_Div"));
}

let msg = "Hola Mundo! desde script file usando variable";
console.log(msg);

msg = "modificación: ";
console.log(msg + 1);

msg = 1+1;
console.log("modificación: " + msg);

let check = true;
console.log(check && true);

let valor = 200;
console.log(valor>50);

if(valor<50)
    {
        console.log(valor + " Es menor que 50")
    } else if(valor >= 50 && valor <100) {
        console.log(valor + " Es mayor o igual que 50 y menor que 100")
    }    else {
        console.log(valor + " es mayor que 100")
    }

console.log(" FIN ")

let contador=0;
while (contador<10) {
    contador = contador +1;
    console.log(contador);
}

console.log(" FIN ")


objetoUsuario("Vic", "HD")

let suma = Suma(2,2);
console.log("la suma de 2 + 2 es: " + suma);

console.log("   ");
console.log("Se cargo la pagina. Ahora va a cargar la función DOM");

manejaDOM();

console.log("Cargada función DOM. FIN_total");



