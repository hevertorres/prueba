// Clases
// class  Car  objects   Audi  Nissan Toyota Volvo 

//objeto Audi1  color-negro modelo-1990 placa-AAs56B  
// manejando()
 const audi1 ={
     marca:"Audi",color:"negro", modelo:"1990",placa:"AAs56B",
     manejar(){ 
         console.log(
             "manejando mi Audi1  color :"+ this.color + " placa  :" + this.placa + " Modelo :" + this.modelo)}
 }

//funtion constructora
function Car (marca,color,modelo,placa){
    this.marca = marca;
    this.color=color;
    this.modelo=modelo;
    this.placa= placa;

    this.manejar=function(){
        console.log(
            "Manejando mi Carro "+ this.marca + " Color: "+this.color+" Modelo "+this.modelo+" Placa:"+this.placa);
    }
}
//funtion constructora Prototipo

function Car2(marca,color,modelo,placa){
    this.marca=marca;
    this.color=color;
    this.modelo=modelo;
    this.placa=placa;
}
Car2.prototype.manejar = function(){
    console.log(
        "Manejando mi Carro "+ this.marca + " Color: "+this.color+" Modelo "+this.modelo+" Placa:"+this.placa)
}
   

//Class
class Carro{
    constructor(marca,color,modelo,placa){
        this.marca=marca;
        this.modelo=modelo;
        this.color=color;
        this.placa=placa;
    }
    manejar(){
        console.log(
            "Manejando mi Carro "+ this.marca + " Color: "+this.color+" Modelo "+this.modelo+" Placa:"+this.placa)
    }
}

//Herencia  Carro-->Cammion

class Camion extends Carro{
    constructor(marca,color,modelo,placa,cilindraje,capacidad,){
        super(marca,color,modelo,placa)
        this.cilindraje=cilindraje;
        this.capacidad=capacidad;
    }

    manejar(){
        console.log(
            "Manejando mi Caminion "+ this.marca + " Cilindraje: "+this.cilindraje+" Modelo "+this.modelo+" Placa:"+this.placa+" Capacidad: "+this.capacidad)
    }
        

}
//---------------------------------------------------
// objeto audi1  linea 4-10
audi1.manejar();

//objeto nissan  funcion contructora Car linea 12-21

const nissan =  new Car("Nissan","Rojo","2000","OOI54Q");

nissan.manejar();

//objeto Toyota funcion contructora Car linea 23-33

toyota=new Car2("Toyota","Blanco","2015","OOU67E")
mazda=new Car2("Mazda","Azul","2019","GGS54Q")

toyota.manejar();
mazda.manejar();





//objeto volvo Clase Carro  linea 39-52

volvo = new Carro("Volvo","Amarillo","2020","AAA52C");
volvo.manejar();

tracto = new Camion("Tracto100","Negro-Rojo","2015","QQQA45A","25000CC","50 Toneladas");
tracto.manejar();





