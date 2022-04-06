import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-other-calcultor-time',
  templateUrl: './other-calculator-time.component.html',
  styleUrls: ['./other-calculator-time.component.scss']
})
export class OtherCalcultorTimeComponent implements OnInit {
  arrayOtherCalculators: any;
  @Input() eleminateCalculator :any;
   
  constructor() { 
  }


  ngOnInit(): void {
    this.arrayOtherCalculators = [
      {'title':'Age calculator', 'url': '/calculators/age-calculator', 'code':'ac'},
      {'title':'Date calculator', 'url': '/calculators/date-calculator', 'code':'dc'},
    ];
    this.arrayOtherCalculators = this.arrayOtherCalculators.filter((x:any) => x.code != this.eleminateCalculator);
  }
}
