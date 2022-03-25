import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-other-calcultor-health',
  templateUrl: './other-calculator-health.component.html',
  styleUrls: ['./other-calculator-health.component.scss']
})
export class OtherCalcultorHealthComponent implements OnInit {
  arrayOtherCalculators: any;
  @Input() eleminateCalculator :any;
   
  constructor() { 
  }


  ngOnInit(): void {
    this.arrayOtherCalculators = [
      {'title':'Body mass index BMI calculator', 'url': '/health/bmi-calculator', 'code':'bmi'},
      {'title':'Body fat percentage calculator', 'url': '/health/body-fat-percentage-calculator', 'code':'bfp'},
      {'title':'Ideal weight calculator', 'url': '/health/ideal-weight-calculator', 'code': 'idc'},
      {'title':'Body shape calculator', 'url': '/health/body-shape-calculator', 'code': 'bsc'},
      {'title':'Basal metabolic rate calculator (BMR)', 'url': '/health/basal-metabolic-calculator', 'code': 'bmrc'},
      {'title':'Healthy weight calculator', 'url': '/health/healthy-weight-calculator', 'code': 'hwc'},
    ];
    this.arrayOtherCalculators = this.arrayOtherCalculators.filter((x:any) => x.code != this.eleminateCalculator);
  }
}
