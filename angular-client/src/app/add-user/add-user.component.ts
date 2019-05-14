import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
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
    private dataService: DataService,
    private route: Router
  ) { 
    this.userForm = this.createuserForm(formBuilder);
  }

  onSubmit() {    
    this.submitted = true;		
		if (this.userForm.invalid) {
			console.log("Plz fill all the mandatory fields first");
			return;
		} else {
      this.dataService.createUser(this.userForm.value).subscribe(
        data => {
          this.route.navigateByUrl('list');
        }, err => {
          console.log(err);
        }
      )
    }
  }

  get f() {
		return this.userForm.controls;
	}

  _keyPressInt(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);    
    if (!pattern.test(inputChar) && event.charCode != 0) {        
      event.preventDefault();
    }
}

  _keyPressString(event: any) {
      const pattern = /^[A-z]+$/;
      let inputChar = String.fromCharCode(event.charCode);         
      if (!pattern.test(inputChar) && event.charCode != 0 && event.charCode != 32) {        
        event.preventDefault();
      }
  }

  createuserForm(formBuilder: FormBuilder) {
		return formBuilder.group({			
			UserId: [0],
      Title: [null, Validators.required],
      FirstName: [null, Validators.required],
      MiddleName: [null, Validators.required],
      LastName: [null, Validators.required],
      MobileNo: [null, Validators.required],
      PhoneNo: [null, Validators.required],
      EmailId: [null, Validators.required],
      Password: [null, Validators.required],
      RoleId: [null, Validators.required],
      AgencyId: [null, Validators.required],
      BranchId: [null, Validators.required],
      Status: [null, Validators.required],
      LastLoginDate: [null],
      Remark: [null, Validators.required],					
      IsCompnayUser : [true, Validators.required],
      UserType : [0, Validators.required],
      OldPassword : [null, Validators.required],
      CreatedOn : [null],
      CreatedBy  : [null, Validators.required],
      ModifiedOn  : [null],
      ModifiedBy  : [null, Validators.required],
		});
  }
  

  ngOnInit() {
  }

}
