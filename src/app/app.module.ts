import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChartsModule } from 'ng2-charts';


//Servicio Mensajes
import { PusherService } from './pusher.service';
//Importar forms
import { FormsModule } from '@angular/forms';
//Importar un servicio propio
//Generar servicio con: ng generate service ...
import { Service } from './loginData.service'
//Importar bootsrap con: npm install --save @ng-bootstrap/ng-bootstrap
//Importar tambien con: npm install bootstrap@3 jquery --save
import  {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SetupComponent } from './setup/setup.component';
import { GameScreenComponent } from './game-screen/game-screen.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopComponent } from './top/top.component';
import { BotComponent } from './bot/bot.component';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { LoginComponent } from './login/login.component';
import { Mid1Component } from './mid1/mid1.component';
import { Mid2Component } from './mid2/mid2.component';
import { ServicePerfil } from './perfil-data.service';
import { RegistroComponent } from './registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    SetupComponent,
    GameScreenComponent,
    DashboardComponent,
    TopComponent,
    BotComponent,
    PerfilComponent,
    HomeComponent,
    LoginComponent,
    Mid1Component,
    Mid2Component,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    FormsModule,
    NgbModule
  ],
  providers: [Service,ServicePerfil,PusherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
