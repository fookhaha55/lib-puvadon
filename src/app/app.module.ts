import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/pages/main/main.component';
import { LoginComponent } from './components/page/login/login.component';
import { StudentComponent } from './components/page/student/student.component';
import { ServiceComponent } from './components/page/service/service.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    StudentComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
