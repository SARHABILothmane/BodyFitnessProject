import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator-scientifique',
  templateUrl: './calculator-scientifique.component.html',
  styleUrls: ['./calculator-scientifique.component.scss']
})
export class CalculatorScientifiqueComponent implements OnInit {

  valuButton: string = '&#177';

  constructor() { }

  ngOnInit(): void {}
}