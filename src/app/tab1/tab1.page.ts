import { Component, Input, forwardRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
  
})
export class Tab1Page {

  @Input() dias: number = 3;
  @Input() pessoas: number;
  constructor(public router: Router) {

  }

  
  CalcularCaixaIdeal(dias, pessoas){
    if(dias==null || dias==undefined || pessoas==null || pessoas==undefined ){
      return ;
    }
    sessionStorage.removeItem('dias');
    sessionStorage.removeItem('pessoas');
    sessionStorage.setItem('dias', dias)
    sessionStorage.setItem('pessoas', pessoas)
     this.router.navigate(['/tabs/tab2']);
   };
   
}
