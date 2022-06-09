import { Component, forwardRef, OnInit, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputComponent),
  multi: true
};

export const toLocaleFixed = (n: any, numero: number): any => {
  if (typeof parseFloat(n) === 'number') {
    return parseFloat(n).toLocaleString('pt-BR', {
      minimumFractionDigits: numero,
      maximumFractionDigits: numero
    });
  } else {
    return n;
  }
};

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class InputComponent implements ControlValueAccessor, OnInit {
  @Input()
  titulo: string = '';
  @Input()
  input: FormControl;
  private _value: string | number = 0;
  constructor() { }
  get value() {
    return this._value;
  }
  set value(value: string | number) {
    if (value && value !== this._value) {
      this._value = value;
      this.writeValue(value);
    }
  }
  converterDinheiro(): void {
    this.value = !isNaN(this.input.value) ? 'R$ ' + toLocaleFixed(this.input.value, 2) : '';
  }
  writeValue(obj: any): void {
    this.propagateChange(obj);
  }
  propagateChange = (_: any): void => { }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void { }
  ngOnInit(): void { }
}
