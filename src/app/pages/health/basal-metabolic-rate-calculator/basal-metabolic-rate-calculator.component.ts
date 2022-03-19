import { Bmr } from 'src/app/models/bmr';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { faFemale, faMale } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-basal-metabolic-rate-calculator',
  templateUrl: './basal-metabolic-rate-calculator.component.html',
  styleUrls: ['./basal-metabolic-rate-calculator.component.scss']
})
export class BasalMetabolicRateCalculatorComponent implements OnInit {
  calculeBmr!: FormGroup;
  checked: string = "";
  bmr!: number;
  faMale = faMale;
  faFemale = faFemale;
  selectedHeight: string = "cm";
  selectedWeight: string = "kg";
  height!: number;
  constructor() {
    this.calculeBmr = new FormGroup({
      age: new FormControl("", [Validators.required]),
      height: new FormControl("", [Validators.required]),
      weight: new FormControl("", [Validators.required]),
    });
  }
  modelsBmr: Bmr = {
    age: 0,
    height: 0,
    weight: 0,
  }
  ngOnInit(): void {
  }
  public CalculateBmr(e: HTMLElement): void {
    e.scrollIntoView({ behavior: "smooth" });
    if (this.checked === 'male') {
      if (this.selectedHeight === "cm" && this.selectedWeight === "kg") {
        let heightRslt = this.calculeBmr.value.height;
        let weightRslt = this.calculeBmr.value.weight;
        this.bmr = 10 * weightRslt + 6.25 * heightRslt - 5 * this.calculeBmr.value.age + 5;
        this.bmr = Math.round(this.bmr);
        this.selectedHeight = "cm";
        this.selectedWeight = "kg";
      }
      //m kg
      if (this.selectedHeight === "m" && this.selectedWeight === "kg") {
        let heightRslt = this.calculeBmr.value.height * 100;
        let weightRslt = this.calculeBmr.value.weight;
        this.bmr = 10 * weightRslt + 6.25 * heightRslt - 5 * this.calculeBmr.value.age + 5;
        this.bmr = Math.round(this.bmr);
        this.selectedHeight = "m";
        this.selectedWeight = "kg";
      }
      //in kg
      if (this.selectedHeight === "in" && this.selectedWeight === "kg") {
        let heightRslt = this.calculeBmr.value.height / .3937;
        let weightRslt = this.calculeBmr.value.weight;
        this.bmr = 10 * weightRslt + 6.25 * heightRslt - 5 * this.calculeBmr.value.age + 5;
        this.bmr = Math.round(this.bmr);
        this.selectedHeight = "in";
        this.selectedWeight = "kg";
      }
      //feet kg
      if (this.selectedHeight === "ft" && this.selectedWeight === "kg") {
        let heightRslt = this.calculeBmr.value.height / 0.0328084;
        let weightRslt = this.calculeBmr.value.weight;
        this.bmr = 10 * weightRslt + 6.25 * heightRslt - 5 * this.calculeBmr.value.age + 5;
        this.bmr = Math.round(this.bmr);
        this.selectedHeight = "ft";
        this.selectedWeight = "kg";
      }
      ///////dag
      //cm dag
      if (this.selectedHeight === "cm" && this.selectedWeight === "dag") {
        let heightRslt = this.calculeBmr.value.height;
        let weightRslt = this.calculeBmr.value.weight * 100;
        this.bmr = 10 * weightRslt + 6.25 * heightRslt - 5 * this.calculeBmr.value.age + 5;
        this.bmr = Math.round(this.bmr);
        this.selectedHeight = "cm";
        this.selectedWeight = "dag";
      }
      //m dag
      if (this.selectedHeight === "m" && this.selectedWeight === "dag") {
        let heightRslt = this.calculeBmr.value.height / 100;
        let weightRslt = this.calculeBmr.value.weight * 100;
        this.bmr = 10 * weightRslt + 6.25 * heightRslt - 5 * this.calculeBmr.value.age + 5;
        this.bmr = Math.round(this.bmr);
        this.selectedHeight = "m";
        this.selectedWeight = "dag";
      }
      //in dag
      if (this.selectedHeight === "in" && this.selectedWeight === "dag") {
        let heightRslt = this.calculeBmr.value.height / .3937;
        let weightRslt = this.calculeBmr.value.weight * 100;
        this.bmr = 10 * weightRslt + 6.25 * heightRslt - 5 * this.calculeBmr.value.age + 5;
        this.bmr = Math.round(this.bmr);
        this.selectedHeight = "in";
        this.selectedWeight = "dag";
      }
      //feet dag
      if (this.selectedHeight === "ft" && this.selectedWeight === "dag") {
        let heightRslt = this.calculeBmr.value.height / 0.0328084;
        let weightRslt = this.calculeBmr.value.weight * 100;
        this.bmr = 10 * weightRslt + 6.25 * heightRslt - 5 * this.calculeBmr.value.age + 5;
        this.bmr = Math.round(this.bmr);
        this.selectedHeight = "ft";
        this.selectedWeight = "dag";
      }
      ///////lb
      //cm dag
      if (this.selectedHeight === "cm" && this.selectedWeight === "lb") {
        let heightRslt = this.calculeBmr.value.height;
        let weightRslt = this.calculeBmr.value.weight * 2.205;
        this.bmr = 10 * weightRslt + 6.25 * heightRslt - 5 * this.calculeBmr.value.age + 5;
        this.bmr = Math.round(this.bmr);
        this.selectedHeight = "cm";
        this.selectedWeight = "lb";
      }
      //m dag
      if (this.selectedHeight === "m" && this.selectedWeight === "lb") {
        let heightRslt = this.calculeBmr.value.height / 100;
        let weightRslt = this.calculeBmr.value.weight * 2.205;
        this.bmr = 10 * weightRslt + 6.25 * heightRslt - 5 * this.calculeBmr.value.age + 5;
        this.bmr = Math.round(this.bmr);
        this.selectedHeight = "m";
        this.selectedWeight = "lb";
      }
      //in lb
      if (this.selectedHeight === "in" && this.selectedWeight === "lb") {
        let heightRslt = this.calculeBmr.value.height / .3937;
        let weightRslt = this.calculeBmr.value.weight * 2.205;
        this.bmr = 10 * weightRslt + 6.25 * heightRslt - 5 * this.calculeBmr.value.age + 5;
        this.bmr = Math.round(this.bmr);
        this.selectedHeight = "in";
        this.selectedWeight = "lb";
      }
      //feet lb
      if (this.selectedHeight === "ft" && this.selectedWeight === "lb") {
        let heightRslt = this.calculeBmr.value.height / 0.0328084;
        let weightRslt = this.calculeBmr.value.weight * 2.205;
        this.bmr = 10 * weightRslt + 6.25 * heightRslt - 5 * this.calculeBmr.value.age + 5;
        this.bmr = Math.round(this.bmr);
        this.selectedHeight = "ft";
        this.selectedWeight = "lb";
      }
      /////////OZ
      //cm oz
      if (this.selectedHeight === "cm" && this.selectedWeight === "oz") {
        let heightRslt = this.calculeBmr.value.height;
        let weightRslt = this.calculeBmr.value.weight * 35.274;
        this.bmr = 10 * weightRslt + 6.25 * heightRslt - 5 * this.calculeBmr.value.age + 5;
        this.bmr = Math.round(this.bmr);
        this.selectedHeight = "cm";
        this.selectedWeight = "oz";
      }
      //m oz
      if (this.selectedHeight === "m" && this.selectedWeight === "oz") {
        let heightRslt = this.calculeBmr.value.height / 100;
        let weightRslt = this.calculeBmr.value.weight * 35.274;
        this.bmr = 10 * weightRslt + 6.25 * heightRslt - 5 * this.calculeBmr.value.age + 5;
        this.bmr = Math.round(this.bmr);
        this.selectedHeight = "m";
        this.selectedWeight = "oz";
      }
      //in oz
      if (this.selectedHeight === "in" && this.selectedWeight === "oz") {
        let heightRslt = this.calculeBmr.value.height / .3937;
        let weightRslt = this.calculeBmr.value.weight * 35.274;
        this.bmr = 10 * weightRslt + 6.25 * heightRslt - 5 * this.calculeBmr.value.age + 5;
        this.bmr = Math.round(this.bmr);
        this.selectedHeight = "in";
        this.selectedWeight = "oz";
      }
      //feet oz
      if (this.selectedHeight === "ft" && this.selectedWeight === "oz") {
        let heightRslt = this.calculeBmr.value.height / 0.0328084;
        let weightRslt = this.calculeBmr.value.weight * 35.274;
        this.bmr = 10 * weightRslt + 6.25 * heightRslt - 5 * this.calculeBmr.value.age + 5;
        this.bmr = Math.round(this.bmr);
        this.selectedHeight = "ft";
        this.selectedWeight = "oz";
      }
    }
    if (this.checked === 'female') {
      if (this.selectedHeight === "cm" && this.selectedWeight === "kg") {
        let heightRslt = this.calculeBmr.value.height;
        let weightRslt = this.calculeBmr.value.weight;
        this.bmr = 10 * weightRslt + 6.25 * heightRslt - 5 * this.calculeBmr.value.age - 161;
        this.bmr = Math.round(this.bmr);
        this.selectedHeight = "cm";
        this.selectedWeight = "kg";
      }
      //m kg
      if (this.selectedHeight === "m" && this.selectedWeight === "kg") {
        let heightRslt = this.calculeBmr.value.height * 100;
        let weightRslt = this.calculeBmr.value.weight;
        this.bmr = 10 * weightRslt + 6.25 * heightRslt - 5 * this.calculeBmr.value.age - 161;
        this.bmr = Math.round(this.bmr);
        this.selectedHeight = "m";
        this.selectedWeight = "kg";
      }
      //in kg
      if (this.selectedHeight === "in" && this.selectedWeight === "kg") {
        let heightRslt = this.calculeBmr.value.height / .3937;
        let weightRslt = this.calculeBmr.value.weight;
        this.bmr = 10 * weightRslt + 6.25 * heightRslt - 5 * this.calculeBmr.value.age - 161;
        this.bmr = Math.round(this.bmr);
        this.selectedHeight = "in";
        this.selectedWeight = "kg";
      }
      //feet kg
      if (this.selectedHeight === "ft" && this.selectedWeight === "kg") {
        let heightRslt = this.calculeBmr.value.height / 0.0328084;
        let weightRslt = this.calculeBmr.value.weight;
        this.bmr = 10 * weightRslt + 6.25 * heightRslt - 5 * this.calculeBmr.value.age - 161;
        this.bmr = Math.round(this.bmr);
        this.selectedHeight = "ft";
        this.selectedWeight = "kg";
      }
      ///////dag
      //cm dag
      if (this.selectedHeight === "cm" && this.selectedWeight === "dag") {
        let heightRslt = this.calculeBmr.value.height;
        let weightRslt = this.calculeBmr.value.weight * 100;
        this.bmr = 10 * weightRslt + 6.25 * heightRslt - 5 * this.calculeBmr.value.age - 161;
        this.bmr = Math.round(this.bmr);
        this.selectedHeight = "cm";
        this.selectedWeight = "dag";
      }
      //m dag
      if (this.selectedHeight === "m" && this.selectedWeight === "dag") {
        let heightRslt = this.calculeBmr.value.height / 100;
        let weightRslt = this.calculeBmr.value.weight * 100;
        this.bmr = 10 * weightRslt + 6.25 * heightRslt - 5 * this.calculeBmr.value.age - 161;
        this.bmr = Math.round(this.bmr);
        this.selectedHeight = "m";
        this.selectedWeight = "dag";
      }
      //in dag
      if (this.selectedHeight === "in" && this.selectedWeight === "dag") {
        let heightRslt = this.calculeBmr.value.height / .3937;
        let weightRslt = this.calculeBmr.value.weight * 100;
        this.bmr = 10 * weightRslt + 6.25 * heightRslt - 5 * this.calculeBmr.value.age - 161;
        this.bmr = Math.round(this.bmr);
        this.selectedHeight = "in";
        this.selectedWeight = "dag";
      }
      //feet dag
      if (this.selectedHeight === "ft" && this.selectedWeight === "dag") {
        let heightRslt = this.calculeBmr.value.height / 0.0328084;
        let weightRslt = this.calculeBmr.value.weight * 100;
        this.bmr = 10 * weightRslt + 6.25 * heightRslt - 5 * this.calculeBmr.value.age - 161;
        this.bmr = Math.round(this.bmr);
        this.selectedHeight = "ft";
        this.selectedWeight = "dag";
      }
      ///////lb
      //cm dag
      if (this.selectedHeight === "cm" && this.selectedWeight === "lb") {
        let heightRslt = this.calculeBmr.value.height;
        let weightRslt = this.calculeBmr.value.weight * 2.205;
        this.bmr = 10 * weightRslt + 6.25 * heightRslt - 5 * this.calculeBmr.value.age - 161;
        this.bmr = Math.round(this.bmr);
        this.selectedHeight = "cm";
        this.selectedWeight = "lb";
      }
      //m dag
      if (this.selectedHeight === "m" && this.selectedWeight === "lb") {
        let heightRslt = this.calculeBmr.value.height / 100;
        let weightRslt = this.calculeBmr.value.weight * 2.205;
        this.bmr = 10 * weightRslt + 6.25 * heightRslt - 5 * this.calculeBmr.value.age - 161;
        this.bmr = Math.round(this.bmr);
        this.selectedHeight = "m";
        this.selectedWeight = "lb";
      }
      //in lb
      if (this.selectedHeight === "in" && this.selectedWeight === "lb") {
        let heightRslt = this.calculeBmr.value.height / .3937;
        let weightRslt = this.calculeBmr.value.weight * 2.205;
        this.bmr = 10 * weightRslt + 6.25 * heightRslt - 5 * this.calculeBmr.value.age - 161;
        this.bmr = Math.round(this.bmr);
        this.selectedHeight = "in";
        this.selectedWeight = "lb";
      }
      //feet lb
      if (this.selectedHeight === "ft" && this.selectedWeight === "lb") {
        let heightRslt = this.calculeBmr.value.height / 0.0328084;
        let weightRslt = this.calculeBmr.value.weight * 2.205;
        this.bmr = 10 * weightRslt + 6.25 * heightRslt - 5 * this.calculeBmr.value.age - 161;
        this.bmr = Math.round(this.bmr);
        this.selectedHeight = "ft";
        this.selectedWeight = "lb";
      }
      /////////OZ
      //cm oz
      if (this.selectedHeight === "cm" && this.selectedWeight === "oz") {
        let heightRslt = this.calculeBmr.value.height;
        let weightRslt = this.calculeBmr.value.weight * 35.274;
        this.bmr = 10 * weightRslt + 6.25 * heightRslt - 5 * this.calculeBmr.value.age - 161;
        this.bmr = Math.round(this.bmr);
        this.selectedHeight = "cm";
        this.selectedWeight = "oz";
      }
      //m oz
      if (this.selectedHeight === "m" && this.selectedWeight === "oz") {
        let heightRslt = this.calculeBmr.value.height / 100;
        let weightRslt = this.calculeBmr.value.weight * 35.274;
        this.bmr = 10 * weightRslt + 6.25 * heightRslt - 5 * this.calculeBmr.value.age - 161;
        this.bmr = Math.round(this.bmr);
        this.selectedHeight = "m";
        this.selectedWeight = "oz";
      }
      //in oz
      if (this.selectedHeight === "in" && this.selectedWeight === "oz") {
        let heightRslt = this.calculeBmr.value.height / .3937;
        let weightRslt = this.calculeBmr.value.weight * 35.274;
        this.bmr = 10 * weightRslt + 6.25 * heightRslt - 5 * this.calculeBmr.value.age - 161;
        this.bmr = Math.round(this.bmr);
        this.selectedHeight = "in";
        this.selectedWeight = "oz";
      }
      //feet oz
      if (this.selectedHeight === "ft" && this.selectedWeight === "oz") {
        let heightRslt = this.calculeBmr.value.height / 0.0328084;
        let weightRslt = this.calculeBmr.value.weight * 35.274;
        this.bmr = 10 * weightRslt + 6.25 * heightRslt - 5 * this.calculeBmr.value.age - 161;
        this.bmr = Math.round(this.bmr);
        this.selectedHeight = "ft";
        this.selectedWeight = "oz";
      }
    }
  }
  checkedGender(v: any) {
    this.checked = v;
  }
  heightSelect(v: any) {
    //cm
    if (this.selectedHeight === "cm") {
      if (v === 'm') {
        this.modelsBmr.height = this.calculeBmr.value.height / 100;
        this.selectedHeight = "m";
      }
      if (v == 'in') {
        this.modelsBmr.height = (this.calculeBmr.value.height / 100) * 39.37;
        this.selectedHeight = "in"
      }
      if (v == 'ft') {
        // this.modelsBmr.height = (this.calculeBmr.value.height * 100) / 0.3048;
        this.modelsBmr.height = this.calculeBmr.value.height / 30.48;
        this.selectedHeight = "ft"
      }
      //m
    } if (this.selectedHeight === "m") {
      if (v === 'cm') {
        this.modelsBmr.height = this.calculeBmr.value.height * 100;
        this.selectedHeight = "cm"
      }
      if (v == 'in') {
        this.modelsBmr.height = this.calculeBmr.value.height * 39.37;
        this.selectedHeight = "in"
      }
      if (v == 'ft') {
        this.modelsBmr.height = this.calculeBmr.value.height / 0.3048;
        this.selectedHeight = "ft"
      }
    }
    //in
    if (this.selectedHeight === "in") {
      if (v == 'm') {
        this.modelsBmr.height = this.calculeBmr.value.height / 39.37;
        this.selectedHeight = "m"
      }
      if (v == 'cm') {
        this.modelsBmr.height = (this.calculeBmr.value.height * 100) / 39.37;
        this.selectedHeight = "cm"
      }
      if (v == 'ft') {
        // this.modelsBmr.height = (this.calculeBmr.value.height / 39.37) / 0.3048;
        this.modelsBmr.height = this.calculeBmr.value.height / 12;
        this.selectedHeight = "ft"
      }
    }
    //ft
    if (this.selectedHeight === "ft") {
      if (v == 'm') {
        this.modelsBmr.height = this.calculeBmr.value.height * 0.3048;
        this.selectedHeight = "m"
      }
      if (v == 'cm') {
        // this.modelsBmr.height = (this.calculeBmr.value.height * 100) * 0.3048;
        this.modelsBmr.height = this.calculeBmr.value.height * 30.48;
        this.selectedHeight = "cm"
      }
      if (v == 'in') {
        this.modelsBmr.height = this.calculeBmr.value.height * 12;
        this.selectedHeight = "in"
      }
    }
  }
  //
  weightSelect(v: any) {
    //km
    if (this.selectedWeight === "kg") {
      if (v === 'lb') {
        this.modelsBmr.weight = this.calculeBmr.value.weight * 2.205;
        this.selectedWeight = "lb";
      }
      if (v === 'dag') {
        this.modelsBmr.weight = this.calculeBmr.value.weight * 100;
        this.selectedWeight = "dag";
      }
      if (v === 'oz') {
        this.modelsBmr.weight = this.calculeBmr.value.weight * 35.274;
        this.selectedWeight = "oz";
      }
    }
    //dag
    if (this.selectedWeight === "dag") {
      if (v === 'kg') {
        this.modelsBmr.weight = this.calculeBmr.value.weight / 100;
        this.selectedWeight = "kg";
      }
      if (v === 'lb') {
        this.modelsBmr.weight = this.calculeBmr.value.weight / 45.359;
        this.selectedWeight = "lb";
      }
      if (v === 'oz') {
        this.modelsBmr.weight = this.calculeBmr.value.weight / 2.835;
        this.selectedWeight = "oz";
      }
    }
    //lb
    if (this.selectedWeight === "lb") {
      if (v === 'kg') {
        this.modelsBmr.weight = this.calculeBmr.value.weight / 2.205;
        this.selectedWeight = "kg";
      }
      if (v === 'oz') {
        this.modelsBmr.weight = this.calculeBmr.value.weight * 16;
        this.selectedWeight = "oz";
      }
      if (v === 'dag') {
        this.modelsBmr.weight = this.calculeBmr.value.weight * 45.359;
        this.selectedWeight = "dag";
      }
    }
    //oz
    if (this.selectedWeight === "oz") {
      if (v === 'kg') {
        this.modelsBmr.weight = this.calculeBmr.value.weight / 35.274;
        this.selectedWeight = "kg";
      }
      if (v === 'lb') {
        this.modelsBmr.weight = this.calculeBmr.value.weight / 16;
        this.selectedWeight = "lb";
      }
      if (v === 'dag') {
        this.modelsBmr.weight = this.calculeBmr.value.weight * 2.835;
        this.selectedWeight = "dag";
      }
    }

  }
  //   Mifflin-St Jeor Equation:
  // For men:
  // BMR = 10W + 6.25H - 5A + 5
  // For women:
  // BMR = 10W + 6.25H - 5A - 161
  // Revised Harris-Benedict Equation:
  // For men:
  // BMR = 13.397W + 4.799H - 5.677A + 88.362
  // For women:
  // BMR = 9.247W + 3.098H - 4.330A + 447.593
  // Katch-McArdle Formula:
  // BMR = 370 + 21.6(1 - F)W
  // where:
  // W is body weight in kg
  // H is body height in cm
  // A is age
  // F is body fat in percentage
}
