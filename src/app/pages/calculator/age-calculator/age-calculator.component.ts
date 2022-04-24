import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DomSanitizer, Meta, SafeHtml, Title } from '@angular/platform-browser';
import { CanonicalService } from 'src/app/services/canonical.service';
import { ifStmt } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-age-calculator',
  templateUrl: './age-calculator.component.html',
  styleUrls: ['./age-calculator.component.scss']
})
export class AgeCalculatorComponent implements OnInit {

  calculeAge!: FormGroup;
  rslt: number = 0;
  month: number = 0;
  monthF: number = 0;
  year: number = 0;
  week: number = 0;
  weekF: number = 0;
  day: number = 0;
  dayF: number = 0;
  dayW: number = 0;
  calDayBr: number = 0;
  calDayTo: number = 0;
  rsltCalDayTo: number = 0;
  hours: number = 0;
  minute: number = 0;
  second: number = 0;
  public age!: number;
  jsonLD!: SafeHtml;
  schema!: any;
  checkForm: boolean = false;
  constructor(private titleService: Title, private metaService: Meta, private canonical: CanonicalService, private sanitizer: DomSanitizer) {
    this.calculeAge = new FormGroup({
      birthday: new FormControl("", [Validators.required]),
      today: new FormControl(new Date(), [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.titleService.setTitle("Free online age calculator by date of birth - body-calculator");
    this.metaService.addTags([
      { name: 'keywords', content: "age calculator, date of birth calculator, birthday calculator, chronological age calculator, life expectancy calculator, calculate age from date of birth, age calculator by date of birth, age calculator pearson" },
      { name: 'description', content: "Free online age calculator (life expectancy calculator, calculate age from date of birth, age calculator by date of birth, date of birth calculator)" },
    ]);
    this.canonical.createCanonicalLink();
    //shema
    this.schema = {
      "@context": "http://schema.org",
      "@type": "SoftwareApplication",
      "name": "Age calculator",
      "image": "https://body-calculator.com/assets/images/logo/calculator.svg",
      "url": "https://body-calculator.com/calculator/age-calculator",
      "author": {
        "@type": "Person",
        "name": "SARHABIL"
      },
      "datePublished": "2022-01-10",
      "publisher": {
        "@type": "Organization",
        "name": "body-calculator"
      },
      "operatingSystem": "Linux",
      "screenshot": "https://body-calculator.com/assets/images/logo/Screenshot-body-calculator.png",
      "softwareVersion": "1"
    }
    this.jsonLD = this.getSafeHTML(this.schema);
  }

  getSafeHTML(value: {}) {
    // If value convert to JSON and escape / to prevent script tag in JSON
    const json = value
      ? JSON.stringify(value, null, 2).replace(/\//g, '\\/')
      : '';
    const html = `${json}`;
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }


  public CalculateAge(e: HTMLElement): void {
    e.scrollIntoView({ behavior: "smooth" });
    this.checkForm = true;
    let birthday = this.calculeAge.value.birthday;
    let today = this.calculeAge.value.today;
    if (birthday.getFullYear() === today.getFullYear()) {
      this.year = 0;
      // this.month = today.getMonth() + 1 - birthday.getMonth() + 1;
    } if (birthday.getFullYear() != today.getFullYear()) {
      this.year = today.getFullYear() - birthday.getFullYear() - 1;
      //month of birthday
      let m1 = birthday.getMonth() + 1;
      let rsltMthBday = 12 - m1;
      //month of today
      let m2 = today.getMonth() + 1;
      let rsltMthTday = 12 - m2;
      let rsltMthTday2 = 12 - rsltMthTday - 1;
      //////// day of birthday
      if (m1 === 1 || m1 === 3 || m1 === 5 || m1 === 7 || m1 === 10 || m1 === 12) {
        this.calDayBr = 31 - birthday.getDate();
      } if (m1 === 4 || m1 === 6 || m1 === 8 || m1 === 9 || m1 === 11) {
        this.calDayBr = 30 - birthday.getDate();
      } if (m1 === 2) {
        this.calDayBr = 28 - birthday.getDate();
      }
      /////// day of today
      if (m2 === 1 || m2 === 3 || m2 === 5 || m2 === 7 || m2 === 10 || m2 === 12) {
        this.calDayTo = 31 - today.getDate();
        this.rsltCalDayTo = 31 - this.calDayTo;
      } if (m2 === 4 || m2 === 6 || m2 === 8 || m2 === 9 || m2 === 11) {
        this.calDayTo = 30 - today.getDate();
        this.rsltCalDayTo = 30 - this.calDayTo;
      } if (m2 === 2) {
        this.calDayTo = 28 - today.getDate();
        this.rsltCalDayTo = 28 - this.calDayTo;
      }
      //rslt day
      this.dayF = this.calDayBr + this.rsltCalDayTo;
      ///rsl month
      if (this.dayF >= 30) {
        this.monthF = rsltMthBday + rsltMthTday2 + 1;
        this.dayF = this.dayF - 30;
      } else {
        this.monthF = rsltMthBday + rsltMthTday2;
      }
      if (this.monthF >= 12) {
        this.monthF = this.monthF % 12;
        this.year = this.year + 1;
      }
      this.month = this.year * 12 + this.monthF;
      if (this.dayF >= 7) {
        this.weekF = this.dayF / 7;
        this.dayW = this.dayF % 7;
        this.week = this.month * 4.34524 + this.weekF;
        this.week = Math.round(this.week);
      } else {
        this.week = this.month * 4.34524;
        this.week = Math.round(this.week);
        this.day = this.week * 7;
      }
      this.day = this.week * 7 + this.dayW;
      this.hours = this.day * 24;
      this.hours = Math.round(this.hours);
      this.minute = this.hours * 60;
      this.minute = Math.round(this.minute);
      this.second = this.minute * 60;
      this.second = Math.round(this.second);
    }
  }
  public CalculateAge1(e: HTMLElement): void {
    e.scrollIntoView({ behavior: "smooth" });
    this.checkForm = true;
    let birthday = this.calculeAge.value.birthday;
    let today = this.calculeAge.value.today;
    // if (birthday.getFullYear() === today.getFullYear()) {
    //   this.year = 0
    // } else {
    //   this.year = today.getFullYear() - birthday.getFullYear() - 1;
    // }
    this.year = today.getFullYear() - birthday.getFullYear() - 1;

    //month of birthday
    let m1 = birthday.getMonth() + 1;
    let rsltMthBday = 12 - m1;
    //month of today
    let m2 = today.getMonth() + 1;
    let rsltMthTday = 12 - m2;
    let rsltMthTday2 = 12 - rsltMthTday - 1;
    //////// day of birthday
    if (m1 === 1 || m1 === 3 || m1 === 5 || m1 === 7 || m1 === 10 || m1 === 12) {
      this.calDayBr = 31 - birthday.getDate() + 1;
    } if (m1 === 4 || m1 === 6 || m1 === 8 || m1 === 9 || m1 === 11) {
      this.calDayBr = 30 - birthday.getDate() + 1;
    } if (m1 === 2) {
      this.calDayBr = 28 - birthday.getDate() + 1;
    }
    /////// day of today
    if (m2 === 1 || m2 === 3 || m2 === 5 || m2 === 7 || m2 === 10 || m2 === 12) {
      this.calDayTo = 31 - today.getDate();
      this.rsltCalDayTo = 31 - this.calDayTo;
    } if (m2 === 4 || m2 === 6 || m2 === 8 || m2 === 9 || m2 === 11) {
      this.calDayTo = 30 - today.getDate();
      this.rsltCalDayTo = 30 - this.calDayTo;
    } if (m2 === 2) {
      this.calDayTo = 28 - today.getDate();
      this.rsltCalDayTo = 28 - this.calDayTo;
    }
    //rslt day
    this.dayF = this.calDayBr + this.rsltCalDayTo;

    ///rsl month
    if (this.dayF >= 30) {
      this.monthF = rsltMthBday + rsltMthTday2 + 1;
      this.dayF = this.dayF - 30;
    } else {
      this.monthF = rsltMthBday + rsltMthTday2;
    }
    // let rsltMonthToday1 = 12 - today.getMonth();
    // let rsltMonthToday2 = 12 - rsltMonthToday1;
    // let rslMonth = rsltMthBday + rsltMonthToday2;
    // console.log(rslMonth);
    this.month = this.year * 12 + this.monthF;
    if (this.dayF >= 7) {
      this.weekF = this.dayF / 7;
      this.dayW = this.dayF % 7;
      this.week = this.month * 4.34524 + this.weekF;
      this.week = Math.round(this.week);
    } else {
      this.week = this.month * 4.34524;
      this.week = Math.round(this.week);
      this.day = this.week * 7;
    }
    this.day = this.week * 7 + this.dayW;
    this.hours = this.day * 24;
    this.hours = Math.round(this.hours);
    this.minute = this.hours * 60;
    this.minute = Math.round(this.minute);
    this.second = this.minute * 60;
    this.second = Math.round(this.second);
    // console.log(rsltYears * 12);
    // ans * 365 * 12 * 24 * 60 * 60
    // monthBirthay  = 12 - Monthbirthday +1 
    // monthTodayRslt = 12 - monthToday => 12-monthTodayRslt 
    // month to week =>  1 =  4,34524  
    // week to day => 1 w = 7 d
    // day to hours => 1 d = 24 h
    // week to hours =>  1 week = 168 h              *365=6570
    // hours to minute => 1 h = 60 m 
    // minute to seconde => 1m = 60 s 
    // 18 ans => 18 y => 18 *12 = 216 m => 216 * 4,3424 =  938,55 w => 
    // 18 ANS => 18 years => 18*12=216 month =>  216*365 =78840 jr => 78840*24 = 1 892 160 => 78840 *60 = 4 730 400
  }

}
