/*a=0
a

console.log(a+50);
*/
a=100
console.log(a)
// programacion orientada a objetos en JS

//objeto  prototipo Object de JS
let animal={  
    nombre:"perro",
    raza:"Domestico",

    sonido(){
       return   console.log("ladra y ladra")
    }
    
}

console.log(animal)

//Clases   crear prototipos popios   FUNCION CONSTRUCTORA
/*  //versio 1.0
function Animal (nombre, raza){

    this.nombre=nombre;
    this.raza = raza;
    //metodos
    this.sonido =function(){
        console.log("mi nombre es "+this.nombre+" y ladro  Soy un animal "+this.raza);
    }
}

perro = new Animal("Kaiser","Domenstico");

perra = new Animal("Luna","domestica");

console.log(pinky)
console.log(luna)


perro.sonido();

perra.sonido();
*/
//Codigo Mejorado   comentar el codigo anterior y
//agregar los metodos al prototipo para evitar duplicarlos cada ves que se instacia un objeto

//version 2.0  
function Animal (nombre, raza){

    this.nombre=nombre;
    this.raza = raza;
  
}
//metodo fuera de la funcion contructora Animal
Animal.prototype.sonido =function(){
    console.log("mi nombre es "+this.nombre+" y ladro  Soy un animal "+this.raza);
}
Animal.prototype.info=function(){
    console.log("Mis datos son: "+this.nombre +" mi raza es "+this.raza);
}

perro = new Animal("Kaiser","Domenstico");

perra = new Animal("Luna","domestica");

perro.sonido();
perra.sonido();
perro.info()
perra.info()

//HERENCIA


