import { AnimationOptions } from 'ngx-lottie';
// import { NbToastrService } from '@nebular/theme';
import { Bmr } from './../../../models/bmr';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faFemale, faMale } from '@fortawesome/free-solid-svg-icons';
import { AnimationItem } from 'lottie-web';
import { Utils } from 'src/app/constant/utils';
import { DomSanitizer, Meta, SafeHtml, Title } from '@angular/platform-browser';
import { CanonicalService } from 'src/app/services/canonical.service';

@Component({
  selector: 'app-body-fat-porcentage',
  templateUrl: './body-fat-porcentage.component.html',
  styleUrls: ['./body-fat-porcentage.component.scss']
})
export class BodyFatPorcentageComponent implements OnInit {
  faMale = faMale;
  faFemale = faFemale;
  calculeBfp!: FormGroup;
  // height!: number;
  // weight!: number;
  bmi!: number;
  bfp!: number;
  bfm!: string;
  lbm!: string;
  heightCm!: number;
  private index: number = 0;
  error: string = "";
  submitted = false;
  message: string = "";
  addCataloge: boolean = false;
  selectedHeight: string = "cm";
  selectedWeight: string = "kg";
  checked: string = "";
  imageLoaded: boolean = false;
  optionsF: AnimationOptions = {
    path: '/assets/animations/relaxed-woman-meditating.json',
  };
  bfpFemale: AnimationOptions = {
    path: '/assets/animations/bfpFemale.json',
  };
 
  modelsBmi: Bmr = {
    age: 0,
    height: 0,
    weight: 0,
  };
  utils = new Utils();
  isMobile: boolean = true;
  jsonLD!: SafeHtml;
  schema!: any;

  constructor(
    // private toastrService: NbToastrService
    private titleService: Title, private metaService: Meta, private canonical: CanonicalService, private sanitizer: DomSanitizer
  ) { }


  ngOnInit(): void {
    this.titleService.setTitle("Free online body fat percentage calculator");
    this.metaService.addTags([
      { name: 'keywords', content: "body fat percentage, body fat percentage calculator, body fat percentage women, women body fat percentage, healthy body fat percentage, body fat percentage men, average body fat percentage, how to calculate body fat percentage, calculate body fat percentage, what is my body fat percentage, female body fat percentage, body fat percentage for men, how to know your body fat percentage" },
      { name: 'description', content: "Free online body fat percentage calculator, (body fat percentage women, body fat percentage men, average body fat percentage )" },
    ]);
    this.canonical.createCanonicalLink();
    //shema
    this.schema = {
      "@context": "http://schema.org",
      "@type": "SoftwareApplication",
      "name": "free online body fat percentage calculator",
      "image": "https://body-calculator.com/assets/images/logo/calculator.svg",
      "url": "https://body-calculator.com/health/body-fat-percentage-calculator",
      "author": {
        "@type": "Person",
        "name": "SARHABIL"
      },
      "datePublished": "2022-01-10",
      "publisher": {
        "@type": "Organization",
        "name": "body-calculator"
      },
      "applicationCategory": "body fat percentage calculator",
      "operatingSystem": "Linux",
      "screenshot": "https://body-calculator.com/assets/images/logo/Screenshot-body-calculator.png",
      "softwareVersion": "1"
    }
    this.jsonLD = this.getSafeHTML(this.schema);

    this.calculeBfp = new FormGroup({
      // gender: new FormControl("", [Validators.required]),
      age: new FormControl("", [Validators.required]),
      height: new FormControl(""),
      // height: new FormControl("", [Validators.required, Validators.min(100), Validators.max(400)]),
      weight: new FormControl("", [Validators.required]),
    });

    this.isMobile = this.utils.isMobile();

  }

