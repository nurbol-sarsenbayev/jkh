import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { RcInfoComponent } from './rc-info/rc-info.component';
import { AboutRcComponent } from './rc-info/about-rc/about-rc.component';
import { InformationComponent } from './rc-info/information/information.component';
import { PhotoVideoComponent } from './rc-info/photo-video/photo-video.component';
import { CameraPeopleComponent } from './rc-info/camera-people/camera-people.component';
import { CameraTechnicsComponent } from './rc-info/camera-technics/camera-technics.component';
import { CircumventionComponent } from './rc-info/circumvention/circumvention.component';
import { ConstructionProgressComponent } from './construction-progress/construction-progress.component';
import { ConstructionStageComponent } from './construction-stage/construction-stage.component';


@NgModule({
  declarations: [
    AppComponent,
    RcInfoComponent,
    AboutRcComponent,
    InformationComponent,
    PhotoVideoComponent,
    CameraPeopleComponent,
    CameraTechnicsComponent,
    CircumventionComponent,
    ConstructionProgressComponent,
    ConstructionStageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
