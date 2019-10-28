

import { Component, OnInit } from '@angular/core'; 
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap'; 

@Component({
  selector: 'app-mid1',
  templateUrl: './mid1.component.html',
  styleUrls: ['./mid1.component.scss']
})


export class Mid1Component  {

  name = 'app';

  
   
}


export class CarouselComponent implements OnInit {  
  
  constructor(config: NgbCarouselConfig) {  
    config.interval = 2000;  
    config.wrap = true;  
    config.keyboard = false;  
    config.pauseOnHover = false;  
  }  
  ngOnInit() {  
  }  
  
}

export class AppComponent  {

  name = 'app';

   
}
