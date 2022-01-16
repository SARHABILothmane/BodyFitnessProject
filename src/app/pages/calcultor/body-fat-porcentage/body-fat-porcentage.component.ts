import { NbToastrService } from '@nebular/theme';
import { Bmr } from './../../../models/bmr';
import { AnimationOptions } from 'ngx-lottie';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faFemale, faMale } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-body-fat-porcentage',
  templateUrl: './body-fat-porcentage.component.html',
  styleUrls: ['./body-fat-porcentage.component.scss']
})
export class BodyFatPorcentageComponent implements OnInit {
  faMale = faMale;
  faFemale = faFemale;
  calculeForm!: FormGroup;
  // height!: number;
  // weight!: number;
  bmi!: number;
  bmr!: number;
  heightCm!: number;
  private index: number = 0;
  error: string = "";
  submitted = false;
  message: string = "";
  addCataloge: boolean = false;
  selectedHeight: string = "cm";
  selectedWeight: string = "kg";
  checked: string = "";
  modelsBmi: Bmr = {
    age: 0,
    height: 0,
    weight: 0,
  }

  options: AnimationOptions = {
    path: '/assets/animations/symgery-body-icon.json',
  };
  emojiSevere: AnimationOptions = {
    path: '/assets/animations/angry-emoji.json',
  };
  emojiModerate: AnimationOptions = {
    path: '/assets/animations/emoji-angry-face.json',
  };
  emojiMild: AnimationOptions = {
    path: '/assets/animations/angry2-emoji.json',
  };
  emojiHealthy: AnimationOptions = {
    path: '/assets/animations/emoji-feedback-interaction-2.json',
  };
  emojiOverweight: AnimationOptions = {
    path: '/assets/animations/emoji-33.json',
  };
  emojiObese1: AnimationOptions = {
    path: '/assets/animations/emoji-flushed-face.json',
  };
  emojiObese2: AnimationOptions = {
    path: '/assets/animations/emoji-mad.json',
  };
  emojiObese3: AnimationOptions = {
    path: '/assets/animations/emoji-angry.json',
  };

  constructor(private toastrService: NbToastrService) { }

  ngOnInit(): void {
    this.calculeForm = new FormGroup({
      // gender: new FormControl("", [Validators.required]),
      age: new FormControl("", [Validators.required]),
      height: new FormControl(""),
      // height: new FormControl("", [Validators.required, Validators.min(100), Validators.max(400)]),
      weight: new FormControl("", [Validators.required]),
    });

  }

