import { Component, OnInit } from '@angular/core';
import {MdDialogRef} from "@angular/material";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  user: any = {
    username: '',
    password: '',
    email: '',
    name: ''
  };

  constructor(public dialogRef: MdDialogRef<AddUserComponent>) {
    this.dialogRef = dialogRef;
  }

  ngOnInit() {
  }

  addUser() {
    this.dialogRef.close(this.user);
    return false;
  }

}
