import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SidenavServiceService } from 'src/app/sidenav-service.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  userForm: FormGroup;

  constructor(private fb:FormBuilder, private router: Router, private sidenav: SidenavServiceService) {
  }

  ngOnInit(): void {
    this.sidenav.open();
    this.userForm = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(5)]],
        phone: '',
        email: '',
        addresses: this.fb.array([
            this.initAddress(),
        ])
    });
  }

  initAddress() {
          // initialize our address
          return this.fb.group({
            doorNo: ['', Validators.required],
            street: ['', Validators.required],
            area: ['', Validators.required],
            city: ['', Validators.required],
            pin: ['', Validators.required],
          });
      }

  addAddress() {
      // add address to the list
      const control = <FormArray>this.userForm.controls['addresses'];
      control.push(this.initAddress());
  }

  saveUser() {
    let userStr = this.userForm.get('name').value + '\n'
    + this.userForm.get('phone').value + '\n'
    + this.userForm.get('email').value + '\n';

    let i = 0;
    for (let address of this.userForm.get('addresses')['controls']) {
      i += 1;
      userStr += 'Address ' + i + '\n' + address.value.doorNo + '\n'
      + address.value.street + '\n'
      + address.value.area + '\n'
      + address.value.city + '\n'
      + address.value.pin + '\n';
    }

    window.alert(userStr);
  }

}
