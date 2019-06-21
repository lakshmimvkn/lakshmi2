import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentChildComponent } from './parent-child/parent-child.component';
import { ChildParentComponent } from './child-parent/child-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentChildComponent,
    ChildParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
