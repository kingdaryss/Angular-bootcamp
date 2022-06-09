import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  @Input('titulo') titulo: string = '';

  texto: string = 'Descritivo';

  cor: string = '#27AAE1';

  desabilitado: boolean = false;

  condicao: boolean = true;

  listaPessoas: { nome: string; idade: number }[] = [{ nome: 'Thiago', idade: 21 }, { nome: 'João', idade: 32 }, { nome: 'José', idade: 72 }];

  constructor() { }

  ngOnInit(): void { }

  aoClicar(): void {
    this.condicao = !this.condicao;
  }

}
