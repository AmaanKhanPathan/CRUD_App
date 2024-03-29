import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatConfirmDialogComponent } from '../components/mat-confirm-dialog/mat-confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private _dialog : MatDialog) { }

  openConfirmDialog(msg:string){
    return this._dialog.open(MatConfirmDialogComponent, {
      width: '390px',
      panelClass : 'confirm-dialog-container',
      disableClose : true,
      data : {
        message : msg
      }
    })
  }
}
