import { Bmr } from 'src/app/models/bmr';
import { faMale, faFemale } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-healthy-weight-calculator',
  templateUrl: './healthy-weight-calculator.component.html',
  styleUrls: ['./healthy-weight-calculator.component.scss']
})
export class HealthyWeightCalculatorComponent implements OnInit {
  calculeHwc!: FormGroup;
  selectedHeight: string = "cm";
  height!: number;
  iwc!: number;
  heightCm!: number;
  healthyWeightMin!: number;
  healthyWeightMax!: number;
  rsltHealthyWeightMin!: string;
  rsltHealthyWeightMax!: string;
  bmi!: number;
  faMale = faMale;
  faFemale = faFemale;
  modelsIwc: Bmr = {
    age: 0,
    height: 0,
    weight: 0,
  }
  constructor() {
    this.calculeHwc = new FormGroup({
      height: new FormControl("", [Validators.required]),
    });
  }

  ngOnInit(): void {
  }
  public CalculateHwc(e: HTMLElement): void {
    // Devine formula: 50.0 kg + 2.3 kg per every inch over 5 feet
    // Miller Formula  Male:	56.2 kg + 1.41 kg per inch over 5 feet
    this.height = this.calculeHwc.value.height;
    e.scrollIntoView({ behavior: "smooth" });
    if (this.selectedHeight === "cm") {
      ///// cm to inches
      this.heightCm = this.height / 100
      // this.bmi = this.heightMiller / (this.square(this.heightCm, 2));
      this.healthyWeightMin = this.square(this.heightCm, 2) * 18.5;
      this.healthyWeightMax = this.square(this.heightCm, 2) * 25;
      this.rsltHealthyWeightMin = this.healthyWeightMin.toFixed(2);
      this.rsltHealthyWeightMax = this.healthyWeightMax.toFixed(2);
    }
    if (this.selectedHeight === "m") {
      ///// m to inches
      this.healthyWeightMin = this.square(this.height, 2) * 18.5;
      this.healthyWeightMax = this.square(this.height, 2) * 25;
      this.rsltHealthyWeightMin = this.healthyWeightMin.toFixed(2);
      this.rsltHealthyWeightMax = this.healthyWeightMax.toFixed(2);
    }
    if (this.selectedHeight === "in") {
      ///// feet to inches
      let heightRslt = this.height / 39.37;
      this.healthyWeightMin = this.square(heightRslt, 2) * 18.5;
      this.healthyWeightMax = this.square(heightRslt, 2) * 25;
      this.rsltHealthyWeightMin = this.healthyWeightMin.toFixed(2);
      this.rsltHealthyWeightMax = this.healthyWeightMax.toFixed(2);
    }
    ///// inches
    if (this.selectedHeight === "ft") {
      let heightRslt = this.height * 0.3048;
      heightRslt = this.square(heightRslt, 2) * 18.5;
      this.healthyWeightMin = this.square(heightRslt, 2) * 18.5;
      this.healthyWeightMax = this.square(heightRslt, 2) * 25;
      this.rsltHealthyWeightMin = this.healthyWeightMin.toFixed(2);
      this.rsltHealthyWeightMax = this.healthyWeightMax.toFixed(2);
    }
  }
  square(firstNumber: number, secondNumber: number): number {
    return firstNumber ** secondNumber
  }
  heightSelect(v: any) {
    //cm
    if (this.selectedHeight === "cm") {
      if (v === 'm') {
        this.modelsIwc.height = this.calculeHwc.value.height / 100;
        this.selectedHeight = "m";
      }
      if (v == 'in') {
        this.modelsIwc.height = (this.calculeHwc.value.height / 100) * 39.37;
        this.selectedHeight = "in"
      }
      if (v == 'ft') {
        // this.modelsIwc.height = (this.calculeHwc.value.height * 100) / 0.3048;
        this.modelsIwc.height = this.calculeHwc.value.height / 30.48;
        this.selectedHeight = "ft"
      }
      //m
    } if (this.selectedHeight === "m") {
      if (v === 'cm') {
        this.modelsIwc.height = this.calculeHwc.value.height * 100;
        this.selectedHeight = "cm"
      }
      if (v == 'in') {
        this.modelsIwc.height = this.calculeHwc.value.height * 39.37;
        this.selectedHeight = "in"
      }
      if (v == 'ft') {
        this.modelsIwc.height = this.calculeHwc.value.height / 0.3048;
        this.selectedHeight = "ft"
      }
    }
    //in
    if (this.selectedHeight === "in") {
      if (v == 'm') {
        this.modelsIwc.height = this.calculeHwc.value.height / 39.37;
        this.selectedHeight = "m"
      }
      if (v == 'cm') {
        this.modelsIwc.height = (this.calculeHwc.value.height * 100) / 39.37;
        this.selectedHeight = "cm"
      }
      if (v == 'ft') {
        // this.modelsIwc.height = (this.calculeHwc.value.height / 39.37) / 0.3048;
        this.modelsIwc.height = this.calculeHwc.value.height / 12;
        this.selectedHeight = "ft"
      }
    }
    //ft
    if (this.selectedHeight === "ft") {
      if (v == 'm') {
        this.modelsIwc.height = this.calculeHwc.value.height * 0.3048;
        this.selectedHeight = "m"
      }
      if (v == 'cm') {
        // this.modelsIwc.height = (this.calculeHwc.value.height * 100) * 0.3048;
        this.modelsIwc.height = this.calculeHwc.value.height * 30.48;
        this.selectedHeight = "cm"
      }
      if (v == 'in') {
        this.modelsIwc.height = this.calculeHwc.value.height * 12;
        this.selectedHeight = "in"
      }
    }
  }
}
