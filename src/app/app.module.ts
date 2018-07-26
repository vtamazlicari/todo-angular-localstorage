import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { FormsModule} from '@angular/forms';
import {CoreModule} from './core/core.module';
import {ContactModule} from './modules/contact/contact.module';
import {AboutModule} from './modules/about/about.module';
import {TodoModule} from './modules/todo/todo.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    appRoutes,
    FormsModule,
    CoreModule,
    ContactModule,
    AboutModule,
    TodoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
