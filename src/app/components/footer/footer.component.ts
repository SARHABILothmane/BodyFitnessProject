import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faFacebook, faGooglePlus, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  dt: any;
  constructor(private router: Router) { }
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faGooglePlus = faGooglePlus;
  faTwitter = faTwitter;
  ngOnInit(): void {
    this.dt = new Date().getFullYear();

  }
  goToEspace() {
    this.router.navigateByUrl("/candidat");
  }

}
