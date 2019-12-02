import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { toggleMaintenance } from 'src/app/global/actions/maintenance.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-toggle-maintenance-mode',
  templateUrl: './toggle-maintenance-mode.component.html',
  styleUrls: ['./toggle-maintenance-mode.component.scss']
})
export class ToggleMaintenanceModeComponent {

  constructor(private store : Store<any>) { }

  maintenanceModeActivated$ : Observable<boolean> = this.store.pipe(select('maintenance')).pipe(select("maintenanceModeEnabled")); 


  toggleMaintenanceMode(){
    this.store.dispatch(toggleMaintenance());
  }
}
