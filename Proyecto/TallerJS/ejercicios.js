/*1 - Solicita un nombre, la edad y muestra por consola 
el mensaje "Hola ____, tienes ____ años y el año que viene tendrás ____ años"
Realiza el ejercicio con prompt(mensaje) y haz uso de los template strings*/

let nombre=prompt("Digite el nombre")
let edad= prompt("Digite la edad")
alert(`Hola ${nombre}, tienes ${edad} años y el año que viene tendrás ${parseInt(edad)+1} años.`)


/*2 - Escribe un programa que pueda calcular el área de 3 figuras geométricas, 
triángulo, rectángulo y círculo. En primer lugar pregunta de qué 
figura se quiere calcular el área, después solicita los datos que necesites para calcularlo.

    triángulo = b * h/2
    rectángulo = b * h
    círculo = π * r2 (pi * radio al cuadrado)*/ 


var menu=0;
while(menu!=4)
{
    menu=parseInt(prompt("1. Triangulo \n2. Rectangulo \n3. Circulo \n4. Salir"));
    switch(menu)
    {
    case 1:
        var base=parseInt(prompt("Ingrese la base del triangulo"));
        var altura=parseInt(prompt("Ingrese la altura del triangulo"));
        alert("El area del triangulo es: "+base*(altura/2));
         break;
    case 2:
        var base=parseInt(prompt("Ingrese la base del rectangulo"));
        var altura=parseInt(prompt("Ingrese la altura del rectangulo"));
        alert("El area del rectangulo es: "+base*altura);
        break;
    case 3:
        var radio=parseInt(prompt("Ingrese el radio del circulo"));
        alert("El area del circulo es: "+Math.pow(radio, 2)*Math.PI);
    break;
    }
}

/*3 - Solicita un número e imprime todos los números pares e impares desde 1 hasta ese número con el mensaje "es par" o "es impar"

    si el número es 5 el resultado será:

    1 - es impar
    2 - es par
    3 - es impar
    4 - es par
    5 - es impar*/ 

var numero=parseInt(prompt("Digite un numero entero mayor que 1"))
if(numero>0)
{
    let cadena=("El resultado es:")
    for (let i = 1; i <= numero; i++) 
    {
        if(i%2==0)
        {
            cadena+=`\n ${i} es par`
        }
        else
        {
            cadena+=`\n ${i} es impar`
        }
    }
    alert(cadena)
}
else{
    alert("Digite un numero entero mayor que 1")
}

/*4 - Escribe un programa que pida un número entero mayor que 1 y 
que escriba si el número primo o no.Un número primo es aquel que 
solo es divisible por sí mismo y la unidad*/ 

var numero=parseInt(prompt("Ingrese un numero entero mayor que 1"))
if(numero>0)
{
    let cadena="El numero es primo"
    if (numero == 4) 
    {
        cadena="El numero no es primo"
    }
    for (let i = 2; i < numero / 2; i++) 
    {
        if (numero%i==0)
        {
            cadena="El numero no es primo"
        }
    }
    alert(cadena)
}
else{
    alert("Ingrese un numero entero mayor que 1")
}

/*5 - Escriba un programa que pida un número entero mayor que cero y calcule su factorial.
    El factorial es el resultado de multiplicar ese número por sus anteriores hasta la unidad.
    !5 = 5*4*3*2*1 = 120*/

var numero=parseInt(prompt("Ingrese un numero entero mayor que cero"))
if(numero>0)
{
    var resultado=1
    for(let i=1 ; i<=numero ; i++)
    {
        resultado=resultado*i
    }
    alert("El factorial del numero " +numero+" es: "+resultado)
}
else
{
    alert("Digite un numero entero mayor que cero")
}


/*6 - Escribe un programa que permita ir introduciendo 
una serie indeterminadade números mientras su suma no supere 50. 
Cuando esto ocurra, se debe mostrar el total acumulado y 
el contador de cuantos números se han introducido*/ 

var suma=0
var con=0
while(suma<=50)
{
    var numero=parseInt(prompt("Ingrese un numero"))
    if((suma+numero)<=50)
    {
        suma+=numero
        con++;
    }
    else
    {
        break;
    }
}
alert(`El total acumulado es ${suma} y la cantidad de numeros ingresados es ${con}`)

/*7 - Crea 3 arrays. El primero tendra 5 números y el segundo se llamará 
pares y el tercero impares, ambos estarán vacíos. Después multiplica cada 
uno de los números del primer array por un número aleatorio entre 1 y 10, 
si el resultado es par guarda ese número en el array de pares y si es impar
 en el array de impares. Muestra por consola:

    -la multiplicación que se produce junto con su resultado con el formato 2 x 3 = 6
    -el array de pares e impares */

for (let i = 0; i <= 4; i++)
{
    var numero=parseInt(prompt("Digite un numero"))
    numeros[i]=numero
}
var aleatorio=parseInt((Math.random()*10)+1)
let impares=[]
let pares=[]
for (let i = 0; i <= 4; i++) 
{
    if((numeros[i]*aleatorio)%2==0)
    {
        pares.push(numeros[i]*aleatorio)
    }
    else
    {
        impares.push(numeros[i]*aleatorio)
    }
}
alert("El numero aleatorio es: "+aleatorio+"\nLos numeros pares son: "+pares+"\nLos numeros impares son: "+impares)

/*8 - Dado un array de letras, solicita un número de DNI y calcula que letra le corresponde. 
El número no puede ser negativo ni tener más de 8 dígitos. La posición de la 
letra es el resultado del módulo del número introducido entre 23

const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 
'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];*/
/**/

var numero=parseInt(prompt("Ingrese un numero de 8 o menos digitos"))
if(numero<=99999999 && numero>0)
{
    const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']
    var posicion=numero%23
    console.log("La letra que le corresponde es: "+letras[posicion])
}
else
{
    console.log("Digite un numero mayor que cero y menor de 8 digitos")
}

/*9 - Solicitar al usuario una palabra y mostrar por consola el 
número de consonantes, vocales y longitud de la palabra.*/

var palabra=prompt("Ingrese una palabra")
var conCons=0
var conVoc=0
for (count = 0; count <= palabra.length; count++)
{
    if((palabra.charAt(count).match(/[aeiouAEIOU]/)))
    {       
        conVoc++
    } 
    else if((palabra.charAt(count).match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/)))
    {
        conCons++
    }
}
console.log("La cantidad de consonantes son: "+conCons+"\nLa cantidad de vocales: "+conVoc+"\nLa longitud de la palabra es: "+palabra.length)

/*10 - Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "rosa"] 
determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.*/

const colores = ["azul", "amarillo", "rojo", "verde", "rosa"]
var color=prompt("Digite un color")
if(colores.indexOf(color)==1)
{
    console.log("El color si está dentro del array")
}
else
{
    console.log("El color no está dentro del array")
}