import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  @Input() dias: number;
  @Input() pessoas: number;
  @Input() resultado: number;
  @Input() imagemCaixa: any;

  constructor(public router: Router) {
    //Nó na mente do marco, Dias x quantidade de pessoas x Possíveis dias sem abastecimento.
    this.Calculo();
  }

  Calculo() {
    this.dias = parseInt(sessionStorage.getItem('dias'));
    this.pessoas = parseInt(sessionStorage.getItem('pessoas'));

  if(this.dias>0){
    this.resultado = this.pessoas * 170 * this.dias;
  }else{
    this.resultado = this.pessoas * 170;
  }

       if(this.resultado < 1000){
          this.imagemCaixa = "../../assets/icon/5a10.png";
       }else if(this.resultado >= 1000 && this.resultado < 5000 ){
          this.imagemCaixa = "../../assets/icon/10a50.jpg";
       }else{
        this.imagemCaixa = "../../assets/icon/maisde50.jpg";
       }
  }

  Voltar() {
    this.router.navigate(['/tabs/tab1']);
  }

  ionViewWillLeave(){
    sessionStorage.removeItem('dias');
    sessionStorage.removeItem('pessoas');
  }
  


}
