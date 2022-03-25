import { AnimationOptions } from 'ngx-lottie';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, Meta, SafeHtml, Title } from '@angular/platform-browser';
import { CanonicalService } from 'src/app/services/canonical.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  jsonLD!: SafeHtml;
  schema!: any;
  constructor(private titleService: Title, private metaService: Meta, private canonical: CanonicalService, private sanitizer: DomSanitizer) { }
  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: "smooth" });
  }

  bmi: AnimationOptions = {
    path: '/assets/animations/bmi.json',
  };
  bfp: AnimationOptions = {
    path: '/assets/animations/bfp.json',
  };
  iwc: AnimationOptions = {
    path: '/assets/animations/iwc.json',
  };
  bsc: AnimationOptions = {
    path: '/assets/animations/bsc.json',
  };
  bmr: AnimationOptions = {
    path: '/assets/animations/bmr.json',
  };
  hwc: AnimationOptions = {
    path: '/assets/animations/hwc.json',
  };
  date: AnimationOptions = {
    path: '/assets/animations/date.json',
  };
  age: AnimationOptions = {
    path: '/assets/animations/age.json',
  };
  time: AnimationOptions = {
    path: '/assets/animations/time.json',
  };
  calendre: AnimationOptions = {
    path: '/assets/animations/lf20_jrrlfpbo.json',
  };


  ngOnInit(): void {
    this.titleService.setTitle("Body-calculator - free online tool to calculate fitness, time...");
    this.metaService.addTags([
      { name: 'keywords', content: "bmi calculator, bmi calculator women, bmi calculator men, bmi calculator female, bmi calculator by age, children's bmi calculator, cdc bmi calculator, bmi calculator for women, bmi calculator children, bmi calculator women age, bmi calculator kg, child bmi calculator, bmi chart calculator, bmi calculator kids, bmi calculator for men, womens bmi calculator, bmi calculator adults, bmi calculator male, female bmi calculator, male bmi calculator" },
      { name: 'description', content: "Free tool allows you to use bmi calculator women, bmi calculator men, bmi calculator children all this options and more (bmi calculator female, bmi calculator by age)" },
    ]);
    this.canonical.createCanonicalLink();
    //shema
    this.schema = {
      "@context": "http://schema.org",
      "@type": "SoftwareApplication",
      "name": "free online body mass index bmi calculator",
      "image": "https://body-calculator.com/assets/images/logo/calculator.svg",
      "url": "https://www.body-calculator.com/",
      "author": {
        "@type": "Person",
        "name": "SARHABIL"
      },
      "datePublished": "2022-01-10",
      "publisher": {
        "@type": "Organization",
        "name": "body-calculator"
      },
      "applicationCategory": "Body mass index (bmi) calculator",
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
}
