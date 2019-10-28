import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
import { PusherService } from '../pusher.service';


@Component({
  selector: 'app-game-screen',
  templateUrl: './game-screen.component.html',
  styleUrls: ['./game-screen.component.scss']
})
interface Message {
  text: string;
  user: string;
}

export class GameScreenComponent implements OnInit {
  messages: Array<Message>;
public text = "Test Text";
  constructor(private router: Router, private route: ActivatedRoute,private pusherService: PusherService) {
   this.messages = [];
 }
  activo = ["Fiesta por la Noche"];
  instEbrio = "Elige a que rol convertirse";
  instCur = "Elige a quien curar";
  instWar = "Elige si atacar a alguien o convertirlo a tu religion";
  ebrio = ["Convertir"];
  curandero = ["Curar"];
  warewolves = ["Atacar","Convertir"];

  ngOnInit() {
  	console.log(this.text);
  	this.text = this.route.snapshot.paramMap.get('host');
  	console.log(this.text);

    this.pusherService.messagesChannel.bind('client-new-message', (message) => {
      this.messages.push(message);
    });

  }

  sendMessage(user: string, text: string) {
    const message: Message = {
       user: user,
       text: text,
    }
    this.pusherService.messagesChannel.trigger('client-new-message', message);
    this.messages.push(message);
  }
  
}
