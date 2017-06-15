import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit {

  items: any;

  constructor(private dataService: DataService) {
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

  scannedCode(id) {
    console.log(id);
  }

}
