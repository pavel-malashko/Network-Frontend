import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit  {
 
  constructor(public dialog: MatDialog) {

  }


  openDialog(): void {

    this.dialog.open( DialogComponent, {
      height: '90%',
      width: '1600px'
    });

   }


  ngOnInit() {
    setTimeout(() =>  this.openDialog());
  } 

}

