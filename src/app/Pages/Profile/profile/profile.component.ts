import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  ngOnInit(): void {
  }
  constructor(private fb : FormBuilder ) {
    this.profileForm()
   }

  public profileform : FormGroup = new FormGroup({})
  profileForm(){
    this.profileform = this.fb.group ({
      name :  [('AJM SOFTWARES') , [Validators.required]],
      phone :  [('7297825537') , [Validators.required]],
      email :  [('ajm123@gmail.com') , [Validators.required]],
      address :  [('3rd Floor, Manak Tower, 9th D Rd, Sardarpura') , [Validators.required]],
      country :  [('India') , [Validators.required]],
      state :  [('Rajasthan') , [Validators.required]],
      city :  [('Jodhpur') , [Validators.required]],
      zipcode :  [('342003') , [Validators.required]],
    })
  }
}
