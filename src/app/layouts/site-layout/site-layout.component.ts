import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.scss']
})
export class SiteLayoutComponent implements OnInit {
  showCookie: boolean = true;
  constructor() { }

  ngOnInit(): void {
     this.checkIfAccepteCookie();
  }

  checkIfAccepteCookie(){
    if(localStorage.getItem('cookie')){
      this.showCookie =  false;
    }
  }

  storeCookie(){
    this.showCookie = false;
    localStorage.setItem('cookie', 'true');
  }

}
