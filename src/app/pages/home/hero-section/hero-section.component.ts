import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements OnInit {
  imageLoaded: boolean = false;

  optionsF: AnimationOptions = {
    // path: '/assets/relaxed-woman-meditating.json',
    path: '/assets/animations/symgery-body-icon.json',
  };
  options: AnimationOptions = {
    path: '/assets/animations/humanbody01.json',
  };
  constructor() { }
  ngOnInit(): void {
  }
  animationCreated(animationItem: AnimationItem): void {
    this.imageLoaded = !this.imageLoaded
    // animationItem.show();
  }
}
