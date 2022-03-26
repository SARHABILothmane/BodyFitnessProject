import { Component, OnInit } from '@angular/core';
import { DomSanitizer, Meta, SafeHtml, Title } from '@angular/platform-browser';
import { CanonicalService } from 'src/app/services/canonical.service';

@Component({
  selector: 'app-body-mass-index',
  templateUrl: './body-mass-index.component.html',
  styleUrls: ['./body-mass-index.component.scss']
})
export class BodyMassIndexComponent implements OnInit {
  jsonLD!: SafeHtml;
  schema!: any;
  constructor(private titleService: Title, private metaService: Meta, private CanonicalService: CanonicalService, private DomSanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.titleService.setTitle("Free online body mass index (BMI) calculator");
    this.metaService.addTags([
      { name: 'keywords', content: "bmi calculator, bmi calculator women, bmi calculator men, bmi calculator female, bmi calculator by age, children's bmi calculator, cdc bmi calculator, bmi calculator for women, bmi calculator children, bmi calculator women age, bmi calculator kg, child bmi calculator, bmi chart calculator, bmi calculator kids, bmi calculator for men, womens bmi calculator, bmi calculator adults, bmi calculator male, female bmi calculator, male bmi calculator" },
      { name: 'description', content: "Free online body mass index - BMI calculator tool, (BMI calculator female, BMI calculator men, BMI calculator children, BMI calculator by age)" },
    ]);
    this.CanonicalService.createCanonicalLink();
    //shema
    this.schema = {
      "@context": "http://schema.org",
      "@type": "SoftwareApplication",
      "name": "free online body mass index bmi calculator",
      "image": "https://body-calculator.com/assets/images/logo/calculator.svg",
      "url": "https://body-calculator.com/health/bmi-calculator",
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
    return this.DomSanitizer.bypassSecurityTrustHtml(html);
  }

}
