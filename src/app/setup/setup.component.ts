import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {

	public host = false;
  constructor(private route: ActivatedRoute, private router:Router ) { }

  ngOnInit() {
  	if(this.route.snapshot.paramMap.get('host')){
  		this.host = (this.route.snapshot.paramMap.get('host') == 'true');
  	}else{
  		this.host = false;
  	}
  }
  public toGameScreen(){
    this.router.navigate(['/game-screen',{host: this.host}]);
  }
}
