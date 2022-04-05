import { CanonicalService } from 'src/app/services/canonical.service';
import { DomSanitizer, Meta, SafeHtml, Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body-mass-index',
  templateUrl: './body-mass-men.component.html',
  styleUrls: ['./body-mass-men.component.scss']
})
export class BodyMassMenComponent implements OnInit {
  href: string = "";
  jsonLD!: SafeHtml;
  schema!: any;

  constructor(private router: Router, private titleService: Title, private metaService: Meta, private CanonicalService: CanonicalService, private DomSanitizer: DomSanitizer) { }
  ngOnInit(): void {
    this.href = this.router.url;
    this.titleService.setTitle("Body-calculator - free online tool to calculate fitness, time...");
    this.metaService.addTags([
      { name: 'keywords', content: "bmi calculator, bmi calculator men, bmi calculator by age, children's bmi calculator, cdc bmi calculator, bmi calculator for women, bmi calculator children, bmi calculator women age, bmi calculator kg, child bmi calculator, bmi chart calculator, bmi calculator kids, bmi calculator for men, womens bmi calculator, bmi calculator adults, bmi calculator male male bmi calculator" },
      { name: 'description', content: "Free tool allows you to use bmi calculator men, bmi calculator men, bmi calculator children all this options and more (bmi calculator female, bmi calculator by age)" },
    ]);
    this.CanonicalService.createCanonicalLink();
    //shema
    this.schema = {
      "@context": "http://schema.org",
      "@type": "SoftwareApplication",
      "name": "Body mass index bmi calculator for men",
      "image": "https://body-calculator.com/assets/images/logo/calculator.svg",
      "url": "https://body-calculator.com/health/bmi-calculator-men",
      "author": {
        "@type": "Person",
        "name": "SARHABIL"
      },
      "datePublished": "2022-03-26",
      "publisher": {
        "@type": "Organization",
        "name": "body-calculator"
      },
      "applicationCategory": "HealthApplication",
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
