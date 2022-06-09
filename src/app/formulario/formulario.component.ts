import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  form: FormGroup = this.formBuilder.group({
    dinheiro: ['', Validators.required],
    nome: ['', Validators.required],
    idade: [''],
  });;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      console.warn('Formulário enviado!', this.form.value);
      this.form.reset();
    }
  }
}
