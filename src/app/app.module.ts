import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PninfosysService } from './pninfosys.service';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { RjitService } from './rjit.service';
import { HttpClientModule } from '@angular/common/http';
import { TeamComponent } from './team/team.component';
import { RjitComponent } from './rjit/rjit.component';
import { FeeapiService } from './service/feeapi.service';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BlogComponent,
    TeamComponent,
    RjitComponent
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [PninfosysService,RjitService,FeeapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
