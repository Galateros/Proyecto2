

import { Component, OnInit } from '@angular/core'; 

//Servicio y modulo
import { ServicePerfil } from '../perfil-data.service';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})

//implemetaoOnInit
export class RegistroComponent implements OnInit {

    
   public user: string;
   public contra: string;
   public contraTEST: string;
   public edad: string;

   //activa el srvricio
    constructor(private _Service: ServicePerfil ) {
   
    }

    //Iniciar un servicio
    ngOnInit(){
    this._Service.getData("",0);
    }

    //Funcion que llama a servicio
    public getData(): void {
        this.user = this._Service.getData(this.user,0);
        this.contra = this._Service.getData(this.contra,1);
         this.contraTEST = this._Service.getData(this.contraTEST,2);
        this.edad = this._Service.getData(this.edad,3);
    }


}

export class AppComponent  {

}
