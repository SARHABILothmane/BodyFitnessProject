import { Component, OnInit } from '@angular/core';
import { DomSanitizer, Meta, SafeHtml, Title } from '@angular/platform-browser';
import { CanonicalService } from 'src/app/services/canonical.service';

@Component({
  selector: 'app-home',
  template: `<ngx-json-ld [json]="schema"></ngx-json-ld>`,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  jsonLD!: SafeHtml;
  constructor(private titleService: Title, private metaService: Meta, private canonical: CanonicalService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.titleService.setTitle("Free online body mass index (BMI) calculator for women, men, children");
    this.metaService.addTags([
      { name: 'keywords', content: "bmi calculator, bmi calculator women, bmi calculator men, bmi calculator female, bmi calculator by age, children's bmi calculator, cdc bmi calculator, bmi calculator for women, bmi calculator children, bmi calculator women age, bmi calculator kg, child bmi calculator, bmi chart calculator, bmi calculator kids, bmi calculator for men, womens bmi calculator, bmi calculator adults, bmi calculator male, female bmi calculator, male bmi calculator" },
      { name: 'description', content: "Free tool allows you to use bmi calculator women, bmi calculator men, bmi calculator children all this options and more (bmi calculator female, bmi calculator by age)" },
    ]);
    this.canonical.createCanonicalLink();
    //shema
    const json = {
      '@context': 'http://schema.org',
      '@type': 'Organization',
      url: 'https://google.com',
      name: 'Google',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-000-000-0000',
        contactType: 'Customer service'
      }
    };

    this.jsonLD = this.getSafeHTML(json);
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
