import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  loginForm: FormGroup;
  user: any;

  constructor(private fb:FormBuilder, private router: Router) {
    const user = this.router.getCurrentNavigation().extras.state.userData;
    this.user = user;
   }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      id: this.user.id,
      name: this.user.name,
      username: this.user.username,
      email: this.user.email,
      street: this.user.address.street,
      suite: this.user.address.suite,
      city: this.user.address.city,
      zipcode: this.user.address.zipcode,
      lat: this.user.address.geo.lat,
      lng: this.user.address.geo.lng,
      phone: this.user.phone,
      website: this.user.website,
      companyName: this.user.company.name,
      catchPhrase: this.user.company.catchPhrase,
      bs: this.user.company.bs,
    });
  }

  saveUser() {
    window.alert(this.loginForm.get('id').value + '\n'
    + this.loginForm.get('name').value + '\n'
    + this.loginForm.get('username').value + '\n'
    + this.loginForm.get('email').value + '\n'
    + this.loginForm.get('street').value + '\n'
    + this.loginForm.get('suite').value + '\n'
    + this.loginForm.get('city').value + '\n'
    + this.loginForm.get('zipcode').value + '\n'
    + this.loginForm.get('lat').value + '\n'
    + this.loginForm.get('lng').value + '\n'
    + this.loginForm.get('phone').value + '\n'
    + this.loginForm.get('website').value + '\n'
    + this.loginForm.get('companyName').value + '\n'
    + this.loginForm.get('catchPhrase').value + '\n'
    + this.loginForm.get('bs').value + '\n');
  }
}
