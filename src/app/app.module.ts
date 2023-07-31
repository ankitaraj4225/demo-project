import { sortPipe } from './app.sort';
import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { BackendComponent } from './backend/backend.component';
import { AppRoutingModule } from './app-routing.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CourseService } from './course.service';
import { CourseComponent } from './courses.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { ProductComponent } from './product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    sortPipe,
    AppComponent,
    CourseComponent,
    BackendComponent,
    AboutComponent,
    CourseDetailComponent,
    ProductComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    AboutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
