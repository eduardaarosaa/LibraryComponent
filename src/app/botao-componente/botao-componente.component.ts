import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao-componente',
  templateUrl: './botao-componente.component.html',
  styleUrls: ['./botao-componente.component.css']

})
export class BotaoComponenteComponent implements OnInit {
 
  @Input() componentClass: string = '';
  @Input() label: string = '';
  
  
  constructor() {

    
   }

  ngOnInit(): void {
    
  }

}
