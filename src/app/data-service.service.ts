import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from './config';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private serverUrl = config.serverUrl;

  constructor(private http: HttpClient,
    private snackBar: MatSnackBar) { }

  getSettings() {
    return this.http.get(this.serverUrl);
  }
  

  updateSettings(form) {
    return this.http.put(this.serverUrl, form, { responseType: 'text' });
  }
  
  alertMessage(alert){
    this.snackBar.open(alert.message, '', {
      panelClass: alert.type,
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }

}
