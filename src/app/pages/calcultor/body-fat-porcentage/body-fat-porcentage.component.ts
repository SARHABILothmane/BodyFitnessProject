import { Bfp } from './../../../models/bfp';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-body-fat-porcentage',
  templateUrl: './body-fat-porcentage.component.html',
  styleUrls: ['./body-fat-porcentage.component.scss']
})
export class BodyFatPorcentageComponent implements OnInit {
  checked: string = "";; // declare this variable in your component
  calculeForm!: FormGroup;
  age!: number;
  height!: number;
  weight!: number;
  bfp!: number;
  error: string = "";
  submitted = false;
  message: string = "";
  female: string = "";

  modelsBfp: Bfp = {
    age: 0,
    gender: "",
    height: 0,
    weight: 0,
  }
  constructor() { }

  ngOnInit(): void {
    this.calculeForm = new FormGroup({
      age: new FormControl("", [Validators.required]),
      height: new FormControl("", [Validators.required]),
      weight: new FormControl("", [Validators.required]),
    });
  }
  setCheckedStatus(checked: any) {
    console.log('checked', checked.target.checked);
    this.checked = checked.target.checked; // your variable
  }
  claculteBmi() {
    this.submitted = true;
    if (this.calculeForm.valid) {
      this.error = "";
      // this.bmi = this.height * this.height / this.weight;
      // this.bmi = this.calculeForm.value.weight / (this.calculeForm.value.height * this.calculeForm.value.height);
      this.bfp = this.calculeForm.value.weight / this.calculeForm.value.height / 100;

    } else {
      this.error = "Merci de verifiers les champs";
    }
    this.calculeForm.reset();
  }
}
