import { Component, OnInit } from '@angular/core';
import {MdDialogRef} from "@angular/material";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<DeleteComponent>) {
    this.dialogRef = dialogRef;
  }

  ngOnInit() {
  }

}
