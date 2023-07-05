console.log("Hola desde function.js")

let producto={nombre:"Ricardo",precio:0.0,cantidad:0, total:()=>{ precio * cantidad}}
const productos ={};

let carrito ={producto,folio:'',subtotal:()=>{producto.total},total:()=>{carrito.subtotal*0.16}}

const name = document.getElementById("name");
const precio = document.getElementById("precio");
const cantidad = document.getElementById("cantidad");

console.log(producto);
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

function agregar(){
 producto.nombre = name.value;
 producto.precio = precio.value;
 producto.cantidad = cantidad.value;
 console.log(producto);
 producto.push(producto);
 console.log(productos)
}

function cerrar(){
    carrito.producto = productos;
    carrito.folio = generateString(5);
    carrito.subtotal =()=>{ productos.length}
    carrito.total =()=>{carrito.subtotal * 0.16}
 console.log(carrito)
}


function  turnOn(){
    if(tv.power){
        console.log("A encendido el televisor");
        tv.volumen = 3;
        tv.canal = 7;
        tv.power = false;
        console.log(tv)
    }else{
        console.log("A apagado el televisor");
        tv.power = true;
        tv.volumen = 0;
        tv.canal= 0;
        tv.silence = false;
        console.log(tv)

    }
}
