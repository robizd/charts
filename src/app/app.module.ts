import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ElarionPipesModule } from 'elarion-pipes';
// import { ChartsModule } from 'projects/test-charts/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ElarionPipesModule
    // ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
