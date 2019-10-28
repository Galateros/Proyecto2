

import { Component, OnInit } from '@angular/core'; 

//Servicio y modulo
import { Service } from '../loginData.service';
import { FormsModule } from '@angular/forms'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-mid2',
  templateUrl: './mid2.component.html',
  styleUrls: ['./mid2.component.scss']
})

//implemetaoOnInit
export class Mid2Component implements OnInit {

    
   public user: string;
   public contra: string;

   //activa el srvricio
    constructor(private _Service: Service , private router : Router) {
   
    }

    //Iniciar un servicio
    ngOnInit(){
    this._Service.getData("",0);
    }

    //Funcion que llama a servicio
    public getData(): void {
        this.user = this._Service.getData(this.user,0);
        this.contra = this._Service.getData(this.contra,1);
        this.router.navigate(['/home']);
    }
    public goRegister(){
      this.router.navigate(['/registro']);
    }


}

export class AppComponent  {

}
