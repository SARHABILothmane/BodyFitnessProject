import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NbGlobalPhysicalPosition } from '@nebular/theme';
import { AnimationOptions } from 'ngx-lottie';
import { Bmi } from 'src/app/models/bmi';
@Component({
  selector: 'app-form-bmi',
  templateUrl: './form-bmi.component.html',
  styleUrls: ['./form-bmi.component.scss']
})
export class FormBmiComponent implements OnInit {

  calculeForm!: FormGroup;
  calculeFormImperial!: FormGroup;
  height!: number;
  weight!: number;
  bmi!: number;
  heightCm!: number;
  positions = NbGlobalPhysicalPosition;
  index: number = 0;
  error: string = "";
  submitted = false;
  message: string = "";
  addCataloge: boolean = false;
  tabTitle: string = "";
  checkAge: number = 0;
  modelsBmi: Bmi = {
    age: 0,
    height: 0,
    weight: 0,
    weightImperial: 0,
    heightImperial: 0,
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

  constructor() { }

  ngOnInit(): void {
    this.calculeForm = new FormGroup({
      age: new FormControl("", [Validators.required, Validators.min(5), Validators.max(100)]),
      height: new FormControl("", [Validators.required]),
      weight: new FormControl("", [Validators.required]),
    });
    this.calculeFormImperial = new FormGroup({
      age: new FormControl("", [Validators.required, Validators.min(5), Validators.max(100)]),
      hFeet: new FormControl("", [Validators.required]),
      heightImperial: new FormControl("", [Validators.required]),
      weightImperial: new FormControl("", [Validators.required]),
    });
  }
  get formBmi() { return this.calculeForm.controls; }
  get formBmiImeprial() { return this.calculeFormImperial.controls; }

  claculteBmi(el: HTMLElement) {
    this.submitted = true;
    if (this.calculeForm.valid) {
      this.error = "";
      this.addCataloge = true;
      // this.bmi = this.height * this.height / this.weight;
      this.heightCm = this.calculeForm.value.height / 100
      // this.bmi = this.calculeForm.value.weight / (this.calculeForm.value.height * this.calculeForm.value.height);
      this.bmi = this.calculeForm.value.weight / (this.heightCm * this.heightCm);
      this.checkAge = this.modelsBmi.age;
      el.scrollIntoView({ behavior: "smooth" });
      if (this.checkAge >= 20) {
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
      } if (this.checkAge < 20) {
        if (this.bmi < 5) {
          this.message = "Underweight";
        }
        if (this.bmi >= 5 && this.bmi <= 85) {
          this.message = "Healthy weight";
        }
        if (this.bmi >= 85 && this.bmi <= 95) {
          this.message = "At risk of overweight	";
        }
        if (this.bmi >= 95) {
          this.message = "Overweight";
        }
      }

    } else {
      this.error = "Merci de verifiers les champs";
    }
    // this.calculeForm.reset();
  }
  square(firstNumber: number, secondNumber: number): number {
    return firstNumber ** secondNumber
  }
  claculteBmiImperiale(el: HTMLElement) {
    this.submitted = true;
    if (this.calculeFormImperial.valid) {
      this.error = "";
      this.addCataloge = true;
      // Formula: weight (lb) / [height (in)]2 x 703
      // Calculate BMI by dividing weight in pounds (lbs) by height in inches (in) squared and multiplying by a conversion factor of 703.
      // Example: Weight = 150 lbs, Height = 5’5″ (65″)
      // Calculation: [150 ÷ (65)2] x 703 = 24.96
      let heightRslt = this.calculeFormImperial.value.hFeet * 12 + this.calculeFormImperial.value.heightImperial
      this.bmi = this.calculeFormImperial.value.weightImperial / (this.square(heightRslt, 2)) * 703
      this.checkAge = this.modelsBmi.age
      el.scrollIntoView({ behavior: "smooth" });
      // this.bmi = this.calculeForm.value.weight / (this.calculeForm.value.height * this.calculeForm.value.height);
      if (this.checkAge > 20) {
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
      } else if (this.checkAge < 20) {
        if (this.bmi < 5) {
          this.message = "Underweight";
        }
        if (this.bmi >= 5 && this.bmi <= 85) {
          this.message = "Healthy weight";
        }
        if (this.bmi >= 85 && this.bmi <= 95) {
          this.message = "At risk of overweight	";
        }
        if (this.bmi >= 95) {
          this.message = "Overweight";
        }
      }

    } else {
      this.error = "Merci de verifiers les champs";
    }
  }
  tabsSet(e: any) {
    this.tabTitle = e.tabTitle
    if (e.tabTitle === "Imperial") {
      this.modelsBmi.weightImperial = this.modelsBmi.weight * 2.205;
      this.modelsBmi.heightImperial = this.modelsBmi.height / 30.48;
    }
    if (e.tabTitle === "Metric") {
      this.modelsBmi.weight = this.modelsBmi.weightImperial / 2.205;
      this.modelsBmi.heightImperial = this.modelsBmi.height * 30.48;
    }

  }
  public onChange(event: any): void {
    console.log(event);
    // if (this.tabTitle === "Metric") {
    //   this.modelsBmi.heightImperial = 10;
    // }
  }
  calculateHeightImperial(heightImperial: number) {
    return heightImperial;
  }


}
