import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

   public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };  public barChartLabels = ['Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre'];
  public barChartType = 'bar';
  public barChartLegend = true;  public barChartData = [
    {data: [10,11, 10, 11, 10, 11, 10,0], label: 'Mejor puntuacion mundial'},
    {data: [8, 8, 10, 9, 8, 10, 10,0], label: 'Mejor puntuacion nacional'}
  ];

  ngOnInit() {
  }
  toJoin(){
    this.router.navigate(['/setup',{host: true}]);
  }
  toCreate(){
    this.router.navigate(['/setup',{host: false}]);
  }
  toPerfil(){
    this.router.navigate(['/perfil']);
  }
}
