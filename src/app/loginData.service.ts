import { Injectable } from '@angular/core';
import { isNullOrUndefined } from "util";

@Injectable()
export class Service {

public dato1: string;
public dato2: string;

//Funcion
  public getData(dato, index): string {

  //INICIALIZADOR
if(isNullOrUndefined(dato)){
  console.log("valor vacio // LoginData");
  return null;
}

//SIN VALOR
if(dato==""){
  console.log("INICIALIZANDO LoginData");
  return " ";
}

//VALOR aceptable

switch (index) {
    case 0:
        this.dato1 = dato;//user
        console.log(dato+" // LoginData: user");
        break;
    case 1:
        this.dato2 = dato;//contrasena
        console.log(dato+" // LoginData: contrasena");
        break;
}

    return dato;
  }
}


/*

//PLANTILLA

import { Injectable } from '@angular/core';
import { isNullOrUndefined } from "util";

@Injectable()
export class Service {

public dato1: string;

  public getData(dato): string {

  //INICIALIZADOR
if(isNullOrUndefined(dato)){
  console.log("valor vacio // LoginData");
  return null;
}

//SIN VALOR
if(dato==""){
  console.log("INICIALIZANDO LoginData");
  return " ";
}

//VALOR aceptable
console.log(dato+" // LoginData");
this.dato1 = dato;
    return dato;
  }
}


*/
