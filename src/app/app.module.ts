import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PichulaProjectComponent } from './pichula-project/pichula-project.component';
import { PrimerArrayComponent } from './primer-array/primer-array.component';

@NgModule({
  declarations: [
    AppComponent,
    PichulaProjectComponent,
    PrimerArrayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
