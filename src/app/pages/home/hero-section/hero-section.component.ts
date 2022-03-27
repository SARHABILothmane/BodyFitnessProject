import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { Utils } from 'src/app/constant/utils';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements OnInit {
  imageLoaded: boolean = false;

  optionsF: AnimationOptions = {
    path: '/assets/animations/symgery-body-icon.json',
  };
  options: AnimationOptions = {
    path: '/assets/animations/humanbody01.json',
  };

  utils = new Utils();
  isMobile: boolean = true;
  constructor() { }
  ngOnInit(): void {
    this.isMobile = this.utils.isMobile();
  }
  animationCreated(animationItem: AnimationItem): void {
    this.imageLoaded = !this.imageLoaded
  }
}