  checkedGender(v: any) {
    this.checked = v;
  }
  get formBmi() { return this.calculeForm.controls; }
  square(firstNumber: number, secondNumber: number): number {
    return firstNumber ** secondNumber
  }
  claculteBmi() {
    this.submitted = true;
    if (this.calculeForm.valid) {
      this.error = "";
      this.addCataloge = true;
      // BMR (metric) = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) + 5
      // BMR (imperial) = (4.536 × weight in pounds) + (15.88 × height in inches) - (5 × age) + 5

      // Body fat % = –44.988 + (0.503 * age) + (10.689 * gender) + (3.172 * BMI) – (0.026 * BMI2) + (0.181 * BMI * gender) – (0.02 * BMI * age)  – (0.005 * BMI2 * gender) + (0.00021 * BMI2 * age)
      // Women:  (1.20 x BMI) + (0.23 x Age) - 5.4 = Body Fat Percentage
      // Men:  (1.20 x BMI) + (0.23 x Age) - 16.2 = Body Fat Percentage

      //cm kg
      if (this.checked === 'male') {
        if (this.selectedHeight === "cm" && this.selectedWeight === "kg") {
          // this.bmr = (10 * this.modelsBmi.weight) + (6.25 * this.modelsBmi.height) - (5 * this.calculeForm.value.age) + 5
          this.heightCm = this.calculeForm.value.height / 100
          this.bmi = this.calculeForm.value.weight / (this.square(this.heightCm, 2));
          // this.bmr = -44.988 + (0.503 * this.calculeForm.value.age) + (10.689 * 0) + (3.172 * this.bmi) - (0.026 * this.square(this.bmi , 2)) + (0.181 * this.bmi * 0) - (0.02 * this.bmi * this.calculeForm.value.age) - (0.005 * this.square(this.bmi , 2) * 0) + (0.00021 * this.square(this.bmi , 2) * this.calculeForm.value.age)
          this.bmr = (1.20 * this.bmi) + (0.23 * this.calculeForm.value.age) - 16.2;
          this.selectedHeight = "cm";
          this.selectedWeight = "kg";
        }
        //m kg
        if (this.selectedHeight === "m" && this.selectedWeight === "kg") {
          // this.modelsBmi.height = this.calculeForm.value.height / 100;
          this.bmi = this.calculeForm.value.weight / (this.square(this.calculeForm.value.height, 2));
          // this.bmr = (10 * this.modelsBmi.weight) + (6.25 * this.modelsBmi.height) - (5 * this.calculeForm.value.age) + 5
          this.bmr = (1.20 * this.bmi) + (0.23 * this.calculeForm.value.age) - 16.2;
          this.selectedHeight = "m";
          this.selectedWeight = "kg";
        }
      }

      if (this.checked === 'female') {
        if (this.selectedHeight === "cm" && this.selectedWeight === "kg") {
          this.heightCm = this.calculeForm.value.height / 100
          this.bmi = this.calculeForm.value.weight / (this.square(this.heightCm, 2));
          this.bmr = (1.20 * this.bmi) + (0.23 * this.calculeForm.value.age) - 5.4;
          this.selectedHeight = "cm";
          this.selectedWeight = "kg";
        }
        //m kg
        if (this.selectedHeight === "m" && this.selectedWeight === "kg") {
          this.bmi = this.calculeForm.value.weight / (this.square(this.calculeForm.value.height, 2));
          this.bmr = (1.20 * this.bmi) + (0.23 * this.calculeForm.value.age) - 5.4;
          this.selectedHeight = "m";
          this.selectedWeight = "kg";
        }
      }

      // this.bmi = this.height * this.height / this.weight;
      // this.heightCm = this.calculeForm.value.height / 100
      // this.bmi = this.calculeForm.value.weight / (this.calculeForm.value.height * this.calculeForm.value.height);
      // this.bmi = this.calculeForm.value.weight / (this.heightCm * this.heightCm);
      if (this.bmi < 16) {
        this.message = "Severe thinness";
      }
      if (this.bmi >= 16 && this.bmi <= 17) {
        this.message = "Moderate thinness";
      }
      if (this.bmi >= 17 && this.bmi <= 18.5) {
        this.message = "Mild thinness";
      }
      if (this.bmi >= 18.5 && this.bmi <= 24.99) {
        this.message = "Healthy weight";
      }
      if (this.bmi >= 25 && this.bmi <= 29.99) {
        this.message = "Overweight";
      }
      if (this.bmi >= 30 && this.bmi < 34.99) {
        this.message = "Obese class Ⅰ";
      }
      if (this.bmi >= 35 && this.bmi < 39.99) {
        this.message = "Obese class Ⅱ";
      }
      if (this.bmi >= 40) {
        this.message = "Obese class Ⅲ";
      }
    } else {
      this.error = "Merci de verifiers les champs";
    }
    // this.calculeForm.reset();
  }
  showToast(position: any) {
    this.toastrService.show(
      'This is super toast message',
      `This is toast number: ${++this.index}`,
      // { status },
      { position });
  }
  heightSelect(v: any) {
    //cm
    if (this.selectedHeight === "cm") {
      if (v === 'm') {
        this.modelsBmi.height = this.calculeForm.value.height / 100;
        this.selectedHeight = "m";
      }
      if (v == 'in') {
        this.modelsBmi.height = (this.calculeForm.value.height / 100) * 39.37;
        this.selectedHeight = "in"
      }
      if (v == 'ft') {
        // this.modelsBmi.height = (this.calculeForm.value.height * 100) / 0.3048;
        this.modelsBmi.height = this.calculeForm.value.height / 30.48;
        this.selectedHeight = "ft"
      }
      //m
    } if (this.selectedHeight === "m") {
      if (v === 'cm') {
        this.modelsBmi.height = this.calculeForm.value.height * 100;
        this.selectedHeight = "cm"
      }
      if (v == 'in') {
        this.modelsBmi.height = this.calculeForm.value.height * 39.37;
        this.selectedHeight = "in"
      }
      if (v == 'ft') {
        this.modelsBmi.height = this.calculeForm.value.height / 0.3048;
        this.selectedHeight = "ft"
      }
    }
    //in
    if (this.selectedHeight === "in") {
      if (v == 'm') {
        this.modelsBmi.height = this.calculeForm.value.height / 39.37;
        this.selectedHeight = "m"
      }
      if (v == 'cm') {
        this.modelsBmi.height = (this.calculeForm.value.height * 100) / 39.37;
        this.selectedHeight = "cm"
      }
      if (v == 'ft') {
        // this.modelsBmi.height = (this.calculeForm.value.height / 39.37) / 0.3048;
        this.modelsBmi.height = this.calculeForm.value.height / 12;
        this.selectedHeight = "ft"
      }
    }
    //ft
    if (this.selectedHeight === "ft") {
      if (v == 'm') {
        this.modelsBmi.height = this.calculeForm.value.height * 0.3048;
        this.selectedHeight = "m"
      }
      if (v == 'cm') {
        // this.modelsBmi.height = (this.calculeForm.value.height * 100) * 0.3048;
        this.modelsBmi.height = this.calculeForm.value.height * 30.48;
        this.selectedHeight = "cm"
      }
      if (v == 'in') {
        this.modelsBmi.height = this.calculeForm.value.height * 12;
        this.selectedHeight = "in"
      }
    }
  }
  //
  weightSelect(v: any) {
    //km
    if (this.selectedWeight === "kg") {
      if (v === 'lb') {
        this.modelsBmi.weight = this.calculeForm.value.weight * 2.205;
        this.selectedWeight = "lb";
      }
      if (v === 'dag') {
        this.modelsBmi.weight = this.calculeForm.value.weight * 100;
        this.selectedWeight = "dag";
      }
      if (v === 'oz') {
        this.modelsBmi.weight = this.calculeForm.value.weight * 35.274;
        this.selectedWeight = "oz";
      }
    }
    //dag
    if (this.selectedWeight === "dag") {
      if (v === 'kg') {
        this.modelsBmi.weight = this.calculeForm.value.weight / 100;
        this.selectedWeight = "kg";
      }
      if (v === 'lb') {
        this.modelsBmi.weight = this.calculeForm.value.weight / 45.359;
        this.selectedWeight = "lb";
      }
      if (v === 'oz') {
        this.modelsBmi.weight = this.calculeForm.value.weight / 2.835;
        this.selectedWeight = "oz";
      }
    }
    //lb
    if (this.selectedWeight === "lb") {
      if (v === 'kg') {
        this.modelsBmi.weight = this.calculeForm.value.weight / 2.205;
        this.selectedWeight = "kg";
      }
      if (v === 'oz') {
        this.modelsBmi.weight = this.calculeForm.value.weight * 16;
        this.selectedWeight = "oz";
      }
      if (v === 'dag') {
        this.modelsBmi.weight = this.calculeForm.value.weight * 45.359;
        this.selectedWeight = "dag";
      }
    }
    //oz
    if (this.selectedWeight === "oz") {
      if (v === 'kg') {
        this.modelsBmi.weight = this.calculeForm.value.weight / 35.274;
        this.selectedWeight = "kg";
      }
      if (v === 'lb') {
        this.modelsBmi.weight = this.calculeForm.value.weight / 16;
        this.selectedWeight = "lb";
      }
      if (v === 'dag') {
        this.modelsBmi.weight = this.calculeForm.value.weight * 2.835;
        this.selectedWeight = "dag";
      }
    }
  }



  //   BMR formula for men
  // BMR (metric) = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) + 5
  // BMR (imperial) = (4.536 × weight in pounds) + (15.88 × height in inches) - (5 × age) + 5
  // Mifflin - St Jeor (1990) 1

  // BMR formula for women
  // BMR (metric) = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) - 161
  // BMR (imperial) = (4.536 × weight in pounds) + (15.88 × height in inches) - (5 × age) - 161
  // Mifflin - St Jeor (1990) 1
}
