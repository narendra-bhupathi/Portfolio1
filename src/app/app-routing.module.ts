import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProfileComponent } from './profile/profile.component';



const routes: Routes = [
  {path: '', component: ProfileComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'portfolio', component: ProjectsComponent},
  {path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SkillsComponent, ProjectsComponent, ProfileComponent];
