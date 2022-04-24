import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, Meta, SafeHtml, Title } from '@angular/platform-browser';
import { CanonicalService } from 'src/app/services/canonical.service';
@Component({
  selector: 'app-date-calculator',
  templateUrl: './date-calculator.component.html',
  styleUrls: ['./date-calculator.component.scss']
})
export class DateCalculatorComponent implements OnInit {


  calculeDate!: FormGroup;
  AddOrSubtractDate!: FormGroup;
  rslt!: number;
  month!: number;
  monthF!: number;
  year!: number;
  week!: number;
  weekF!: number;
  day!: number;
  dayF!: number;
  dayW!: number;
  addOrSubYear!: number;
  addOrSubMonth!: number;
  addOrSubWeek!: number;
  addOrSubDay!: number;
  rsltAddOrSubYear!: number;
  rsltAddOrSubMonth!: number;
  rsltAddOrSubWeek!: number;
  rsltAddOrSubDay!: number;
  calDayBr!: number;
  calDayTo!: number;
  rsltCalDayTo!: number;
  hours!: number;
  minute!: number;
  second!: number;
  date = new Date();
  public age!: number;
  checked: string = "";
  jsonLD!: SafeHtml;
  schema!: any;
  constructor(private titleService: Title, private metaService: Meta, private canonical: CanonicalService, private sanitizer: DomSanitizer) {
    this.calculeDate = new FormGroup({
      startDate: new FormControl("", [Validators.required]),
      dateEnd: new FormControl("", [Validators.required]),
    });
    this.AddOrSubtractDate = new FormGroup({
      addSubDate: new FormControl("", [Validators.required]),
      years: new FormControl("", [Validators.required]),
      months: new FormControl("", [Validators.required]),
      weeks: new FormControl("", [Validators.required]),
      days: new FormControl("", [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.titleService.setTitle("Free online date calculator - body-calculator");
    this.metaService.addTags([
      { name: 'keywords', content: "date calculator, days calculator, days between dates, time and date calculator" },
      { name: 'description', content: "Free online date calculator (days calculator, days between dates, time and date calculator)" },
    ]);
    this.canonical.createCanonicalLink();
    //shema
    this.schema = {
      "@context": "http://schema.org",
      "@type": "SoftwareApplication",
      "name": "Age calculator",
      "image": "https://body-calculator.com/assets/images/logo/calculator.svg",
      "url": "https://body-calculator.com/calculator/date-calculator",
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

  public CalculateDate(e: HTMLElement): void {
    e.scrollIntoView({ behavior: "smooth" });
    let startDate = this.calculeDate.value.startDate;
    let dateEnd = this.calculeDate.value.dateEnd;
    this.year = dateEnd.getFullYear() - startDate.getFullYear() - 1;
    //month of startDate
    let m1 = startDate.getMonth() + 1;
    let rsltMthBday = 12 - m1;
    //month of dateEnd
    let m2 = dateEnd.getMonth() + 1;
    let rsltMthTday = 12 - m2;
    let rsltMthTday2 = 12 - rsltMthTday - 1;
    console.log(startDate.getDate(), startDate.getMonth() + 1, startDate.getFullYear());
    //////// day of startDate
    if (m1 === 1 || m1 === 3 || m1 === 5 || m1 === 7 || m1 === 10 || m1 === 12) {
      this.calDayBr = 31 - startDate.getDate() + 1;
    } if (m1 === 4 || m1 === 6 || m1 === 8 || m1 === 9 || m1 === 11) {
      this.calDayBr = 30 - startDate.getDate() + 1;
    } if (m1 === 2) {
      this.calDayBr = 28 - startDate.getDate() + 1;
    }
    /////// day of dateEnd
    if (m2 === 1 || m2 === 3 || m2 === 5 || m2 === 7 || m2 === 10 || m2 === 12) {
      this.calDayTo = 31 - dateEnd.getDate();
      this.rsltCalDayTo = 31 - this.calDayTo;
    } if (m2 === 4 || m2 === 6 || m2 === 8 || m2 === 9 || m2 === 11) {
      this.calDayTo = 30 - dateEnd.getDate();
      this.rsltCalDayTo = 30 - this.calDayTo;
    } if (m2 === 2) {
      this.calDayTo = 28 - dateEnd.getDate();
      this.rsltCalDayTo = 28 - this.calDayTo;
    }
    //rslt day
    this.dayF = this.calDayBr + this.rsltCalDayTo;
    console.log(this.dayF);

    ///rsl month
    if (this.dayF >= 30) {
      this.monthF = rsltMthBday + rsltMthTday2 + 1;
      this.dayF = this.dayF - 30;
    } else {
      this.monthF = rsltMthBday + rsltMthTday2;
    }
    // let rsltMonthdateEnd1 = 12 - dateEnd.getMonth();
    // let rsltMonthdateEnd2 = 12 - rsltMonthdateEnd1;
    // let rslMonth = rsltMthBday + rsltMonthdateEnd2;
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
  public AddOrSubDate(): void {
    if (this.checked === "add") {
      let dateAdd = this.AddOrSubtractDate.value.addSubDate;
      this.addOrSubDay = this.AddOrSubtractDate.value.days + dateAdd.getDate();
      this.addOrSubMonth = this.AddOrSubtractDate.value.months + dateAdd.getMonth() + 1;
      // this.addOrSubWeek = this.AddOrSubtractDate.value.weeks + (this.addOrSubMonth * 4.34524);
      this.addOrSubWeek = this.AddOrSubtractDate.value.weeks;

      this.addOrSubWeek = Math.round(this.addOrSubWeek);
      this.addOrSubYear = this.AddOrSubtractDate.value.years + dateAdd.getFullYear();
      if (dateAdd.getMonth() === 1 || dateAdd.getMonth() === 3 || dateAdd.getMonth() === 5 || dateAdd.getMonth() === 7 || dateAdd.getMonth() === 10 || dateAdd.getMonth() === 12 && this.addOrSubDay >= 31) {
        this.addOrSubDay = 31 - this.addOrSubDay;
        this.addOrSubMonth = this.addOrSubMonth + dateAdd.getMonth() + 1;
      } if (dateAdd.getMonth() === 4 || dateAdd.getMonth() === 6 || dateAdd.getMonth() === 8 || dateAdd.getMonth() === 9 || dateAdd.getMonth() === 11 && this.addOrSubDay >= 30) {
        this.addOrSubDay = 30 - this.addOrSubDay;
        this.addOrSubMonth = this.addOrSubMonth + dateAdd.getMonth() + 1;
      } if (dateAdd.getMonth() === 2 && this.addOrSubDay >= 28) {
        this.addOrSubDay = 28 - this.addOrSubDay;
        this.addOrSubMonth = this.addOrSubMonth + dateAdd.getMonth() + 1;
      }
      if (this.addOrSubDay >= 7) {
        let weekFh = this.addOrSubDay / 7;
        this.addOrSubDay = this.addOrSubDay % 7;
        this.addOrSubWeek = this.addOrSubWeek + weekFh;
        this.addOrSubWeek = Math.round(this.addOrSubWeek);
      }
      if (this.addOrSubWeek >= 4.34524) {
        this.addOrSubMonth = this.addOrSubMonth + this.addOrSubWeek / 4.34524;
        this.addOrSubWeek = this.addOrSubWeek % 7
      }
      if (this.addOrSubMonth >= 12) {
        this.addOrSubMonth = this.addOrSubMonth - 12;
        this.addOrSubYear = this.addOrSubYear + 1;
      }
      console.log("years" + this.addOrSubYear);
      console.log("mon" + this.addOrSubMonth);
      console.log("day" + this.addOrSubDay);
      console.log("week" + this.addOrSubWeek);
      this.date.setDate(this.addOrSubDay)
      this.date.setMonth(Math.round(this.addOrSubMonth))
      this.date.setFullYear(this.addOrSubYear)
      console.log("date" + this.date);
      this.handleDateChange(this.date);

      // this.addOrSubYear = this.addOrSubYear + yearsAdd;
      // this.addOrSubMonth = this.addOrSubMonth + monthsAdd;

    }
    if (this.checked === "substract") {
      let dateSubstract = this.AddOrSubtractDate.value.addSubDate;
      this.addOrSubDay = dateSubstract.getDate() - this.AddOrSubtractDate.value.days;
      this.addOrSubMonth = dateSubstract.getMonth() + 1 - this.AddOrSubtractDate.value.months;
      this.addOrSubWeek = this.AddOrSubtractDate.value.weeks;
      this.addOrSubWeek = Math.round(this.addOrSubWeek);
      this.addOrSubYear = dateSubstract.getFullYear() - this.AddOrSubtractDate.value.years;
      if (dateSubstract.getMonth() === 1 || dateSubstract.getMonth() === 3 || dateSubstract.getMonth() === 5 || dateSubstract.getMonth() === 7 || dateSubstract.getMonth() === 10 || dateSubstract.getMonth() === 12 && this.addOrSubDay >= 31) {
        this.addOrSubDay = 31 - this.addOrSubDay;
        this.addOrSubMonth = this.addOrSubMonth - dateSubstract.getMonth() + 1;
      } if (dateSubstract.getMonth() === 4 || dateSubstract.getMonth() === 6 || dateSubstract.getMonth() === 8 || dateSubstract.getMonth() === 9 || dateSubstract.getMonth() === 11 && this.addOrSubDay >= 30) {
        this.addOrSubDay = 30 - this.addOrSubDay;
        this.addOrSubMonth = this.addOrSubMonth - dateSubstract.getMonth() + 1;
      } if (dateSubstract.getMonth() === 2 && this.addOrSubDay >= 28) {
        this.addOrSubDay = 28 - this.addOrSubDay;
        this.addOrSubMonth = this.addOrSubMonth - dateSubstract.getMonth() + 1;
      }
      if (this.addOrSubDay >= 7) {
        let weekFh = this.addOrSubDay / 7;
        this.addOrSubDay = this.addOrSubDay % 7;
        this.addOrSubWeek = this.addOrSubWeek + weekFh;
        this.addOrSubWeek = Math.round(this.addOrSubWeek);
      }
      if (this.addOrSubWeek >= 4.34524) {
        this.addOrSubMonth = this.addOrSubMonth + this.addOrSubWeek / 4.34524;
        this.addOrSubWeek = this.addOrSubWeek % 7
      }
      if (this.addOrSubMonth >= 12) {
        this.addOrSubMonth = this.addOrSubMonth - 12;
        this.addOrSubYear = this.addOrSubYear + 1;
      }
      console.log("years" + this.addOrSubYear);
      console.log("mon" + this.addOrSubMonth);
      console.log("day" + this.addOrSubDay);
      console.log("week" + this.addOrSubWeek);
      this.date.setDate(this.addOrSubDay)
      this.date.setMonth(Math.round(this.addOrSubMonth))
      this.date.setFullYear(this.addOrSubYear)

      console.log("date" + this.date);
      this.handleDateChange(this.date);

      // this.addOrSubYear = this.addOrSubYear + yearsAdd;
      // this.addOrSubMonth = this.addOrSubMonth + monthsAdd;

    }
  }
  handleDateChange(d: any) {
    this.date = d;
    console.log(this.date);

    return this.date;
  }
  checkedDate(v: any) {
    this.checked = v;
    console.log(this.checked);
  }

}
