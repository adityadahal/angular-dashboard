import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidePanelComponent } from './dashboard/side-panel/side-panel.component';
import { MainPanelComponent } from './dashboard/main-panel/main-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    SidePanelComponent,
    MainPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
