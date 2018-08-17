import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { ImgService } from '../../_services/img.service';

@Component({
  selector: 'app-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.css']
})
export class NavTopComponent implements OnInit {
  model: any = {};
  profilePicture: any;
  isImageLoading: boolean;
  isNavbarCollapsed = true;

  constructor(public authService: AuthService, private imgService: ImgService) { }

  ngOnInit() {
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
