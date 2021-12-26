import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-calcultor',
  templateUrl: './calcultor.component.html',
  styleUrls: ['./calcultor.component.scss']
})
export class CalcultorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
