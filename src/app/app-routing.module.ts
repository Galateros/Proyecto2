import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GameScreenComponent} from './game-screen/game-screen.component';
import { SetupComponent } from './setup/setup.component';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
{ path : 'game-screen', component: GameScreenComponent},
{ path : 'setup', component: SetupComponent},
{ path : 'setup/:host', component: SetupComponent},
{ path : '', redirectTo: '/home', pathMatch: 'full'},
{ path : 'game-screen/:form', component : GameScreenComponent},
{ path : 'home', component: HomeComponent},
{ path : 'perfil', component: PerfilComponent},
{ path : 'login', component: LoginComponent},
{ path : 'registro',component: RegistroComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
