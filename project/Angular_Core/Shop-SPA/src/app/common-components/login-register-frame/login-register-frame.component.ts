import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { TabsetComponent } from '../../../../node_modules/ngx-bootstrap';

@Component({
  selector: 'app-login-register-frame',
  templateUrl: './login-register-frame.component.html',
  styleUrls: ['./login-register-frame.component.css']
})
export class LoginRegisterFrameComponent implements OnInit {
  @ViewChild('staticTabs') staticTabs: TabsetComponent;
  @Input() selectedTab: number;
  @Output() closeFrame = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    this.selectTab(this.selectedTab);
  }

  selectTab(selection: number) {
    this.staticTabs.tabs[selection].active = true;
  }

  closeFrameMethode(value: string) {
    if (value === 'successful') {
      this.closeFrame.emit(true);
    }
  }

}