  getSafeHTML(value: {}) {
    // If value convert to JSON and escape / to prevent script tag in JSON
    const json = value
      ? JSON.stringify(value, null, 2).replace(/\//g, '\\/')
      : '';
    const html = `${json}`;
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }


  animationCreated(animationItem: AnimationItem): void {
    this.imageLoaded = !this.imageLoaded
    // animationItem.show();
  }
  checkedGender(v: any) {
    this.checked = v;
  }
  get formBmi() { return this.calculeBfp.controls; }
  square(firstNumber: number, secondNumber: number): number {
    return firstNumber ** secondNumber
  }
  claculteBfp(e: HTMLElement) {
    this.submitted = true;
    if (this.calculeBfp.valid) {
      this.error = "";
      this.addCataloge = true;
      e.scrollIntoView({ behavior: "smooth" });
      //cm kg
      if (this.checked === 'male') {
        if (this.selectedHeight === "cm" && this.selectedWeight === "kg") {
          // this.bfp = (10 * this.modelsBmi.weight) + (6.25 * this.modelsBmi.height) - (5 * this.calculeBfp.value.age) + 5
          this.heightCm = this.calculeBfp.value.height / 100
          this.bmi = this.calculeBfp.value.weight / (this.square(this.heightCm, 2));
          // this.bfp = -44.988 + (0.503 * this.calculeBfp.value.age) + (10.689 * 0) + (3.172 * this.bmi) - (0.026 * this.square(this.bmi , 2)) + (0.181 * this.bmi * 0) - (0.02 * this.bmi * this.calculeBfp.value.age) - (0.005 * this.square(this.bmi , 2) * 0) + (0.00021 * this.square(this.bmi , 2) * this.calculeBfp.value.age)
          this.bfp = (1.20 * this.bmi) + (0.23 * this.calculeBfp.value.age) - 16.2;
          this.selectedHeight = "cm";
          this.selectedWeight = "kg";
        }
        //m kg
        if (this.selectedHeight === "m" && this.selectedWeight === "kg") {
          // this.modelsBmi.height = this.calculeBfp.value.height / 100;
          this.bmi = this.calculeBfp.value.weight / (this.square(this.calculeBfp.value.height, 2));
          // this.bfp = (10 * this.modelsBmi.weight) + (6.25 * this.modelsBmi.height) - (5 * this.calculeBfp.value.age) + 5
          this.bfp = (1.20 * this.bmi) + (0.23 * this.calculeBfp.value.age) - 16.2;
          this.selectedHeight = "m";
          this.selectedWeight = "kg";
        }
        //in kg
        if (this.selectedHeight === "in" && this.selectedWeight === "kg") {
          let heightRslt = this.calculeBfp.value.height / 39.37;
          this.bmi = this.calculeBfp.value.weight / (this.square(heightRslt, 2));
          this.bfp = (1.20 * this.bmi) + (0.23 * this.calculeBfp.value.age) - 16.2;
          this.selectedHeight = "in";
          this.selectedWeight = "kg";
        }
        //feet kg
        if (this.selectedHeight === "ft" && this.selectedWeight === "kg") {
          let heightRslt = this.calculeBfp.value.height * 0.3048;
          this.bmi = this.calculeBfp.value.weight / (this.square(heightRslt, 2));
          this.bfp = (1.20 * this.bmi) + (0.23 * this.calculeBfp.value.age) - 16.2;
          this.selectedHeight = "ft";
          this.selectedWeight = "kg";
        }
        ///////dag
        //cm dag
        if (this.selectedHeight === "cm" && this.selectedWeight === "dag") {
          this.heightCm = this.calculeBfp.value.height / 100;
          let weightRslt = this.calculeBfp.value.weight / 100;
          this.bmi = weightRslt / (this.square(this.heightCm, 2));
          console.log("dag =" + this.bmi);
          this.bfp = (1.20 * this.bmi) + (0.23 * this.calculeBfp.value.age) - 16.2;
          this.selectedHeight = "cm";
          this.selectedWeight = "dag";
        }
        //m dag
        if (this.selectedHeight === "m" && this.selectedWeight === "dag") {
          let weightRslt = this.calculeBfp.value.weight / 100;
          this.bmi = weightRslt / (this.square(this.calculeBfp.value.height, 2));
          console.log("dag =" + this.bmi);
          this.bfp = (1.20 * this.bmi) + (0.23 * this.calculeBfp.value.age) - 16.2;
          this.selectedHeight = "m";
          this.selectedWeight = "dag";
        }
        //in dag
        if (this.selectedHeight === "in" && this.selectedWeight === "dag") {
          let heightRslt = this.calculeBfp.value.height / 39.37;
          let weightRslt = this.calculeBfp.value.weight / 100;
          this.bmi = weightRslt / (this.square(heightRslt, 2));
          console.log("dag =" + this.bmi);
          this.bfp = (1.20 * this.bmi) + (0.23 * this.calculeBfp.value.age) - 16.2;
          this.selectedHeight = "in";
          this.selectedWeight = "dag";
        }
        //feet dag
        if (this.selectedHeight === "ft" && this.selectedWeight === "dag") {
          let heightRslt = this.calculeBfp.value.height * 0.3048;
          let weightRslt = this.calculeBfp.value.weight / 100;
          this.bmi = weightRslt / (this.square(heightRslt, 2));
          console.log("dag =" + this.bmi);
          this.bfp = (1.20 * this.bmi) + (0.23 * this.calculeBfp.value.age) - 16.2;
          this.selectedHeight = "ft";
          this.selectedWeight = "dag";
        }
        ///////lb
        //cm dag
        if (this.selectedHeight === "cm" && this.selectedWeight === "lb") {
          this.heightCm = this.calculeBfp.value.height / 100;
          let weightRslt = this.calculeBfp.value.weight / 2.205;
          this.bmi = weightRslt / (this.square(this.heightCm, 2));
          console.log("dag =" + this.bmi);
          this.bfp = (1.20 * this.bmi) + (0.23 * this.calculeBfp.value.age) - 16.2;
          this.selectedHeight = "cm";
          this.selectedWeight = "lb";
        }
        //m dag
        if (this.selectedHeight === "m" && this.selectedWeight === "lb") {
          let weightRslt = this.calculeBfp.value.weight / 2.205;
          this.bmi = weightRslt / (this.square(this.calculeBfp.value.height, 2));
          console.log("dag =" + this.bmi);
          this.bfp = (1.20 * this.bmi) + (0.23 * this.calculeBfp.value.age) - 16.2;
          this.selectedHeight = "m";
          this.selectedWeight = "lb";
        }
        //in lb
        if (this.selectedHeight === "in" && this.selectedWeight === "lb") {
          this.bmi = this.calculeBfp.value.weight / (this.square(this.calculeBfp.value.height, 2)) * 703;
          console.log("in =" + this.bmi);
          this.bfp = (1.20 * this.bmi) + (0.23 * this.calculeBfp.value.age) - 16.2;
          this.selectedHeight = "in";
          this.selectedWeight = "lb";
        }
        //feet lb
        if (this.selectedHeight === "ft" && this.selectedWeight === "lb") {
          let heightRslt = this.calculeBfp.value.height * 0.3048;
          let weightRslt = this.calculeBfp.value.weight / 2.205;
          this.bmi = weightRslt / (this.square(heightRslt, 2));
          console.log("dag =" + this.bmi);
          this.bfp = (1.20 * this.bmi) + (0.23 * this.calculeBfp.value.age) - 16.2;
          this.selectedHeight = "ft";
          this.selectedWeight = "lb";
        }
        /////////OZ
        //cm oz
        if (this.selectedHeight === "cm" && this.selectedWeight === "oz") {
          this.heightCm = this.calculeBfp.value.height / 100;
          let weightRslt = this.calculeBfp.value.weight / 35.274;
          this.bmi = weightRslt / (this.square(this.heightCm, 2));
          console.log("dag =" + this.bmi);
          this.bfp = (1.20 * this.bmi) + (0.23 * this.calculeBfp.value.age) - 16.2;
          this.selectedHeight = "cm";
          this.selectedWeight = "oz";
        }
        //m oz
        if (this.selectedHeight === "m" && this.selectedWeight === "oz") {
          let weightRslt = this.calculeBfp.value.weight / 35.274;
          this.bmi = weightRslt / (this.square(this.calculeBfp.value.height, 2));
          console.log("dag =" + this.bmi);
          this.bfp = (1.20 * this.bmi) + (0.23 * this.calculeBfp.value.age) - 16.2;
          this.selectedHeight = "m";
          this.selectedWeight = "oz";
        }
        //in oz
        if (this.selectedHeight === "in" && this.selectedWeight === "oz") {
          let heightRslt = this.calculeBfp.value.height / 39.37;
          let weightRslt = this.calculeBfp.value.weight / 35.274;
          this.bmi = weightRslt / (this.square(heightRslt, 2));
          console.log("in =" + this.bmi);
          this.bfp = (1.20 * this.bmi) + (0.23 * this.calculeBfp.value.age) - 16.2;
          this.selectedHeight = "in";
          this.selectedWeight = "oz";
        }
        //feet oz
        if (this.selectedHeight === "ft" && this.selectedWeight === "oz") {
          let heightRslt = this.calculeBfp.value.height * 0.3048;
          let weightRslt = this.calculeBfp.value.weight / 35.274;
          this.bmi = weightRslt / (this.square(heightRslt, 2));
          console.log("dag =" + this.bmi);
          this.bfp = (1.20 * this.bmi) + (0.23 * this.calculeBfp.value.age) - 16.2;
          this.selectedHeight = "ft";
          this.selectedWeight = "oz";
        }
        //rslt 
        if (this.bfp >= 2 && this.bfp <= 5) {
          this.message = "Essential fat";
        }
        if (this.bfp >= 6 && this.bfp <= 13) {
          this.message = "Athletes";
        }
        if (this.bfp >= 14 && this.bfp <= 17) {
          this.message = "Fitness";
        }
        if (this.bfp >= 18 && this.bfp <= 24) {
          this.message = "Average";
        }
        if (this.bfp >= 25) {
          this.message = "Obese";
        }
      }
      //cm kg
      if (this.checked === 'female') {
        if (this.selectedHeight === "cm" && this.selectedWeight === "kg") {
          // this.bfp = (10 * this.modelsBmi.weight) + (6.25 * this.modelsBmi.height) - (5 * this.calculeBfp.value.age) + 5
          this.heightCm = this.calculeBfp.value.height / 100
          this.bmi = this.calculeBfp.value.weight / (this.square(this.heightCm, 2));
          // this.bfp = -44.988 + (0.503 * this.calculeBfp.value.age) + (10.689 * 0) + (3.172 * this.bmi) - (0.026 * this.square(this.bmi , 2)) + (0.181 * this.bmi * 0) - (0.02 * this.bmi * this.calculeBfp.value.age) - (0.005 * this.square(this.bmi , 2) * 0) + (0.00021 * this.square(this.bmi , 2) * this.calculeBfp.value.age)
          this.bfp = (1.20 * this.bmi) + (0.23 * this.calculeBfp.value.age) - 5.4;
          this.selectedHeight = "cm";
          this.selectedWeight = "kg";
        }
        //m kg
        if (this.selectedHeight === "m" && this.selectedWeight === "kg") {
          // this.modelsBmi.height = this.calculeBfp.value.height / 100;
          this.bmi = this.calculeBfp.value.weight / (this.square(this.calculeBfp.value.height, 2));
          // this.bfp = (10 * this.modelsBmi.weight) + (6.25 * this.modelsBmi.height) - (5 * this.calculeBfp.value.age) + 5
          this.bfp = (1.20 * this.bmi) + (0.23 * this.calculeBfp.value.age) - 5.4;
          this.selectedHeight = "m";
          this.selectedWeight = "kg";
        }
        //in kg
        if (this.selectedHeight === "in" && this.selectedWeight === "kg") {
          let heightRslt = this.calculeBfp.value.height / 39.37;
          this.bmi = this.calculeBfp.value.weight / (this.square(heightRslt, 2));
          this.bfp = (1.20 * this.bmi) + (0.23 * this.calculeBfp.value.age) - 5.4;
          this.selectedHeight = "in";
          this.selectedWeight = "kg";
        }
        //feet kg
        if (this.selectedHeight === "ft" && this.selectedWeight === "kg") {
          let heightRslt = this.calculeBfp.value.height * 0.3048;
          this.bmi = this.calculeBfp.value.weight / (this.square(heightRslt, 2));
          this.bfp = (1.20 * this.bmi) + (0.23 * this.calculeBfp.value.age) - 5.4;
          this.selectedHeight = "ft";
          this.selectedWeight = "kg";
        }
        ///////dag
        //cm dag
        if (this.selectedHeight === "cm" && this.selectedWeight === "dag") {
          this.heightCm = this.calculeBfp.value.height / 100;
          let weightRslt = this.calculeBfp.value.weight / 100;
          this.bmi = weightRslt / (this.square(this.heightCm, 2));
          console.log("dag =" + this.bmi);
          this.bfp = (1.20 * this.bmi) + (0.23 * this.calculeBfp.value.age) - 5.4;
          this.selectedHeight = "cm";
          this.selectedWeight = "dag";
        }
        //m dag
        if (this.selectedHeight === "m" && this.selectedWeight === "dag") {
          let weightRslt = this.calculeBfp.value.weight / 100;
          this.bmi = weightRslt / (this.square(this.calculeBfp.value.height, 2));
          console.log("dag =" + this.bmi);
          this.bfp = (1.20 * this.bmi) + (0.23 * this.calculeBfp.value.age) - 5.4;
          this.selectedHeight = "m";
          this.selectedWeight = "dag";
        }
        //in dag
        if (this.selectedHeight === "in" && this.selectedWeight === "dag") {
          let heightRslt = this.calculeBfp.value.height / 39.37;
          let weightRslt = this.calculeBfp.value.weight / 100;
          this.bmi = weightRslt / (this.square(heightRslt, 2));
          console.log("dag =" + this.bmi);
          this.bfp = (1.20 * this.bmi) + (0.23 * this.calculeBfp.value.age) - 5.4;
          this.selectedHeight = "in";
          this.selectedWeight = "dag";
        }
        //feet dag
        if (this.selectedHeight === "ft" && this.selectedWeight === "dag") {
          let heightRslt = this.calculeBfp.value.height * 0.3048;
          let weightRslt = this.calculeBfp.value.weight / 100;
          this.bmi = weightRslt / (this.square(heightRslt, 2));
          console.log("dag =" + this.bmi);
          this.bfp = (1.20 * this.bmi) + (0.23 * this.calculeBfp.value.age) - 5.4;
          this.selectedHeight = "ft";
          this.selectedWeight = "dag";
        }
        ///////lb
        //cm dag
        if (this.selectedHeight === "cm" && this.selectedWeight === "lb") {
          this.heightCm = this.calculeBfp.value.height / 100;
          let weightRslt = this.calculeBfp.value.weight / 2.205;
          this.bmi = weightRslt / (this.square(this.heightCm, 2));
          console.log("dag =" + this.bmi);
          this.bfp = (1.20 * this.bmi) + (0.23 * this.calculeBfp.value.age) - 5.4;
          this.selectedHeight = "cm";
          this.selectedWeight = "lb";
        }
        //m dag
        if (this.selectedHeight === "m" && this.selectedWeight === "lb") {
          let weightRslt = this.calculeBfp.value.weight / 2.205;
          this.bmi = weightRslt / (this.square(this.calculeBfp.value.height, 2));
          console.log("dag =" + this.bmi);
          this.bfp = (1.20 * this.bmi) + (0.23 * this.calculeBfp.value.age) - 5.4;
          this.selectedHeight = "m";
          this.selectedWeight = "lb";
        }
        //in lb
        if (this.selectedHeight === "in" && this.selectedWeight === "lb") {
          this.bmi = this.calculeBfp.value.weight / (this.square(this.calculeBfp.value.height, 2)) * 703;
          console.log("in =" + this.bmi);
          this.bfp = (1.20 * this.bmi) + (0.23 * this.calculeBfp.value.age) - 5.4;
          this.selectedHeight = "in";
          this.selectedWeight = "lb";
        }
        //feet lb
        if (this.selectedHeight === "ft" && this.selectedWeight === "lb") {
          let heightRslt = this.calculeBfp.value.height * 0.3048;
          let weightRslt = this.calculeBfp.value.weight / 2.205;
          this.bmi = weightRslt / (this.square(heightRslt, 2));
          console.log("dag =" + this.bmi);
          this.bfp = (1.20 * this.bmi) + (0.23 * this.calculeBfp.value.age) - 5.4;
          this.selectedHeight = "ft";
          this.selectedWeight = "lb";
        }
        /////////OZ
        //cm oz
        if (this.selectedHeight === "cm" && this.selectedWeight === "oz") {
          this.heightCm = this.calculeBfp.value.height / 100;
          let weightRslt = this.calculeBfp.value.weight / 35.274;
          this.bmi = weightRslt / (this.square(this.heightCm, 2));
          console.log("dag =" + this.bmi);
          this.bfp = (1.20 * this.bmi) + (0.23 * this.calculeBfp.value.age) - 5.4;
          this.selectedHeight = "cm";
          this.selectedWeight = "oz";
        }
        //m oz
        if (this.selectedHeight === "m" && this.selectedWeight === "oz") {
          let weightRslt = this.calculeBfp.value.weight / 35.274;
          this.bmi = weightRslt / (this.square(this.calculeBfp.value.height, 2));
          console.log("dag =" + this.bmi);
          this.bfp = (1.20 * this.bmi) + (0.23 * this.calculeBfp.value.age) - 5.4;
          this.selectedHeight = "m";
          this.selectedWeight = "oz";
        }
        //in oz
        if (this.selectedHeight === "in" && this.selectedWeight === "oz") {
          let heightRslt = this.calculeBfp.value.height / 39.37;
          let weightRslt = this.calculeBfp.value.weight / 35.274;
          this.bmi = weightRslt / (this.square(heightRslt, 2));
          console.log("in =" + this.bmi);
          this.bfp = (1.20 * this.bmi) + (0.23 * this.calculeBfp.value.age) - 5.4;
          this.selectedHeight = "in";
          this.selectedWeight = "oz";
        }
        //feet oz
        if (this.selectedHeight === "ft" && this.selectedWeight === "oz") {
          let heightRslt = this.calculeBfp.value.height * 0.3048;
          let weightRslt = this.calculeBfp.value.weight / 35.274;
          this.bmi = weightRslt / (this.square(heightRslt, 2));
          console.log("dag =" + this.bmi);
          this.bfp = (1.20 * this.bmi) + (0.23 * this.calculeBfp.value.age) - 5.4;
          this.selectedHeight = "ft";
          this.selectedWeight = "oz";
        }
        //rslt female 
        if (this.bfp >= 10 && this.bfp <= 13) {
          this.message = "Essential fat";
        }
        if (this.bfp >= 14 && this.bfp <= 20) {
          this.message = "Athletes";
        }
        if (this.bfp >= 21 && this.bfp <= 24) {
          this.message = "Fitness";
        }
        if (this.bfp >= 25 && this.bfp <= 31) {
          this.message = "Average";
        }
        if (this.bfp >= 32) {
          this.message = "Obese";
        }
      }
      let bfm = this.bfp * this.calculeBfp.value.weight / 100
      this.bfm = bfm.toFixed(2);
      let lbm = this.calculeBfp.value.weight - bfm;
      this.lbm = lbm.toFixed(2);

    } else {
      this.error = "Merci de verifiers les champs";
    }
    // this.calculeBfp.reset();
  }
  heightSelect(v: any) {
    //cm
    if (this.selectedHeight === "cm") {
      if (v === 'm') {
        this.modelsBmi.height = this.calculeBfp.value.height / 100;
        this.selectedHeight = "m";
      }
      if (v == 'in') {
        this.modelsBmi.height = (this.calculeBfp.value.height / 100) * 39.37;
        this.selectedHeight = "in"
      }
      if (v == 'ft') {
        // this.modelsBmi.height = (this.calculeBfp.value.height * 100) / 0.3048;
        this.modelsBmi.height = this.calculeBfp.value.height / 30.48;
        this.selectedHeight = "ft"
      }
      //m
    } if (this.selectedHeight === "m") {
      if (v === 'cm') {
        this.modelsBmi.height = this.calculeBfp.value.height * 100;
        this.selectedHeight = "cm"
      }
      if (v == 'in') {
        this.modelsBmi.height = this.calculeBfp.value.height * 39.37;
        this.selectedHeight = "in"
      }
      if (v == 'ft') {
        this.modelsBmi.height = this.calculeBfp.value.height / 0.3048;
        this.selectedHeight = "ft"
      }
    }
    //in
    if (this.selectedHeight === "in") {
      if (v == 'm') {
        this.modelsBmi.height = this.calculeBfp.value.height / 39.37;
        this.selectedHeight = "m"
      }
      if (v == 'cm') {
        this.modelsBmi.height = (this.calculeBfp.value.height * 100) / 39.37;
        this.selectedHeight = "cm"
      }
      if (v == 'ft') {
        // this.modelsBmi.height = (this.calculeBfp.value.height / 39.37) / 0.3048;
        this.modelsBmi.height = this.calculeBfp.value.height / 12;
        this.selectedHeight = "ft"
      }
    }
    //ft
    if (this.selectedHeight === "ft") {
      if (v == 'm') {
        this.modelsBmi.height = this.calculeBfp.value.height * 0.3048;
        this.selectedHeight = "m"
      }
      if (v == 'cm') {
        // this.modelsBmi.height = (this.calculeBfp.value.height * 100) * 0.3048;
        this.modelsBmi.height = this.calculeBfp.value.height * 30.48;
        this.selectedHeight = "cm"
      }
      if (v == 'in') {
        this.modelsBmi.height = this.calculeBfp.value.height * 12;
        this.selectedHeight = "in"
      }
    }
  }
  //
  weightSelect(v: any) {
    //km
    if (this.selectedWeight === "kg") {
      if (v === 'lb') {
        this.modelsBmi.weight = this.calculeBfp.value.weight * 2.205;
        this.selectedWeight = "lb";
      }
      if (v === 'dag') {
        this.modelsBmi.weight = this.calculeBfp.value.weight * 100;
        this.selectedWeight = "dag";
      }
      if (v === 'oz') {
        this.modelsBmi.weight = this.calculeBfp.value.weight * 35.274;
        this.selectedWeight = "oz";
      }
    }
    //dag
    if (this.selectedWeight === "dag") {
      if (v === 'kg') {
        this.modelsBmi.weight = this.calculeBfp.value.weight / 100;
        this.selectedWeight = "kg";
      }
      if (v === 'lb') {
        this.modelsBmi.weight = this.calculeBfp.value.weight / 45.359;
        this.selectedWeight = "lb";
      }
      if (v === 'oz') {
        this.modelsBmi.weight = this.calculeBfp.value.weight / 2.835;
        this.selectedWeight = "oz";
      }
    }
    //lb
    if (this.selectedWeight === "lb") {
      if (v === 'kg') {
        this.modelsBmi.weight = this.calculeBfp.value.weight / 2.205;
        this.selectedWeight = "kg";
      }
      if (v === 'oz') {
        this.modelsBmi.weight = this.calculeBfp.value.weight * 16;
        this.selectedWeight = "oz";
      }
      if (v === 'dag') {
        this.modelsBmi.weight = this.calculeBfp.value.weight * 45.359;
        this.selectedWeight = "dag";
      }
    }
    //oz
    if (this.selectedWeight === "oz") {
      if (v === 'kg') {
        this.modelsBmi.weight = this.calculeBfp.value.weight / 35.274;
        this.selectedWeight = "kg";
      }
      if (v === 'lb') {
        this.modelsBmi.weight = this.calculeBfp.value.weight / 16;
        this.selectedWeight = "lb";
      }
      if (v === 'dag') {
        this.modelsBmi.weight = this.calculeBfp.value.weight * 2.835;
        this.selectedWeight = "dag";
      }
    }
  }
}
