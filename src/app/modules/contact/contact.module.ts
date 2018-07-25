import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactPageComponent } from './containers/contact-page/contact-page.component';
import { contactRoutes } from './contact.route';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    contactRoutes,
    ReactiveFormsModule,
  ],
  declarations: [ContactPageComponent]
})
export class ContactModule { }
