import { NbToastrService, NbGlobalPhysicalPosition, NbComponentStatus, NbIconConfig } from '@nebular/theme';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { Utils } from 'src/app/constant/utils';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  error: string = "";
  positions = NbGlobalPhysicalPosition;
  utils = new Utils();
  isMobile: boolean = true;

  options: AnimationOptions = {
    path: '/assets/animations/contact.json',
  };

  constructor(private http: HttpClient, private toastrService: NbToastrService) { }



  ngOnInit(): void {
    //init forms
    this.contactForm = new FormGroup(
      {
        name: new FormControl("", [Validators.required]),
        email: new FormControl("", [Validators.required, Validators.email]),
        subject: new FormControl("", [Validators.required]),
        message: new FormControl("", [Validators.required, Validators.maxLength(200), Validators.minLength(20),]),
      }
    );
    this.isMobile = this.utils.isMobile();
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.error = "";
      // const email = contactForm.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/f/xknyqpjw',
        // hna ta9dar tzid ay object brayti bi ay smiya 
        { name: this.name.value, email: this.email.value, subject: this.subject.value, message: this.message.value },
        // { name: email.name, replyto: email.email, message: email.messages },
        { 'headers': headers }).subscribe(
          (response: any) => {
            this.showToast('success'),
              console.log(response);
          }
        );
    } else {
      this.error = "Merci de verifiers les champs";
      window.scroll(0, 0);
    }
  }
  showToast(status: NbComponentStatus) {
    this.toastrService.show('Your email sent successfully', status, { status });
  }
  get name() {
    return this.contactForm.get("name") as FormControl;
  }
  get email() {
    return this.contactForm.get("email") as FormControl;
  }
  get subject() {
    return this.contactForm.get("subject") as FormControl;
  }
  get message() {
    return this.contactForm.get("message") as FormControl;
  }
}
