import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { UserloginComponent } from './components/userlogin/userlogin.component';
import { AuthGuard } from './_helpers/auth.guard';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path : "", component : HomeComponent,
  },
  {
    path : "product", component : ProductComponent, canActivate: [AuthGuard]
  },
  {
    path : "product/:id", component : ProductDetailsComponent, canActivate: [AuthGuard]
  },
  {
    path : "contact", component : ContactComponent, canActivate: [AuthGuard]
  },
  {
    path : "template-form", component : TemplateFormComponent, canActivate: [AuthGuard]
  },
  {
    path : "reactive-form", component : ReactiveFormComponent, canActivate: [AuthGuard]
  },
  {
    path : "register", component : RegisterComponent
  },
  {
    path : "login", component : UserloginComponent
  },
  {
    path : "**", component : NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
