import { Injectable } from '@angular/core';
import { EditProfileHomeComponent } from '../edit-profile/edit-profile-home/edit-profile-home.component';
import { CanDeactivate } from '../../../node_modules/@angular/router';

@Injectable()
export class PreventUnsavedChanges implements CanDeactivate<EditProfileHomeComponent> {

    canDeactivate(component: EditProfileHomeComponent) {
        if (component.editUserForm.dirty) {
            return confirm('Are you sure you want to continue? Any unsaved changes will be lost!');
        }
        return true;
    }
}
