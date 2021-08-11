import { Component, OnChanges, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { DashboardService } from '../../dashboard.service';
@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css']
})
export class AddcontactComponent implements OnInit {
  modalForm: FormGroup;
  data_row: any = {};
  private subscribeForm: Subscription;
  initialTransactionFormValue: string = "";
  formValueChanged: boolean = false;
  colorArr = ["#af0f4a", "#e66f21", "#beb79c", "#3f4a6a", "#a381b3",
    "#e24186", "#fe5747", "#fda62e", "#dcdd53", "#d3ace3",
    "#1d726a", "#63b395", "#c6f0d8", "#0accfa", "#c95c11"];
  constructor(
    public dialogRef: MatDialogRef<AddcontactComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    public dashboardService: DashboardService,
    public snackbar: MatSnackBar,
  ) { }
  ngOnInit(): void {
    this.modalForm = this.formBuilder.group({
      full_name: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      phno: new FormControl('', [Validators.required,Validators.pattern("^[+]?[(]?[0-9]{3}[)]?[0-9]{3}[-]?[0-9]{4}$")]),
      company: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
    });
    if (this.data.type === "Edit") {
      console.log(this.data);
      this.modalForm.controls.full_name.setValue(this.data.row.full_name);
      this.modalForm.controls.role.setValue(this.data.row.role);
      this.modalForm.controls.email.setValue(this.data.row.email);
      this.modalForm.controls.phno.setValue(this.data.row.phno);
      this.modalForm.controls.company.setValue(this.data.row.company);
      this.modalForm.controls.address.setValue(this.data.row.address);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
    this.modalForm.reset();
  }

  onSubmit() {
    if (this.modalForm.valid) {
      var shortName;
      let strArr = this.modalForm.controls.full_name.value.split(" ");

      if (strArr[0].toUpperCase().charAt(0)) {
        shortName = strArr[0].toUpperCase().charAt(0)
      }
      if (strArr[1] && strArr[1].toUpperCase().charAt(0)) {
        shortName = shortName + strArr[1].toUpperCase().charAt(0);
      }

      var obj = {
        full_name: this.modalForm.controls.full_name.value.charAt(0).toUpperCase() + this.modalForm.controls.full_name.value.slice(1),
        short_name: shortName,
        role: this.modalForm.controls.role.value.charAt(0).toUpperCase() + this.modalForm.controls.role.value.slice(1),
        email: this.modalForm.controls.email.value,
        phno: this.modalForm.controls.phno.value,
        company: this.modalForm.controls.company.value.charAt(0).toUpperCase() + this.modalForm.controls.company.value.slice(1),
        address: this.modalForm.controls.address.value,
        color : this.colorArr[Math.floor(Math.random() * this.colorArr.length)]
      }
      if(this.modalForm.dirty){
        this.formValueChanged = true;
      }else{
        this.formValueChanged = false;
      }
      if (this.data.type === 'Add') {
        this.dashboardService.postContacts(obj).subscribe((result: any) => {
          this.dialogRef.close();
          this.modalForm.reset();
          this.snackbar.open("Contact added successfully!", "Undo", {
            duration: 1000,
          });
        });
      }
      if (this.data.type === "Edit" && this.formValueChanged) {
        this.dashboardService.updateContacts(obj, this.data.row.id).subscribe((result: any) => {
          this.dialogRef.close();
          this.modalForm.reset();
          this.snackbar.open("Contact updates successfully!", "Undo", {
            duration: 1000,
          });
        });
      }else{
        this.dialogRef.close();
        this.snackbar.open("No changes made to the contact!", "Undo", {
          duration: 1000
        });
      }
    }else{
      this.dialogRef.close();
      this.snackbar.open("Please check the form - Form is Invalid!", "", {
        duration: 1000,
      });
    }
  }

  
}
