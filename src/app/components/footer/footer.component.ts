import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  dt: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.dt = new Date().getFullYear();

  }
  goToEspace() {
    this.router.navigateByUrl("/candidat");
  }

}
