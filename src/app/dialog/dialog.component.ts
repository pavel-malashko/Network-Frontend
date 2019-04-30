import { Component } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data-service.service';
import mock from './mock.json';


@Component({
    selector: 'dialog-settings',
    templateUrl: './dialog-settings.html',
    styleUrls: ['./dialog-settings.scss']
  })
  
  export class DialogComponent {

    networkSettings: FormGroup;
    enableWifi: boolean = false;
    enableKey: boolean = false;
    validEnthIP : boolean = false;
    validEnthDNS: boolean = false;
    validWirelIP: boolean = false;
    validWirelDNS: boolean = false;
    wirelData = mock;
  
    constructor(
      public dialogRef: MatDialogRef<DialogComponent>,
      public dialog: MatDialog, private fb: FormBuilder,
      private data: DataService
      ) {  
      this.networkSettings = this.fb.group({
        enthIP: [{value: null, disabled: true}, Validators.required],
        enthMask: [{value: null, disabled: true}, Validators.required],
        enthGateWay: [{value: null, disabled: true}],
        enthPrefDNS:[{value: null, disabled: true}, Validators.required],
        enthAltDNS: [{value: null, disabled: true}], 
        wirelNetName: [{value: null, disabled: true}, Validators.required],
        wirelSecKey: [{value: null, disabled: true}, Validators.required],
        wirelIP: [{value: null, disabled: true}, Validators.required],
        wirelMask: [{value: null, disabled: true}, Validators.required],
        wirelGateWay: [{value: null, disabled: true}],  
        wirelPrefDNS: [{value: null, disabled: true}, Validators.required], 
        wirelAltDNS: [{value: null, disabled: true}] 
      });

      this.getSettings(); 
      this.handleChange();
      
    }

    ResetWirelName(): void {

      const wirelNetName = this.networkSettings.get('wirelNetName');
      wirelNetName.reset();

    }

    getSettings(): void { 

      this.data.getSettings().subscribe((val:any) => {
        this.networkSettings.patchValue(val[0]);
      });
      
    }

    SaveConfigNetwork(): void {

      let contValue = this.networkSettings.controls;
      let objUpd = {
        enthIP: contValue.enthIP.value,
        enthMask: contValue.enthMask.value,
        enthGateWay: contValue.enthGateWay.value,
        enthPrefDNS: contValue.enthPrefDNS.value,
        enthAltDNS: contValue.enthAltDNS.value,
        wirelNetName: contValue.wirelNetName.value,
        wirelSecKey: contValue.wirelSecKey.value,
        wirelIP: contValue.wirelIP.value,
        wirelMask: contValue.wirelMask.value,
        wirelGateWay: contValue.wirelGateWay.value,
        wirelPrefDNS: contValue.wirelPrefDNS.value,
        wirelAltDNS: contValue.wirelAltDNS.value
      }; 

      this.data.updateSettings(objUpd).subscribe((putObj:any) => {

        if (putObj) {
          this.data.alertMessage({type: 'success', message: 'Form was updated!'}); 
        }

        else {
          this.data.alertMessage({type: 'danger', message: 'Error!'});
        }  

      }
       
      );

      this.cancelForm();
    }

    handleChange(): void {
      const formValue = this.networkSettings,
            enthIP = formValue.get('enthIP'),
            enthMask = formValue.get('enthMask'),
            enthGateWay = formValue.get('enthGateWay'),
            enthPrefDNS = formValue.get('enthPrefDNS'),
            enthAltDNS = formValue.get('enthAltDNS'),
            wirelNetName = formValue.get('wirelNetName'),
            wirelSecKey = formValue.get('wirelSecKey'),
            wirelIP = formValue.get('wirelIP'),
            wirelMask = formValue.get('wirelMask'),
            wirelGateWay = formValue.get('wirelGateWay'),
            wirelPrefDNS = formValue.get('wirelPrefDNS'),
            wirelAltDNS = formValue.get('wirelAltDNS');

      if (this.validEnthIP) {
        enthIP.enable();
        enthMask.enable();
        enthGateWay.enable();
        enthIP.setValidators([Validators.required]);
        enthMask.setValidators([Validators.required]);
      } 
      else {
        enthIP.disable(); 
        enthMask.disable(); 
        enthGateWay.disable(); 
      }

      if (this.validEnthDNS) {
        enthPrefDNS.enable();
        enthAltDNS.enable(); 
        enthPrefDNS.setValidators([Validators.required]);
      }
      else {
        enthPrefDNS.disable();
        enthAltDNS.disable();
      }

      if (this.validWirelIP) {
        wirelIP.enable();
        wirelMask.enable();
        wirelGateWay.enable();
        wirelIP.setValidators([Validators.required]);
        wirelMask.setValidators([Validators.required]);
      }
      else {
        wirelIP.disable(); 
        wirelMask.disable(); 
        wirelGateWay.disable();   
      }

      if (this.validWirelDNS) {
        wirelPrefDNS.enable();
        wirelAltDNS.enable();
        wirelPrefDNS.setValidators([Validators.required]);
      }
      else {
        wirelPrefDNS.disable();  
        wirelAltDNS.disable();  
      }

      if (this.validWirelDNS) {
        wirelPrefDNS.enable();
        wirelAltDNS.enable();
        wirelPrefDNS.setValidators([Validators.required]);
      } 
      else {
        wirelPrefDNS.disable(); 
        wirelAltDNS.disable(); 
      }

      if (this.enableWifi) {
        wirelNetName.enable(); 
        wirelNetName.setValidators([Validators.required]);
      } 
      else {
        wirelNetName.disable();  
      }

      if (this.enableKey) {
        wirelSecKey.enable();
        wirelSecKey.setValidators([Validators.required]);
      } 
      else {
        wirelSecKey.disable(); 
      }

    }
    
    cancelForm(): void {
      this.dialogRef.close(true);
    }
  
  }