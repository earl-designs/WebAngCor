import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { User } from '../../_models/user';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { AlertifyService } from '../../_services/alertify.service';
import { NgForm } from '../../../../node_modules/@angular/forms';
import { UserService } from '../../_services/user.service';
import { AuthService } from '../../_services/auth.service';
import { ImgService } from '../../_services/img.service';

@Component({
  selector: 'app-edit-profile-home',
  templateUrl: './edit-profile-home.component.html',
  styleUrls: ['./edit-profile-home.component.css']
})
export class EditProfileHomeComponent implements OnInit {
  @ViewChild('editUserForm') editUserForm: NgForm;
  user: User;
  imageToShow: any;
  isImageLoading: boolean;
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if (this.editUserForm.dirty) {
      $event.returnValue = true;
    }
  }

  constructor(private route: ActivatedRoute,
              private alertify: AlertifyService,
              private userService: UserService,
              private imgService: ImgService,
              private authService: AuthService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data['user'];
    });
    this.getImageFromService();
  }

  updateUser() {
    this.userService.updateUser(this.authService.decodedToken.nameid, this.user).subscribe(next => {
      this.alertify.success('updated successfuly');
      this.editUserForm.reset(this.user);
    }, error => {
      this.alertify.error(error);
    });
  }

  createImageFromBlob(image: Blob) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
       this.imageToShow = reader.result;
    }, false);

    if (image) {
       reader.readAsDataURL(image);
    }
 }

 getImageFromService() {
  this.imgService.getUserImage(this.user.id).subscribe(data => {
    this.createImageFromBlob(data);
    this.isImageLoading = true;
  }, error => {
    this.isImageLoading = false;
    console.log(error);
  });
}

}
