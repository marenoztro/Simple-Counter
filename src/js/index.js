//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

// Aquí declaramos las variables para cada uno de los dígitos que deberán ir cambiando.
// Como se entenderá, cada uno inicia con valor en cero. 
let segundosUnidades = 0;
let segundosDecenas = 0;
let minutosUnidades = 0;
let minutosDecenas = 0;
let horasUnidades = 0;
let horasDecenas = 0;


// A partir de que se inicia la función setInterval
// El setInterval nos sirve porque funciona eternamente. 
//Termina con '1000' porque son milisengundos... y 1000 milisegundos hacen 1 segundo.
// Y 1 segundo justo es el tiempo en que queremos que cambien los dígitos. 
setInterval(() => {
            segundosUnidades++ //Aquí hacemos que los segundos dejen de ser 0 y aumenten 1
            if (segundosUnidades > 9) { //Acá usamos un condicional para determinar una función justo cuando segundosUnidades intente pasarse de 9

                segundosDecenas++; //Acá determinamos lo que pasa: segundosDecenas suma 1
                segundosUnidades = 0; //segundosUnidades regresa a 0.
            } //Y APLICAMOS LA MISMA LÓGICA CON LOS SIGUIENTES DÍGITOS DEL CONTADOR.
            if (segundosDecenas > 5) {
                minutosUnidades++;
                segundosDecenas = 0;
            }
            if (minutosUnidades > 9) {
                minutosDecenas++;
                minutosUnidades = 0;
            }
            if (minutosDecenas > 5) {
                horasUnidades++;
                minutosDecenas = 0;
            }
            if (horasUnidades > 9) {
                horasDecenas++;
                horasUnidades = 0;
            }
            if (horasDecenas > 9) {
                horasDecenas = 0;
            }



            //render your react application 
            //AQUÍ ES DONDE EMPEZAMOS A RENDERIZAR LA FUNCIÓN PORQUE QUEREMOS QUE ALGO SE MUESTRE EN LA PANTALLA CADA SEGUNDO. 
            //RECORDAR QUE EN INDEX SE RENDERIZA LO QUE ESTÁ EN HOME... Y LO QUE LE INDICAMOS DE HOME.
            ReactDOM.render( < Home segundosUnidades = {
                    segundosUnidades //Por eso le especificamos que nos interesa de Home segundosUnidades
                }
                segundosDecenas = { //Luego le especificamos renderizar segundosDecenas
                    segundosDecenas
                }
                minutosUnidades = { //Luego le especificamos renderizar minutosUnidades
                    minutosUnidades
                }
                minutosDecenas = { //Luego le especificamos renderizar minutosDecenas
                    minutosDecenas
                }
                horasUnidades = { //Luego le especificamos renderizar horasUnidades
                    horasUnidades
                }
                horasDecenas = { //Luego le especificamos renderizar horasDecenas
                    horasDecenas
                }

                /> , document.querySelector("#app")); 
                // Y acá le decimos que se va a renderizar en la sección APP del HTML


            }, 1000); //Esto sólo cierra la función setInterval indicando que la función ocurre cada 1000 milisengundos, es decir, cada 1 segundo.