/* Sea el nombre y sexo de varias personas (F-M). Se necesita un programa que lea estos datos y reporte al final
la cantidad de hombres y la cantidad de mujeres procesadas.
Se tienen las siguientes personas: Luisa, Ana, Jose, Carmen, Rosa, Jose, Maria, Luz, Rafael, Liz, Marcos y Leo.*/

import Cl_Persona from "./Cl_Persona.js";
import Cl_TodoPersona from "./Cl_TodoPersona.js";

//instanciar el objeto persona
let persona = new Cl_Persona("Luisa", "F");
let persona2 = new Cl_Persona("Ana", "F");
let persona3 = new Cl_Persona("Jose", "M");
let persona4 = new Cl_Persona("Carmen", "F");
let persona5 = new Cl_Persona("Rosa", "F");
let persona6 = new Cl_Persona("Jose", "M");
let persona7 = new Cl_Persona("Maria", "F");
let persona8 = new Cl_Persona("Luz", "F");
let persona9 = new Cl_Persona("Rafael", "M");
let persona10 = new Cl_Persona("Liz", "F");
let persona11 = new Cl_Persona("Marcos", "M");
let persona12 = new Cl_Persona("Leo", "M");

let todoPersona = new Cl_TodoPersona();
todoPersona.procesarPersona(persona);
todoPersona.procesarPersona(persona2);
todoPersona.procesarPersona(persona3);
todoPersona.procesarPersona(persona4);
todoPersona.procesarPersona(persona5);
todoPersona.procesarPersona(persona6);
todoPersona.procesarPersona(persona7);
todoPersona.procesarPersona(persona8);
todoPersona.procesarPersona(persona9);
todoPersona.procesarPersona(persona10);
todoPersona.procesarPersona(persona11);
todoPersona.procesarPersona(persona12);

//salida solicitada
let salida = document.getElementById('Salida');
salida.innerHTML = 'Resultados'
salida.innerHTML += '<br> Cantidad de personas = ' + todoPersona.devolverContPersonas();
salida.innerHTML += '<br> Cantidad de hombres = ' + todoPersona.devolverContHombres();
salida.innerHTML += '<br> Cantidad de mujeres = ' + todoPersona.devolverContMujeres();
