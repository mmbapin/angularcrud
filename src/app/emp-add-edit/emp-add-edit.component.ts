import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss'],
})
export class EmpAddEditComponent implements OnInit {
  empForm: FormGroup;

  education: string[] = ['Matric', 'Diploma', 'HSC', 'Bsc', 'PHD'];

  constructor(
    private _fb: FormBuilder,
    private _empService: EmployeeService,
    private _dialogRef: MatDialogRef<EmpAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private _coreService: CoreService
  ) {
    this.empForm = this._fb.group({
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      gender: '',
      education: '',
      company: '',
      experience: '',
      package: '',
    });
  }
  ngOnInit(): void {
    this.empForm.patchValue(this.data)
  }

  closeAddEditEmpForm(){
    this._dialogRef.close()
  }

  onFormSubmit() {
    console.log("Valid:", this.empForm.valid);
    console.log("Data", this.data);
    
    if (this.empForm.valid) {
      if(this.data){
        this._empService.updateEmployee(this.data.id, this.empForm.value).subscribe({
          next: (val: any) => {
            // alert('Employee Details Updated!');
            this._coreService.openSnackBar('Employee Details Updated!')
            this._dialogRef.close(true);
  
          },
          error: (err: any) => console.log(err),
        });
      }else{
        this._empService.addEmployee(this.empForm.value).subscribe({
          next: (val: any) => {
            // alert('Employee added successfully!');
            this._coreService.openSnackBar('Employee added successfully!')
            this._dialogRef.close(true);
  
          },
          error: (err: any) => console.log(err),
        });
      }
    }
  }
}
