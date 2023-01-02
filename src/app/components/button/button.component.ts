import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit{
  @Input()  text  : string = "Add";
  @Input()  color : string = "red";
  @Output() btnOnClick = new EventEmitter();
  constructor() {}

      ngOnInit(): void {}
      onClick() {
        this.btnOnClick.emit();
      };
}
