import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @ViewChild('sidebar')
  sidebar!: ElementRef;
  isClosed: boolean = true;
  loading = false;
  searchForm!: FormGroup;
  detailsFormation: any;
  hideDropDown: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  toggle() {
    if (this.isClosed) {
      this.sidebar.nativeElement.style.width = '250px';

      this.isClosed = !this.isClosed;
    } else {
      this.sidebar.nativeElement.style.width = '0px';
      this.isClosed = !this.isClosed;
    }
  }
  hideDropDownMethode(){
    this.hideDropDown = true;
    setTimeout(() => {
      this.hideDropDown = false
    }, 30);
  }
}
