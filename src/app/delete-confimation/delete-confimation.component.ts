import { Component, Inject, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-confimation',
  templateUrl: './delete-confimation.component.html',
  styleUrls: ['./delete-confimation.component.scss']
})
export class DeleteConfimationComponent implements OnInit {
  constructor( 
    @Inject(MAT_DIALOG_DATA) public data:any, 
    public appComp: AppComponent,
    public _dialogRef: MatDialogRef<DeleteConfimationComponent>
    ){}
  ngOnInit(): void {
    // console.log(this.appComp.getEmployeeList());
  }

  closeMod(){
    this._dialogRef.close()
  }

  deleteEmployee(){
    this.appComp.deleteEmployee(this.data.id)
    this.closeMod()
  }
}

