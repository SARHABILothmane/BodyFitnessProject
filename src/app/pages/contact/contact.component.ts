import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
 

  constructor(  private http: HttpClient,) { }

  ngOnInit(): void {
  }


  onSubmit() {
    console.log('d5al');
    
    // contactForm: NgForm
    // if (contactForm.valid) {
      // const email = contactForm.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/f/xknyqpjw',
      // hna ta9dar tzid ay object brayti bi ay smiya 
        { name: 'email.name', replytott: 'eee', message: 'messgae' },
        // { name: email.name, replyto: email.email, message: email.messages },
        { 'headers': headers }).subscribe(
         ( response: any) => {
            console.log(response);
          }
        );
    // }
  }
}
