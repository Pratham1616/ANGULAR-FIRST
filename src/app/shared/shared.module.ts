import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { AdminComponent } from '../admin/admin.component';



@NgModule({
  declarations: [
    SharedComponent,
    HeaderComponent,
    FooterComponent,
    SidemenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidemenuComponent
  ]
})
export class SharedModule { }
