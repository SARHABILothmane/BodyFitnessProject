import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body-mass-index',
  templateUrl: './body-mass-men.component.html',
  styleUrls: ['./body-mass-men.component.scss']
})
export class BodyMassMenComponent implements OnInit {

  constructor(private router: Router) { }

  href: string = "";
  ngOnInit() {
    this.href = this.router.url;
  }

}
