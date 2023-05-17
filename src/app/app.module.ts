import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './MonPortofolio/home/home.component';
import { AboutComponent } from './MonPortofolio/about/about.component';
import { ServiceComponent } from './MonPortofolio/service/service.component';
import { MonHistoriqueComponent } from './MonPortofolio/mon-historique/mon-historique.component';
import { WorkComponent } from './MonPortofolio/work/work.component';
import { BlogComponent } from './MonPortofolio/blog/blog.component';
import { ContactMeComponent } from './MonPortofolio/contact-me/contact-me.component';
import { HeaderComponent } from './MonPortofolio/header/header.component';
import { FooterComponent } from './MonPortofolio/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    MonHistoriqueComponent,
    WorkComponent,
    BlogComponent,
    ContactMeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
