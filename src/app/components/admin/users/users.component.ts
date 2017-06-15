import { Component, OnInit } from '@angular/core';
import {DataService} from "../../../services/data.service";
import {MdDialog, MdDialogRef} from "@angular/material";
import {DeleteComponent} from "../delete/delete.component";
import {AddUserComponent} from "./add-user/add-user.component";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  dialogRefDelete: MdDialogRef<DeleteComponent>;
  dialogRefAdd: MdDialogRef<AddUserComponent>;
  users: any;
  constructor(private dataService: DataService,
              private dialog: MdDialog) { }

  ngOnInit() {
    this.refresh();
  };

  refresh() {
    this.dataService.getUsers().subscribe(res => {
      console.log(res);
      this.users = res;
    });
  }

  deleteUser(id) {
    this.dialogRefDelete = this.dialog.open(DeleteComponent);
    this.dialogRefDelete.afterClosed().subscribe(res => {
      if(res) {
        this.dataService.deleteUsers(id).subscribe(res => {
          console.log(res);
          this.refresh();
        });
      }
    });
  }

  addUser() {
    this.dialogRefAdd = this.dialog.open(AddUserComponent);
    this.dialogRefAdd.afterClosed().subscribe(res => {
      if(res) {
        this.dataService.addUser(res).subscribe(res => {
          console.log(res);
          this.refresh();
        });
      }
    })
  }

}
