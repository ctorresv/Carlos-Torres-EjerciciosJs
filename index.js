/*1 Realizar un programa que dado 2 números imprima por consola si el primer numero es
mayor que el segundo. */

function mayor(num1,num2){
    if (num1>num2) {
        console.log(`El numero ${num1} es mayor que ${num2}`)
    }
}
mayor(5,2)

/*2 Realizar un programa que dado 2 números imprima por consola si los numeros son
iguales o si son diferentes. */

function iguales(num1,num2){
    if (num1 === num2) {
        console.log(`El numero ${num1} es igual a ${num2}`)
    }else{
        console.log(`El numero ${num1} es diferente a ${num2}`)
    }
}
iguales(5,5)

/*3 Realizar un programa que dado 2 números imprima por consola cual de los 2 numeros
es el mas grande o si son iguales. */

function mayorQue(num1,num2){
    if (num1 > num2) {
        console.log(`El numero ${num1} es mayor a ${num2}`)
    }else if (num1 === num2) {
        console.log(`El numero ${num1} es igual a ${num2}`)
    }else{
        console.log(`El numero ${num2} es mayor a ${num1}`)
    }
}
mayorQue(1,2)

/*4 Realizar un programa que dado 3 números imprima por pantalla cual de los 3 es el mas
chico. */

function mayorQue1(num1,num2,num3){
    if (num1 < num2 && num1 < num3) {
        console.log(`El numero ${num1} es menor a ${num2} y ${num3}`)
    }else if (num2 < num1 && num2 < num3) {
        console.log(`El numero ${num2} es menor a ${num1} y ${num3}`)
    }else if (num3 < num1 && num3 < num2) {
        console.log(`El numero ${num3} es menor a ${num1} y ${num2}`)
    }else{
        console.log("Algunos numeros son iguales")
    }
}
mayorQue1(1,1,3)

/*5 Realizar un programa que dado 2 objetos representando personas con las propiedades
nombre, edad y altura imprima por pantalla cual de las 2 personas es la mas alta y cual
es la de mayor edad. */

let pepe = {
    nombre: "pepe",
    edad: 20,
    altura: 1.80
}
let pipo = {
    nombre: "pipo",
    edad: 28,
    altura: 1.70
}
function persona(persona1,persona2){
    if (persona1.altura > persona2.altura){
        console.log(`${persona1.nombre} es mas alto que ${persona2.nombre}`)
    }else{
        console.log(`${persona2.nombre} es mas alto que ${persona1.nombre}`)
    }
    if (persona1.edad > persona2.edad){
        console.log(`${persona1.nombre} es mayor que ${persona2.nombre}`)
    }else{
        console.log(`${persona2.nombre} es mayor que ${persona1.nombre}`)
    }
}
persona(pepe,pipo)

/*6 Realizar un programa que permita ingresar por pantalla tu nombre, edad, altura, visión
y permita determinar si estas capacitado para conducir. La persona deberá cumplir con
una edad mínima de 18 años, medir mas de 150cm y tener una visión de 8 de 10 como
mínimo. */

function conducir(){
    let nombre = prompt("Ingrese su nombre")
    let edad = prompt("Ingrese su edad")
    let altura = prompt("Ingrese su altura en cm")
    let vision = prompt("Ingrese su vision")
    if (edad >= 18 && altura >= 150 && vision >= 8){
        console.log(`${nombre} puede conducuir`)
    }else{
        console.log(`${nombre} no es apto para conducir`)
    }
}
/* conducir() */

/*7 Realizar un programa que permita el ingreso de los siguientes datos: Nombre, pase (vip
    o normal), si posee entrada (si o no, s o n, true o false). Las personas que posean tu
    mismo nombre tienen ingreso libre así como también los que posean un pase vip,
    mostrar un mensaje de bienvenida. Si posee entrada preguntar si desea utilizarla, en
    caso afirmativo mostrar mismo mensaje de bienvenida. Y por ultimo de no tener el
    mismo nombre o poseer un pase vip o entrada, preguntar si desea comprar, caso
    afirmativo solicitar dinero disponible, si posee $1000 o mas, mostrar mensaje de venta
    de entrada y bienvenida, caso contrario mostrar mensaje de rechazo de venta, y en
    caso contrario a no querer comprar, mostrar mensaje de despedida. */

