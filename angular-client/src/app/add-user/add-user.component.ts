import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  public userForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
  ) { 
    this.userForm = this.createuserForm(formBuilder);
  }

  createuserForm(formBuilder: FormBuilder) {
		return formBuilder.group({
			state: [null, Validators.required],
			city: [null, Validators.required],
			userId: [null, Validators.required],
			userName: [null, Validators.required],
			roleId: [null, Validators.required],
			address: [null, Validators.required],
			phone: [null, Validators.required],
			email: [null, Validators.email],
			image: ['']			
		});
	}


  ngOnInit() {
  }

}
