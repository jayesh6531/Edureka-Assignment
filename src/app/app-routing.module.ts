import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';

const routes: Routes = [
  {
    path : "", component : HomeComponent
  },
  {
    path : "product", component : ProductComponent
  },
  {
    path : "product/:id", component : ProductDetailsComponent
  },
  {
    path : "contact", component : ContactComponent
  },
  {
    path : "template-form", component : TemplateFormComponent
  },
  {
    path : "reactive-form", component : ReactiveFormComponent
  },
  {
    path : "**", component : NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
