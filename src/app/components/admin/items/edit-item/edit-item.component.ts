import { Component, OnInit } from '@angular/core';
import {MdDialogRef} from "@angular/material";

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {

  models: any = [
    {name: 'Pierwszy objekt', value: '../../../assets/models/1.obj'},
    {name: 'Drugi objekt', value: '../../../assets/models/2.obj'},
    {name: 'Trzeci objekt', value: '../../../assets/models/3.obj'},
    {name: 'Czwarty objekt', value: '../../../assets/models/4.obj'},
    {name: 'Piąty objekt', value: '../../../assets/models/5.obj'},
    {name: 'Szósty objekt', value: '../../../assets/models/6.obj'},
  ];

  item: any = {
    name: '',
    markerNumber: '',
    model: ''
  };

  constructor(public dialogRef: MdDialogRef<EditItemComponent>) {
    this.dialogRef = dialogRef;
  }
  ngOnInit() {
  }

  editItem() {
    this.dialogRef.close(this.item);
  }

}
