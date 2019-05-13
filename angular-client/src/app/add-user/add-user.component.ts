import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  public userForm: FormGroup;
  public submitted: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
  ) { 
    this.userForm = this.createuserForm(formBuilder);
  }

  onSubmit() {    
    this.submitted = true;		
		if (this.userForm.invalid) {
			console.log("Plz fill all the mandatory fields first");
			return;
		} else {
      console.log(this.userForm.value);
    }
  }

  get f() {
		return this.userForm.controls;
	}


  createuserForm(formBuilder: FormBuilder) {
		return formBuilder.group({			
			UserId: [null],
			Title: [null],					
		});
	}


  ngOnInit() {
  }

}
