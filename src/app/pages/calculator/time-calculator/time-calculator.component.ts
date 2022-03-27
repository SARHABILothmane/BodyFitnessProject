import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Time } from 'src/app/models/time';

@Component({
  selector: 'app-time-calculator',
  templateUrl: './time-calculator.component.html',
  styleUrls: ['./time-calculator.component.scss']
})
export class TimeCalculatorComponent implements OnInit {
  calculeTime!: FormGroup;
  checked: string = "";
  modelsTime: Time = {
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
  };
  constructor() {
    this.calculeTime = new FormGroup({
      day: new FormControl("", [Validators.required]),
      hour: new FormControl("", [Validators.required]),
      minute: new FormControl("", [Validators.required]),
      second: new FormControl("", [Validators.required]),
      dayAddSub: new FormControl("", [Validators.required]),
      hourAddSub: new FormControl("", [Validators.required]),
      minuteAddSub: new FormControl("", [Validators.required]),
      secondAddSub: new FormControl("", [Validators.required]),
      rsltDay: new FormControl("", [Validators.required]),
      rsltHour: new FormControl("", [Validators.required]),
      rsltMinute: new FormControl("", [Validators.required]),
      rsltSecond: new FormControl("", [Validators.required]),
    });
  }


  ngOnInit(): void {
  }
  public CalculateTime(e: HTMLElement): void {
    console.log(this.calculeTime.value.day);
    console.log(this.calculeTime.value.dayAddSub);
    if (this.checked === "add") {
      this.modelsTime.day = this.calculeTime.value.day + this.calculeTime.value.dayAddSub;
      this.modelsTime.hour = this.calculeTime.value.hour + this.calculeTime.value.hourAddSub;
      if (this.modelsTime.hour > 24) {
        this.modelsTime.day = this.calculeTime.value.day + this.calculeTime.value.dayAddSub + 1;
        this.modelsTime.hour = this.modelsTime.hour % 24;
      }
      this.modelsTime.minute = this.calculeTime.value.minute + this.calculeTime.value.minuteAddSub;
      if (this.modelsTime.minute > 60) {
        this.modelsTime.hour = this.calculeTime.value.hour + this.calculeTime.value.hourAddSub + 1;
        this.modelsTime.minute = this.modelsTime.minute % 60;
      }
      this.modelsTime.second = this.calculeTime.value.second + this.calculeTime.value.secondAddSub;
      if (this.modelsTime.second > 60) {
        this.modelsTime.minute = this.calculeTime.value.minute + this.calculeTime.value.minuteAddSub + 1;
        this.modelsTime.second = this.modelsTime.second % 60;
      }
    }
    if (this.checked === "substract") {
      this.modelsTime.day = this.calculeTime.value.day - this.calculeTime.value.dayAddSub;
      this.modelsTime.hour = this.calculeTime.value.hour - this.calculeTime.value.hourAddSub;
      // if (this.modelsTime.hour > 24) {
      //   this.modelsTime.day = this.calculeTime.value.day - this.calculeTime.value.dayAddSub + 1;
      //   this.modelsTime.hour = this.modelsTime.hour % 24;
      // }
      this.modelsTime.minute = this.calculeTime.value.minute - this.calculeTime.value.minuteAddSub;
      this.reverseInt(this.modelsTime.minute);
      // if (this.modelsTime.minute > 60) {
      //   this.modelsTime.hour = this.calculeTime.value.hour + this.calculeTime.value.hourAddSub + 1;
      //   this.modelsTime.minute = this.modelsTime.minute % 60;
      // }
      this.modelsTime.second = this.calculeTime.value.second - this.calculeTime.value.secondAddSub;
      // if (this.modelsTime.second > 60) {
      //   this.modelsTime.minute = this.calculeTime.value.minute + this.calculeTime.value.minuteAddSub + 1;
      //   this.modelsTime.second = this.modelsTime.second % 60;
      // }
    }

  }
  checkedTime(v: any) {
    this.checked = v;
    console.log(this.checked);
  }
  reverseInt(int: any) {
    let intRev = "";
    for (let i = 1; i < int.length; i++) {
      intRev = int[i] + intRev;
    }
    intRev = '-' + intRev;
    return intRev;
  }
}
