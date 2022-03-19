import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body-mass-index',
  templateUrl: './body-mass-women.component.html',
  styleUrls: ['./body-mass-women.component.scss']
})
export class BodyMassWomenComponent implements OnInit {

  constructor(private router: Router) { }

  href: string = "";
  ngOnInit() {
    this.href = this.router.url;
  }

}
