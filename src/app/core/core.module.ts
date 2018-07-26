import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule} from '@angular/router';
import { DetailsComponent } from './components/details/details.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [HeaderComponent, FooterComponent, LayoutComponent, NavbarComponent, DetailsComponent],
  exports: [HeaderComponent, FooterComponent, LayoutComponent, NavbarComponent],
})
export class CoreModule { }
