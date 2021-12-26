import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }
  options: AnimationOptions = {
    // path: '/assets/humanbody01.json',
    path: '/assets/relaxed-woman-meditating.json',

  };
  ngOnInit(): void {
  }
  scroll(el: HTMLElement) {
    console.log(el);
    el.scrollIntoView({ behavior: "smooth" });
  }
}
