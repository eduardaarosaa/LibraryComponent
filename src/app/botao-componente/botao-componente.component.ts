import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-botao-componente',
  templateUrl: './botao-componente.component.html',
  styleUrls: ['./botao-componente.component.css']
  // host: { '(click)': 'onClick()'}

})
export class BotaoComponenteComponent implements OnInit {
 
  @Input() componentClass: string = '';
  @Input() label: string = '';
  

  constructor() {

    
  }

  //Ao cliar no botão o elemento adiciona uma bordar de 1.5px #ccc
  clickEvent(event: any){
    event.srcElement.classList.add("btn-click");       
  }

  
  ngOnInit(): void {

  }

}