function ingreso(){
    let nombre = prompt("Ingrese nombre")
    let pase = prompt("Su pase (Vip o normal)")
    let entrada = prompt("tiene entrada si/no")
    if (nombre === "carlos" || pase === "vip") {
        console.log(`Bienvenido ${nombre}`)       
    }else if (entrada === "si") {
        let utilizar = prompt("Desea utilizarla? si/no")
        if (utilizar === "si"){
            console.log(`Bienvenido ${nombre}`)  
        }
    }else{
        let comprar = prompt("Desea comprar una entrada? si/no")
        if (comprar === "si"){
            let dinero = prompt("Ingrese su dinero")
            if (dinero >= 1000) {
                console.log(`Ha comprado una entrada bienvenido ${nombre}`)
            }
        }else{
            console.log("No entra adios")
        }
    }
}

/* ingreso() */

/*8 Realizar un juego de adivinanza estableciendo un valor entre 1 y 10 en una variable
llamada numeroIncognita y que permita en 3 intentos adivinar el numero. El usuario
deberá ingresar un numero del 1 al 10 por pantalla en 3 intentos el cual se deberá
guardar en una variable llamada numeroIngresado, y en cada intento deberás
mostrarle un mensaje al usuario diciendo: “el numero ingresado es mayor, vuelve a
intentarlo” o “el numero ingresado es menor, vuelve a intentarlo” o en caso de
adivinar, un mensaje que diga: “Ganaste, haz adivinado el numero.” No te preocupes si
usas mucho código repetido, mas adelante veraz como realizar este juego de manera
mas eficiente. */

function adivinanza(){
    let numeroIncognita = 7
    let numeroIngresado = prompt("ingrese un numero entre el 1 y el 10 para adivinar tiene 3 intentos")
    if (numeroIngresado == numeroIncognita){
        console.log("Ganaste, haz adivinado el numero.")
    }else if (numeroIngresado > numeroIncognita){
        numeroIngresado = prompt("el numero ingresado es mayor, vuelve a intentarlo")
        if (numeroIngresado == numeroIncognita){
            console.log("Ganaste, haz adivinado el numero.")
        }else if (numeroIngresado > numeroIncognita){
            numeroIngresado = prompt("el numero ingresado es mayor, vuelve a intentarlo")
            if (numeroIngresado == numeroIncognita){
                console.log("Ganaste, haz adivinado el numero.")
            }else{
                console.log("perdiste")
            }
        }else if (numeroIngresado < numeroIncognita){
            numeroIngresado = prompt("el numero ingresado es menor, vuelve a intentarlo")
            if (numeroIngresado == numeroIncognita){
                console.log("Ganaste, haz adivinado el numero.")
            }else{
                console.log("perdiste")
            }
        }
    }else if (numeroIngresado < numeroIncognita){
        numeroIngresado = prompt("el numero ingresado es menor, vuelve a intentarlo")
        if (numeroIngresado == numeroIncognita){
            console.log("Ganaste, haz adivinado el numero.")
        }else if (numeroIngresado > numeroIncognita){
            numeroIngresado = prompt("el numero ingresado es mayor, vuelve a intentarlo")
            if (numeroIngresado == numeroIncognita){
                console.log("Ganaste, haz adivinado el numero.")
            }else{
                console.log("perdiste")
            }
        }else if (numeroIngresado < numeroIncognita){
            numeroIngresado = prompt("el numero ingresado es menor, vuelve a intentarlo")
            if (numeroIngresado == numeroIncognita){
                console.log("Ganaste, haz adivinado el numero.")
            }else{
                console.log("perdiste")
            }
        }
    }
}
/* adivinanza() */

/*9 Crear un programa que permita ingresar tu edad y decir si eres un infante (0 a 12
años), adolescente(13 a 18 años), un mayor joven (19 a 45 años) o un anciano (mas de
45 años), y en caso de ingresar una edad mayor a 100 mostrar un mensaje
preguntando si en realidad tiene esa edad. */

function edad(edad){
    if (edad >= 0 && edad <= 12){
        console.log("Eres un infante")
    }else if (edad >= 13 && edad <= 18){
        console.log("Eres adolesente")
    }else if (edad >= 19 && edad <= 45){
        console.log("Eres un mayor joven")
    }else if (edad > 45 && edad <= 99){
        console.log("Eres un anciano")
    }else{
        console.log("¿Deverdad tienes esa edad?")
    }
}
edad(11)

/*10 Crear un programa que permita el ingreso de “PIEDRA”, “PAPEL” o “TIJERAS” a 2
jugadores y muestre en pantalla cual de los 2 ha ganado o si han empatado. En caso de
algún ingreso incorrecto mostrar por pantalla que uno de los jugadores ha hecho
trampa. */

