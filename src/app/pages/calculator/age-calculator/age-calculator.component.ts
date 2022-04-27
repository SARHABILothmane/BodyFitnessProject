import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, Meta, SafeHtml, Title } from '@angular/platform-browser';
import { CanonicalService } from 'src/app/services/canonical.service';

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
  error: string = "";
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


  CalculateAge(e: HTMLElement){
    if (this.calculeAge.valid) {
      this.daysDiff(this.birthday.value, this.today.value);
      this.monthsDiff(this.birthday.value, this.today.value);
      this.fullDateDiff(this.birthday.value, this.today.value);
      this.weeksDiff(this.birthday.value, this.today.value)
      this.checkForm = true;
      e.scrollIntoView({ behavior: "smooth" });
    }else {
      this.error = "Please check the inputs";
    }
  }

  yearsDiff(d1: Date, d2: Date) {
    let date1 = new Date(d1);
    let date2 = new Date(d2);
    let yearsDiff =  date2.getFullYear() - date1.getFullYear();
    console.log( 'year', yearsDiff);
    return yearsDiff;
}
  monthsDiff(d1: Date, d2: Date) {
    let date1 = new Date(d1);
    let date2 = new Date(d2);
    let years = this.yearsDiff(d1, d2);
    let months =(years * 12) + (date2.getMonth() - date1.getMonth()) ;

    let diffDays = this.daysDiff(d1, d2);
    if(date1.getMonth() > date2.getMonth()){
      years = years - 1;
    }
    // had calcul bach n7aydo sanawat alkabissa Math.floor((29-(2022%4))/4
    // let eleminateSanaKabisa = ((months/12)*365) + Math.floor((29-(2022%4))/4 );
    let eleminateSanaKabisa = ((months/12)*365) + Math.floor((years-(date2.getFullYear()%4))/4 );
    this.dayF = Math.floor( diffDays - eleminateSanaKabisa);
    if(this.dayF < 0){
      this.dayF = 0;
    };
    this.month = months 

    return months;
  }

  daysDiff(d1: Date, d2: Date) {
    let hours = this.hoursDiff(d1, d2);
    let daysDiff = Math.floor( hours / 24 );
    this.day = daysDiff;
    
    return daysDiff;
 }

 hoursDiff(d1: Date, d2:  Date) {
  let minutes = this.minutesDiff(d1, d2);
  let hoursDiff = Math.floor( minutes / 60 );
  this.hours = hoursDiff;
  
  return hoursDiff;
}


minutesDiff(d1: Date, d2: Date) {
  let seconds = this.secondsDiff(d1, d2);
  let minutesDiff = Math.floor( seconds / 60 );
  this.minute =  minutesDiff;
  
  return minutesDiff;
}

secondsDiff(d1: any, d2: any) {
  // let millisecondDiff = d2 - d1;
  let secDiff = Math.floor( ( d2 - d1) / 1000 );
  this.second = secDiff;
  
  return secDiff;
}

weeksDiff(d1: Date, d2: Date){
 let days = this.daysDiff(d1, d2);
 this.week = Math.floor(days/7);
 this.dayW = days - (this.week * 7);
}

fullDateDiff(startingDate: any, endingDate: any) {
  var startDate = new Date(new Date(startingDate).toISOString().substr(0, 10));
  if (!endingDate) {
    endingDate = new Date().toISOString().substr(0, 10); // need date in YYYY-MM-DD format
  }
  var endDate = new Date(endingDate);
  if (startDate > endDate) {
    var swap = startDate;
    startDate = endDate;
    endDate = swap;
  }
  var startYear = startDate.getFullYear();
  var february = (startYear % 4 === 0 && startYear % 100 !== 0) || startYear % 400 === 0 ? 29 : 28;
  var daysInMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  var yearDiff = endDate.getFullYear() - startYear;
  var monthDiff = endDate.getMonth() - startDate.getMonth();
  if (monthDiff < 0) {
    yearDiff--;
    monthDiff += 12;
  }
  var dayDiff = endDate.getDate() - startDate.getDate();
  if (dayDiff < 0) {
    if (monthDiff > 0) {
      monthDiff--;
    } else {
      yearDiff--;
      monthDiff = 11;
    }
    dayDiff += daysInMonth[startDate.getMonth()];
  }
  this.year = yearDiff;
  this.monthF = monthDiff;
  this.dayF = dayDiff;
}

  public CalculateAgee(e: HTMLElement): void {
    if (this.calculeAge.valid) {
      this.checkForm = true;
      e.scrollIntoView({ behavior: "smooth" });
      this.error = "";
      let birthday = this.calculeAge.value.birthday;
      let today = this.calculeAge.value.today;
      if (birthday.getFullYear() === today.getFullYear()) {
        this.year = 0;
        // this.month = today.getMonth() + 1 - birthday.getMonth() + 1;
        //month of birthday
        if (birthday.getMonth() > today.getMonth()) {
          this.error = "The birthday cannot be greater than today's date";
        }
        let m1 = birthday.getMonth() + 1;
        let rsltMthBday = 12 - m1;
        //month of today
        let m2 = today.getMonth() + 1;
        let rsltMthTday = 12 - m2;
        // let rsltMthTday2 = 12 - rsltMthTday - 1;
        let rsltMthTday2 = rsltMthBday - rsltMthTday - 1;
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
          this.monthF = rsltMthTday2 + 1;
          this.dayF = this.dayF - 30;
        } else {
          this.monthF = rsltMthTday2;
        }
        this.month = this.year * 12 + this.monthF;
        if (this.dayF >= 7) {
          this.weekF = this.dayF / 7;
          this.dayW = this.dayF % 7;
          this.week = this.month * 4.34524 + this.weekF;
          this.week = Math.floor(this.week);
          console.log("1" + this.week);
          console.log("1f" + this.weekF);

        } else {
          this.week = this.month * 4.34524;
          this.week = Math.round(this.week);
          this.day = this.week * 7;
          this.dayW = this.dayF;
          console.log("2" + this.week);
        }
        this.day = this.week * 7 + this.dayW;
        this.hours = this.day * 24;
        this.hours = Math.round(this.hours);
        this.minute = this.hours * 60;
        this.minute = Math.round(this.minute);
        this.second = this.minute * 60;
        this.second = Math.round(this.second);
      }
      if (birthday.getFullYear() != today.getFullYear()) {
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
          console.log("this.dayW " + this.dayW);
          this.week = this.month * 4.34524 + this.weekF;
          this.week = Math.round(this.week);
        } else {
          this.week = this.month * 4.34524;
          this.week = Math.round(this.week);
          this.day = this.week * 7;
          this.dayW = this.dayF;
          console.log("this.dayW " + this.dayW);
        }
        this.day = this.week * 7 + this.dayW;
        this.hours = this.day * 24;
        this.hours = Math.round(this.hours);
        this.minute = this.hours * 60;
        this.minute = Math.round(this.minute);
        this.second = this.minute * 60;
        this.second = Math.round(this.second);
      }
    } else {
      this.error = "Please check the fields";
    }
  }
  //getter 
  get formBmi() { return this.calculeAge.controls; }
  get birthday() {
    return this.calculeAge.get("birthday") as FormControl;
  }
  get today() {
    return this.calculeAge.get("today") as FormControl;
  }
}
