import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { NewemployeeComponent } from './components/newemployee/newemployee.component';
import { ColorDirective } from './directives/color.directive';

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { MatchPasswordDirective } from './directives/match-password.directive';
import { UserloginComponent } from './components/userlogin/userlogin.component'
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ColorDirective,
    NewemployeeComponent,
    HomeComponent,
    ProductComponent,
    ContactComponent,
    NavigationComponent,
    NotFoundComponent,
    ProductDetailsComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    MatchPasswordDirective,
    UserloginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
