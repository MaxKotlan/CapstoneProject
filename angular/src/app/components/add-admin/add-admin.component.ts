import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../global/services/login.service';
import { ToastService } from 'ng-uikit-pro-standard';
import { HttpErrorResponse } from '@angular/common/http';
import { Invite } from 'src/app/global/models/Invite';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.scss']
})
export class AddAdminComponent {

  constructor(
    private loginService : LoginService,
    private toast : ToastService
  ) { }

  public invitee : Invite = new Invite();

  Invite(){
    this.loginService.invite(this.invitee).toPromise().then(
      (res : string) => [
        this.toast.success(`Succesfully invited ${this.invitee.email} to be an admin`, "Success")
      ],
      (err : HttpErrorResponse)=> this.toast.error("Could not send invite.", "Error")
    );   
  }

}
