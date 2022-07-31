import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { NewemployeeComponent } from './components/newemployee/newemployee.component';
import { ColorDirective } from './directives/color.directive';
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component'

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
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
