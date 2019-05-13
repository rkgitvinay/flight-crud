import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { AddUserComponent } from './add-user/add-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { AppRoutingModule } from './app-routing.module';
import { ListUserComponent } from './list-user/list-user.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    ViewUserComponent,
    ListUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule 
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
