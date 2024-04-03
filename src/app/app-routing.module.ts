import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public/public.component';
import { HomeComponent } from './public/home/home.component';
import { AboutComponent } from './public/about/about.component';
import { SkillsComponent } from './public/skills/skills.component';
import { WorksComponent } from './public/works/works.component';
import { TablesComponent } from './public/works/tables/tables.component';
import { CardsComponent } from './public/works/cards/cards.component';
import { IlldyComponent } from './public/works/illdy/illdy.component';
import { LayoutsComponent } from './public/works/layouts/layouts.component';
import { ContractComponent } from './public/contract/contract.component';
import { CreativeBoutigueComponent } from './public/works/layouts/creative-boutigue/creative-boutigue.component';
import { GoldenOfferComponent } from './public/works/layouts/golden-offer/golden-offer.component';
import { GreenComfortComponent } from './public/works/layouts/green-comfort/green-comfort.component';
import { ElegantCareComponent } from './public/works/layouts/elegant-care/elegant-care.component';
import { DraggableComponent } from './public/works/draggable/draggable.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminComponent } from './admin/admin.component';
import { NotificationsComponent } from './admin/notifications/notifications.component';
import { ExperienceComponent } from './public/experience/experience.component';

const routes: Routes = [
  { path: '', redirectTo: 'home/about', pathMatch: 'full' },

  {
    runGuardsAndResolvers: 'always',
    path: '',
    component: PublicComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        children: [
          { path: 'about', component: AboutComponent },
          { path: 'skills', component: SkillsComponent },
          { path: 'experience', component: ExperienceComponent, },
          { path: 'works', component: WorksComponent, },
          { path: 'contact', component: ContractComponent, },
        ]
      },
    ]
  },
  { path: 'tables', component: TablesComponent, },
  { path: 'cards', component: CardsComponent, },
  { path: 'illdy', component: IlldyComponent, },
  { path: 'layouts', component: LayoutsComponent, },
  { path: 'draggable', component: DraggableComponent, },
  { path: 'layouts/creative-boutigue', component: CreativeBoutigueComponent },
  { path: 'layouts/golden-offer', component: GoldenOfferComponent },
  { path: 'layouts/green-comfort', component: GreenComfortComponent },
  { path: 'layouts/elegant-care', component: ElegantCareComponent },
  { path: 'contact', component: ContractComponent },


  {
    path: 'admin', component: AdminComponent, children: [
      { path: '', component: AdminLoginComponent },
      { path: 'notification', component: NotificationsComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
