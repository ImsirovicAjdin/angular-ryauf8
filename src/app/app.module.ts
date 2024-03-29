import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserSettingsFromComponent } from './user-settings-form/user-settings-form.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, UserSettingsFromComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