function juegoDePPT(){
    let jugador1 = prompt("jugador1 ingrese piedra papel o tijeras")
    let jugador2 = prompt("jugador2 ingrese piedra papel o tijeras")
    if ((jugador1 == "piedra" && jugador2 == "tijeras") || (jugador1 == "papel" && jugador2 == "piedra") || 
    (jugador1 == "tijeras" && jugador2 == "papel")){
        console.log("jugador1 gana")
    }else if ((jugador2 == "piedra" && jugador1 == "tijeras") || (jugador2 == "papel" && jugador1 == "piedra") || 
    (jugador2 == "tijeras" && jugador1 == "papel")){
        console.log("jugador2 gana")
    }
}
/* juegoDePPT() */

/*11 Realizar un programa que permita el ingreso de un color y utilizando “switch” mostrar
por pantalla los siguientes mensajes según las opciones: Blanco o Negro: Falta de color,
Verde: El color de la naturaleza, Azul: El color del agua, Amarillo: El color del sol, Rojo:
El color del fuego, Marrón: el color de la tierra, y para cualquier otro valor: Excelente
elección, no lo teníamos pensado. */

function colores(){
    let color = prompt("Ingrese su color")
    switch (color){
        case "Blanco" || "Negro":
            console.log("falta color")
            break
        case "Verde":
            console.log("El color de la naturaleza")
            break
        case "Azul":
            console.log("El colo del agua")
            break
        case "Amarillo":
            console.log("El color del sol")
            break
        case "Rojo":
            console.log("El color del fuego")
            break
        case "Marron":
            console.log("El color de la tierra")
            break
        default:
            console.log("Exelente elcción, no lo teníamos pensado")
            break
    }
}
/* colores() */

/*12 Realizar un programa que permita el ingreso de 2 valores numéricos y una operación.
Según sea la operación ingresada (suma, resta, multiplicación, división) el programa
deberá mostrar en pantalla un mensaje junto con el resultado. En caso de haber
elegido división realizar la operación siempre que sea posible o mostrar un mensaje de
ERROR si el divisor ingresado fue 0. */

function calculadora(){
    let num1 = parseInt(prompt("Ingrese el primer numero"))
    let num2 = parseInt(prompt("Ingrese el segundo numero"))
    let operacion = prompt("Ingrese la operacion que quiere realizar")
    if (operacion == "suma"){
        console.log("EL resultado es " + (num1 + num2))
    }else if (operacion == "resta"){
        console.log("EL resultado es " + (num1 - num2))
    }else if (operacion == "multiplicacion"){
        console.log("EL resultado es " + (num1 * num2))
    }else if (operacion == "divicion"){
        if (num2 != 0){
            console.log("EL resultado es " + (num1 / num2))
        }else {
            console.log("ERROR")
        }
    }
}
/* calculadora() */

/*13 Crear un programa que permita ingresar todos los datos de tu documento nacional de
identidad, mostrar por pantalla un mensaje que imprima todos los datos ingresados y
pregunte si están correctos los mismos. En caso afirmativo, crear un objeto llamado dni
con todos los datos ingresados y mostrarlos por consola con console.table() mas un
mensaje de registro exitoso, en caso de que la persona rechace confirmar los datos,
mostrar un mensaje que diga: vuelva a intentarlo en 1 mes. */

function identidad(){
    let nombre = prompt("Ingrese su nombre")
    let numero = prompt("Ingrese el numero de identificacion")
    let fecha = prompt("Ingrese la fecha de expedicion")
    let rh = prompt("Ingrese el su grupo sanguineo")
    let estatura = prompt("Ingrese la estatura")
    let lugarNacimiento = prompt("Ingrese el lugar de nacimiento")
    let ingreso = prompt(`los datos son correctos?: 
    Nombre: ${nombre} Numero: ${numero} fecha de expedicion: ${fecha} Grupo sanguineo: ${rh}
    Estatura: ${estatura} Lugar de nacimiento: ${lugarNacimiento}`)
    if (ingreso == "si"){
        let dni = {
            nombre: nombre,
            numero: numero,
            fehcaDeExpedicion: fecha,
            Estatura: estatura,
            rh: rh,
            lugarDeNacimiento: lugarNacimiento,
        }
        console.table(dni)
        console.log("Registro exitoso")
    }else{
        console.log("Vuelva a intentarlo en 1 mes")
    }
}
/* identidad() */