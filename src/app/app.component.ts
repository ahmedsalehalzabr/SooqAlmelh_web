import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerceApp';
   isSideNavCollapsed = false;
   screenWidth = 0;
  onToggleSideNav(data:SideNavToggle): void {
   this.screenWidth = data.screenWidth;
   this.isSideNavCollapsed = data.collapsed;
  }
  constructor(private translateservice:TranslateService, ) {}

  translate(event:any) {
this.translateservice.use(event.target.value)
  }
}
