import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Bmr } from 'src/app/models/bmr';
import { Bsc } from 'src/app/models/bsc';

@Component({
  selector: 'app-body-shape-calculator',
  templateUrl: './body-shape-calculator.component.html',
  styleUrls: ['./body-shape-calculator.component.scss']
})
export class BodyShapeCalculatorComponent implements OnInit {
  calculeBsc!: FormGroup;
  selectedBust: string = "cm";
  selectedWaist: string = "cm";
  selectedHighHip: string = "cm";
  selectedHip: string = "cm";
  bust!: number;
  waist!: number;
  highHip!: number;
  hip!: number;
  whr!: number;
  whrRslt: string = "";
  message: string = "";
  modelsBsc: Bsc = {
    bust: 90,
    waist: 60,
    highHip: 80,
    hip: 90,
  }
  constructor() {
    this.calculeBsc = new FormGroup({
      bust: new FormControl("", [Validators.required]),
      waist: new FormControl("", [Validators.required]),
      highHip: new FormControl("", [Validators.required]),
      hip: new FormControl("", [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  public CalculateBsc(e: HTMLElement): void {
    this.bust = this.calculeBsc.value.bust;
    this.waist = this.calculeBsc.value.waist;
    this.highHip = this.calculeBsc.value.highHip;
    this.hip = this.calculeBsc.value.hip;
    this.whr = this.waist / this.hip;
    this.whrRslt = this.whr.toFixed(2);
    e.scrollIntoView({ behavior: "smooth" });
    if (this.bust - this.hip <= 1 && this.hip - this.bust < 3.6 && this.bust - this.waist >= 9 || this.hip - this.waist >= 10) {
      this.message = "Hourglass";
    }
    if (this.hip - this.bust >= 3.6 && this.hip - this.bust < 10 && this.hip - this.waist >= 9 && this.highHip / this.waist < 1.193) {
      this.message = "Bottom hourglass";
    }
    if (this.bust - this.hip > 1 && this.bust - this.hip < 10 && this.bust - this.waist >= 9) {
      this.message = "Top hourglass";
    }
    if (this.hip - this.bust > 2 && this.hip - this.waist >= 7 && this.highHip / this.waist < 1.193) {
      this.message = "Spoon";
    }
    if (this.hip - this.bust >= 3.6 && this.hip - this.waist < 9) {
      this.message = "Triangle";
    }
    if (this.bust - this.hip >= 3.6 && this.bust - this.waist < 9) {
      this.message = "Inverted triangle";
    }
    if (this.hip - this.bust < 3.6 && this.bust - this.hip < 3.6 && this.bust - this.waist < 9 && this.hip - this.waist < 10) {
      this.message = "Rectangle";
    }
    //     Hourglass
    // If (bust - hips) ≤ 1" AND (hips - bust) < 3.6" AND (bust - waist) ≥ 9" OR (hips - waist) ≥ 10"
    // Bottom hourglass
    // If (hips - bust) ≥ 3.6" AND (hips - bust) < 10" AND (hips - waist) ≥ 9" AND (high hip/waist) < 1.193
    // Top hourglass
    // If (bust - hips) > 1" AND (bust - hips) < 10" AND (bust - waist) ≥ 9"
    // Spoon
    // If (hips - bust) > 2" AND (hips - waist) ≥ 7" AND (high hip/waist) ≥ 1.193
    // Triangle
    // If (hips - bust) ≥ 3.6" AND (hips - waist) < 9"
    // Inverted triangle
    // If (bust - hips) ≥ 3.6" AND (bust - waist) < 9"
    // Rectangle
    // If (hips - bust) < 3.6" AND (bust - hips) < 3.6" AND (bust - waist) < 9" AND (hips - waist) < 10"
  }
  bustSelect(v: any) {
    //cm
    if (this.selectedBust === "cm") {
      if (v === 'm') {
        this.modelsBsc.bust = this.calculeBsc.value.bust / 100;
        this.selectedBust = "m";
      }
      if (v == 'in') {
        this.modelsBsc.bust = (this.calculeBsc.value.bust / 100) * 39.37;
        this.selectedBust = "in"
      }
      if (v == 'ft') {
        this.modelsBsc.bust = this.calculeBsc.value.bust / 30.48;
        this.selectedBust = "ft"
      }
      //m
    } if (this.selectedBust === "m") {
      if (v === 'cm') {
        this.modelsBsc.bust = this.calculeBsc.value.bust * 100;
        this.selectedBust = "cm"
      }
      if (v == 'in') {
        this.modelsBsc.bust = this.calculeBsc.value.bust * 39.37;
        this.selectedBust = "in"
      }
      if (v == 'ft') {
        this.modelsBsc.bust = this.calculeBsc.value.bust / 0.3048;
        this.selectedBust = "ft"
      }
    }
    //in
    if (this.selectedBust === "in") {
      if (v == 'm') {
        this.modelsBsc.bust = this.calculeBsc.value.bust / 39.37;
        this.selectedBust = "m"
      }
      if (v == 'cm') {
        this.modelsBsc.bust = (this.calculeBsc.value.bust * 100) / 39.37;
        this.selectedBust = "cm"
      }
      if (v == 'ft') {
        this.modelsBsc.bust = this.calculeBsc.value.bust / 12;
        this.selectedBust = "ft"
      }
    }
    //ft
    if (this.selectedBust === "ft") {
      if (v == 'm') {
        this.modelsBsc.bust = this.calculeBsc.value.bust * 0.3048;
        this.selectedBust = "m"
      }
      if (v == 'cm') {
        this.modelsBsc.bust = this.calculeBsc.value.bust * 30.48;
        this.selectedBust = "cm"
      }
      if (v == 'in') {
        this.modelsBsc.bust = this.calculeBsc.value.bust * 12;
        this.selectedBust = "in"
      }
    }
  }
  waistSelect(v: any) {
    //cm
    if (this.selectedWaist === "cm") {
      if (v === 'm') {
        this.modelsBsc.waist = this.calculeBsc.value.waist / 100;
        this.selectedWaist = "m";
      }
      if (v == 'in') {
        this.modelsBsc.waist = (this.calculeBsc.value.waist / 100) * 39.37;
        this.selectedWaist = "in"
      }
      if (v == 'ft') {
        this.modelsBsc.waist = this.calculeBsc.value.waist / 30.48;
        this.selectedWaist = "ft"
      }
      //m
    } if (this.selectedWaist === "m") {
      if (v === 'cm') {
        this.modelsBsc.waist = this.calculeBsc.value.waist * 100;
        this.selectedWaist = "cm"
      }
      if (v == 'in') {
        this.modelsBsc.waist = this.calculeBsc.value.waist * 39.37;
        this.selectedWaist = "in"
      }
      if (v == 'ft') {
        this.modelsBsc.waist = this.calculeBsc.value.waist / 0.3048;
        this.selectedWaist = "ft"
      }
    }
    //in
    if (this.selectedWaist === "in") {
      if (v == 'm') {
        this.modelsBsc.waist = this.calculeBsc.value.waist / 39.37;
        this.selectedWaist = "m"
      }
      if (v == 'cm') {
        this.modelsBsc.waist = (this.calculeBsc.value.waist * 100) / 39.37;
        this.selectedWaist = "cm"
      }
      if (v == 'ft') {
        this.modelsBsc.waist = this.calculeBsc.value.waist / 12;
        this.selectedWaist = "ft"
      }
    }
    //ft
    if (this.selectedWaist === "ft") {
      if (v == 'm') {
        this.modelsBsc.waist = this.calculeBsc.value.waist * 0.3048;
        this.selectedWaist = "m"
      }
      if (v == 'cm') {
        this.modelsBsc.waist = this.calculeBsc.value.waist * 30.48;
        this.selectedWaist = "cm"
      }
      if (v == 'in') {
        this.modelsBsc.waist = this.calculeBsc.value.waist * 12;
        this.selectedWaist = "in"
      }
    }
  }
  highHipSelect(v: any) {
    //cm
    if (this.selectedHighHip === "cm") {
      if (v === 'm') {
        this.modelsBsc.highHip = this.calculeBsc.value.highHip / 100;
        this.selectedHighHip = "m";
      }
      if (v == 'in') {
        this.modelsBsc.highHip = (this.calculeBsc.value.highHip / 100) * 39.37;
        this.selectedHighHip = "in"
      }
      if (v == 'ft') {
        this.modelsBsc.highHip = this.calculeBsc.value.highHip / 30.48;
        this.selectedHighHip = "ft"
      }
      //m
    } if (this.selectedHighHip === "m") {
      if (v === 'cm') {
        this.modelsBsc.highHip = this.calculeBsc.value.highHip * 100;
        this.selectedHighHip = "cm"
      }
      if (v == 'in') {
        this.modelsBsc.highHip = this.calculeBsc.value.highHip * 39.37;
        this.selectedHighHip = "in"
      }
      if (v == 'ft') {
        this.modelsBsc.highHip = this.calculeBsc.value.highHip / 0.3048;
        this.selectedHighHip = "ft"
      }
    }
    //in
    if (this.selectedHighHip === "in") {
      if (v == 'm') {
        this.modelsBsc.highHip = this.calculeBsc.value.highHip / 39.37;
        this.selectedHighHip = "m"
      }
      if (v == 'cm') {
        this.modelsBsc.highHip = (this.calculeBsc.value.highHip * 100) / 39.37;
        this.selectedHighHip = "cm"
      }
      if (v == 'ft') {
        this.modelsBsc.highHip = this.calculeBsc.value.highHip / 12;
        this.selectedHighHip = "ft"
      }
    }
    //ft
    if (this.selectedHighHip === "ft") {
      if (v == 'm') {
        this.modelsBsc.highHip = this.calculeBsc.value.highHip * 0.3048;
        this.selectedHighHip = "m"
      }
      if (v == 'cm') {
        this.modelsBsc.highHip = this.calculeBsc.value.highHip * 30.48;
        this.selectedHighHip = "cm"
      }
      if (v == 'in') {
        this.modelsBsc.highHip = this.calculeBsc.value.highHip * 12;
        this.selectedHighHip = "in"
      }
    }
  }
  hipSelect(v: any) {
    //cm
    if (this.selectedHip === "cm") {
      if (v === 'm') {
        this.modelsBsc.hip = this.calculeBsc.value.hip / 100;
        this.selectedHip = "m";
      }
      if (v == 'in') {
        this.modelsBsc.hip = (this.calculeBsc.value.hip / 100) * 39.37;
        this.selectedHip = "in"
      }
      if (v == 'ft') {
        this.modelsBsc.hip = this.calculeBsc.value.hip / 30.48;
        this.selectedHip = "ft"
      }
      //m
    } if (this.selectedHip === "m") {
      if (v === 'cm') {
        this.modelsBsc.hip = this.calculeBsc.value.hip * 100;
        this.selectedHip = "cm"
      }
      if (v == 'in') {
        this.modelsBsc.hip = this.calculeBsc.value.hip * 39.37;
        this.selectedHip = "in"
      }
      if (v == 'ft') {
        this.modelsBsc.hip = this.calculeBsc.value.hip / 0.3048;
        this.selectedHip = "ft"
      }
    }
    //in
    if (this.selectedHip === "in") {
      if (v == 'm') {
        this.modelsBsc.hip = this.calculeBsc.value.hip / 39.37;
        this.selectedHip = "m"
      }
      if (v == 'cm') {
        this.modelsBsc.hip = (this.calculeBsc.value.hip * 100) / 39.37;
        this.selectedHip = "cm"
      }
      if (v == 'ft') {
        this.modelsBsc.hip = this.calculeBsc.value.hip / 12;
        this.selectedHip = "ft"
      }
    }
    //ft
    if (this.selectedHip === "ft") {
      if (v == 'm') {
        this.modelsBsc.hip = this.calculeBsc.value.hip * 0.3048;
        this.selectedHip = "m"
      }
      if (v == 'cm') {
        this.modelsBsc.hip = this.calculeBsc.value.hip * 30.48;
        this.selectedHip = "cm"
      }
      if (v == 'in') {
        this.modelsBsc.hip = this.calculeBsc.value.hip * 12;
        this.selectedHip = "in"
      }
    }
  }
}
