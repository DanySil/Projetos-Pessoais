import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form-add-item',
  imports: [],
  templateUrl: './form-add-item.html',
  styleUrl: './form-add-item.css'
})
export class FormAddItem {

@Output() close = new EventEmitter<void>();

closeModal(){
  this.close.emit();
}
}
