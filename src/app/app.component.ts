import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: `<ngx-json-ld [json]="schema"></ngx-json-ld>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculatorFitness';
  schema = {
    '@context': 'http://schema.org',
    '@type': 'WebSite',
    name: 'angular.io',
    url: 'https://angular.io'
  };
}
