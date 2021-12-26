import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-metre-to-inch',
  templateUrl: './metre-to-inch.component.html',
  styleUrls: ['./metre-to-inch.component.scss']
})
export class MetreToInchComponent implements OnInit {
  calculeForm!: FormGroup;
  height!: number;
  weight!: number;

  error: string = "";
  submitted = false;
  constructor() { }

  ngOnInit(): void {
    this.calculeForm = new FormGroup({
      height: new FormControl("", [Validators.required]),
      weight: new FormControl("", [Validators.required]),
    });
  }
  get formMetre() { return this.calculeForm.controls; }
  claculteMetre() {

    this.calculeForm.reset();
  }
}
