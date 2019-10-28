import { Injectable } from '@angular/core';
import { isNullOrUndefined } from "util";

@Injectable()
export class ServicePerfil {

public dato1: string;
public dato2: string;
public dato3: string;

//Funcion
  public getData(dato, index): string {

  //INICIALIZADOR
if(isNullOrUndefined(dato)){
  console.log("valor vacio // PerfilData");
  return null;
}

//SIN VALOR
if(dato==""){
  console.log("INICIALIZANDO PerfilData");
  return " ";
}

//VALOR aceptable

switch (index) {
    case 0:
        this.dato1 = dato;//user
        console.log(dato+" // PerfilData: user");
        break;
    case 1:
        this.dato2 = dato;//contrasena
        console.log(dato+" // PerfilData: contrasena");
        break;
    case 1:
        this.dato3 = dato;//contrasena
        console.log(dato+" // PerfilData: edad");
        break;
        }

    return dato;
  }
}
