import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { ImgService } from '../../_services/img.service';
import { LoginRegisterFrameComponent } from '../login-register-frame/login-register-frame.component';
import { BsModalService, BsModalRef } from '../../../../node_modules/ngx-bootstrap';

@Component({
  selector: 'app-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.css']
})
export class NavTopComponent implements OnInit {
  @ViewChild(LoginRegisterFrameComponent) child: LoginRegisterFrameComponent;
  profilePicture: any;
  isImageLoading: boolean;
  isNavbarCollapsed = true;
  selectedTab: number;
  modalRef: BsModalRef;

  constructor(public authService: AuthService,
              private imgService: ImgService,
              private modalService: BsModalService) { }

  ngOnInit() {
    if (this.authService.loggedIn) {
      this.getImageFromService();
    }
  }

  openModal(selection: number, template: any) {
    this.selectedTab = selection;
    this.modalRef = this.modalService.show(template, { class: 'modal-lg'});
  }

  closeModal() {
    this.modalRef.hide();
    if (this.authService.loggedIn) {
      this.getImageFromService();
    }
  }

  logout() {
    this.authService.logout();
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  createImageFromBlob(image: Blob) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
       this.profilePicture = reader.result;
    }, false);

    if (image) {
       reader.readAsDataURL(image);
    }
 }

  getImageFromService() {
    this.imgService.getUserImage(this.authService.currentUser.id).subscribe(data => {
      this.createImageFromBlob(data);
      this.isImageLoading = true;
    }, error => {
    this.isImageLoading = false;
      console.log(error);
    });
  }

}
