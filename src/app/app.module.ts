import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TestComponent } from './test/test.component';
import { LolComponent } from './lol.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, TestComponent, LolComponent, HomeComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
