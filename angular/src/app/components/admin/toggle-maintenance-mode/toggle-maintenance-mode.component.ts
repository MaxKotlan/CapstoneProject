import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { toggleMaintenance } from 'src/app/global/actions/maintenance.actions';

@Component({
  selector: 'app-toggle-maintenance-mode',
  templateUrl: './toggle-maintenance-mode.component.html',
  styleUrls: ['./toggle-maintenance-mode.component.scss']
})
export class ToggleMaintenanceModeComponent {

  constructor(private store : Store<any>) { }

  toggleMaintenanceMode(){
    this.store.dispatch(toggleMaintenance());
  }
}
