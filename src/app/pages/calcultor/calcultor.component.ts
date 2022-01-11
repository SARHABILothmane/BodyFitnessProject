import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { DomSanitizer, Meta, SafeHtml, Title } from '@angular/platform-browser';
import { CanonicalService } from 'src/app/services/canonical.service';
@Component({
  selector: 'app-calcultor',
  templateUrl: './calcultor.component.html',
  styleUrls: ['./calcultor.component.scss']
})
export class CalcultorComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta, private canonical: CanonicalService, private sanitizer: DomSanitizer) { }


  ngOnInit(): void {
    this.titleService.setTitle("Free online body mass index (BMI) calculator for women, men, children");
    this.metaService.addTags([
      { name: 'keywords', content: "bmi calculator, bmi calculator women, bmi calculator men, bmi calculator female, bmi calculator by age, children's bmi calculator, cdc bmi calculator, bmi calculator for women, bmi calculator children, bmi calculator women age, bmi calculator kg, child bmi calculator, bmi chart calculator, bmi calculator kids, bmi calculator for men, womens bmi calculator, bmi calculator adults, bmi calculator male, female bmi calculator, male bmi calculator" },
      { name: 'description', content: "Free tool allows you to use bmi calculator women, bmi calculator men, bmi calculator children all this options and more (bmi calculator female, bmi calculator by age)" },
    ]);
    this.canonical.createCanonicalLink();
  }
  options: AnimationOptions = {
    path: '/assets/animations/c-body-man.json',
  };
  bodybuilder: AnimationOptions = {
    path: '/assets/animations/c-bodybuilder-boy.json',
  };
  fitness: AnimationOptions = {
    path: '/assets/animations/c-fitness-loading-spinner.json',
  };
  weightLoss: AnimationOptions = {
    path: '/assets/animations/c-weight-loss-progress.json',
  };
  calorie: AnimationOptions = {
    path: '/assets/animations/c-calorie-intro-3.json',
  };
  marathon: AnimationOptions = {
    path: '/assets/animations/c-marathon.json',
  };
}
