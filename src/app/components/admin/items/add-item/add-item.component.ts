import { Component, OnInit } from '@angular/core';
import {MdDialogRef} from "@angular/material";

@Component({
  selector: 'app-add-item',
  templateUrl: 'add-item.component.html',
  styleUrls: ['add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  item: any = {
    name: '',
    markerNumber: '',
    model: ''
  };

  models: any = [
    {name: 'Pierwszy objekt', value: '../../../assets/models/1.obj'},
    {name: 'Drugi objekt', value: '../../../assets/models/2.obj'},
    {name: 'Trzeci objekt', value: '../../../assets/models/3.obj'},
    {name: 'Czwarty objekt', value: '../../../assets/models/4.obj'},
    {name: 'Piąty objekt', value: '../../../assets/models/5.obj'},
    {name: 'Szósty objekt', value: '../../../assets/models/6.obj'},
  ];

  constructor(public dialogRef: MdDialogRef<AddItemComponent>) {
    this.dialogRef = dialogRef;
  }
  ngOnInit() {
  }

  addItem() {
    this.dialogRef.close(this.item);
  }

}
