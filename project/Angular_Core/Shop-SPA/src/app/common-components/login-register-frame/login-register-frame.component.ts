import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { TabsetComponent } from '../../../../node_modules/ngx-bootstrap';

@Component({
  selector: 'app-login-register-frame',
  templateUrl: './login-register-frame.component.html',
  styleUrls: ['./login-register-frame.component.css']
})
export class LoginRegisterFrameComponent implements OnInit {
  @ViewChild('staticTabs') staticTabs: TabsetComponent;
  @Input() selectedTab: number;

  constructor() { }

  ngOnInit() {
    this.selectTab(this.selectedTab);
    console.log(this.selectedTab);
  }

  selectTab(selection: number) {
    this.staticTabs.tabs[selection].active = true;
  }

}
