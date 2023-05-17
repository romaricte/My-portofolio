import { ContactMeComponent } from './MonPortofolio/contact-me/contact-me.component';
import { MonHistoriqueComponent } from './MonPortofolio/mon-historique/mon-historique.component';
import { WorkComponent } from './MonPortofolio/work/work.component';
import { BlogComponent } from './MonPortofolio/blog/blog.component';
import { ServiceComponent } from './MonPortofolio/service/service.component';
import { AboutComponent } from './MonPortofolio/about/about.component';
import { HomeComponent } from './MonPortofolio/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: "",
    component: AppComponent,

  },

    {
      path : 'accueil',
      component: HomeComponent
    },
    {
      path: 'AProposDeMoi',
      component: AboutComponent

    },
    {
      path: 'MesService',
      component: ServiceComponent
    },
    {
      path: 'blog',
      component: BlogComponent

    },
    {
      path: 'MonTravaill',
      component: WorkComponent
    },
    {
      path: 'MesHistiries',
      component: MonHistoriqueComponent

    },
    {
      path: 'contact',
      component: ContactMeComponent
    },

    {
      path: "**",
      redirectTo:"accueil",
      pathMatch:"full"
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
