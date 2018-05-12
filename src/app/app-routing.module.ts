import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RcInfoComponent } from './rc-info/rc-info.component';
import { InformationComponent } from './rc-info/information/information.component';
import { PhotoVideoComponent } from './rc-info/photo-video/photo-video.component';
import { CameraPeopleComponent } from './rc-info/camera-people/camera-people.component';
import { CameraTechnicsComponent } from './rc-info/camera-technics/camera-technics.component';
import { CircumventionComponent } from './rc-info/circumvention/circumvention.component';
import { ConstructionProgressComponent } from './construction-progress/construction-progress.component';
import { ConstructionStageComponent } from './construction-stage/construction-stage.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'information',
    component: InformationComponent
  },
  {
    path: 'photo-video',
    component: PhotoVideoComponent
  },
  {
    path: 'camera-people',
    component: CameraPeopleComponent
  },
  {
    path: 'camera-technics',
    component: CameraTechnicsComponent
  },
  {
    path: 'circumvention',
    component: CircumventionComponent
  },
  {
    path: 'construction-progress',
    component: ConstructionProgressComponent
  },
  {
    path: 'construction-stage',
    component: ConstructionStageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
