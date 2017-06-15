import {Component, OnInit} from '@angular/core';
import {DataService} from "../../../services/data.service";
import {AddItemComponent} from "./add-item/add-item.component";
import {MdDialog, MdDialogRef} from "@angular/material";
import {DeleteComponent} from "../delete/delete.component";
import {EditItemComponent} from "./edit-item/edit-item.component";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  items: any;
  dialogRefDelete: MdDialogRef<DeleteComponent>;
  dialogRefAdd: MdDialogRef<AddItemComponent>;
  dialogRefEdit: MdDialogRef<EditItemComponent>;


  constructor(private dataService: DataService,
              private dialog: MdDialog) {
  }

  ngOnInit() {
    this.refresh();
  };

  refresh() {
    this.dataService.getItems().subscribe(res => {
      console.log(res);
      this.items = res;
    });
  }

  addItems() {
    this.dialogRefAdd = this.dialog.open(AddItemComponent);
    this.dialogRefAdd.afterClosed().subscribe(res => {
      if(res) {
        this.dataService.addItems(res).subscribe(res => {
          console.log(res);
          this.refresh();
        });
      }
    })
  }

  editItems(item) {
    console.log('aaaad');
    this.dialogRefEdit = this.dialog.open(EditItemComponent);
    this.dialogRefEdit.componentInstance.item = item;
    this.dialogRefEdit.afterClosed().subscribe(res => {
      if(res) {
        this.dataService.editItems(res).subscribe(res => {
          console.log(res);
          this.refresh();
        });
      }
    })
  }

  deleteItem(id) {
    this.dialogRefDelete = this.dialog.open(DeleteComponent);
    this.dialogRefDelete.afterClosed().subscribe(res => {
      if(res) {
        this.dataService.deleteItems(id).subscribe(res => {
          console.log(res);
          this.refresh();
        });
      }
    });
  }

}
